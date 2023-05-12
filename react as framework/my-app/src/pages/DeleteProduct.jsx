import { Navigate } from "react-router-dom";
import "./../App.css";
import axios from "axios";


function DeleteProduct(id) {
  
    axios.delete(
        `http://localhost:3000/products/${id}`,
     
        {
          headers: {
            Authorization: localStorage.getItem("accessToken"), // Correct the header field name
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
            window.location.reload();
            alert("Product deleted successfully")
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

 

export default DeleteProduct;
