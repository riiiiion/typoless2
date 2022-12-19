import React,{useEffect} from 'react';

type Prop = {
    typingWordList?:String[] | null
}

const Word:React.FC<Prop> = ({typingWordList}) => {
    // const mockWordArray: string[] = ["if", "let", "const"];
    const letterTags = typingWordList?.map(word => {
        word += " "
        const letterArray = word.split("")
        return letterArray.map((letter,i) => 
             <span 
             key={"span" + String(i)}
             className={"unSpotLetter"}
             >
                {letter}
        </span>
        )
    })
    const addLetterTags = letterTags?.map((tags,i) => {
        return <p
        key={"p" + String(i)}
        >{tags}
        </p>
    })

    return (
        <>
            {addLetterTags}
        </>
        
    )
}

export default Word;