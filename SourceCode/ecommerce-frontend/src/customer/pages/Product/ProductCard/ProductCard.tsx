import { useEffect, useState } from "react"
import { IconButton } from "@mui/material"
import { Favorite, FavoriteBorderOutlined, QuestionAnswerOutlined } from "@mui/icons-material"
import "./ProductCard.css"
import { Product } from "../../../../types/ProductTypes"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../../../state/Store"
import { addProductToWishlist } from "../../../../state/customer/wishlistSlice"

const ProductCard = ({ item }: { item: Product }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isFav, setIsFav] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();


  useEffect(() => {
    let interval: any
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % item.images.length);
      }, 1500);
    }
    else if (interval) {
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval);
  }, [isHovered])

  const handleWishlist = (event: any) => {
    event.stopPropagation()
    item.id && dispatch(addProductToWishlist({ productId: item.id }))
  }

  return (
    <div onClick={() => navigate(`/product-details/${item.category?.categoryId}/${item.title}/${item.id}`)} className="group mt-10">
      <div className="px-4 relative group-hover-effect rounded-lg">
        <div className="relative w-[320px] h-[400px] overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => { setIsHovered(false); setCurrentImage(0); }}
        >

          {item.images.map((item, index) =>
            <img
              key={index}
              className="card-media object-top"
              src={item}
              alt=""
              style={{ transform: `translateX(${(index - currentImage) * 100}%)` }}
            />
          )}

          {isHovered &&
            <div className="indicator absolute bottom-0 left-0 w-full flex justify-center items-center bg-[rgba(255,255,255,0.6)] backdrop-blur-sm p-2">
              <div className="flex gap-10">
                <IconButton onClick={(event) => { setIsFav(!isFav); handleWishlist(event) }}>
                  {isFav ? (
                    <Favorite sx={{ color: "red", fontSize: 27 }} />
                  ) : (
                    <FavoriteBorderOutlined sx={{ color: "black", fontSize: 27 }} />
                  )}
                </IconButton>
                <IconButton>
                  <QuestionAnswerOutlined sx={{ color: "black", fontSize: 27 }} />
                </IconButton>
              </div>
            </div>
          }
        </div>
        <div className="details w-[320px] p-2 space-y-1 bg-gray-100">
          <div className="name">
            <h1>{item.seller?.businessDetails.businessName}</h1>
            <p>{item.title}</p>
          </div>
          <div className="price flex items-center gap-3">
            <span className="font-sans text-gray-800">
              ₹ {item.sellingPrice}/-
            </span>
            <span className="thin-line-through text-gray-400">
              ₹ {item.mrpPrice}/-
            </span>
            <span className="text-[#006699] font-semibold">
              {item.discountPercent}%
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
