import { Link } from "react-router-dom";

function Sidenav() {
    return (
        <>
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">control Board</div>
                        <Link to='/' className="nav-link"><div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div> Dashboard</Link>
                      

                        {/* <!-- Start Users tables  --> */}
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseUsers"
                            aria-expanded="false" aria-controls="collapseUsers">
                            <div className="sb-nav-link-icon"><svg className="svg-inline--fa fa-table" aria-hidden="true"
                                focusable="false" data-prefix="fas" data-icon="table" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                <path fill="currentColor" d="M448 32C483.3 32 512 60.65 512
                                            96V416C512 451.3 483.3 480 448
                                            480H64C28.65 480 0 451.3 0 416V96C0
                                            60.65 28.65 32 64 32H448zM224
                                            256V160H64V256H224zM64
                                            320V416H224V320H64zM288
                                            416H448V320H288V416zM448
                                            256V160H288V256H448z">
                                </path>
                            </svg></div> Users tables
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseUsers" aria-labelledby="headingOne"
                            data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <Link to='/TableUsers' className="nav-link">Users</Link>
                                <Link to='/TableAdmin' className="nav-link">Admin</Link>
                            </nav>
                        </div>
                        {/* <!-- End Users tables  --> */}




                        <div className="sb-sidenav-menu-heading">CONTROL
                            INTERFACES</div>
                        {/* <!-- Start tables Shops  --> */}
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                            data-bs-target="#collapseShops" aria-expanded="false" aria-controls="collapseShops">
                            <div className="sb-nav-link-icon"><svg className="svg-inline--fa fa-table" aria-hidden="true"
                                focusable="false" data-prefix="fas" data-icon="table" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                <path fill="currentColor" d="M448 32C483.3 32 512 60.65 512
                                            96V416C512 451.3 483.3 480 448
                                            480H64C28.65 480 0 451.3 0 416V96C0
                                            60.65 28.65 32 64 32H448zM224
                                            256V160H64V256H224zM64
                                            320V416H224V320H64zM288
                                            416H448V320H288V416zM448
                                            256V160H288V256H448z">
                                </path>
                            </svg></div> Product
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseShops" aria-labelledby="headingOne"
                            data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">

                                <Link to='/Product' className="nav-link">Products list</Link>
                                <Link to='/AddProduct' className="nav-link">Add Product</Link>
                              
                          

                            </nav>
                        </div>
                        {/* <!-- End tables Shops  --> */}

                             
                        {/* <!-- Start tables Shops  --> */}
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                            data-bs-target="#collapseShops" aria-expanded="false" aria-controls="collapseShops">
                            <div className="sb-nav-link-icon"><svg className="svg-inline--fa fa-table" aria-hidden="true"
                                focusable="false" data-prefix="fas" data-icon="table" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                <path fill="currentColor" d="M448 32C483.3 32 512 60.65 512
                                            96V416C512 451.3 483.3 480 448
                                            480H64C28.65 480 0 451.3 0 416V96C0
                                            60.65 28.65 32 64 32H448zM224
                                            256V160H64V256H224zM64
                                            320V416H224V320H64zM288
                                            416H448V320H288V416zM448
                                            256V160H288V256H448z">
                                </path>
                            </svg></div> Category
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseShops" aria-labelledby="headingOne"
                            data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">

                                            <Link to='/Category' className="nav-link">Category</Link>
                                            <Link to='/AddCategory' className="nav-link">Add Category</Link>
                                
                            </nav>
                        </div>
                            {/*  */}
                        <Link to='/CreateAccount' className="nav-link">
                            <div className="sb-nav-link-icon">
                                <i className="fas fa-chart-area"></i>
                            </div>
                            Create Account
                        </Link>

                        <Link to='/resetPassword' className="nav-link">
                            <div className="sb-nav-link-icon">
                                <i className="fas fa-chart-area"></i>
                            </div>
                            Reset Password
                        </Link>


                    </div>
                </div >
            </nav >
        </>
    )
}

export default Sidenav
