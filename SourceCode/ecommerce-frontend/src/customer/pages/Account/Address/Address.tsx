import UserAddressCard from "./UserAddressCard"

const Address = () => {
  return (
    <div className="space-y-2">
      {[1, 1, 1, 1, 1].map(() => <UserAddressCard />)}
    </div>
  )
}

export default Address