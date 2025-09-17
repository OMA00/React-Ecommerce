import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext();

// custom hook

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error(
      "There was an issue with the custom context hook, ensure you are wrapping the provider around your app.js"
    );
  }
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // a spinner keeps shoswing as long as is true
  const [error, setError] = useState(null);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null); // Any error before now it is clear

      const response = await fetch(
        "e-commerce-backend-hq8n-git-main-oma-ighomrores-projects.vercel.app/api/products"
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      // adjust tohow our api looks
      setProducts(data.products || data);
    } catch (error) {
      setError(error.message);
      console.error("Failed to load products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);
};
