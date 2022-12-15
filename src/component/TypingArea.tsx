import React from 'react';
import Word from './Word';

type Prop = {
    typingWordList?: String[] | null
}

const TypingArea: React.FC<Prop> = ({typingWordList}) => {
    return (
        <div className="typingContainer">
            <Word 
            typingWordList={typingWordList}
            />
        </div>
    )
}

export default TypingArea;