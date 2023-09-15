import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function CreateServiceProviders({ adminInfo, fetchData }) {
    const [fields, setFields] = useState({
        username: '',
        phone: '',
        carModule: '',
        service: '',
    });

    const [errorMessages, setErrorMessages] = useState({
        username: '',
        phone: '',
        carModule: '',
        service: '',
    });

    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^\d{10,14}$/;
        return phoneRegex.test(phone);
    };

    const handleEdit = async () => {
        const newErrorMessages = {};

        if (!fields.username) {
            newErrorMessages.username = 'Username is required';
        }

        if (!fields.carModule) {
            newErrorMessages.carModule = 'Car is required';
        }

        if (!fields.service) {
            newErrorMessages.service = 'Service is required';
        }

        if (!fields.phone) {
            newErrorMessages.phone = 'Phone is required';
        } else if (!validatePhoneNumber(fields.phone)) {
            newErrorMessages.phone = 'Phone number must be between 10 and 14 digits';
        }

        if (Object.keys(newErrorMessages).length > 0) {
            setErrorMessages(newErrorMessages);
            return;
        }

        try {
            const response = await axios.post(`http://localhost:9000/api/development`, fields, {
                headers: {
                    Authorization: 'Bearer ' + adminInfo.token,
                },
            });

            setFields({
                username: '',
                phone: '',
                carModule: '',
                service: '',
            });

            setErrorMessages({});
            fetchData();

            toast.success('Modified successfully', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 1,
                theme: 'colored',
            });
        } catch (error) {
            console.log(error)
            toast.error('Error fetching data', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
        }
    };

    const handleFieldChange = (fieldName, value) => {
        setFields((prevFields) => ({
            ...prevFields,
            [fieldName]: value,
        }));

        setErrorMessages((prevErrors) => ({
            ...prevErrors,
            [fieldName]: '',
        }));
    };

    return (
        <div className="modal fade" id="create" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Create Service Providers</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputUsername" className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputUsername"
                                    aria-describedby="usernameHelp"
                                    value={fields.username}
                                    onChange={(e) => handleFieldChange('username', e.target.value)}
                                />
                                {errorMessages.username && <div className="text-danger">{errorMessages.username}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPhone"
                                    aria-describedby="PhoneHelp"
                                    value={fields.phone}
                                    onChange={(e) => handleFieldChange('phone', e.target.value)}
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                />
                                {errorMessages.phone && <div className="text-danger">{errorMessages.phone}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPrice" className="form-label">Car</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPrice"
                                    aria-describedby="PriceHelp"
                                    value={fields.carModule}
                                    onChange={(e) => handleFieldChange('carModule', e.target.value)}
                                />
                                {errorMessages.carModule && <div className="text-danger">{errorMessages.carModule}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputLocation" className="form-label">Service</label>
                                <select
                                    className="form-select"
                                    value={fields.service}
                                    onChange={(e) => handleFieldChange('service', e.target.value)}
                                    aria-label="Default select example">
                                    <option value=""> </option>
                                    <option value="Internal">Internal</option>
                                    <option value="External">External</option>
                                </select>
                                {errorMessages.service && <div className="text-danger">{errorMessages.service}</div>}
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss='modal'
                            onClick={handleEdit}>
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateServiceProviders;
