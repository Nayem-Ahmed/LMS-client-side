import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { getBorrowedBooks } from '../API/books';

const BorrowedBooks = () => {
    const [borrowedbooks, setBorrowedbooks] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const borrowed = await getBorrowedBooks(user?.email);
                setBorrowedbooks(borrowed);
                console.log(borrowedbooks);
            } catch (error) {
                console.error('Error fetching bowworedbooks:', error);
            }
        };

        fetchData();
    }, [])
    return (
        <div className='grid md:grid-cols-4 gap-6 my-8 p-4'>
            {borrowedbooks.map(borrowed => (

                <div key={borrowed?._id} className="card card-compact text-center rounded-none bg-[#faf7f2]">
                    <figure><img className='w-[181px] h-[276px]' src={borrowed.bookImage} alt={borrowed.bookName} /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title text-center mx-auto">{borrowed.bookName}</h2>
                        <p className=' font-medium text-lg text-purple-500'>{borrowed.category}</p>
                        <p className='  '>return : {borrowed.returndate}</p>
                        <div className="card-actions">
                        <button className="bg-white mx-auto text-purple-500 hover:bg-purple-600 hover:text-white px-5 py-2 rounded-lg font-semibold shadow">Return</button>
                        </div>
                    </div>
                </div>

            ))}

        </div>
    );
};

export default BorrowedBooks;