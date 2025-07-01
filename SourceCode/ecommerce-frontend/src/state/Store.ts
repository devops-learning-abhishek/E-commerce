import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import sellerSlice from "./seller/sellerSlice";
import sellerProductSlice from "./seller/sellerProductSlice"
import sellerOrderSlice from "./seller/sellerOrderSlice"
import transactionSlice from "./seller/transactionSlice"
import productSlice from "./customer/productSlice"
import authSlice from "./AuthSlice"
import cartSlice from "./customer/cartSlice"
import orderSlice from "./customer/orderSlice"
import wishlistSlice from "./customer/wishlistSlice"
import customerSlice from "./customer/customerSlice"
import adminSlice from "./admin/adminSlice"
import dealSlice from "./admin/adminDealSlice"

const rootReducer = combineReducers({
    seller: sellerSlice,
    sellerProduct: sellerProductSlice,
    sellerOrder: sellerOrderSlice,

    product: productSlice,
    auth: authSlice,
    cart: cartSlice,
    order: orderSlice,
    wishlist: wishlistSlice,
    transactions: transactionSlice,
    customer: customerSlice,

    admin: adminSlice,
    deal: dealSlice,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    // devTools: true,  // optional explicit
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;