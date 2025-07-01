const SimilarProductCard = () => {
  return (
    <div className="relative border border-gray-300 cursor-pointer">
        <div className="card">
          <img
            className="card object-top"
            src="https://assets.ajio.com/medias/sys_master/root/20240103/iXed/659572a3ddf7791519ff4d30/-1117Wx1400H-466938568-green-MODEL.jpg"
            alt=""
          />
        </div>
        <div className="p-2 space-y-1 bg-white">
          <div className="name">
            <h1>WESTUX</h1>
            <p>Women Traditional Saree</p>
          </div>
          <div className="price flex items-center gap-3">
            <span className="font-sans font-bold">
              ₹700/-
            </span>
            <span className="line-through decoration-1 text-gray-400">
              ₹999/-
            </span>
            <span className="text-[#ff0066] font-semibold">
              60% OFF
            </span>
          </div>
        </div>
      </div>
  )
}

export default SimilarProductCard