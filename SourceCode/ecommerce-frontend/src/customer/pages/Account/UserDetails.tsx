import ProfileFieldCard from "../../../component/ProfileFieldCard"
import { useAppSelector } from "../../../state/Store"

const UserDetails = () => {
  const { auth } = useAppSelector(store => store);

  const fallback = (val?: string) => val || "-";

  return (
    <div className="flex py-10 justify-center">
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Personal Details</h1>
        </div>
        <div className="space-y-2">
          <ProfileFieldCard keys='Name' value={fallback(auth.user?.fullname)} />
          <ProfileFieldCard keys='Mobile' value={fallback(auth.user?.mobile)} />
          <ProfileFieldCard keys='Email' value={fallback(auth.user?.email)} />
        </div>
      </div>
    </div>
  )
}

export default UserDetails