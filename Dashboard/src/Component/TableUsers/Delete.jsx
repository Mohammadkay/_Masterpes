import axios from "axios"


function Delete({ deleteId, adminInfo, fetchData }) {

    const deleteAdmin = async () => {
        try {
            const response = await axios.delete(`http://localhost:9000/api/users/${deleteId}`, {
                headers: {
                    Authorization: 'Bearer ' + adminInfo.token,
                },
            });

            fetchData()

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    return (
        <>

            <div className="modal fade " id="delete" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Delete User </h1>
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
