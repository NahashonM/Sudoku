import {useState} from 'react'

export const ToolTypes = {
    undo: "fa-undo",
    redo: "fa-redo",
    erase: "fa-eraser",
    pencil: "fa-pencil-alt",
    hint: "fa-lightbulb"
}


export const Tool = ({tooltype, requireLock, toolFunction}) => {

    const [locked, SetLock] = useState(false)

    const OnClick = () => {
        SetLock( requireLock? !locked : false)
        toolFunction()
    }


    return (
        <i
            onClick={() => OnClick()}
            className={`fas ${tooltype} fa-lg tool ${locked? "activeTool":""}`}>
        </i>
    )
}


export default {Tool, ToolTypes}
