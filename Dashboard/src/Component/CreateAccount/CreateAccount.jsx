import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';


function CreateAccount() {

    const [fields, setFields] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [fieldErrors, setFieldErrors] = useState({
        username: '',
        email: '',
        password: ''
    });

    const validateFields = () => {
        let isValid = true;
        const newErrors = {};

        // Check for empty fields
        for (const field in fields) {
            if (!fields[field]) {
                newErrors[field] = 'This field is required';
                isValid = false;
            }
        }

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(fields.email)) {
            newErrors.email = 'Invalid email format';
            isValid = false;
        }

        // Validate password format
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (!passwordPattern.test(fields.password)) {
            newErrors.password = 'Password must be 6-20 characters long and contain at least one uppercase letter, one lowercase letter, and one digit';
            isValid = false;
        }

        setFieldErrors(newErrors);
        return isValid;
    };

    const handleFieldChange = (field, value) => {
        setFields(prevFields => ({
            ...prevFields,
            [field]: value
        }));

        setFieldErrors(prevErrors => ({
            ...prevErrors,
            [field]: ''
        }));
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (validateFields()) {
            try {
                await fetchCreateAccount();
            } catch (error) {
                console.error('Error submitting data:', error);
            }
        }
    };

    const fetchCreateAccount = async () => {
        try {
            const response = await axios.post('http://localhost:9000/api/authAdmin/createAccount', fields);
            toast.success('The account has been added', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            setFields({
                username: '',
                email: '',
                password: ''
            });

            setFieldErrors({
                username: '',
                email: '',
                password: ''
            })

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
    };


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <div id="layoutSidenav_content p-0">
                <div id="layoutAuthentication">
                    <div id="layoutAuthentication_content">
                        <main>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7">
                                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                                            <div className="card-header">
                                                <h3 className="text-center font-weight-light my-4">Create Account</h3>
                                            </div>
                                            <div className="card-body">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="row mb-3">
                                                        <div className="col-md-12">
                                                            <div className="form-floating mb-3 mb-md-0">
                                                                <input className="form-control"
                                                                    id="inputFirstName"
                                                                    type="text"
                                                                    placeholder="Enter your first name"
                                                                    value={fields.username}
                                                                    onChange={(event) => handleFieldChange('username', event.target.value)}
                                                                />
                                                                <label htmlFor="inputFirstName">Username</label>
                                                            </div>
                                                            {fieldErrors.username && <div className="text-danger">{fieldErrors.username}</div>}
                                                        </div>
                                                    </div>


                                                    <div className="form-floating mb-3">
                                                        <input className="form-control"
                                                            id="inputEmail"
                                                            type="email"
                                                            placeholder="name@example.com"
                                                            value={fields.email}
                                                            onChange={(event) => handleFieldChange('email', event.target.value)}
                                                        />
                                                        <label htmlFor="inputEmail">Email address</label>
                                                    </div>
                                                    {fieldErrors.email && <div className="text-danger">{fieldErrors.email}</div>}

                                                    <div className="row mb-3">
                                                        <div className="col-md-12">
                                                            <div className="form-floating mb-3 mb-md-0">
                                                                <input className="form-control"
                                                                    id="inputPassword"
                                                                    type="password"
                                                                    placeholder="Create a password"
                                                                    value={fields.password}
                                                                    onChange={(event) => handleFieldChange('password', event.target.value)}
                                                                />
                                                                <label htmlFor="inputPassword">Password</label>
                                                            </div>
                                                            {fieldErrors.password && <div className="text-danger">{fieldErrors.password}</div>}
                                                        </div>
                                                    </div>

                                                    <div className="mt-4 mb-0">
                                                        <div className="d-grid"><button type='submit' className="btn btn-primary btn-block" >Create Account</button ></div>
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
            </div>

        </>
    )
}

export default CreateAccount
