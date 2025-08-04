import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spinner, Container } from 'react-bootstrap';
import axios from 'axios';
import Brands from './components/Brands';
import Browse from './components/Browse/Browse';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Reviews from './components/Reviews/Reviews';
import Shop from './components/ShopMain/Shop';
import ProductSection from './components/ProductSection/ProductSection';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound';

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://68821f1f66a7eb81224d80cf.mockapi.io/product')
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Failed to fetch products');
        }
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const newArrivals = products.filter((p) => p.is_new);
  const topSelling = products.filter((p) => p.is_top_selling);

  if (isLoading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <span className="ms-3">Loading products...</span>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="alert alert-danger">
          Error loading products: {error}
        </div>
      </Container>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Navbar />
            <Shop />
            <Brands />
            <div className="container mx-auto p-4">
              <ProductSection id="newArrivals" title="NEW ARRIVALS" products={newArrivals} />
              <hr />
              <ProductSection id="topSelling" title="TOP SELLING" products={topSelling} />
            </div>
            <Browse />
            <Reviews />
            <Footer />
          </>
        } />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
