import axios from 'axios';
import React, { useContext,  useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AdminInfoContext } from '../../../context/AdminInfoProvider';

export default function AddCategory() {
    const [data,setData]=useState([])
    const [image,setImage]=useState(null)
    const [error,setError]=useState()
    const navigate = useNavigate();

    const name =useRef()
   
    const { adminInfo, setAdminInfo, PAGE_SHOW } = useContext(AdminInfoContext)



  

    const addProduct = async (e) => {
        e.preventDefault();
        setError("");
      
        if (name.current.value !== "" ) {
          // Create a FormData object
          const formData = new FormData();
          formData.append("name", name.current.value);
          formData.append("image", image); // Append the file
       

    
          try {
            await axios.post(`http://localhost:8000/api/categories`, formData, {
              headers: {
                "Content-Type": "multipart/form-data", 
              },
            });
            console.log(formData);
            navigate("../Category");
        } catch (err) {
              console.log(formData);
            console.log(err);
            setError("Something went wrong. Please try again.");
          }
        } else {
          setError("Please fill in all fields.");
        }
      };
/********************* */
  
  return (
    <div>
        <div className="container-fluid px-4">
                <h1 className="mt-4">Dashboard</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item"><Link to='/'>Dashboard</Link></li>
                    <li className="breadcrumb-item active">Admin</li>
                </ol>
                <div className="card mb-4">
                    <div className="card-header">
                        <svg className="svg-inline--fa fa-table me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="table" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM224 256V160H64V256H224zM64 320V416H224V320H64zM288 416H448V320H288V416zM448 256V160H288V256H448z" /></svg>{/* <i className="fas fa-table me-1"></i> Font Awesome fontawesome.com */}
                        Add Product
                </div>
                {/* start form */}
                <form onSubmit={addProduct}>
                    <div className="row p-3">
                        <div className="col">
                         <label htmlFor="">Product Name</label>
                        <input type="text" className="form-control" placeholder="Product Name" ref={name}/>
                    </div>
                    <div className="col">
                         <label htmlFor="">Product Name</label>
                        <input type="file" className="form-control"  onChange={(e)=>setImage(e.target.files[0])}/>
                    </div>
                </div>
                {/*  */}
              
                {/* 33th row */}
              
                <div className='text-center p-3'>
                    <input type="submit" className="btn btn-primary text-center " value={"Add Category"}/>
                    </div>
                    <div className='text-danger text-center'>{error}</div>
</form>
    </div>

    </div>
    </div>
  )
}
