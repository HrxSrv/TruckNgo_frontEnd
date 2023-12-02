import "./navbar.scss";
import { AuthContext } from "../../context/authContext";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { deepOrange } from '@mui/material/colors';
import Cart from "../Cart/Cart";
const Navbar = () => {
  const navigate = useNavigate();
  const [slideCart, setSlidecart] = useState(false);
  const { currentUser, logout } = useContext(AuthContext);
  const [err, setErr] = useState(null);
  const iconButtonStyle = {
    cursor: 'pointer',
    color: 'white',
  };
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      console.log("Logout successful");
      navigate("/login")
    } catch (err) {
      console.error("Logout error:", err);
      setErr(err.response?.data); 
    }
  };
  console.log(err)
  return (
    <>
    <div className="navbar">
      <div className="left">
        <a href="#" data-aos="zoom-in-left" data-aos-delay="150" className="logo">
          TruckNGo
        </a>
      </div>
      <div className="right">
        <IconButton onClick={handleLogout} style={iconButtonStyle}>
          <LogoutIcon />
        </IconButton>
        {/* <EmailOutlinedIcon />
        <NotificationsOutlinedIcon /> */}
        <div className="user" onClick={()=>setSlidecart(x=>!x)}>
          <Avatar sx={{ bgcolor: deepOrange[500], width: 30, height: 30 }}>{currentUser.name[0]}</Avatar>
          <span>{currentUser.name}</span>
        </div>
      </div>
      {slideCart && <Cart setCartslide={setSlidecart}/>}
    </div>
    </>
  );
};
export default Navbar;
