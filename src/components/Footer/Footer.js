import './Footer.css';
import { Form } from 'react-bootstrap';
import { Envelope } from 'react-bootstrap-icons';
import payment from "../../images/payment.png";
// import twitter from "../../images/twitter.png";
// import facebook from "../../images/facebook.png";
// import instagram from "../../images/instagram.png";
// import github from "../../images/github.png";
import FooterEl from './FooterEl';
import { FaFacebook,FaInstagram,FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle} from "react-icons/ai";

const Footer = () => {
    return (
        <div className="w-100" style={{ background: "#F0F0F0", position: "relative", paddingTop: "100px" }}>
            <div className="container bg-black rounded-4 p-5 position-relative blackBox" style={{ marginTop: "-200px" ,maxWidth:"90%"}}>
                <div className="row align-items-center justify-content-between">
                    <div className=" col-md-6">
                        <p className="newsP">STAY UP TO DATE ABOUT OUR LATEST OFFERS</p>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="d-flex flex-column gap-3 inputSubscribe">
                            <div className="position-relative">
                                <span className="envelope-icon">
                                    <Envelope />
                                </span>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="ps-5 pe-4 rounded-pill email"
                                    style={{ backgroundColor: '#FFFFFF' }}
                                />
                            </div>
                            <button className="rounded-pill btnSubscribe">
                                <span className="newsBtn">Subscribe to Newsletter</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row d-flex justify-content-between">
                    <div className=" col-12 col-md-3 justify-content-between  d-flex flex-column">
                        <p className="title">SHOP.CO</p>
                        <p className="desc">We have clothes that suits your style and which you're proud to wear. From women to men.</p>
                        <div className="d-flex gap-2 mb-3">
                            {/* <img src={twitter} alt="twitter" style={{ cursor: "pointer" }} /> */}
                        <AiFillTwitterCircle size={30}  style={{ cursor: "pointer" }} className='socialHover'/>
                            {/* <img src={facebook} alt="facebook" style={{ cursor: "pointer" }} /> */}
                            <FaFacebook size={28} style={{ cursor: "pointer" }} className='socialHover'/>
                            {/* <img src={instagram} alt="instagram" style={{ cursor: "pointer" }} /> */}
                            <FaInstagram size={28} style={{ cursor: "pointer" }} className='socialHover'/>
                            {/* <img src={github} alt="github" style={{ cursor: "pointer" }} /> */}
                            <FaGithub size={28} style={{ cursor: "pointer" }} className='socialHover'/>
                        </div>
                    </div>
                    <div className=" col-6 col-md-2">
                        <FooterEl title="Company" first="About" second="Features" third="Work" fourth="Career" />
                    </div>
                    <div className="col-6 col-md-2">
                        <FooterEl title="Help" first="Customer Support" second="Delivery Details" third="Terms & Conditions" fourth="Privacy Policy" />
                    </div>
                    <div className="col-6 col-md-2">
                        <FooterEl title="FAQ" first="Account" second="Manage Deliveries" third="Orders" fourth="Payments" />
                    </div>
                    <div className="col-6 col-md-2">
                        <FooterEl title="Resources" first="Free eBooks" second="Development Tutorial" third="How to - Blog" fourth="Youtube Playlist" />
                    </div>
                </div>
                <hr className="my-4" />
                <div className="d-flex justify-content-between align-items-center copyrightImage">
                    <p className="copyright">Shop.co © 2000-2025, All Rights Reserved</p>
                    <img src={payment} alt="payment ways" className="img-fluid" style={{ maxWidth: "281px" ,cursor:"pointer"}} />
                </div>
            </div>
        </div>
    );
};

export default Footer;