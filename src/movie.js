import React, { Component } from 'react';

class Movie extends Component{

	render() {
		return(
			<h2>
				{this.props.movie.title}
			</h2>	
		)
	}
}



export default Movie;