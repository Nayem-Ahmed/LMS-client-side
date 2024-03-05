import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const BookCategoryDetails = () => {
    const bookDetails = useLoaderData();
    console.log(bookDetails);

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
                    <div className=' text-xl mb-2'>{bookDetails.authorName}</div>
                    <div className='font-light text-neutral-500 mb-2'>
                        {bookDetails.category}
                    </div>
                    <div className='flex flex-row items-center justify-between mb-2'>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={bookDetails.Rating}
                            readOnly
                        />

                    </div>
                    <div className='mb-5 text-lg text-neutral-500'>${bookDetails.description}</div>
                    <button
                        type="button"
                        className="bg-purple-600 hover:bg-purple-800 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Borrow
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookCategoryDetails;