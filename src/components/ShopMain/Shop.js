import backF from '../../images/backgroundFinal.png';
import backS from '../../images/backgroundSmall.png';
import small from '../../images/small.png';
import big from '../../images/big.png';
import './Shop.css';

const Shop = () => {
    return (
        <div className="container-fluid" style={{ backgroundColor: "#F2F0F1" }}>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className=" h-100 w-100 mt-4 p-md-5">
                        <h1 className="shopP p-md-3 mt-md-3">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>

                        <p className="shopP2 mb-md-4 mb-3 ms-1 ms-md-4">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>

                        <button className="btn btn-dark rounded-pill px-md-4 py-md-3 mb-md-0 ms-2"><span className='bText px-md-5'>Shop Now</span></button>

                        <div className="d-flex justify-content-around justify-content-md-start mt-md-5 pt-4 flex-wrap">
                            <div className=" px-md-3 px-2 me-2 pe-md-4 firstStat">
                                <p className="divNum mb-1">200+</p>
                                <p className="divPP">International Brands</p>
                            </div>
                            <div className="tpx-md-3 middle me-2 ps-5 ps-md-4 pe-md-4">
                                <p className="divNum mb-1">2000+</p>
                                <p className="divPP">High-Quality Products</p>
                            </div>
                            <div className="tpx-md-3 px-2 ps-md-4 lastStat">
                                <p className="divNum mb-1">30000+</p>
                                <p className="divPP">Happy Customers</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 position-relative paddingSmall">
                    <picture>
                        <source srcSet={backS} media="(max-width:768px)" className='img-fluid'/>
                        <img src={backF} alt="party" className=" w-100 h-100" />
                    </picture>
                    <img src={small} alt="small star" className="position-absolute small" style={{ left: "7.14%", top: "42%" }} />
                    <img src={big} alt="big star" className="position-absolute big" style={{ left: "79%", top: "13%" }} />
                </div>
            </div>
        </div>
    );
}

export default Shop;