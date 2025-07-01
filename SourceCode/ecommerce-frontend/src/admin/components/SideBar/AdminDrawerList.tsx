import { AccountBox, Add, Category, Dashboard, ElectricBolt, Home, IntegrationInstructions, LocalOffer, Logout } from "@mui/icons-material";
import DrawerList from "../../../component/DrawerList"

const menu = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <Dashboard className="text-purple-800" />,
    activeIcon: <Dashboard className="text-purple-300" />,
  },
  {
    name: "Coupons",
    path: "/admin/coupon",
    icon: <IntegrationInstructions className="text-purple-800" />,
    activeIcon: <IntegrationInstructions className="text-purple-300" />,
  },
  {
    name: "Add New Coupon",
    path: "/admin/add-coupon",
    icon: <Add className="text-purple-800" />,
    activeIcon: <Add className="text-purple-300" />,
  },
  {
    name: "Home Page",
    path: "/admin/home-grid",
    icon: <Home className="text-purple-800" />,
    activeIcon: <Home className="text-purple-300" />,
  },
  {
    name: "Electronics Category",
    path: "/admin/electronics-category",
    icon: <ElectricBolt className="text-purple-800" />,
    activeIcon: <ElectricBolt className="text-purple-300" />,
  },
  {
    name: "Shop By Category",
    path: "/admin/shop-by-category",
    icon: <Category className="text-purple-800" />,
    activeIcon: <Category className="text-purple-300" />,
  },
  {
    name: "Deals",
    path: "/admin/deals",
    icon: <LocalOffer className="text-purple-800" />,
    activeIcon: <LocalOffer className="text-purple-300" />,
  },

];

const menu2 = [

  {
    name: "Account",
    path: "/admin/account",
    icon: <AccountBox className="text-purple-800" />,
    activeIcon: <AccountBox className="text-purple-300" />,
  },
  {
    name: "Logout",
    path: "/",
    icon: <Logout className="text-purple-800" />,
    activeIcon: <Logout className="text-purple-300" />,
  },

]

const AdminDrawerList = ({ toggleDrawer }: any) => {
  return (
    <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer} />
  )
}

export default AdminDrawerList