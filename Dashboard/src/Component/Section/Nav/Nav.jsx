import { Link, useNavigate } from "react-router-dom"
import React, { useContext } from 'react'
import { AdminInfoContext } from '../../../context/AdminInfoProvider'
function Nav() {
    const { adminInfo, setAdminInfo } = useContext(AdminInfoContext)

    let navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('userInfo')
        setAdminInfo(null)
        navigate('/')
    }


    return (
        <>
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                {/* <!-- Navbar Brand--> */}
                <Link to='/' className="navbar-brand ps-3">{adminInfo.username}</Link>
                {/* <!-- Sidebar Toggle--> */}
                <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i
                    className="fas fa-bars"></i></button>
                {/* <!-- Navbar Search--> */}
                <form className="d-none d-md-inline-block form-inline ms-auto me-0
                me-md-3 my-2 my-md-0">
                    <div className="input-group">
                 
                    </div>
                </form>
                {/*  */}
                {/* <!-- Navbar--> */}
                <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" onClick={() => logout()} >Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav
