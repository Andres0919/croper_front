import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import type { Product } from "../types/Products";

interface ProductFormProps {
  initialValues?: Partial<Product>;
  onSubmit: (data: Omit<Product, "_id">) => void;
  submitText?: string;
}

const ProductForm = ({
  initialValues = {},
  onSubmit,
  submitText = "Save",
}: ProductFormProps) => {
  const [name, setName] = useState(initialValues.name || "");
  const [description, setDescription] = useState(
    initialValues.description || ""
  );
  const [price, setPrice] = useState(initialValues.price || 0);
  const [category, setCategory] = useState(initialValues.category || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, description, price, category });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} maxWidth={400} mx="auto">
      <Typography variant="h6" gutterBottom>
        {submitText} Product
      </Typography>

      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        required
        margin="normal"
      />

      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        fullWidth
        required
        inputProps={{ min: 0.01, step: 0.01 }}
        margin="normal"
      />

      <TextField
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        fullWidth
        margin="normal"
      />

      <Box mt={2}>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          {submitText}
        </Button>
      </Box>
    </Box>
  );
};

export default ProductForm;
