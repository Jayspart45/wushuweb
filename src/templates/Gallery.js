import React from 'react';
import GalleryData from './data/GalleryData';
import Modal from './Modal';

export default function Gallery() {
    return (
        <div className="Gallery ">
            <div className="row">
                {GalleryData.map((value, index) => (
                    <div className="col-md-3" key={index}>
                        <div className="card mb-2" data-toggle="modal" data-target="#exampleModal">
                            <img src={value.img} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center">{value.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Modal />
        </div>
    );
}
