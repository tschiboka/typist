import React from 'react';
import "./MainMenu.scss";

const menuItems = [
    {name: "MenuItem 1"},
    {name: "MenuItem 2"},
    {name: "MenuItem 3"},
    {name: "MenuItem 4"},
    {name: "MenuItem 5"},
];

const MainMenu = props => {
    return (
        <nav className="MainMenu">
            <ul>
                {menuItems.map((menuItem, menuInd) => 
                    <li
                        key={menuInd}
                    >
                        {menuItem.name}
                    </li>
                )}
            </ul>
        </nav>
    );
}


export default MainMenu;