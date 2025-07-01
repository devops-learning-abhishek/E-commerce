import { Add, Autorenew, Close, Remove } from "@mui/icons-material"
import { Divider, IconButton } from "@mui/material"
import { CartItem } from "../../../types/CartTypes";
import { useAppDispatch } from "../../../state/Store";
import { updateCartItem } from "../../../state/customer/cartSlice";

const CartItemCard = ({ item }: { item: CartItem }) => {
  const dispatch = useAppDispatch();
  const handleUpdateQuantity = (value:number)=>() => {
    dispatch(updateCartItem({ jwt: localStorage.getItem("jwt"), cartItemId: item.id, cartItem: { quantity: item.quantity+value } }))
  }

  return (
    <div className="border border-gray-200 rounded-md relative">
      <div className="p-5 flex gap-3">
        <div>
          <img
            className="w-[120px] rounded-md"
            src={item.product.images[0]}
            alt=""
          />
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold text-lg">{item.product.seller?.businessDetails.businessName}</h1>
          <p className="text-gray-600 font-medium text-sm">{item.product.title}</p>
          <p className="text-gray-400 text-sm"><strong>Sold By: </strong>{item.product.seller?.sellerName}</p>
          <p className="text-sm text-gray-500"><strong>Quantity : </strong>{item.quantity}</p>
          <div className="price flex items-center gap-3">
            <span className="font-sans text-gray-800 font-bold">
              ₹{item.product.sellingPrice}/-
            </span>
            <span className="line-through decoration-[0.5px] text-gray-500">
              ₹{item.product.mrpPrice}/-
            </span>
            <span className="text-[#ff0066] font-semibold">
              ({item.product.discountPercent}% OFF)
            </span>
          </div>

          <p className="text-xs text-gray-700"><Autorenew fontSize="inherit" /> 7 days Replacement Available</p>
        </div>
      </div>

      <Divider />

      <div className="px-5 py-2 flex justify-between items-center">
        <div className="flex items-center gap-2 w-[130px] justify-between border border-gray-300 rounded-lg">
          <button
            onClick={handleUpdateQuantity(-1)}
            disabled={item.quantity === 1}
            className="w-1/3 h-full flex items-center justify-center text-gray-800 disabled:cursor-not-allowed"
          >
            <Remove fontSize="small" color='primary' />
          </button>

          <span className="w-1/3 text-center text-md font-semibold">{item.quantity}</span>

          <button
            onClick={handleUpdateQuantity(1)}
            className="w-1/3 h-full flex items-center justify-center text-gray-800"
          >
            <Add fontSize="small" color='primary' />
          </button>
        </div>

        <div className="absolute top-1 right-1">
          <IconButton color="primary">
            <Close />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default CartItemCard