import React, { useEffect, useState } from 'react';
import { getAllBooks } from '../API/books';
import Categoris from './Categoris';
import { Link, useSearchParams } from 'react-router-dom';

const BooksCategory = () => {
    const [books, setBooks] = useState([]);

    const [params, setParams] = useSearchParams();
    const category = params.get('category');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const booksData = await getAllBooks();
                if (category) {
                    const filtered = booksData.filter(categorybook => categorybook.category === category)
                    setBooks(filtered);

                } else {
                    setBooks(booksData);
                }
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchData();
    }, [category])
    return (
        <>
            <Categoris></Categoris>
            {books.length === 0 ? (
                <div className="my-7">
                    <p className='text-center mb-3 font-semibold text-2xl'>No books found.</p>
                    <p className='text-center text-gray-500 '>Please check back later or try a different category.</p>
                </div>

            ) : (
                <div className='grid md:grid-cols-4 gap-6 my-8 p-4'>
                    {books.map(book => (
                        <Link key={book?._id} to={`/addbook/${book._id}`} className="card card-compact text-center rounded-none bg-purple-50">
                            <figure><img className='w-[181px] h-[276px]' src={book.bookImage} alt={book.bookName} /></figure>
                            <div className="card-body text-center">
                                <h2 className="card-title text-center mx-auto">{book.bookName}</h2>
                                <p className=' font-medium text-lg text-purple-500'>{book.category}</p>
                            </div>
                        </Link>

                    ))}

                </div >

            )}
        </>
    );
};

export default BooksCategory;