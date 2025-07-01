import SimilarProductCard from "./SimilarProductCard"

const SimilarProduct = () => {
  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-between gap-4 gap-y-10">
      {[1,1,1,1,1,1,1,1,1,1].map(() => <SimilarProductCard/>)}  
    </div>
  )
}

export default SimilarProduct