import React, { useEffect, useState } from 'react';
import { getAddAllBooks } from '../API/books';
import useAuth from '../Hooks/useAuth';
import { Rating } from '@smastrom/react-rating';
import { Link } from 'react-router-dom';

const AllBook = () => {
    const [allbooks, setAllbooks] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const allbooks = await getAddAllBooks(user?.email);
                setAllbooks(allbooks)
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchData();
    }, [])
    return (
        <div>
            {allbooks.length === 0 ? (
                <div className="text-center mt-32">
                    <h2 className="text-xl font-medium mb-4">You haven't added any books yet</h2>
                    <p className="text-gray-600">You can add books to your collection. Once added, they will appear here.</p>

                </div>
            ) : (

                <div className='grid md:grid-cols-4 gap-6 my-4 p-4'>
                    {allbooks.map((book) => (
                        <div key={book._id} className="card  bg-purple-50 shadow-sm rounded-none border">
                            <figure><img className='w-[200px] h-[276px]' src={book.bookImage} alt={book.authorName} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{book.bookName}</h2>
                                <p className='font-medium'>{book.category}</p>
                                <p><span className='font-medium'>Author : </span>{book.authorName}</p>
                                <Rating
                                    style={{ maxWidth: 150 }}
                                    value={book.Rating}
                                    readOnly
                                />
                                <div className="card-actions">
                                    <Link to={`/bookupdate/${book._id}`}>
                                        <button className="bg-white text-purple-500 hover:bg-purple-600 hover:text-white px-6 py-2 rounded-lg font-semibold shadow-lg">Update</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>

    );
};

export default AllBook;