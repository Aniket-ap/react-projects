import React from 'react';


const HeaderButton = (props) => {
    return(
        <div className="Head-Button">
        <button>{props.logo}{props.btnName}</button>
        </div>
    )
}

export default HeaderButton;