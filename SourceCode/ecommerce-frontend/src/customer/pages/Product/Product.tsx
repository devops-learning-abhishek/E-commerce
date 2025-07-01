import { Box, Divider, FormControl, IconButton, InputLabel, MenuItem, Pagination, Select, useMediaQuery, useTheme } from "@mui/material"
import FilterSection from "./FilterSection"
import ProductCard from "./ProductCard/ProductCard"
import { FilterAlt } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../state/Store"
import { useParams, useSearchParams } from "react-router-dom"
import { getAllProducts } from "../../../state/customer/productSlice"

const Product = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [sort, setSort] = useState();
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { category } = useParams();
  const { product } = useAppSelector((store => store))

  const handleSortChange = (event: any) => {
    setSort(event.target.value)
  }

  const handlePageChange = (value: number) => {
    setPage(value)
  }

  useEffect(() => {
    const [minPrice, maxPrice] = searchParams.get("price")?.split("-") || [];
    const color = searchParams.get("color");
    const minDiscount = searchParams.get("discount") ? Number(searchParams.get("discount")) : undefined;
    const pageNumber = page - 1;

    const newFilter = {
      color: color || "",
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      minDiscount,
      pageNumber
    }
console.log("Sending Filters: ", newFilter);

    dispatch(getAllProducts(newFilter))
  }, [category, searchParams])

  return (
    <div className="-z-10">
      <div className="bg-slate-300 mb-5">
        <h1 className="text-3xl text-center font-bold text-gray-700 pb-7 pt-5 px-9 uppercase space-x-2">Women Sarees</h1>
      </div>
      <div className="lg:flex">
        <section className="filter_section hidden lg:block w-[20%]">
          <FilterSection />
        </section>
        <div className="w-full lg:w-[80%] space-y-5">
          <div className="flex justify-between item-center px-9 h-[40pz]">
            <div className="relative w-[50%]">
              {
                !isLarge && (<IconButton>
                  <FilterAlt />
                </IconButton>)
              }
              {
                !isLarge && (<Box>
                  <FilterSection />
                </Box>)
              }
            </div>
            <FormControl size="small" sx={{ width: "200px", mr: 3 }}>
              <InputLabel id="demo-simple-select-label">SORT</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Sort"
                onChange={handleSortChange}
              >
                <MenuItem value={"price_low"}>Price : Low - High</MenuItem>
                <MenuItem value={"price_high"}>Price : High - Low</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Divider />

          <section className="products_section grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-6 px-7 justify-center">
            {product.products.map((item) => <ProductCard item={item} />)}
          </section>

          <div className="flex justify-center py-10">
            <Pagination
              count={10}
              color="primary"
              onChange={(e, value) => handlePageChange(value)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
