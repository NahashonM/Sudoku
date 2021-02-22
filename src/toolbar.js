
import { useState, useContext } from 'react'
import { NumberTool } from './numbertool'
import { Tool, ToolTypes } from './tool'

import { ToolsContext } from './contexts/ctxtools'




function ToolBar () {

    const ctxTool = useContext(ToolsContext)

    const Undo = () => {}
    const Redo = () => {}

    // Clear Selected cell
    //--------------------------
    const Clear = () => {
        ctxTool.clickedCell.current.EditNote(0)
        ctxTool.clickedCell.current.UpdateValue(0)
    }

    const Pencil = () => {
        ctxTool.isNotesEnabled.current = !ctxTool.isNotesEnabled.current
    }

    const Hint = () => {}


    return  (
        <div 
            className="toolbar"
            onMouseDown={(evt) => evt.preventDefault()}>

            <div
                className="tools">
                <Tool 
                    requireLock={false}
                    toolFunction={Undo}
                    tooltype={ToolTypes.undo}/>
                <Tool 
                    requireLock={false}
                    toolFunction={Redo}
                    tooltype={ToolTypes.redo}/>
                <Tool 
                    requireLock={false}
                    toolFunction={Clear}
                    tooltype={ToolTypes.erase}/>
                <Tool 
                    requireLock={true}
                    toolFunction={Pencil}
                    tooltype={ToolTypes.pencil}/>
                <Tool 
                    requireLock={false}
                    toolFunction={Hint}
                    tooltype={ToolTypes.hint}/>
            </div >

            <div
                className="numbers">
                {
                    Array(9).fill(0).map( (_, i) => (
                        <NumberTool key={i} value={i+1}/>
                    ))
                }
            </div>
        </div>
    )
}


export default ToolBar