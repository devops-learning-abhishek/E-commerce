import { Button, Step, StepLabel, Stepper } from "@mui/material"
import { useState } from "react"
import BecomeSellerFormStep1 from "./BecomeSellerFormSteps/BecomeSellerFormStep1";
import { useFormik } from "formik";
import BecomeSellerFormStep2 from "./BecomeSellerFormSteps/BecomeSellerFormStep2";
import BecomeSellerFormStep3 from "./BecomeSellerFormSteps/BecomeSellerFormStep3";
import BecomeSellerFormStep4 from "./BecomeSellerFormSteps/BecomeSellerFormStep4";

const steps = [
  "Tax Details & Mobile",
  "Pickup Address",
  "Bank Details",
  "Supplier Details"
];
const SellerAccountForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (value: number) => () => {
    ((activeStep < steps.length - 1) || (activeStep > 0 && value == -1)) && setActiveStep(activeStep + value);
    activeStep == (steps.length - 1) && handleCreateAccount();
  };

  const handleCreateAccount = () => {
    console.log("Create Account")
  }

  const formik = useFormik({
    initialValues: {
      mobile: "",
      otp: "",
      gstin: "",
      pickupAddress: {
        name: "",
        mobile: "",
        pincode: "",
        address: "",
        locality: "",
        city: "",
        state: "",
      },
      bankDetails: {
        accountNumber: "",
        ifscCode: "",
        accountHolderName: "",
      },
      sellerName: "",
      email: "",
      businessDetails: {
        businessName: "",
        businessEmail: "",
        businessMobile: "",
        logo: "",
        banner: "",
        businessAddress: ""
      },
      password: ""
    },
    // validationSchema: FormSchema,
    onSubmit: (values) => {
      console.log(values, "formik submitted");
    },
  });

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <section className="mt-15 space-y-7">
        <div>
          {
            activeStep == 0 ? <BecomeSellerFormStep1 formik={formik} /> : 
            activeStep == 1 ? <BecomeSellerFormStep2 formik={formik} /> :
            activeStep == 2 ? <BecomeSellerFormStep3 formik={formik} /> :
            <BecomeSellerFormStep4 formik={formik} />
          }
        </div>
        <div className="flex items-center justify-between">
          <Button onClick={handleStep(-1)} variant="contained" disabled={activeStep == 0}>
            Back
          </Button>
          <Button onClick={handleStep(1)} variant="contained">
            {activeStep == (steps.length - 1) ? "Create Account" : "Next"}
          </Button>
        </div>
      </section>
    </div>
  )
}

export default SellerAccountForm