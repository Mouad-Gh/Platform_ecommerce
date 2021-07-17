import { useState } from "react";
import axios from "axios";

const Uploader = () => {

    const [uploadedImages, setUploadedImages] = useState([]);
    


    const onImgChange=(event) =>{
        
        setUploadedImages(event.target.files);
        console.log(uploadedImages);
        
    }

    const onUpload=(event) =>{
        event.preventDefault()
        let formData = new FormData();
        
        formData.append("ProduitId",8);
        for (const key of Object.keys(uploadedImages)) {
            formData.append('imagesArray', uploadedImages[key])
        }
        axios.post("http://localhost:3000/api/upload", formData, {
        }).then(response => {
            console.log((response.data))
        })
    }

    return ( 
        <div>
            <form onSubmit={onUpload}>


                <div className="form-group">
                    <input className="form-control form-control-lg mb-3" type="file" multiple name="imagesArray" onChange={onImgChange} />
                </div>

                <div className="d-grid">
                    <button className="btn btn-danger" type="submit">Submit</button>
                </div>
            </form>
        </div>
     );
}
 
export default Uploader;