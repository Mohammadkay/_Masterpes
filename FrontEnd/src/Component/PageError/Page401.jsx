import ImgPage401 from "../../assets/error-401.svg"
function Page401() {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="text-center mt-4">
                            <img className="mb-4 img-error" src={ImgPage401} />
                            <p>Access to this resource is denied.</p>
                            <a href="../../index.html">
                                <svg className="svg-inline--fa fa-arrow-left me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg><path fill="currentColor" d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" /></svg>{/* <i class="fas fa-arrow-left me-1"></i> Font Awesome fontawesome.com */}
                                Return to Dashboard
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Page401
