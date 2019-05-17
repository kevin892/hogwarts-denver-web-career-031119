import React from 'react';
import '../Tile.css'



class Tile extends React.Component  {
 state  = {
   isHidden: true,
   completely: true
 }

 handleClick = (event) => {
  this.setState({
    isHidden: !this.state.isHidden
  });
}
// handleClick = (event) => {
//  this.setState({
//    isHidden: !this.state.isHidden
//  });
// }

  render(){

    const front =
    <div>
  <div >
    <img className="image" src={require(`../hog-imgs/${this.props.pic}`)}/>
  </div>
  <div className="content">
    <a className="piggyName">{this.props.name}</a>
    <div>
      <span className="date">Specialty: {this.props.specialty}</span>
    </div>
    <button className= "hideButton"onClick={()=>this.props.hideHog(this.props.id)}>Hide</button>
  </div>
</div>


    const back =
    <div className="maincards">
      <p>Weight: {this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
      <p>Highest Medal Achieved: {this.props['highest medal achieved']}</p>
        <div className="description">
          <p>Greased: {this.props.greased ? "Yes" : "No"}</p>
        </div>
    </div>


    return (
      <div className = "card hvr-grow" onClick={this.handleClick}>
       {this.state.isHidden? front : back}
      </div>
    );
}
}

export default Tile;
