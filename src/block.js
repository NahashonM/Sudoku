import React, {useState} from 'react'
import Cell from './cell';

import './css/board.css'

/*
  Block is divided into 3x3 cells 
*/
function Block( { blockPuzzle } ) {


  //  Render
  //----------------------
  return (
      <div className="block">
        {
          blockPuzzle.map( (cellValue, i) => (
            <Cell 
                key={i}
                cellValue={cellValue}/>
          ))

        }
      </div>
  );
}

export default Block;
