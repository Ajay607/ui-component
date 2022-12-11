import React from 'react';
import "./Modal.css";


const Modal = ({ show,onClose,childern }) => {
    if (!show) {
        return null
    }
    return (
        <div className='modal-wrapper'>
            <div className='modal'>
                Ajay
                <button className='btnClose' onClick={onClose} >close</button>
                {childern}
            </div>
        </div>
    )
}

export default Modal