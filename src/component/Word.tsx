import React from 'react';

type Prop = {

}

const Word:React.FC<Prop> = () => {
    const mockWordArray: string[] = ["if", "let", "const"];
    const letterTags = mockWordArray.map(word => {
        const letterArray = word.split("")
        return letterArray.map(letter => 
             <span>{letter}
        </span>
        )
    })
    const addLetterTags = letterTags.map(tags => {
        return <p>{tags}</p>
    })
    return (
        <>
            {addLetterTags}
        </>
        
    )
}

export default Word;