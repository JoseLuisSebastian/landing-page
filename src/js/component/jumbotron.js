import React from "react";

//create your first component
export function Jumbotron() {
	return (
		<div className="jumbotron">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
				blandit dolor in tortor dictum vestibulum. Integer a odio
				suscipit, maximus sem in, maximus magna.
			</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call to action!
				</a>
			</p>
		</div>
	);
}
