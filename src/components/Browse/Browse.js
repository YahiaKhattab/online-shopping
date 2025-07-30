import "./Browse.css";
import casual from '../../images/casual.png';
import casualS from '../../images/casualS.png';
import formal from '../../images/formal.png';
import formalS from '../../images/formalS.png';
import party from '../../images/party.png';
import partyS from '../../images/partyS.png';
import gym from '../../images/gym.png';
import gymS from '../../images/gymS.png';

const Browse = () => {
    return (
        <div className="container p-4" style={{ background: "#F0F0F0", borderRadius: "40px" }}>
            <h1 className="browseStyle p-5">BROWSE BY DRESS STYLE</h1>
            <div className="row justify-content-center g-3">
                <div className="col-12 col-md-4">
                    <picture>
                        <source srcSet={casualS} media="(max-width:768px)" className="imgHover" />
                        <img src={casual} alt="casual" className="imgHover w-100 h-100" />
                    </picture>
                </div>
                <div className="col-12 col-md-7">
                    <picture>
                        <source srcSet={formalS} media="(max-width:768px)" className="imgHover" />
                        <img src={formal} alt="formal" className="imgHover w-100 h-90" />
                    </picture>
                </div>
            </div>
            <div className="row mt-1 pb-5 justify-content-center g-3">
                <div className="col-12 col-md-7">
                    <picture>
                        <source srcSet={partyS} media="(max-width:768px)" className="imgHover" />
                        <img src={party} alt="party" className="imgHover w-100 h-90" />
                    </picture>
                </div>
                <div className="col-12 col-md-4">
                    <picture>
                        <source srcSet={gymS} media="(max-width:768px)" className="imgHover" />
                        <img src={gym} alt="gym" className="imgHover w-100 h-100" />
                    </picture>
                </div>
            </div>
        </div>
    );
};

export default Browse;