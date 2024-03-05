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
            <div className='grid md:grid-cols-4 gap-6 my-8 p-4'>
                {books.map(book => (
                    <Link key={book._id} to={`/addbook/${book._id}`}>
                        <div className="card card-compact text-center rounded-none hover:underline ">
                            <figure><img className='w-[181px] h-[276px]' src={book.bookImage} alt={book.bookName} /></figure>
                            <div className="card-body text-center">
                                <h2 className="card-title text-center mx-auto text-purple-500">{book.bookName}</h2>
                                <p className=' font-medium'>{book.category}</p>
                            </div>
                        </div></Link>
                ))}

            </div>
        </>
    );
};

export default BooksCategory;