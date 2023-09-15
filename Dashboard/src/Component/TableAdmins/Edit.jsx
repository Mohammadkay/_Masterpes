import React, { useState } from 'react';
import axios from 'axios';

function Edit({ editId, adminInfo, fetchData }) {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [position, setPosition] = useState('')
    const [photo, setPhoto] = useState(null)
    const [errorMessages, setErrorMessages] = useState({})
    const adminId = editId
    const token = adminInfo.token
    const [updatedData, setUpdatedData] = useState({});



    const handleEdit = async () => {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('position', position);

        try {
            const response = await axios.put(`http://localhost:9000/api/admin/${adminId}`, { username, position }, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });

            fetchData()

        } catch (error) {
            if (error.response) {
                setErrorMessages(error.response.data.errors);
            } else {
                console.error('An error occurred:', error.message);
            }
        }
    };

    return (
        <div className="modal fade " id="edit" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Admin</h1>
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
                                    defaultValue={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputposition" className="form-label">Position</label>
                                <select
                                    className="form-select"
                                    onClick={(e) => setPosition(e.target.value)}
                                    aria-label="Default select example"
                                >
                                    <option value=""> </option>
                                    <option value="superVisor">Super Visor</option>
                                    <option value="admin">Admin</option>
                                    <option value="in active">Inactive</option>
                                </select>
                            </div>


                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleEdit}>Edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;
