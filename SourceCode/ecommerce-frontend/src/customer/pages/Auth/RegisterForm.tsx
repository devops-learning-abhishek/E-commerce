import { useState } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = () => {
    console.log("OTP sent to:", email);
    setOtpSent(true);
  };

  const handleRegister = () => {
    console.log("Register with OTP:", otp);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Sign Up</h2>
      <input
        type="email"
        placeholder="E-mail address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-gray-300 rounded-full p-3 mb-4"
      />
      {!otpSent ? (
        <button
          onClick={handleSendOtp}
          className="w-full bg-black text-white rounded-full py-3 cursor-pointer"
        >
          Send OTP
        </button>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full border border-gray-300 rounded-full p-3 mb-4"
          />

          <button
            onClick={handleRegister}
            className="w-full bg-black text-white rounded-full py-3 cursor-pointer"
          >
            Sign Up
          </button>
        </>
      )}
    </div>
  );
}