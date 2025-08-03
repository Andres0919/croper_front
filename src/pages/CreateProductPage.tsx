import ProductForm from "../components/ProductForm";
import { useNavigate } from "react-router-dom";
import axios from "../api/http";
import type { Product } from "../types/Products";

const CreateProductPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data: Omit<Product, "_id">) => {
    try {
      await axios.post("/products", data);
      navigate("/products");
    } catch (err) {
      console.error("Error creating product", err);
    }
  };

  return <ProductForm onSubmit={handleSubmit} submitText="Create" />;
};

export default CreateProductPage;
