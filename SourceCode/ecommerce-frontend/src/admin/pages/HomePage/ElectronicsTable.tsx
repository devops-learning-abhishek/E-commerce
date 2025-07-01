import { useAppSelector } from "../../../state/Store";
import HomeCategoryTable from "./HomeCategoryTable"

const ElectronicsTable = () => {
  const { customer } = useAppSelector(store => store);

  return (
    <div>
      <HomeCategoryTable data={customer.homePageData?.electricCategories || []} />
    </div>
  )
}

export default ElectronicsTable