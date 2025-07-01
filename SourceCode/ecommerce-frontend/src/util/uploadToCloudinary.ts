export const uploadToCloudinary = async (pics:any) => {
    const cloud_name ="dvdk2sgdl"
    const upload_preset ="abhi-ecommerce-zyracart"

    if(pics){
        const data = new FormData();
        data.append("file",pics);
        data.append("upload_preset",upload_preset);
        data.append("cloud_name",cloud_name);

        const res = await fetch("https://api.cloudinary.com/v1_1/dvdk2sgdl/upload",{
            method : "POST",
            body : data
        })

        const fileData = await res.json();
        return fileData.url;
    }
    else{
        console.log("error : pics not found");
    }
}