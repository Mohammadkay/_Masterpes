import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'

export default function AddProduct() {
    const [data,setData]=useState([])
    const [error,setError]=useState()
    const navigate = useNavigate();

    const name =useRef()
    const brand =useRef()
    const image =useRef()
    const price =useRef()
    const description =useRef()
    const CatId =useRef()
      
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/categories/');
            setData(response.data);
    
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const addProduct = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        setError("")
        if(name.current.value !=""|| brand.current.value!==""|| image.current.value!=""||
            price.current.value!=""||description.current.value!=""
        ){
        const obj = {
          name: name.current.value,
          brand: brand.current.value,
          image: image.current.value,
          price: price.current.value,
          description: description.current.value,
          category: CatId.current.value,
          richDescription:""

          // ... other form fields
        }
        try{
           const res=await axios.post('http://localhost:8000/api/products',obj)
           console.log(res)
           navigate("../Product");
           
        }catch(err){
            console.log(err)
            setError("something going wrong try again ")
            
        }
    }else{
        setError("please Fill ALL feild")
    }
    name.current.value=""
    brand.current.value=""
    image.current.value=""
    price.current.value=""
    description.current.value=""
    CatId.current.value=""
      };



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
                    <div className="col pl-3">
                          <label htmlFor="" >Brand</label>
                <input type="text" className="form-control" placeholder="Brand" ref={brand}/>
                    </div>
                </div>
                {/*  */}
                <div className="row p-3">
                        <div className="col">
                         <label htmlFor="">Price</label>
                        <input type="number" className="form-control" placeholder="Price" ref={price}/>
                    </div>
                    <div className="col pl-3">
                          <label htmlFor="" className='col-12' >Category</label>
                          <select className="custom-select col-12 form-control" ref={CatId}>
                    {data.map((ele)=>{
                    return(
                        <option className='' value={ele._id} key={ele._id}>{ele.name}</option>
                    )
                })}
                

                </select>
                    </div>
                </div>
                {/* 33th row */}
                <div className="row p-3">
                        <div className="col">
                         <label htmlFor="">Product Name</label>
                        <input type="file" className="form-control"  ref={image}/>
                    </div>
                    <div className="col pl-3">
                          <label htmlFor="" >Description</label>
                <textarea type="text" className="form-control" placeholder="Description" ref={description}></textarea>
                    </div>
                </div>
                <div className='text-center p-3'>
                    <input type="submit" className="btn btn-primary text-center " value={"Add Product"}/>
                    </div>
                    <div className='text-danger text-center'>{error}</div>
</form>
    </div>

    </div>
    </div>
  )
}
