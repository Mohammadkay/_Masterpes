import { Link } from "react-router-dom";
import TableSort from './Table'

export default function Motorcycles() {
    return (
        <>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Motorcycles</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item"><Link to='/'>Dashboard</Link></li>
                    <li className="breadcrumb-item active">Motorcycles Shop</li>
                </ol>

                <div className="card mb-4">
                    <div className="card-header">
                        <svg className="svg-inline--fa fa-table me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="table" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM224 256V160H64V256H224zM64 320V416H224V320H64zM288 416H448V320H288V416zM448 256V160H288V256H448z" /></svg>{/* <i class="fas fa-table me-1"></i> Font Awesome fontawesome.com */}
                        DataTable Motorcycles Shop
                    </div>
                    <div className="card-body">
                        <TableSort />
                    </div>
                </div>
            </div>
        </>
    )
}
