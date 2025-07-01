import { Box, Button, FormControlLabel, Modal, Radio, RadioGroup } from "@mui/material"
import AddressCard from "./AddressCard"
import { useState } from "react";
import AddressForm from "./AddressForm";
import PricingCard from "../Cart/PricingCard";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const paymentGatewayList = [
  {
    value: "RAZORPAY",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOXVBxLnhqCbh9icORWnu4ZW0QjBam341bxg&s",
    label: ""
  },
  {
    value: "STRIPE",
    image: "https://www.logo.wine/a/logo/Stripe_(company)/Stripe_(company)-Logo.wine.svg",
    label: ""
  }
]

const Checkout = () => {
  const [open, setOpen] = useState(false);
  const [paymentGateway, setPaymentGateway] = useState("RAZORPAY");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlePaymentChange = (event:any) => {
    setPaymentGateway(event.target.value);
  };

  return (
    <>
      <div className="pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen">
        <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
          <div className="col-span-2 space-y-5">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Select Address</h1>
              {/* <Button>
                Add new Address
              </Button> */}
            </div>
            <div className="text-xs font-medium space-y-5">
              <p>Saved Addresses</p>
              <div className="space-y-3">
                {[1, 1, 1].map(() => <AddressCard />)}
              </div>
            </div>
            <div className="py-4 px-5 rounded-md border border-gray-200">
              <Button onClick={handleOpen}>
                + Add new Address
              </Button>
            </div>
          </div>
          <div>
            <div className="max-w-sm mx-auto p-5 mb-4 space-y-4 rounded-md border border-gray-200">
              <h1 className="text-[#006699] font-medium pb-2 text-center">Choose Payment Gateway</h1>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                className="pl-5 justify-between"
                onChange={handlePaymentChange}
                value={paymentGateway}
              >
                {paymentGatewayList.map((item) =>
                  <FormControlLabel
                    className="w-[45%] pr-3 rounded-md flex-1 justify-center border border-gray-200"
                    value={item.value}
                    control={<Radio />}
                    label={
                      <img
                        className={`${item.value == "STRIPE" ? "w-17" : ""} object-cover`}
                        src={item.image}
                        alt={item.label}
                      />
                    }
                  />
                )}
              </RadioGroup>
            </div>
            <div className="w-full max-w-sm mx-auto px-8 py-6 space-y-5 rounded-md border border-gray-200">
              <PricingCard />
              <div>
                <Button fullWidth variant="contained" sx={{ py: "11px", fontWeight: 600 }}>CHECKOUT</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddressForm paymentGateway={paymentGateway}/>
        </Box>
      </Modal>
    </>
  )
}

export default Checkout