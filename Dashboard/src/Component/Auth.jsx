import React, { useState, useContext } from 'react'
import axios from 'axios'
import { AdminInfoContext } from '../context/AdminInfoProvider'

function AuthLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({ email: '', password: '', unknown: '' })
    const { adminInfo, setAdminInfo } = useContext(AdminInfoContext)

    const validateEmail = (email) => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
        return emailRegex.test(email);
    };


    const validatePassword = (password) => {
        return password.length >= 2;
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrors({ ...errors, email: 'Invalid email format' });
            return;
        } else {
            setErrors({ ...errors, email: '' });
        }

        if (!validatePassword(password)) {
            setErrors({ ...errors, password: 'Password must be at least 1 characters long' });
            return;
        } else {
            setErrors({ ...errors, password: '' });
        }

        try {
            const response = await axios.post('http://localhost:9000/api/authAdmin/login', { email, password });
            localStorage.setItem('adminInfo', JSON.stringify(response.data));

            setAdminInfo(response.data)

        } catch (error) {
            setErrors({ ...errors, unknown: 'invalid email or password' });
        }
    };

    return (
        <>
            <div id="layoutAuthentication" className="bg-primary">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-5">
                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                                        <div className="card-body">
                                            <form onSubmit={onSubmit}>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control"
                                                        id="inputEmail" type="email"
                                                        placeholder="name@example.com"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                    <label htmlFor="inputEmail">Email address</label>
                                                </div>

                                                {errors.email && (
                                                    <p className='validation-form text-danger fw-bold'> {errors.email} </p>
                                                )
                                                }

                                                <div className="form-floating mb-3">
                                                    <input className="form-control"
                                                        id="inputPassword"
                                                        type="password"
                                                        placeholder="Password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                    <label htmlFor="inputPassword">Password</label>
                                                </div>

                                                {errors.password && (
                                                    <p className='validation-form'>{errors.password}</p>
                                                )
                                                }

                                                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                    <input type="submit" className="btn btn-primary" value="Login" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

        </>
    )
}

export default AuthLogin
