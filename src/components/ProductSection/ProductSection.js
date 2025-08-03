import './ProductSection.css';
import { StarFill, StarHalf, Star } from 'react-bootstrap-icons';
import { useMediaQuery } from 'react-responsive';

const ProductSection = ({ id,title, products }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const displayedProducts = isMobile ? products.slice(0, 2) : products.slice(0, 4);

    return (
        <section id={id} className="py-5">
            <h2 className="mb-5 productsTitle">{title}</h2>
            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 g-0">
                {displayedProducts.map((product) => (
                    <div key={product.id} className="col">
                        <div className="p-2 rounded">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-100 object-fit-cover mb-2 productHover"
                                style={{ maxHeight: '305px',borderRadius:"20px" }}
                            />
                            <h3 className="productsName">{product.name}</h3>
                            <div className="d-flex align-items-center text-warning mb-1">
                                {[...Array(5)].map((_, index) => {
                                    const floorRating = Math.floor(product.rating);
                                    const hasHalf = product.rating % 1 >= 0.25 && product.rating % 1 <= 0.75; // Rough check for half star
                                    if (index < floorRating) {
                                        return <StarFill key={index} size={16} className="me-1" />;
                                    } else if (index === floorRating && hasHalf) {
                                        return <StarHalf key={index} size={16} className="me-1" />;
                                    } else {
                                        return <Star key={index} size={16} className="me-1" />;
                                    }
                                })}
                                <span className="ms-1 productsRating">
                                    {([1, 2, 3, 4, 5].includes(Math.round(product.rating)) ? Number(product.rating).toFixed(1) : product.rating)}/5
                                </span>
                            </div>
                            <div className='d-flex flex-wrap'>
                                <span className="productsPrice">
                                    ${product.discount > 0
                                        ? (product.original_price - (product.original_price * (product.discount / 100)).toFixed(0))
                                        : product.original_price}
                                </span>                                {product.discount > 0 && (
                                    <span className="productsOriginalPrice ms-2">${product.original_price}</span>
                                )}
                                {product.discount > 0 && <span className="discount ms-2">-{product.discount}%</span>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-4">
                <button className="btnViewAll rounded-pill px-4 py-2"><span className='viewAll'>View All</span></button>
            </div>
        </section>
    );
};

export default ProductSection;