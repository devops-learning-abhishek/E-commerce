import { Add, FavoriteBorder, LocalMallRounded, LocalShipping, Remove, Shield, Wallet, WorkspacePremium } from '@mui/icons-material';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Button, Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import SimilarProduct from './SimilarProduct/SimilarProduct';
import ReviewCard from '../Review/ReviewCard';
import { useAppDispatch, useAppSelector } from '../../../../state/Store';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../../../state/customer/productSlice';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const { productId } = useParams();
  const { product } = useAppSelector(store => store);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(Number(productId)))
    }
  }, [productId]);

  const handleActiveImage = (value: number) =>()=> {
    setActiveImage(value)
  }

  return (
    <div className="px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-15">
        <section className="flex flex-col lg:flex-row gap-20">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-4">
            {product.product?.images.map((item, index) =>
              <img
                key={index}
                onClick={handleActiveImage(index)}
                className="lg:w-full w-[50px] cursor-pointer rounded-md"
                src={item}
                alt=""
              />
            )}
          </div>
          <div className="w-full lg:w-[85%]">
            <img
              className="w-full rounded-md"
              src={product.product?.images[activeImage]}
              alt=""
            />
          </div>
        </section>

        <section>
          <h1 className="font-bold text-lg text-[#006699]">{product.product?.seller?.businessDetails.businessName}</h1>
          <p className="text-gray-500 font-semibold">{product.product?.title}</p>
          <div className="flex justify-between items-center py-2 border border-gray-300 w-[180px] px-3 m-6">
            <div className="flex gap-1 items-center">
              <span className='font-bold'>{product.product?.numRating}</span>
              <StarRateIcon
                sx={{ color: 'teal', fontSize: "20px" }}
              />
            </div>
            <Divider orientation='vertical' flexItem />
            <span>
              7.7K Ratings
            </span>
          </div>

          <Divider />

          <div>
            <div className="price flex items-center gap-4 mt-5 text-2xl">
              <span className="font-sans text-black font-bold">
                ₹{product.product?.sellingPrice}/-
              </span>
              <span className="line-through decoration-1 text-gray-400 text-xl">
                ₹{product.product?.mrpPrice}/-
              </span>
              <span className="text-[#ff0066] font-medium">
                {product.product?.discountPercent}% OFF
              </span>
            </div>
            <p className='text-sm pt-5'>Inclusive of all taxes. Free Shipping above ₹1000</p>
          </div>

          <div className="mt-7 space-y-3">
            <div className="flex items-center gap-4">
              <Shield sx={{ color: "#ff0066" }} />
              <p className='text-gray-500'>Authentic & Quality Assured</p>
            </div>
            <div className="flex items-center gap-4">
              <WorkspacePremium sx={{ color: "#ff0066" }} />
              <p className='text-gray-500'>100% money back guaranteed</p>
            </div>
            <div className="flex items-center gap-4">
              <LocalShipping sx={{ color: "#ff0066" }} />
              <p className='text-gray-500'>Free Shipping & Returns</p>
            </div>
            <div className="flex items-center gap-4">
              <Wallet sx={{ color: "#ff0066" }} />
              <p className='text-gray-500'>Pay on delivery might be available</p>
            </div>
          </div>

          <div className='mt-7 space-y-3'>
            <h1 className='text-xl font-medium pl-7'>
              Quantity
            </h1>
            <div className="flex items-center border border-gray-800 rounded-xl overflow-hidden w-[140px] h-13">
              <button
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity === 1}
                className="w-1/3 h-full flex items-center justify-center text-gray-800 cursor-pointer disabled:cursor-not-allowed"
              >
                <Remove fontSize="small" color='primary' />
              </button>

              <span className="w-1/3 text-center text-xl font-semibold">{quantity}</span>

              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-1/3 h-full flex items-center justify-center text-gray-800 cursor-pointer"
              >
                <Add fontSize="small" color='primary' />
              </button>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <Button
              fullWidth
              variant='contained'
              color='secondary'
              startIcon={<LocalMallRounded />}
              sx={{ py: "1rem" }}>
              Add To Bag
            </Button>

            <Button
              fullWidth
              variant='outlined'
              color='secondary'
              startIcon={<FavoriteBorder />}
              sx={{ py: "1rem" }}>
              WISHLIST
            </Button>
          </div>

          <div className="mt-8 text-gray-600">
            <p>{product.product?.description}</p>
          </div>

          <div className='mt-12'>
            <ReviewCard />
          </div>
        </section>
      </div>

      <div className="mt-27">
        <div className="flex items-center gap-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <h1 className="text-xl font-bold text-gray-600 whitespace-nowrap">
            Similar Products
          </h1>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <div className="py-10">
          <SimilarProduct />
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

