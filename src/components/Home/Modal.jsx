import React from 'react';
import { useDispatch } from 'react-redux';

const Modal = ({userData}) => {
    const dispatch = useDispatch();
    return (
        <div className="modal" style={{display: userData.isError ? 'block' : 'none'}}>
            <div className="modal__overlay" onClick={() => dispatch({type: 'CLOSE_MODAL', payload: {isError: false}})}>
                <div className="modal__window">
                    <div className="modal__title">Something went wrong</div>
                    <div className="modal__text">{userData.message}, make sure you have written place right or try to find another place.</div>
                </div>
            </div>
        </div>
    )
};

export default Modal;