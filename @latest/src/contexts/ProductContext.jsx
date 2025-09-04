import{createContext, useContext, useState, useEffect} from "react";

const ProductContext = createContext();

//custom hook
export const useProducts = () => {
    const context = useContext(ProductContext);
    
    if(!context){
   
        throw new error('there was an issue with the custom context hook, ensure you are wrapping the provider');

    };
    return context;
};

export const ProductsProvider = ({children}) => {
      const [products, setProducts] = useState([]);
      const [loading, setIsLoading] = useState(true); //a spinner keeps loading as long as showing
      const [error , setError]  = useState(null);

      
const loadProducts = async () => {
    try {
        setLoading(true);
        setError(null); // any error before now it is clear

        const response = await fetch(
            "https://e-commerce-backend-hq8n.vercel.app/api/products/"
        );

        if(!response.ok){
             throw new error(`Error: ${response.status}`);
        }

        const data = await response.json();

        //adjust to how our api data looks
        setProducts(data.Products || data);
    } catch (error) {
        setError(error.message);
        console.error("Failed to load products:", error);
    } finally {
        setLoading(false);
    }
};

   useEffect(() => {
      loadProducts();
   },[]);

   // Simple functionalities needed in components
   const getProductsByCategory = (category) => {
           return products.filter(
            (product) => product.category?.toLowercase === category.toLowercase());

   };

   const searchProducts = (searchTerm) => {
        const categories = products.map((product) => product.category).filter(Boolean);

        return [...new Set(categories)];
   }; 

   const refetch = async () => {
       setError(null);
       await loadProducts();
   };

   const value = {
      //State
      products,
      loading,
      error,

      // Methods or functions
      getProductsByCategory,
      getCategories,
      searchProducts,
      refetch,
   };

    return(
       <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    );

};