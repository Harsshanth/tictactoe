import React from 'react'



const Square = ({value , onClick , isWinningSqaure}) => {
    return (
            <button type="button" 
            onClick={onClick} 
            className={` square ${isWinningSqaure ? 'winning' : ''} ${ value === 'X'? 'text-green': 'text-orange'}`}> 
            {value}
            </button>
        
    )
}

export default Square
