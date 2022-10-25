import React from 'react';
import image1 from './images/img1.jpeg';

export default function Modal() {
    return (
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog  modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-body p-0">
                        <img src={image1} alt="" />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
