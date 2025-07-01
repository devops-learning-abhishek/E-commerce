import { Box } from "@mui/material";
import { FiberManualRecord, CheckCircle } from "@mui/icons-material";
import { useEffect, useState } from "react";

const steps = [
  { name: "Order Placed", description: "on Thu, 11 Jul", value: "PLACED" },
  { name: "Packed", description: "Item Packed in Dispatch Warehouse", value: "CONFIRMED" },
  { name: "Shipped", description: "by Mon, 15 Jul", value: "SHIPPED" },
  { name: "Out for Delivery", description: "by 16 Jul - 18 Jul", value: "ARRIVING" },
  { name: "Delivered", description: "by 16 Jul - 18 Jul", value: "DELIVERED" },
  // { name: "Canceled", description: "by 16 Jul - 18 Jul", value: "CANCELLED" },
];

const canceledStep = [
  { name: "Order Placed", description: "on Thu, 11 Jul", value: "PLACED" },
  { name: "Order Canceled", description: "on Thu, 11 Jul", value: "CANCELLED" },

];

// const currentStep = 2; // Change this value based on the current step

const OrderStepper = ({ orderStatus }: any) => {
  const [statusStep, setStatusStep] = useState(steps);

  useEffect(() => {
    if (orderStatus === 'CANCELLED') {
      setStatusStep(canceledStep)
    } else {
      setStatusStep(steps)
    }

    // setCurrentStep(orderStatus==='Canceled'? canceledStep : steps)
    // .slice(0,orderStatus==="CANCELLED"?steps.length:steps.length-1)
  }, [orderStatus]);
  
  const currentStep = statusStep.findIndex((step) => step.value === orderStatus);

  return (
    <div>
      <Box className="my-10">
        {statusStep.map((step, index) => (
          <>
            <div key={index} className={` flex px-4 `}>
              <div className="flex flex-col items-center">
                <Box
                  sx={{ zIndex: -1 }}
                  className={` w-8 h-8 rounded-full flex items-center justify-center z-10 ${index <= currentStep
                    ? " bg-gray-200 text-[#2e7d32] border"
                    : "bg-gray-300 text-gray-500"
                    }`}
                >
                  {step.value === orderStatus ? (
                    orderStatus === "CANCELLED" ? <CheckCircle color="error" /> : <CheckCircle />
                  ) : (
                    <FiberManualRecord sx={{ zIndex: -1 }} />
                  )}
                </Box>
                {index < statusStep.length - 1 && (
                  <div
                    className={`border h-20 w-[2px] ${index < currentStep ? "text-[#2e7d32]" : "text-gray-200"}`}
                  ></div>
                )}
              </div>

              <div className={`ml-2 w-full`}>
                <div
                  className={` ${step.value === orderStatus
                    ? (orderStatus === "CANCELLED"
                      ? "bg-red-700 p-2 text-white rounded-md -translate-y-3"
                      : "bg-[#2e7d32] p-2 text-white rounded-md -translate-y-3")
                    : ""} w-full font-medium`}
                >
                  <p className={``}>
                    {step.name}
                  </p>
                  <p className={` ${step.value === orderStatus ? " text-gray-200" : "text-gray-500"} text-xs `}>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </Box>
    </div>
  )
}

export default OrderStepper