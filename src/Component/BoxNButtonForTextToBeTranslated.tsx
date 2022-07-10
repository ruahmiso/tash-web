
import React, {ChangeEvent, useState} from "react";
import './BoxNButtonForTextToBeTranslated.css';

type BoxProps = {
    textToBeTranslated: string
    setTextToBeTranslated: any
    setTextThatHasBeenTranslated: any
}

function BoxNButtonForTextToBeTranslated(props: BoxProps) {
    // const [textToBeTranslated, setTextToBeTranslated] = useState("")

    function syncToTextToBeTranslated(event: any) {
        // console.log(event.target.value)
        props.setTextToBeTranslated(event.target.value)
        // setSomething(newWord) == update newWord to something
    }


    // function printTextToBeTranslated(event: any) {
    //     console.log(props.textToBeTranslated)
    // }

    function translate(event: any) {
        const newlyTranslatedText = props.textToBeTranslated + "->translated"
        props.setTextThatHasBeenTranslated(newlyTranslatedText)
    }

    return (
        <div className="HimalayanSinghSearchBar">
            <input className="HimalayanSinghSearchInputBox" placeholder={"Search"} id="abc" onChange={syncToTextToBeTranslated} />
            <button className="HimalayanSinghSearchButton" onClick={translate}></button>
        </div>
    );
}

export default BoxNButtonForTextToBeTranslated;