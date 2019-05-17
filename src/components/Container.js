import React from 'react';
import Tile from './Tile'


const Container = (props) => {

  const hogList = props.hogs.map((hog, idx) => {

  return <Tile {...hog} key={Date.now() + idx}/>
})


  return(
    <div>
    { hogList }
    </div>
  )
}

export default Container;
