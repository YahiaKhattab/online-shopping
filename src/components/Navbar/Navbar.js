import { Form } from 'react-bootstrap';
import {useState} from 'react';
import { Search, Cart2, PersonCircle } from 'react-bootstrap-icons';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './navbar.css';

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <nav className="navbar navbar-expand-md navbar-light my-2 mb-md-3 p-md-2">
            <div className="container-fluid d-flex align-items-center">
                <button
                    className="navbar-toggler order-md-1"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main-nav"
                    aria-controls="main-nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <span className="navbar-brand shop fs-2 fw-bold order-md-2 mx-md-0 mx-auto" >SHOP.CO</span>

                <div className="collapse navbar-collapse flex-grow-0 mt-3 mt-md-2 order-md-3" id="main-nav">
                    <ul className="navbar-nav">
                        <li>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Shop"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="#action/3.1">Versace</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Zara</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Gucci</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Prada</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Calvin Klein</NavDropdown.Item>
                            </NavDropdown>
                        </li>
                        <li className="nav-item">
                            <Link href="#" className="nav-link">On Sale</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#" className="nav-link">New Arrivals</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#" className="nav-link">Brands</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link">Dashboard</Link>
                        </li>
                    </ul>
                </div>

                <div className="d-none d-md-flex align-items-center flex-grow-1 ms-md-3 mt-md-2 position-relative search-container order-md-4">
                    <span className="search-icon">
                        <Search />
                    </span>
                    <Form.Control
                        type="search"
                        placeholder="Search for products..."
                        className="ps-5 rounded-pill"
                        style={{ backgroundColor: '#F0F0F0' }}
                    />
                </div>

                <div className="d-flex align-items-center ms-3 order-md-5">
                    <button 
                    className="d-md-none btn btn-link text-dark ms-auto me-2"
                    onClick={() => setShowSearch(!showSearch)}
                >
                    <Search size={20} className='navIconsHover'/>
                </button>
                    <a href="#cart" className="text-dark me-3 position-relative">
                        <Cart2 size={20} className='navIconsHover'/>
                    </a>
                    <a href="#profile" className="text-dark">
                        <PersonCircle size={20} className='navIconsHover'/>
                    </a>
                </div>
            </div>
            {showSearch && (
                <div className="container-fluid mt-2 d-md-none">
                    <div className="position-relative">
                        <span className="search-icon">
                            <Search />
                        </span>
                        <Form.Control
                            type="search"
                            placeholder="Search for products..."
                            className="ps-5 rounded-pill "
                            style={{ backgroundColor: '#F0F0F0' }}
                        />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;