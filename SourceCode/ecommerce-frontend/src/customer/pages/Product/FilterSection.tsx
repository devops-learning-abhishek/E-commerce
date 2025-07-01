import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import { colors } from "../../../data/filter/color"
import { useState } from "react"
import { useSearchParams } from "react-router-dom";
import { price } from "../../../data/filter/price";
import { discount } from "../../../data/filter/discount";

const FilterSection = () => {
  const [expandColor,setExpandColor] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleColorToggle = ()=> { setExpandColor(!expandColor); };
  
  const updateFilterParams = (e: any) => {
    const { value, name } = e.target;
    if (value) {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }
    setSearchParams(searchParams);
  };

  const clearAllFilters = () => {
    console.log("clearAllFilters",searchParams)
    searchParams.forEach((value: any, key: any) => {
      searchParams.delete(key);
    });
    setSearchParams(searchParams);
  };

  return (
    <div className="-z-50 space-y-5 bg-white">
      <div className="flex items-center justify-between h-[40px] px-9 lg:border-r border-gray-200">
        <p className="text-lg font-semibold">Filters</p>
        <Button onClick={clearAllFilters} size="small" className="text-[#006699] cursor-pointer font-semibold">
          Clear All
        </Button>
      </div>

      <Divider/>

      <div className="px-9 space-y-6">
        <section>
          <FormControl>
            <FormLabel
              sx={{ fontSize:"16px", fontWeight:"bold", color:"#006699", pb:"14px", pt:"25px" }}
              className="text-2xl font-semibold" 
              id="color"
            >
                Color
            </FormLabel>

            <RadioGroup
              onChange={updateFilterParams}
              aria-labelledby="color"
              defaultValue=""
              name="color"
            >
              {colors.slice(0,expandColor? colors.length : 5).map((item) => <FormControlLabel value={item.name} control={<Radio />} 
                label= {<div className="flex items-center gap-3">
                          <p>{item.name}</p>
                          <p style={{backgroundColor:item.hex}} className={`h-5 w-5 rounded-full ${item.name==="White"? "border":""}`}>
                          </p>
                      </div>} />
              )}
            </RadioGroup>
          </FormControl>
          <div>
            <button
              onClick={handleColorToggle}
              className="text-[#006699] cursor-pointer hover:text-[#001a33] flex items-center">
                  {expandColor? "Hide" : `+${colors.length-5} more`}
            </button>
          </div>
        </section>

        <Divider/>

        <section>
          <FormControl>
            <FormLabel
              sx={{ fontSize: "16px", fontWeight: "bold", pb: "14px", color: "#006699", pt:"25px" }}
              className="text-2xl font-semibold"
              id="price"
            >
              Price
            </FormLabel>
            <RadioGroup
              name="price"
              onChange={updateFilterParams}
              aria-labelledby="price"
              defaultValue=""
            >
              {price.map((item, index) => (
                <FormControlLabel
                  key={item.name}
                  value={item.value}
                  control={<Radio size="small" />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </section>

        <Divider />

        <section>
          <FormControl>
            <FormLabel
              sx={{ fontSize: "16px", fontWeight: "bold", pb: "14px", color: "#006699", pt: "25px" }}
              className="text-2xl font-semibold"
              id="brand"
            >
              Discount
            </FormLabel>
            <RadioGroup
              name="discount"
              onChange={updateFilterParams}
              aria-labelledby="brand"
              defaultValue=""
            >
              {discount.map((item, index) => (
                <FormControlLabel
                  key={item.name}
                  value={item.value}
                  control={<Radio size="small" />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </section>
      </div>
    </div>
  )
}

export default FilterSection
