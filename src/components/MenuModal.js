import * as React from "react";
import "../styles/Menu.css";

function MenuModal({ setOpenMenuModal }) {
	return (
		<div className="menuContainer">
			<button
				className="closeX"
				onClick={() => {
					setOpenMenuModal(false);
					document.body.style.overflow = "scroll";
				}}
			>
				X
			</button>
			<ul id="menu-list">
				<a className="menu-link" href="#contact-me">
					<li
						onClick={() => {
							setOpenMenuModal(false);
							document.body.style.overflow = "scroll";
						}}
					>
						Contact Me
					</li>
				</a>
				<a className="menu-link" href="#about-me">
					<li
						onClick={() => {
							setOpenMenuModal(false);
							document.body.style.overflow = "scroll";
						}}
					>
						About Me
					</li>
				</a>
				<a className="menu-link" href="#gallery">
					<li
						onClick={() => {
							setOpenMenuModal(false);
							document.body.style.overflow = "scroll";
						}}
					>
						Gallery
					</li>
				</a>
				<a className="menu-link" href="#walking">
					<li
						onClick={() => {
							setOpenMenuModal(false);
							document.body.style.overflow = "scroll";
						}}
					>
						Walking
					</li>
				</a>
				<a className="menu-link" href="#training">
					<li
						onClick={() => {
							setOpenMenuModal(false);
							document.body.style.overflow = "scroll";
						}}
					>
						Training
					</li>
				</a>
				<a className="menu-link" href="#daycare">
					<li
						onClick={() => {
							setOpenMenuModal(false);
							document.body.style.overflow = "scroll";
						}}
					>
						DayCare
					</li>
				</a>
			</ul>
		</div>
	);
}

export default MenuModal;
