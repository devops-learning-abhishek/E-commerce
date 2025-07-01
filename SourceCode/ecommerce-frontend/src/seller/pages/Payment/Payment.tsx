import { Button, Card, Divider } from "@mui/material"
import Transaction from "./Transaction"

const Payment = () => {
  return (
    <div className="space-y-5">
      <Card className="rounded-md space-y-4 p-5">
        <h1 className="text-gray-600 font-medium">Total Earnings</h1>
        <h1 className="font-bold text-xl pb-1">₹99876</h1>
        <Divider />
        <p className="text-gray-600 font-medium pt-4">Last Payment : <strong>₹0</strong></p>
      </Card>
      <div className="pt-15 space-y-4">
        <div>
          <Button variant="contained" sx={{ backgroundColor: '#00897b', '&:hover': { backgroundColor: '#00695c' } }}>
            Transaction
          </Button>
        </div>
        <Transaction />
      </div>
    </div>
  )
}

export default Payment