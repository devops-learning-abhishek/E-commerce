import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "../../../state/Store";
import { sendLoginSignupOtp } from "../../../state/AuthSlice";
import { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import { signin } from "../../../state/AuthSlice";
import { CircularProgress } from "@mui/material";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const {auth} = useAppSelector(store => store);
  // const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(0);

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      console.log(values, "Login formik submitted");
      dispatch(signin(values));
    },
  });

  const handleSendOtp = () => {
    if (!formik.values.email) {
      alert("Please enter your email!");
      return;
    }
    dispatch(sendLoginSignupOtp({ email: formik.values.email }));
    // setOtpSent(true);
    setTimer(30);
  };

  const handleResendOtp = () => {
    handleSendOtp();
  };

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
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Login</h2>

      <form onSubmit={formik.handleSubmit} className="space-y-5">
        <input
          type="email"
          name="email"
          placeholder="E-mail address"
          value={formik.values.email}
          onChange={formik.handleChange}
          className="w-full border border-gray-300 rounded-full p-3 mb-4"
        />

        {!auth.otpSent ? (
          <button
            type="button"
            onClick={handleSendOtp}
            className="w-full bg-black text-white rounded-full py-3 cursor-pointer"
          >
            {auth.loading ? <CircularProgress /> : "Send OTP"}
          </button>
        ) : (
          <>
            <div className="space-y-3">
              <OtpInput
                value={formik.values.otp}
                onChange={(otp) => formik.setFieldValue("otp", otp)}
                numInputs={6}
                inputStyle={{
                  width: "42px",
                  height: "42px",
                  fontSize: "18px",
                  borderRadius: "9999px",
                  border: "1px solid #ccc",
                  textAlign: "center",
                }}
                containerStyle={{ display: "flex", gap: "8px", justifyContent: "center" }}
                renderInput={(props) => <input {...props} />}
              />

              <p className="font-medium text-sm text-center opacity-60">
                Enter the 6-digit OTP sent to your email
              </p>

              {timer > 0 ? (
                <p className="text-sm text-center text-gray-600">Resend OTP in {timer}s</p>
              ) : (
                <button
                  type="button"
                  onClick={handleResendOtp}
                  className="text-sm font-medium text-black text-center w-full"
                >
                  Resend OTP
                </button>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white rounded-full py-3 cursor-pointer"
            >
              Login
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default LoginForm;









// import { useState } from "react";

// export default function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [otpSent, setOtpSent] = useState(false);

//   const handleSendOtp = () => {
//     console.log("OTP sent to:", email);
//     setOtpSent(true);
//   };

//   const handleLogin = () => {
//     console.log("Login with OTP:", otp);
//   };

//   return (
//     <div>
//       <h2 className="text-3xl font-bold mb-6 text-gray-800">Login</h2>

//       <input
//         type="email"
//         placeholder="E-mail address"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="w-full border border-gray-300 rounded-full p-3 mb-4"
//       />

//       {!otpSent ? (
//         <button
//           onClick={handleSendOtp}
//           className="w-full bg-black text-white rounded-full py-3 cursor-pointer"
//         >
//           Send OTP
//         </button>
//       ) : (
//         <>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             className="w-full border border-gray-300 rounded-full p-3 mb-4"
//           />

//           <button
//             onClick={handleLogin}
//             className="w-full bg-black text-white rounded-full py-3 cursor-pointer"
//           >
//             Sign In
//           </button>
//         </>
//       )}
//     </div>
//   );
// }
