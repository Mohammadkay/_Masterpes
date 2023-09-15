import { ChartUser, ServiceProvider, CountPost, BookCars, ChartShops, ChartServices, ChartOverallPerformance } from './index'
import { AdminInfoContext } from '../../../context/AdminInfoProvider'
import { useContext } from 'react'





function ViewCard() {
    const { adminInfo } = useContext(AdminInfoContext)

    return (
        <>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Dashboard</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item active">Dashboard</li>
                </ol>
                <div className="row">
                    <ChartUser adminInfo={adminInfo} />

                    <ServiceProvider adminInfo={adminInfo} />


                </div>
                <div className="row">

                    <div className="col-xl-6">
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fas fa-chart-bar me-1" />
                                Bar Chart ( Shops )
                            </div>
                            <div className="card-body">
                                <ChartShops adminInfo={adminInfo} />
                            </div>
                        </div>
                    </div>

               


                </div>
            </div>
        </>
    )
}

export default ViewCard
