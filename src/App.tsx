import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductList from "./components/ProductList";
import LoginPage from "./pages/LoginPage";
import { useAppSelector } from "./app/hooks";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";

const App = () => {
  const token = useAppSelector((state) => state.auth.token);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/products"
          element={token ? <ProductList /> : <Navigate to="/login" />}
        />
        <Route
          path="/products/create"
          element={token ? <CreateProductPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/products/edit/:id"
          element={token ? <EditProductPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
