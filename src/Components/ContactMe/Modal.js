import { MDBModal } from 'mdbreact'
import React from 'react';
import success from '../../Images/success.svg';
import error from '../../Images/error.svg';

const Modal = ({ modalIsOpen, setModalIsOpen, isDelivered }) => {
    return (
        <MDBModal isOpen={modalIsOpen} size="sm">
            <div className="px-3 py-1 d-flex align-items-center">
                {isDelivered ?
                    <img onClick={() => (setModalIsOpen(false))} src={success} alt="success" className="cursor-pointer my-2" style={{ width: '50px' }} />
                    :
                    <img onClick={() => (setModalIsOpen(false))} src={error} alt="error" className="cursor-pointer my-2" style={{ width: '50px' }} />
                }
                <div className='ml-3'>
                    <h6 className="text-grey font-500 my-2">
                        {isDelivered ? 'Message Delivered' : 'Something went wrong'}
                    </h6>
                    <h6 className="text-grey font-400 my-2" style={{ fontSize: "11px" }}>
                        {isDelivered ? 'I will reply you soon' : 'Please try again'}
                    </h6>
                </div>
            </div>
        </MDBModal>
    )
}

export default Modal