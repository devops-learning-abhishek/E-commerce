import { Box, Typography } from "@mui/material";
import { AddCard } from "@mui/icons-material";

const SavedCards = () => {
  return (
    <Box className="flex flex-col items-center justify-center h-[60vh] text-center p-6">
      <div className="flex items-center justify-center bg-[#e6f7fb] rounded-full w-52 h-52 shadow-lg mb-6">
        <AddCard sx={{ fontSize: 117, color: "#006699" }} />
      </div>

      <Typography variant="h5" className="font-semibold mb-2 text-gray-800">
        Save Your Cards for Faster Payments
      </Typography>

      <Typography variant="body1" className="text-gray-400 max-w-3xl pt-2">
        Securely save your card details for seamless future checkouts. Your card information is encrypted and handled as per RBI guidelines to ensure maximum security.
      </Typography>
    </Box>
  );
};

export default SavedCards;
