import './Footer.css';

const FooterEl = ({ title, first, second, third, fourth }) => {
    return (
        <div className="d-flex flex-column gap-2 ">
            <p className="title2 mb-0 mb-md-3">{title}</p>
            <p className="desc2 mb-1">{first}</p>
            <p className="desc2 mb-1">{second}</p>
            <p className="desc2 mb-1">{third}</p>
            <p className="desc2 mb-3">{fourth}</p>
        </div>
    );
};

export default FooterEl;