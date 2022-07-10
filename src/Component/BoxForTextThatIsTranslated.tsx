
import React, {ChangeEvent, useState} from "react";
import './BoxNButtonForTextToBeTranslated.css';


type ResultBoxProps = {
    textThatHasBeenTranslated: any
}

function BoxForTextThatIsTranslated(props: ResultBoxProps) {
    return (
        <div className="ResultSection">
            <div className="ResultOutputBox" placeholder={"Result"}>
                { props.textThatHasBeenTranslated }
            </div>
        </div>
    );
}

export default BoxForTextThatIsTranslated;
