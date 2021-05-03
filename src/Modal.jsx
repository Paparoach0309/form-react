import React from 'react';
import './Modal.css';

const Modal = (props) => {
    //console.log(props.first);
    //console.log(props.last);
    return (
        <div className={props.active ? 'modal active' : 'modal'} onClick={() => props.setActive(false)}>
            <div className="content" onClick={e => e.stopPropagation()}>
                <p>Здравствуйте,{props.first + props.last}</p>
            <div className="close" onClick={() => props.setActive(false)}>×</div>
            </div>
        </div>
    )
}
export default Modal;