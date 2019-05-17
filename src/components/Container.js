import React from 'react';
import Tile from './Tile';
import '../Container.css'


const Container = (props) => {

  const hogList = props.hogs.map((hog, idx) => {

  return <Tile {...hog} key={Date.now() + idx} hideHog={props.hideHog}/>
})


  return(
    <div className="container">
    { hogList }
    </div>
  )
}

export default Container;
