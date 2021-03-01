import React,  {useState} from "react";
import TextInput from "../TextInput/TextInput";
import MainMenu from "../MainMenu/MainMenu";
import "./Main.scss";

const Main = props => {
    return (
        <main>
            <TextInput />

            <MainMenu />
        </main>
    );
}

export default Main;