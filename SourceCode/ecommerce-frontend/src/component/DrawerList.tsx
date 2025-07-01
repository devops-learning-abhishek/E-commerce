import { Divider, ListItemIcon, ListItemText } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../state/Store"
import { logout } from "../state/AuthSlice"

interface menuItem {
  name: string,
  path: string,
  icon: any,
  activeIcon: any
}

interface DrawerListProps {
  menu: menuItem[],
  menu2: menuItem[],
  toggleDrawer: () => void
}

const DrawerList = ({ menu, menu2, toggleDrawer }: DrawerListProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => [
    dispatch(logout(navigate))
  ]

  return (
    <div className="h-full pt-4 border-r border-gray-200 shadow-2xl">
      <div className="flex flex-col justify-between h-full w-[300px] py-5">

        <div className="space-y-2">
          {menu.map((item, index) =>
            <div
              onClick={() => navigate(item.path)} 
              className="pr-9 cursor-pointer" 
              key={index}
            >
              <p className={`${item.path == location.pathname ? "bg-black text-white" : "text-black"} flex items-center px-7 py-3 rounded-r-full`}>
                <ListItemIcon>
                  {item.path == location.pathname ? item.activeIcon : item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name}
                />
              </p>
            </div>
          )}
        </div>

        <Divider />

        <div className="space-y-2">
          {menu2.map((item, index) =>
            <div 
              onClick={() => {
                navigate(item.path)
                if(item.path == "/") handleLogout()
              }} 
              className="pr-9 cursor-pointer" 
              key={index}
            >
              <p className={`${item.path == location.pathname ? "bg-black text-white" : "text-black"} flex items-center px-5 py-3 rounded-r-full`}>
                <ListItemIcon>
                  {item.path == location.pathname ? item.activeIcon : item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name}
                />
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default DrawerList