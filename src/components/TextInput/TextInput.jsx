import React, {useState} from "react";
import "./TextInput.scss";
import Letter from "../Letter/Letter";

const letters = "stas;ldkfn;aldsknv;alkhta;lkjdvna;";

const TextInput = props => {
    return (
        <div className="TextInput">
            {[...letters].map(letter => 
                <Letter 
                    char={letter}
                />)}
        </div>
    );
}

export default TextInput;