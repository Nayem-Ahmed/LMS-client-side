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
            } catch (error) {
                console.error('Error fetching borrowed books:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {borrowedbooks.length === 0 ? (
                <div className="text-center mt-32">
                    <h2 className="text-xl font-medium mb-4">You haven't borrowed any books yet</h2>
                    <p className="text-gray-600">You can borrow books from the library to see them here.</p>
                </div>
            ) : (
                <div>
                    <span className='p-5 '>Total books you have borrowed yet : {borrowedbooks?.length}</span>

                    <div className='grid md:grid-cols-4 gap-6 my-5 p-4'>
                        {borrowedbooks.map(borrowed => (
                            <div key={borrowed?._id} className="card card-compact text-center rounded-none bg-purple-50">
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
                </div>
            )}
        </div>
    );
};

export default BorrowedBooks;
