import "../styles/Navbar.css";
import { useState } from "react";
import MenuModal from "./MenuModal";

function Navbar() {
    const [menuModalOpen, setMenuModalOpen] = useState(false);
    const handleMenu = async (e) =>{
        setMenuModalOpen(true);
        document.body.style.overflow = "hidden";
    }
    return (
        <div className="navbar">
            {menuModalOpen && (
				<MenuModal setOpenMenuModal={setMenuModalOpen} />
			)}
            <img id="menu" onClick={handleMenu} alt="menu button" src={require("../images/menu.png")}/>
            <div className="nav">
                <a href="#contact-me" className="link">Contact</a>
                <a href="#about-me" className="link">About</a>
                <a href="#gallery" className="link">Gallery</a>
                <a href="/"><img className="logo" alt="logo" src={require("../images/logo.png")}/></a>
                <a href="#walking" className="link">Walking</a>
                <a href="#training" className="link">Training</a>
                <a href="#daycare" className="link">DayCare</a>
            </div>
        </div>
    );
  }

  export default Navbar;

