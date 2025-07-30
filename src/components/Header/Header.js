import { useState } from 'react';
import './header.css';
import CloseButton from 'react-bootstrap/CloseButton';
import { Link } from 'react-router-dom';

const Header = () => {
    const [close, setClose] = useState(false);
    const closeFunc = () => setClose(true);

    return (
        !close && (
            <div className="bg-black">
                <div className="container d-flex align-items-center justify-content-center position-relative py-2">
                    <p className="header mb-0">
                        Sign up and get 20% off your first order.{' '}
                        <Link href="#" className="header2">Sign up now</Link>
                    </p>
                    <CloseButton 
                        variant="white" 
                        className="d-none d-md-block position-absolute" 
                        style={{ right: '1rem', top: '50%', transform: 'translateY(-50%)' }}
                        onClick={closeFunc}
                    />
                </div>
            </div>
        )
    );
};

export default Header;