import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import loginBg from "../../../assets/images/login-bg.jpg";


export default function Auth() {
  const [formType, setFormType] = useState<"login" | "signup">("login");

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#c5d6f6]">
      <div className="flex rounded-lg overflow-hidden shadow-xl max-w-4xl w-full h-[500px]">
        {/* Left Image Section */}
        <div className="w-1/2 h-full">
          <img
            src={loginBg}
            alt="Background"
            className="w-full h-[500px]"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-1/2 bg-white p-10 flex flex-col gap-8 justify-center">

          {formType === "login" ? <LoginForm /> : <RegisterForm />}

          <div className="text-center text-sm text-gray-600">
            {formType === "login" ? (
              <>
                Don’t have an account?{" "}
                <button
                  onClick={() => setFormType("signup")}
                  className="text-black font-medium cursor-pointer"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setFormType("login")}
                  className="text-black font-medium cursor-pointer"
                >
                  Log in
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
