import * as React from "react";
import "../styles/Modal.css";

function SubmitModal({ setOpenSubmitModal }) {
	return (
		<div className="modalContainer">
            <p className="modalText">Thank You. You'll hear from me soon!</p>
			<button
				className="closeBtn"
				onClick={() => {
					setOpenSubmitModal(false);
					document.body.style.overflow = "scroll";
				}}
			>
				Close
			</button>
		</div>
	);
}

export default SubmitModal;
