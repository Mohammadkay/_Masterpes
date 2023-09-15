import axios from "axios"
import { toast } from 'react-toastify'

function Delete({ deleteId, adminInfo, fetchData }) {

    const deleteAdmin = async () => {
        try {
            const response = await axios.delete(`http://localhost:9000/api/shop/motorcycles/${deleteId}`, {
                headers: {
                    Authorization: 'Bearer ' + adminInfo.token,
                },
            });

            fetchData()

            toast.success('Deleted successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })


        } catch (error) {

            toast.error('Error fetching data', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

        }
    }


    return (
        <>
            <div className="modal fade " id="delete" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Post</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <p> Are you sure of the deletion? </p>
                            <p>You will not be able to go back after confirmation</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => deleteAdmin()}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Delete
