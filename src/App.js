import React, { useState, useRef} from "react";
import { db } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import "./styles/App.css";
import "./styles/Form.css";

import SubmitModal from "./components/SubmitModal";
import ErrorModal from "./components/ErrorModal";
import Navbar from "./components/Navbar.js";
import Services from "./components/Services.js";
import Gallery from "./components/Gallery.js";
import Footer from "./components/Footer.js";

function App() {
	const [submitModalOpen, setSubmitModalOpen] = useState(false);
	const [errorModalOpen, setErrorModalOpen] = useState(false);
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const fname=useRef("");
	const fnum=useRef("");
	const fmes=useRef("");

	const handleSubmit = async (e) => {
		console.log("submitting");
		e.preventDefault();

		if (name !== "" && phone !== "" && message !== "") {
			await addDoc(collection(db, "Contacts"), {
				name: name,
				phone: phone,
				message: message,
				timestamp: serverTimestamp(),
			})
				.then(() => {
					setSubmitModalOpen(true);
					document.body.style.overflow = "hidden";
				})
				.catch((err) => {
					alert(err.message);
				});
		} else {
			setErrorModalOpen(true);
			document.body.style.overflow = "hidden";
		}
		fname.current.value = "";
		fnum.current.value = "";
		fmes.current.value = "";
		setName("");
		setPhone("");
		setMessage("");
	};

	return (
		<div id="wrapper">
			{submitModalOpen && (
				<SubmitModal setOpenSubmitModal={setSubmitModalOpen} />
			)}
			{errorModalOpen && <ErrorModal setOpenErrorModal={setErrorModalOpen} />}
			<Navbar />
			<div className="section" id="s1">
				<img
					className="banner"
					id="b1"
					alt="Jon Paul Zepeda"
					src={require("./images/zepeda.jpg")}
				/>
				<div className="content">
					<h1 id="title">Zepeda Dogz Services</h1>
					<Services />
				</div>
			</div>
			<div className="section" id="s2">
				<img
					className="banner"
					id="b2"
					alt="Three dogs in front of Redwood City court house"
					src={require("./images/court-house.jpg")}
				/>
				<div className="content" id="about-me">
					<img
						id="about-me-pic"
						alt="Jon Paul Zepeda and his pack"
						src={require("./images/about.jpg")}
					/>
					<div id="about-me-text">
						<h1 className="subheading">About Me</h1>
						<p>
							Hello, I'm Jon Paul Zepeda, your go-to companion for all things
							dog-related here in Redwood City, California. Beyond just being a
							dog walker, I'm a passionate dog trainer and dedicated dog
							care-taker with a profound love for our four-legged friends.
							<br></br> <br></br>My training philosophy is comprehensive,
							covering everything from basic obedience to specialized
							security-focused dog training. I believe in tailoring my approach
							to each dog's unique personality and needs, fostering a strong
							connection between pets and their owners. Living and working in
							the beautiful surroundings of Redwood City, I offer services that
							go beyond the ordinary, addressing behavioral issues and enhancing
							the overall well-being of your beloved pets.<br></br> <br></br>
							What sets me apart is my deep connection with my four Belgian
							Malinois dogs. These incredible companions aren't just a showcase
							of my expertise; they represent the harmonious relationships I
							cultivate within my pack. Drawing from this experience, I bring a
							distinct perspective to my dog care services, creating an
							environment that encourages socialization and balanced behavior.
							<br></br>
							<br></br> Choosing me as your dog walker, trainer, and care-taker
							means more than just hiring a service – it's gaining a
							compassionate ally who speaks the language of dogs. Your pet's
							happiness and well-being are my top priorities, and with me, every
							step is taken with care and a commitment to providing a positive
							and enriching experience for your furry family members.
						</p>
					</div>
				</div>
			</div>
			<div className="section" id="s3">
				<img
					className="banner"
					id="b3"
					alt="Two Australian Shepards"
					src={require("./images/two-tone.jpg")}
				/>
				<div className="content" id="gallery">
					<h1 className="subheading">Gallery</h1>
					<Gallery />
				</div>
			</div>

			<form id="contact-me" onSubmit={handleSubmit}>
				<h1 className="subheading">Contact Me</h1>
				<input
					id="name"
					className="input"
					title="name"
					type="text"
					ref={fname}
					placeholder="Name"
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="tel"
					ref={fnum}
					id="phone"
					name="phone"
					className="input"
					placeholder="Phone Number"
					onChange={(e) => setPhone(e.target.value)}
				/>
				<textarea
					id="message"
					className="input"
					title="message"
					ref={fmes}
					type="text"
					form="contact-me"
					placeholder="Brief message indicating what service(s) you are interested in"
					onChange={(e) => setMessage(e.target.value)}
				></textarea>
				<button className="button" type="submit">
					Submit
				</button>
			</form>
			<Footer />
		</div>
	);
}

export default App;
