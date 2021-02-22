import React, {useState, useContext, useRef, useEffect, useLayoutEffect, createRef} from 'react'
import { ToolsContext } from './contexts/ctxtools'



function Cell( { cellValue } ) {

  const [editable] = useState(() => (cellValue > 0 && cellValue < 10)? false: true);
  const [value, setValue] = useState(() => cellValue);
  const [notesChanged, ChangeNotes] = useState(0);


  let notes = useRef([])

  const ctxTool = useContext(ToolsContext)


  // Update Cell Value
  //---------------------------
  const UpdateValue = (cvalue) => {
    
    cvalue = parseInt(cvalue)

    if(!editable || cvalue == NaN || cvalue < 0 || cvalue > 9) return;

    setValue(cvalue);

    if(notes.current.length > 0) notes.current = []
  }


  // Add, remove or clear notes array
  //-------------------------------------
  const EditNote = (new_note) => {

    new_note = parseInt(new_note)

    if(!editable || new_note == NaN || new_note < 0 || new_note > 9) return;

    if(value != 0) UpdateValue( 0 )

    ChangeNotes( notesChanged + 1 )  // trigger an update
    
    if(new_note == 0) {
      notes.current = []
    } else {
      
      if(notes.current.indexOf(new_note) === -1) {
      notes.current.push(new_note)
      console.log( [...notes.current , new_note])
    }
      else
      notes.current = notes.current.filter((note) => (note!=new_note))
    }
    
  }

  // Cell mouse click event
  //-------------------------------------
  const OnMouseClick = (evt) => {
    
    ctxTool.clickedCell.current = {UpdateValue, EditNote};

    if(!ctxTool.lockedNumber.current) return;

    if(ctxTool.isNotesEnabled.current)
        EditNote(ctxTool.lockedNumber.current)
    else
        UpdateValue(ctxTool.lockedNumber.current)
  }


  // Cell Keyboard event
  //-------------------------------------
  const OnCellKeyPress = (evt) => {
    let val = evt.key

    if(evt.keyCode === 46 || evt.keyCode === 8) val = 0;
    else if(!parseInt(val)) return; 

    if(ctxTool.isNotesEnabled.current) EditNote(val)
    else  UpdateValue(val)
  }


  //  Render
  //----------------------
  return (
      <div 
          tabIndex={0}
          onClick={ (evt) => OnMouseClick(evt)}
          onKeyDown={ (evt) => OnCellKeyPress(evt) }
          className="cell">

          <div className={`cellValue ${editable? "": "notEditable"}`}>
            {  parseInt(value)? (value>0 && value < 10)? value: "": ""  } </div>

            <div className="cellNotes">
            {
              notes.current.map((val, i) => (
                <div 
                    key={i}
                    className={`cellNote _${val}`}> {val}</div>
              ))
            }
          </div>
      </div>
  );
}

export default Cell;
