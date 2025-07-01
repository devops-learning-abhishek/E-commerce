import { Radio } from "@mui/material"

const AddressCard = () => {
  const handleChange = (event:any) => {
    console.log(event.target.checked)
  }

  return (
    <div className="flex p-5 border border-gray-200 rounded-md">
      <div>
        <Radio 
          checked={true}
          onChange={handleChange}
          value=""
          name="radio-button" 
        />
      </div>
      <div className="space-y-3 pt-3">
        <h1>Abhi</h1>
        <p className="w-[320px]">
          Shree Vardhayini Hsg.Soc, Anu Nagar, Wagbhil, Thane West, Thane, Maharastra - 400615
        </p>
        <p>
          <strong>Mobile : 9022334751</strong>
        </p>
      </div>
    </div>
  )
}

export default AddressCard