import { Divider } from "@mui/material"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Orders from "./Orders/Orders";
import OrderDetails from "./Orders/OrderDetails";
import UserDetails from "./UserDetails";
import Address from "./Address/Address";
import SavedCards from "./SavedCards";
import { useAppDispatch, useAppSelector } from "../../../state/Store";
import { logout } from "../../../state/AuthSlice";

const menu = [
  { name: "Profile", path: "/account" },
  { name: "Orders", path: "/account/orders" },
  { name: "Saved Cards", path: "/account/saved-card" },
  { name: "Addresses", path: "/account/addresses" },
  { name: "Logout", path: null }
]

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector((store) => store);

  const handleClick = (item: any) => {
    if (!item.path) {
      dispatch(logout(navigate));
      return;
    }
    navigate(item.path);
  }

  const isActive = (path: string | null) => {
    if (!path) return false;
    if (path === "/account") return location.pathname === path;
    return location.pathname.startsWith(path);
  };


  return (
    <div className="px-5 lg:px-52 min-h-screen mt-10">
      <div>
        <h1 className="text-xl font-bold pb-5">{auth.user?.fullname || "Profile"}</h1>
      </div>
      <Divider />
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78vh]">
        <section className="left col-span-1 lg:border-r border-gray-300 lg:pr-5 py-5 space-y-1 h-full">
          {
            menu.map((item) => (
              <div
                onClick={() => handleClick(item)}
                key={item.name}
                className={`py-3 px-5 rounded-md cursor-pointer hover:text-white hover:bg-[#99CCDD] ${isActive(item.path) ? "bg-[#006699] text-white" : ""}`}

              // className={`${item.path === location.pathname ? "bg-[#006699] text-white" : ""} py-3 px-5 rounded-md cursor-pointer hover:text-white hover:bg-[#99CCDD]`}
              >
                <p>{item.name}</p>
              </div>
            ))
          }
        </section>
        <section className="right lg:col-span-2 lg:pl-5 py-5">
          <Routes>
            <Route path="/" element={<UserDetails />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/:orderId/:orderItemId" element={<OrderDetails />} />
            <Route path="/addresses" element={<Address />} />
            <Route path="/saved-card" element={<SavedCards />} />
          </Routes>
        </section>
      </div>
    </div>
  )
}

export default Profile