import image1 from '../../../../assets/images/image1.jpg';
import image2 from '../../../../assets/images/image2.jpg';
import image3 from '../../../../assets/images/image3.jpg';
import image4 from '../../../../assets/images/image4.jpg';
import image5 from '../../../../assets/images/image5.jpg';
import image6 from '../../../../assets/images/image6.jpg';
import image7 from '../../../../assets/images/image7.jpg';
import image8 from '../../../../assets/images/image8.jpg';

const CategoryGrid = () => {
  return (
    <div className='category-page'>
    <div className="grid gap-4 grid-cols-12 grid-rows-30 px-5 lg:px-20">
      {/* Image 1 */}
      <div className="col-span-3 row-span-25 min-h-[100px] text-white overflow-hidden">
        <img
          className="w-full h-full object-cover object-top rounded-md transition-transform duration-300 hover:scale-105"
          src={image1}
          alt="Image 1"
        />
      </div>

      {/* Image 2 */}
      <div className="col-span-3 row-span-25 min-h-[100px] text-white overflow-hidden">
        <img
          className="w-full h-full object-cover object-top rounded-md transition-transform duration-300 hover:scale-105"
          src={image2}
          alt="Image 2"
        />
      </div>

      {/* Image 3 */}
      <div className="col-span-3 row-span-25 min-h-[100px] text-white overflow-hidden">
        <img
          className="w-full h-full object-cover object-top rounded-md transition-transform duration-300 hover:scale-105"
          src={image3}
          alt="Image 3"
        />
      </div>

      {/* Image 4 */}
      <div className="col-span-3 row-span-25 min-h-[100px] text-white overflow-hidden">
        <img
          className="w-full h-full object-cover object-top rounded-md transition-transform duration-300 hover:scale-105"
          src={image4}
          alt="Image 4"
        />
      </div>

      {/* Image 5 */}
      <div className="col-span-3 row-span-25 min-h-[100px] text-white overflow-hidden">
        <img
          className="w-full h-full object-cover object-top rounded-md transition-transform duration-300 hover:scale-105"
          src={image5}
          alt="Image 5"
        />
      </div>

      {/* Image 6 */}
      <div className="col-span-3 row-span-25 min-h-[100px] text-white overflow-hidden">
        <img
          className="w-full h-full object-cover object-top rounded-md transition-transform duration-300 hover:scale-105"
          src={image6}
          alt="Image 6"
        />
      </div>

      {/* Image 7 */}
      <div className="col-span-3 row-span-25 min-h-[100px] text-white overflow-hidden">
        <img
          className="w-full h-full object-cover object-top rounded-md transition-transform duration-300 hover:scale-105"
          src={image7}
          alt="Image 7"
        />
      </div>

      {/* Image 8 */}
      <div className="col-span-3 row-span-25 min-h-[100px] text-white overflow-hidden">
        <img
          className="w-full h-full object-cover object-top rounded-md transition-transform duration-300 hover:scale-105"
          src={image8}
          alt="Image 8"
        />
      </div>
    </div>
    </div>
  );
};

export default CategoryGrid;
