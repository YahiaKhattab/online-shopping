import versace from '../images/versace.png';
import zara from '../images/zara.png';
import gucci from '../images/gucci.png';
import prada from '../images/prada.png';
import calvin from '../images/calvin.png';

const Brands = () => {
    return (
        <div id="brands" className="container-fluid bg-black">
            <div className="row d-flex justify-content-between justify-content-md-around align-items-center p-4">
                <div className="col-4 col-md-2 ">
                    <img src={versace} alt="versace" className="img-fluid" />
                </div>
                <div className="col-3 col-md-1 ">
                    <img src={zara} alt="zara" className="img-fluid" />
                </div>
                <div className="col-4 col-md-2">
                    <img src={gucci} alt="gucci" className="img-fluid" />
                </div>
                <div className="col-5 col-md-2 ms-4 ms-md-0 mt-3 mt-md-0">
                    <img src={prada} alt="prada" className="img-fluid" />
                </div>
                <div className="col-5 col-md-2 me-4 me-md-0 mt-3 mt-md-0">
                    <img src={calvin} alt="calvin klein" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default Brands;