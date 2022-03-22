import React from 'react';
import Modal from 'react-modal';

import closeImg from'../../assets/close.svg'


const InfoModal = ({isOpen,onRequestClose}) => {
    return (
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
    >
        <button 

             type="button" onClick={onRequestClose}
        >
             <img src={closeImg} alt="Fechar modal" />
        </button>    

       
    </Modal>
    );
}

export default InfoModal;
