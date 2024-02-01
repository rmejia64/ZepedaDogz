import * as React from "react";
import "../styles/Modal.css";

function ErrorModal({ setOpenErrorModal }) {
	return (
		<div className="modalContainer">
            <p className="modalText">One or more of the fields were left empty</p>
			<button
				className="closeBtn"
				onClick={() => {
					setOpenErrorModal(false);
					document.body.style.overflow = "scroll";
				}}
			>
				Close
			</button>
		</div>
	);
}

export default ErrorModal;
