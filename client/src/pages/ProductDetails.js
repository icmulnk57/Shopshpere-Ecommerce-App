import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import { BASE_URL } from "../url";

const ProductDetails = () => {
  const params = useParams();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Initial details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  // Get product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(BASE_URL+
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  // Get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(BASE_URL+
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  // Add product to cart
  const addToCart = (productToAdd) => {
    setCart([...cart, productToAdd]);
    localStorage.setItem("cart", JSON.stringify([...cart, productToAdd]));
    toast.success("Item Added to Cart");
  };

  return (
    <Layout>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <img
              src={BASE_URL+`/api/v1/product/product-photo/${product._id}`}
              className="img-fluid rounded product-image"
              alt={product.name}
            />
          </div>
          <div className="col-md-6">
            <h1 className="text-center">Product Details</h1>
            <h6>Name: {product.name}</h6>
            <h6>Description: {product.description}</h6>
            <h6>Price: ₹{product.price}</h6>
            <h6>Category: {product?.category?.name}</h6>
            <button
              className="btn btn-yellow3 ms-1"
              onClick={() => addToCart(product)}
            >
              ADD TO CART
            </button>
            <button
              className="btn btn-yellow2 ms-1"
              onClick={() => navigate("/cart")}
            >
              GO TO CART
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="container mt-4">
        <h6 className="mb-3">Similar Products</h6>
        <div className="d-flex flex-wrap">
          {relatedProducts.length < 1 && (
            <p className="text-center">No Similar Products found</p>
          )}
          {relatedProducts.map((p) => (
            <div key={p._id} className="card m-2" style={{ width: "22rem" }}>
              <img
                src={BASE_URL+`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top rounded product-image"
                alt={p.name}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description.substring(0, 30)}...</p>
                <p className="card-text">₹{p.price}</p>
                <button
                  className="btn btn-yellow2 ms-1"
                  onClick={() => navigate(`/product/${p.slug}`)}
                >
                  More Details
                </button>
                <button
                  className="btn btn-yellow3 ms-1"
                  onClick={() => {
                    setCart([...cart, p]);
                    localStorage.setItem("cart", JSON.stringify([...cart, p]));
                    toast.success("Item Added to Cart");
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
