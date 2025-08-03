import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../api/http";
import { type Product } from "../types/Products";
import ProductForm from "../components/ProductForm";
import { CircularProgress, Box, Typography } from "@mui/material";

const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  const handleUpdate = async (data: Omit<Product, "_id">) => {
    await axios.put(`/products/${id}`, data);
    navigate("/products");
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <CircularProgress />
      </Box>
    );
  }

  if (!product) {
    return (
      <Typography color="error" align="center">
        Product not found
      </Typography>
    );
  }

  return (
    <ProductForm
      initialValues={product}
      onSubmit={handleUpdate}
      submitText="Update"
    />
  );
};

export default EditProductPage;
