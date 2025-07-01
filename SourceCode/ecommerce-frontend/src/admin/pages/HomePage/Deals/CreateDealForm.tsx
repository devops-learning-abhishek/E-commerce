import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useFormik } from "formik"
import { useAppDispatch, useAppSelector } from "../../../../state/Store";
import { createDeal } from "../../../../state/admin/adminDealSlice";

const CreateDealForm = () => {
  const dispatch = useAppDispatch();
  const { customer } = useAppSelector(store => store);
  const formik = useFormik({
    initialValues: {
      discount: 0,
      category: ""
    },
    onSubmit: (values) => {
      console.log("submit", values)
      const reqData = {
        discount: values.discount,
        category: {
          id: values.category
        }
      }
      dispatch(createDeal(reqData))
    }
  })

  return (
    <Box
      component={"form"}
      onSubmit={formik.handleSubmit}
      className="space-y-6"
    >
      <div>
        <Typography variant="h4" className="text-center">
          Create Deal
        </Typography>
      </div>

      <div>
        <TextField
          fullWidth
          name="discount"
          label="Discount"
          value={formik.values.discount}
          onChange={formik.handleChange}
          error={formik.touched.discount && Boolean(formik.errors.discount)}
          helperText={formik.touched.discount && formik.errors.discount}
        />
      </div>

      <div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formik.values.category}
            label="Category"
            onChange={formik.handleChange}
          >
            {customer.homePageData?.dealCategories.map((item) => <MenuItem value={item.id}>{item.name}</MenuItem>)}
          </Select>
        </FormControl>
      </div>

      <div>
        <Button fullWidth type="submit" variant="contained" sx={{ py: ".9rem" }}>
          Create Deal
        </Button>
      </div>
    </Box>
  )
}

export default CreateDealForm