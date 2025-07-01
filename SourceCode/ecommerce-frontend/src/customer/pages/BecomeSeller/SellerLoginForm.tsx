import { Button, TextField } from "@mui/material"
import { useFormik } from "formik"
import { useAppDispatch } from "../../../state/Store"
import { sendLoginSignupOtp } from "../../../state/AuthSlice"
import { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import { sellerLogin } from "../../../state/seller/sellerAuthSlice";

const SellerLoginForm = () => {
  const dispatch = useAppDispatch();
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(0);

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: ""
    },
    // validationSchema: FormSchema,
    onSubmit: (values) => {
      console.log(values, "formik submitted");
      dispatch(sellerLogin(values))
    }
  });

  const handleSendOtp = async () => {
    if (!formik.values.email) {
      alert("Please enter your email address first!");
      return;
    }

    dispatch(sendLoginSignupOtp({ email: formik.values.email }));
    setOtpSent(true);
    setTimer(10);
  };

  const handleResendOtp = () => {
    handleSendOtp(); // reuse the same function
  };

  // Timer logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div>
      <h1 className="text-center font-bold text-2xl text-[#006699] pb-15">
        Login As Seller
      </h1>
      <form onSubmit={formik.handleSubmit} className="space-y-5">

        <div>
          <TextField
            fullWidth
            name="email"
            label="Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </div>

        {!otpSent ? (
          <Button
            onClick={handleSendOtp}
            fullWidth
            variant="contained"
            sx={{ py: "11px" }}
          >
            Send OTP
          </Button>
        ) : (
          <>
            <div className="space-y-3">
              <OtpInput
                value={formik.values.otp}
                onChange={(otp) => formik.setFieldValue("otp", otp)}
                numInputs={6}
                inputStyle={{
                  width: "40px",
                  height: "40px",
                  fontSize: "18px",
                  borderRadius: "4px",
                  border: "1px solid #ccc"
                }}
                containerStyle={{ display: "flex", gap: "8px" }}
                renderInput={(props) => <input {...props} />}
              />
              <p className="font-medium text-sm opacity-60">
                Enter the 6-digit OTP sent to your email
              </p>

              {timer > 0 ? (
                <p className="text-sm text-gray-600">Resend OTP in {timer}s</p>
              ) : (
                <Button
                  onClick={handleResendOtp}
                  variant="text"
                  sx={{ textTransform: "none", fontSize: "14px" }}
                >
                  Resend OTP
                </Button>
              )}
            </div>

            <Button
              onClick={()=>formik.handleSubmit()}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ py: "11px" }}
            >
              Login
            </Button>
          </>
        )}
      </form>
    </div>
  )
}

export default SellerLoginForm