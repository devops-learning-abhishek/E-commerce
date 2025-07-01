import { useEffect } from "react"
import AdminRoutes from "../../routes/AdminRoutes"
import { useAppDispatch } from "../../state/Store"
import AdminDrawerList from "../components/SideBar/AdminDrawerList"
import { fetchHomeCategories } from "../../state/admin/adminSlice"

const AdminDashboard = () => {
  const toggleDrawer = () => {}
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(fetchHomeCategories())
  }, [])
  
  return (
    <div>
      <div className="lg:flex lg:h-[92vh]">
        <section className="hidden lg:block h-full bg-zinc-100">
          <AdminDrawerList toggleDrawer={toggleDrawer} />
        </section>
        <section className="p-15 w-full lg:w-[80%] overflow-y-auto">
          <AdminRoutes />
        </section>
      </div>
    </div>
  )
}

export default AdminDashboard