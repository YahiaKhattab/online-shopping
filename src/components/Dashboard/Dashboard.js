import { useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    name: '',
    rating: 4,
    original_price: 0,
    discount: 0,
    image: '',
    is_new: false,
    is_top_selling: false
  });
  const [isAdding, setIsAdding] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get('https://68821f1f66a7eb81224d80cf.mockapi.io/product')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };

  const resizeImage = (file, maxWidth, maxHeight, quality) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          resolve(canvas.toDataURL('image/jpeg', quality));
        };
      };
      reader.readAsDataURL(file);
    });
  };

  const calculateDiscountedPrice = (originalPrice, discount) => {
    const price = Number(originalPrice) || 0;  
    const discountValue = Number(discount) || 0;  
    return discountValue > 0 
      ? price - (price * (discountValue / 100)) 
      : price;
  };

  const handleDelete = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      axios.delete(`https://68821f1f66a7eb81224d80cf.mockapi.io/product/${productId}`)
        .then((response) => {
          if (response.status === 200) {
            setProducts(products.filter(product => product.id !== productId));
            toast.success('Product deleted successfully!');
            fetchProducts();
          } else {
            toast.error('Failed to delete product');
          }
        })
        .catch((error) => {
          console.error('Error deleting product:', error);
          toast.error('Error deleting product');
        });
    }
  };

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setEditedProduct({
      name: product.name,
      rating: product.rating,
      original_price: product.original_price,
      discount: product.discount,
      image: product.image,
      is_new: product.is_new,
      is_top_selling: product.is_top_selling
    });
    setIsAdding(false);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setCurrentProduct(null);
    setEditedProduct({
      name: '',
      rating: 5,
      original_price: 0,
      discount: 0,
      image: '',
      is_new: false,
      is_top_selling: false
    });
    setIsAdding(true);
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditedProduct(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.match('image.*')) {
      toast.error('Please select an image file (JPEG, PNG)');
      return;
    }

    try {
      const resizedImage = await resizeImage(file, 800, 800, 0.7);
      setEditedProduct(prev => ({
        ...prev,
        image: resizedImage
      }));
    } catch (error) {
      console.error('Error processing image:', error);
      toast.error('Failed to process image');
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = () => {
    if (!isAdding && currentProduct) {
      const isUnchanged = Object.keys(editedProduct).every(
        key => editedProduct[key] === currentProduct[key]
      );
      
      if (isUnchanged) {
        toast.info('No changes were made to the product');
        setShowModal(false);
        return;
      }
    }

    if (isAdding) {
      axios.post('https://68821f1f66a7eb81224d80cf.mockapi.io/product', editedProduct)
        .then((response) => {
          setProducts([...products, response.data]);
          setShowModal(false);
          toast.success('Product added successfully!');
          fetchProducts();
        })
        .catch((error) => {
          console.error('Error adding product:', error);
          toast.error('Error adding product');
        });
    } else {
      axios.put(`https://68821f1f66a7eb81224d80cf.mockapi.io/product/${currentProduct.id}`, editedProduct)
        .then((response) => {
          setProducts(products.map(product =>
            product.id === currentProduct.id ? response.data : product
          ));
          setShowModal(false);
          toast.success('Product updated successfully!');
          fetchProducts();
        })
        .catch((error) => {
          console.error('Error updating product:', error);
          toast.error('Error updating product');
        });
    }
  };

  return (
    <div className="container my-5">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="shop">Products Dashboard</h1>
        <div>
          <Button variant="success" onClick={handleAddNew}>
            Add Product
          </Button>
          <Button
            as={Link}
            to="/"
            variant="primary"
            size="md"
            className='ms-1'
          >
            ← Return to Homepage
          </Button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Rating</th>
              <th>Original Price</th>
              <th>Discount</th>
              <th>Final Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="dashboard-product-img"
                  />
                </td>
                <td>{product.name}</td>
                <td>
                  <span className="ms-2">{product.rating}/5</span>
                </td>
                <td >${product.original_price}</td>
                <td>
                  {product.discount > 0 ? (
                    <span className="badge bg-danger">-{product.discount}%</span>
                  ) : (
                    <span className="badge bg-secondary">No discount</span>
                  )}
                </td>
                <td>
                  ${calculateDiscountedPrice(product.original_price, product.discount).toFixed(0)}
                </td>
                <td>
                  {product.is_new && <span className="badge bg-success me-1">New</span>}
                  {product.is_top_selling && <span className="badge bg-primary">Top Selling</span>}
                </td>
                <td>
                  <button
                    onClick={() => handleEdit(product)}
                    className="btn btn-sm btn-outline-primary me-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="btn btn-sm btn-outline-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{isAdding ? 'Add New Product' : 'Edit Product'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={editedProduct.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Rating (1-5)</Form.Label>
              <Form.Control
                type="number"
                name="rating"
                min="1"
                max="5"
                step="0.5"
                value={editedProduct.rating}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Original Price ($)</Form.Label>
              <Form.Control
                type="number"
                name="original_price"
                min="0"
                value={editedProduct.original_price}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Discount (%)</Form.Label>
              <Form.Control
                type="number"
                name="discount"
                min="0"
                max="100"
                value={editedProduct.discount}
                onChange={(e) => {
                  let value = parseFloat(e.target.value) || 0;
                  value = Math.max(0, Math.min(100, value));
                  setEditedProduct(prev => ({
                    ...prev,
                    discount: value
                  }));
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Product Image</Form.Label>
              <div className="d-flex align-items-center">
                <Button
                  variant="outline-secondary"
                  onClick={triggerFileInput}
                  className="me-3"
                >
                  {editedProduct.image ? 'Change Image' : 'Upload Image'}
                </Button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  style={{ display: 'none' }}
                />
                {editedProduct.image && (
                  <img
                    src={editedProduct.image}
                    alt="Product img"
                    className="dashboard-product-img"
                  />
                )}
              </div>
            </Form.Group>

            <Form.Check
              type="checkbox"
              label="Is New Arrival"
              name="is_new"
              checked={editedProduct.is_new}
              onChange={handleInputChange}
              className="mb-3"
            />

            <Form.Check
              type="checkbox"
              label="Is Top Selling"
              name="is_top_selling"
              checked={editedProduct.is_top_selling}
              onChange={handleInputChange}
              className="mb-3"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {isAdding ? 'Add Product' : 'Save Changes'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dashboard;