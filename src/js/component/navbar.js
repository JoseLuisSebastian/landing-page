import React from "react";

//create your first component
export function Navbar() {
	return (
		<div classname="navbar">
			<nav className="navbar navbar-expand-lg navbar-light bg-dark">
				<div className="collapse navbar-collapse" id="navbarText">
					<span className="navbar-text text-white">
						Start Bootstrap
					</span>
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<a className="nav-link text-white" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
