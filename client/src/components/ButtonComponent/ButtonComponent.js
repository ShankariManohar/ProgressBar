import React from 'react';

const ButtonComponent = (props) =>{
    const handleAction = (e) => {
        //alert(e.target.innerHTML);
        const buttonValue = e.target.innerHTML;
        props.action(buttonValue);
    }
    return(
        <React.Fragment>
            <button onClick={handleAction}>{props.sign === "sub"? "-": "+"}{props.value}</button>
        </React.Fragment>
    )
}

export default ButtonComponent;