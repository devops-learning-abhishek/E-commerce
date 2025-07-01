import { Delete } from "@mui/icons-material"
import { Avatar, Box, Grid, IconButton, Rating } from "@mui/material"
import { red } from "@mui/material/colors"

const ReviewCard = () => {
  return (
    <div className="">
      <Grid container spacing={2}>
        <Grid size={{ xs: 1 }}>
          <Box>
            <Avatar className="text-white" sx={{ width: 35, height: 35, bgcolor: "#9155FD" }}>
              A
            </Avatar>
          </Box>
        </Grid>
        <Grid size={{ xs: 10 }}>
          <div className="flex items-center gap-3">
            <p className="font-semibold text-md">Abhi</p>
            <p className="opacity-70 text-sm">2025-05-07 17:17:07</p>
          </div>
          <Rating readOnly value={4.5} precision={.5} />
          <p className="mb-2 text-md">Value for money, very nice product for daily use. Good fabric and finish.</p>
          <div className="flex flex-wrap gap-3 max-width">
            {[1, 1, 1, 1, 1].map(() =>
              <img
                className="w-24 h-24 object-cover"
                src="https://assets.ajio.com/medias/sys_master/root/20240816/KGbP/66bf7e316f60443f31101051/-1117Wx1400H-700293833-teal-MODEL3.jpg"
                alt=""
              />)}
          </div>
        </Grid>
        <Grid size={{ xs: 1 }}>
          <IconButton>
            <Delete sx={{ color: red[700] }} />
          </IconButton>
        </Grid>
      </Grid>

    </div>
  )
}

export default ReviewCard
