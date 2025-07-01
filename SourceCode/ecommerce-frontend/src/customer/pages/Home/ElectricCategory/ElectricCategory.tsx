import { useAppSelector } from "../../../../state/Store"
import ElectricCategoryCard from "./ElectricCategoryCard"

const ElectricCategory = () => {
  const { customer } = useAppSelector(store => store)

  return (
    <div className='flex flex-wrap justify-between py-5 lg:px-20 shadow-md'>
      {customer.homePageData?.electricCategories.slice(0, 7).map((item) => <ElectricCategoryCard item={item} />)}
    </div>
  )
}

export default ElectricCategory
