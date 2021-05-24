import Modal from 'react-modal';

import { HiX } from "react-icons/hi";


interface ViewyModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function ViewModal ({isOpen, onRequestClose} : ViewyModalProps) {
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content" >
            
            <button type="button" 
                onClick={onRequestClose} 
                className="react-modal-close" >
                <HiX/>
            </button>
            <div>
                <h1> TESTE DE MODAL </h1>
            </div>

        </Modal>
    );
}