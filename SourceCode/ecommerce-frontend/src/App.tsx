import { ThemeProvider } from '@mui/material'
import './App.css'
import customTheme from './theme/customTheme';
import Navbar from './customer/components/Navbar/Navbar';
import Home from './customer/pages/Home/Home';
import Product from './customer/pages/Product/Product';
import ProductDetails from './customer/pages/Product/ProductDetails/ProductDetails';
import Review from './customer/pages/Product/Review/Review';
import Cart from './customer/pages/Cart/Cart';
import Checkout from './customer/pages/Checkout/Checkout';
import Profile from './customer/pages/Account/Profile';
import { Route, Routes, useNavigate } from 'react-router-dom';
import BecomeSeller from './customer/pages/BecomeSeller/BecomeSeller';
import SellerDashboard from './seller/pages/SellerDashboard';
import AdminDashboard from './admin/pages/AdminDashboard';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './state/Store';
import { fetchSellerProfile } from './state/seller/sellerSlice';
import Auth from './customer/pages/Auth/Auth';
import { fetchUserProfile } from './state/AuthSlice';
import PaymentSuccess from './customer/pages/Checkout/PaymentSuccess';
import Wishlist from './customer/pages/Wishlist/Wishlist';
import { createHomeCategories } from './state/customer/customerSlice';
import { homeCategories } from './data/home/homeCategories';

function App() {
  const dispatch = useAppDispatch();
  const { seller, auth } = useAppSelector(store => store)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchSellerProfile(localStorage.getItem("jwt") || ""))
    dispatch(createHomeCategories(homeCategories))
  }, [])

  // useEffect(() => {
  //   if (seller.profile) {
  //     navigate("/seller")
  //   }
  // }, [seller.profile])

  useEffect(() => {
    dispatch(fetchUserProfile({jwt : auth.jwt || localStorage.getItem("jwt")}))
  }, [auth.jwt])


  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Auth />} />
          <Route path='/products/:category' element={<Product />} />
          <Route path='/product-details/:categoryId/:name/:productId' element={<ProductDetails />} />
          <Route path='/reviews/:productId' element={<Review />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/payment-success/:orderId' element={<PaymentSuccess />} />
          <Route path='/account/*' element={<Profile />} />
          <Route path='/become-seller' element={<BecomeSeller />} />
          <Route path='/seller/*' element={<SellerDashboard />} />
          <Route path='/admin/*' element={<AdminDashboard />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
