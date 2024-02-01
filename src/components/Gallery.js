import "../styles/Gallery.css";

function Gallery() {
	return (
		<div className="gallery">
			<img
				className="gallery-pic"
				alt="Gallery"
				src={require("../images/group.jpg")}
			/>
		</div>
	);
}

export default Gallery;
