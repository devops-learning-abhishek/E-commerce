import { Box, TextField } from "@mui/material"

const BecomeSellerFormStep1 = ({ formik }: any) => {
  return (
    <Box>
      <div className="space-y-4">
        <div>
          <TextField
            fullWidth
            name="mobile"
            label="Mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            helperText={formik.touched.mobile && formik.errors.mobile}
          />
        </div>
        <div>
          <TextField
            fullWidth
            name="gstin"
            label="GSTIN"
            value={formik.values.gstin}
            onChange={formik.handleChange}
            error={formik.touched.gstin && Boolean(formik.errors.gstin)}
            helperText={formik.touched.gstin && formik.errors.gstin}
          />
        </div>
      </div>
    </Box>
  )
}

export default BecomeSellerFormStep1