import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import ModalPopup from '../Components/ModalPopup';

const BookCategoryDetails = () => {
    const bookDetails = useLoaderData();
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className='my-10 p-5'>
            <div className='flex flex-col md:flex-row gap-8 items-center'>
                <div className='aspect-w-3 aspect-h-4 w-64 md:w-96 relative overflow-hidden'>
                    <img
                        className='object-cover transition-transform transform hover:scale-105 w-full h-96'
                        src={bookDetails.bookImage}
                        alt={bookDetails.bookName}
                    />
                    <div className='absolute top-3 right-3'>
                        <FaHeart className='text-purple-500 text-2xl' />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='font-semibold text-2xl mb-2'>{bookDetails.bookName}</div>
                    <div className='text-xl mb-2'>
                        {bookDetails.category}
                    </div>
                    <div className='text-gray-500 mb-2'>Author : {bookDetails.authorName}</div>
                    <div className='flex flex-row items-center justify-between mb-2'>
                        <Rating
                            style={{ maxWidth: 150 }}
                            value={bookDetails.Rating}
                            readOnly
                        />

                    </div>
                    <div className='mb-5 text-lg text-neutral-500'>${bookDetails.description}</div>
                    <div className='mb-5 text-lg text-neutral-500'>quantity : {bookDetails.quantity}</div>
                    <div>
                        {bookDetails.quantity > 0 ? (

                            <button
                                onClick={openModal}
                                type="button"
                                className="bg-purple-600 hover:bg-purple-800 mr-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Borrow
                            </button>
                        ) : (
                            <button
                                type="button"
                                title='Book is not available'
                                className="bg-purple-600 hover:bg-purple-800 mr-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled"
                            >
                                Borrow
                            </button>

                        )}
                        <ModalPopup bookDetails={bookDetails} isOpen={isModalOpen} onRequestClose={closeModal} ></ModalPopup>
                        {/* -------------------- */}
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="bg-purple-600 hover:bg-purple-800 ml-3  file: text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => document.getElementById('my_modal_4').showModal()}>Read</button>
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box w-6/12 max-w-5xl">
                                <h3 className="font-bold text-lg">{bookDetails.bookName}</h3>
                                <p className="py-4">${bookDetails.description}</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                        {/* -------------------- */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCategoryDetails;