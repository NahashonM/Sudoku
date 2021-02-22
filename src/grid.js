import React, {useContext, useRef, useState} from 'react'
import ParsePuzzle from './ParsePuzzle'

import Block from './block'
import ToolBar from './toolbar'

import { ToolsContext } from './contexts/ctxtools'


/*
  Grid is divided into 3x3 blocks 
*/
function Grid( { puzzle } ) {

  const clickedCell = useRef({})
  const lockedNumber = useRef(0)
  const isNotesEnabled = useRef(false)

  //  Render
  //----------------------
  return (
    <>
      <ToolsContext.Provider value={{
            lockedNumber, clickedCell, isNotesEnabled
        }} >

        <div className="grid">
          {
            // Construct the blocks
            //----------------------
            ParsePuzzle(puzzle).map((blockPuzzle, i) => (
              <Block 
                    key={i}
                    blockPuzzle={blockPuzzle} />
            ))

          }
        </div>

        <ToolBar />

      </ToolsContext.Provider>
    </>
  );
}

export default Grid;
