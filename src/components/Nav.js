import piggy from '../porco.png'
import React from 'react'
import "../Nav.css"

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>

			<span className="normalText">A React App for County Fair Hog Fans</span>
			<br/>
			<br/>
			Sort by: <button className="navButton" onClick={props.nameSort}>Name</button>
		<button className="navButton" onClick={props.weightSort}>Weight</button>
			<br/>
			Filter by: <button className="gresButton" onClick={props.greaseSort}>Greased?</button>
		<br/>
		<button className="resetButton"onClick={props.resetList}>Reset</button>
		</div>
	)
}

export default Nav
