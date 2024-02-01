import "../styles/Services.css";

function Services() {
	return (
		<div className="services-row">
			<div id="walking" className="service">
				<img
					className="icon"
					alt="walking icon"
					src={require("../images/walking.png")}
				/>
				<h1>Walking</h1>
				<p className="info">
					Give your dog the experience of joining a pack! Your dog can be a
					member of my dog walking group.<br></br>
					<br></br> We meet regularly and under my leadership all dogs learn to
					coexist and socialize in safe and enriching ways.
				</p>
				<p className="details">$50/hr. 1hr min.<br></br> 12PM-2PM. M-F</p>
			</div>
			<div id="training" className="service">
				<img
					className="icon"
					alt="collar icon"
					src={require("../images/collar.png")}
				/>
				<h1>Training</h1>
				<p className="info">
					Obedience and Protection Training. <br></br>
					<br></br> All plans are based off of scientific methods using operant
					and classical conditioning. <br></br>
					<br></br> Training plans are created specifically for each dog and
					tailored to fit their needs.
				</p>
				<p className="details">
					Consultation required<br></br><ul id="list"><li>General or advanced obedience
					training</li><li>Minor or advanced behavior modification</li> <li>Puppy training</li><li>
					Protection training</li><li>Competition training</li></ul>
				</p>
			</div>
			<div id="daycare" className="service">
				<img
					className="icon"
					alt="daycare icon"
					src={require("../images/daycare.png")}
				/>
				<h1>Daycare</h1>
				<p className="info">
					Day care services are offered to all clients after an initial
					consultation and evaluation. <br></br>
					<br></br> Day care is centered around structured socialization.
					<br></br><br></br> The dogs have plenty of fun and recieve the exercise they
					need to live healthy lives.
				</p>
				<p className="details">
					Consultation required.<br></br> $90/day.<br></br> Walk included. <br></br>8AM-4PM. M-F <br></br> Latest Drop-off
					9AM.
				</p>
			</div>
		</div>
	);
}

export default Services;
