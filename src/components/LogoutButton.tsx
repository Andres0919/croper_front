import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAppDispatch } from "../app/hooks";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Button onClick={handleLogout} color="inherit" startIcon={<LogoutIcon />}>
      Salir
    </Button>
  );
};

export default LogoutButton;
