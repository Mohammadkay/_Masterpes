import React, { useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AdminInfoContext } from '../../context/AdminInfoProvider'

function ResetPassword() {
    const { adminInfo, setAdminInfo } = useContext(AdminInfoContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isEmailValid && isPasswordValid) {
            try {
                const response = await axios.put('http://localhost:9000/api/admin/password/rest-password', {
                    email: email,
                    password: password
                }, {
                    headers: {
                        Authorization: "Bearer " + adminInfo.token,
                    }
                });

                toast.success('Password has been reset', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                setEmail('');
                setPassword('');
            } catch (error) {
                toast.error(error.response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } else {
            toast.error('Please enter valid email and password', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    return (
        <div id="layoutAuthentication"  >
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Reset Password Admin</h3></div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-floating mb-3">
                                                <input
                                                    className="form-control"
                                                    id="inputEmail"
                                                    type="email"
                                                    placeholder="name@example.com"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                                <label htmlFor="inputEmail">Email address</label>
                                            </div>

                                            <div className="form-floating mb-3">
                                                <input
                                                    className="form-control"
                                                    id="inputpassword"
                                                    type="password"
                                                    placeholder="New password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <label htmlFor="inputpassword">New password</label>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-end mt-4 mb-0">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary"
                                                    disabled={!isEmailValid || !isPasswordValid}
                                                >
                                                    Reset Password
                                                </button>
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
    )
}

export default ResetPassword;
