
import { useContext , useState} from 'react'
import { ToolsContext } from './contexts/ctxtools'


export function NumberTool({value}) {

    const [update, setUpdate] = useState(false)

    const ctxTool = useContext(ToolsContext)

    // number on double click
    //-------------------------
    const OnDoubleClick = (evt) => {
        ctxTool.lockedNumber.current = parseInt(evt.target.innerHTML)
        setUpdate(!update)
    }


    //  number on click
    //--------------------------------
    const OnClick = (evt) => {

        ctxTool.lockedNumber.current = 0
        
        if(!ctxTool.clickedCell.current) return;
        
        if(ctxTool.isNotesEnabled.current) 
            ctxTool.clickedCell.current.EditNote(evt.target.innerHTML);
        else 
            ctxTool.clickedCell.current.UpdateValue(evt.target.innerHTML);

    }

    
    // Render
    //------------------------------------
    return (
        <p
            tabIndex="-1"
            onDoubleClick={(evt) => OnDoubleClick(evt) }
            onClick={(evt) => OnClick(evt) }
            className={`number ${ (ctxTool.lockedNumber.current == value || (ctxTool.lockedNumber - 10) == value)? "activeTool": ""}`}>

            {value}

        </p>
    ) 
}


export default { NumberTool };