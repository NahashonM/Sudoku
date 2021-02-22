
const ParsePuzzle= (boardValues) => {
    let blocks = [];
    let tmp = [];
    let i = 0;
    let j = 0;

    for (let index = 0; index < boardValues.length; index++) 
    {
        if(index%3 === 0 && index != 0)
        {
            if( blocks[i+j] === undefined)
                blocks[i+j] = tmp;
            else
            blocks[i+j] = blocks[i+j].concat( tmp );
            
            j = (index%9 === 0)? 0: j+1;

            if(index%(9 * 3) === 0) i += 3;

            tmp = [];
        }
        tmp.push(boardValues[index]);
    }

    blocks[i+j] = blocks[i+j].concat( tmp );

    return blocks;
}


export default ParsePuzzle;