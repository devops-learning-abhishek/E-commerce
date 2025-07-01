import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../state/Store"
import WishlistProductCard from "./WishlistProductCard"
import { getWishlistByUserId } from "../../../state/customer/wishlistSlice";

const Wishlist = () => {
  const dispatch = useAppDispatch();
  const { wishlist } = useAppSelector(store => store)

  useEffect(() => {
    dispatch(getWishlistByUserId())
  }, [])

  return (
    <div className="h-[85vh] p-5 lg:p-20">
      <section>
        <h1><strong>My Wishlist</strong> 5 items</h1>
        <div className="pt-10 grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-between gap-4 gap-y-10">
          {wishlist.wishlist?.products.map((item) => <WishlistProductCard item={item} />)}
        </div>
      </section>
    </div>
  )
}

export default Wishlist