import { Divider } from "@mui/material"

const ProfileFieldCard = ({ keys, value }: { keys: string, value: string }) => {
  return (
    <div className="p-5 flex items-center bg-slate-100">
      <p className="w-20 lg:w-32 pr-1">{keys}</p>
      <Divider orientation="vertical" flexItem />
      <p className="pl-5 lg:pl-10 font-semibold lg:text-lg">{value}</p>
    </div>
  )
}

export default ProfileFieldCard