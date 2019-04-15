/**This is a button used for main functions
like in top menu, to view the asset and for download **/
import React from 'react';
import './ButtonMain.scss';

const ButtonMain = (props) => {
    return (
        <button className="btn-main btn">{props.title}</button>
    );
}
export default ButtonMain;