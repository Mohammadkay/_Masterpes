import { useEffect, useContext } from 'react';
import { Routes, Route } from "react-router-dom";

import {
    Nav,
    Sidenav,
    ViewCard,
    CreateAccount,
    ResetPassword,
    TableUsers,
    TableAdmin,
    Login,
    Register,
    Password,
    FormData,
    Page404,
    Page500,
    Page401,
  
    Product,
    Category,
} from '../index'
import AuthLogin from '../Auth'
import { AdminInfoContext } from '../../context/AdminInfoProvider'
import AddProduct from '../Shops/Product/AddProduct';
import AddCategory from '../Shops/Category/AddCategory';

function Index() {
    const { adminInfo, setAdminInfo } = useContext(AdminInfoContext)

    const user = null


    useEffect(() => {
        const handleSidebarToggle = () => {
            document.body.classList.toggle('sb-sidenav-toggled');
        };

        const sidebarToggle = document.body.querySelector('#sidebarToggle');
        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', handleSidebarToggle);
        }

        return () => {
            if (sidebarToggle) {
                sidebarToggle.removeEventListener('click', handleSidebarToggle);
            }
        };
    }, []);


    return (
        <>
            {adminInfo?.isAdmin && adminInfo?.token && adminInfo?.username && adminInfo?.position && adminInfo?.AdminPhoto ? (
                <>
                    <Nav />
                    <div id="layoutSidenav">
                        <div id="layoutSidenav_nav">
                            <Sidenav />
                        </div>
                        <div id="layoutSidenav_content">
                            <main style={{ paddingLeft: "40px" }}>
                                <Routes>

                                    {/* All Services */}
                                    <Route path='/' element={<ViewCard />} />
                                  
                                    <Route path='/CreateAccount' element={<CreateAccount />} />
                                    <Route path='/resetPassword' element={<ResetPassword />} />
                                    <Route path='/TableUsers' element={<TableUsers />} />
                                    <Route path='/TableAdmin' element={<TableAdmin />} />

                                    {/* sasad */}
                                    <Route path='/AddProduct' element={<AddProduct />} />
                                    <Route path='/AddCategory' element={<AddCategory />} />


                                    {/* Authentication */}
                                    <Route path='/LAuth/Login' element={<Login />} />
                                    <Route path='/LAuth/Register' element={<Register />} />
                                    <Route path='/LAuth/Password' element={<Password />} />
                                    <Route path='/LAuth/FormData' element={<FormData />} />

                                    {/* Page Error */}
                                    <Route path='/Page401' element={<Page401 />} />
                                    <Route path='/Page404' element={<Page404 />} />
                                    <Route path='/Page500' element={<Page500 />} />

                                 
                                    {/* Shops  */}
                                    <Route path='/Product' element={<Product />} />
                                    <Route path='/Category' element={<Category />} />
                              

                                    {/* Settings  */}
                                   
                                 
                                </Routes>
                            </main>
                        
                        </div>
                    </div>
                </>
            ) : (
                <Routes>
                    <Route path='/' element={<AuthLogin />} />
                </Routes>
            )

            }
        </>
    )
}

export default Index