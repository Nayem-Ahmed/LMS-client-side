import React from 'react';
import { useForm } from 'react-hook-form';
import { imgUpload } from '../API/imgbb';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const BookUpdate = () => {
    const update = useLoaderData();
    console.log(update);
    const { _id, bookImage, bookName, authorName, category, Rating } = update;
    console.log(bookImage);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
            console.log(data);
            // Assuming imgUpload is a function that handles image upload
            const imgData = await imgUpload(data.bookImage[0]);

            const updatedData = {
                ...data,
                bookImage: imgData?.data?.display_url,
                id: _id,

            };
            const response = await fetch(`http://localhost:5000/addbooks/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            });

            if (!response.ok) {
                throw new Error('Failed to update book');
            }

            // Display success message
            toast.success('Book updated successfully');
            reset();

        } catch (error) {
            toast.error('Error: Something wrong', error.message);

        }
    };


    return (
        <div className='bg-purple-50 p-5'>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto py-5 p-10 shadow-md bg-white">
                <label className="block mb-4">
                    Book Image:
                    <input
                        type="file"
                        name="bookImage"
                        className={`shadow appearance-none border rounded w-full mt-2 p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.productImage ? 'border-red-500' : ''}`}
                        {...register('bookImage', { required: 'Book Image is required' })}
                    />
                    {errors.bookImage && <p className="text-red-500 mt-2">{errors.bookImage.message}</p>}
                </label>
                <div className='grid grid-cols-2 gap-4'>
                    <label className="block mb-4">
                        Book Name:
                        <input
                            type="text"
                            name="bookName"
                            defaultValue={bookName}
                            className={`shadow appearance-none border rounded w-full mt-2 p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.productName ? 'border-red-500' : ''}`}
                            {...register('bookName', { required: 'Book Name is required' })}
                        />
                        {errors.bookName && <p className="text-red-500 mt-2">{errors.bookName.message}</p>}
                    </label>


                    <label className="block mb-4">
                        Author Name:
                        <input
                            type="text"
                            name="authorName"
                            defaultValue={authorName}
                            className={`shadow appearance-none border rounded w-full mt-2 p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.authorName ? 'border-red-500' : ''}`}
                            {...register('authorName', {
                                required: 'Author Name is required',
                            })}
                        />
                        {errors.authorName && <p className="text-red-500 mt-2">{errors.authorName.message}</p>}
                    </label>
                </div>

                <div className="relative">
                    <label className="block mb-4">
                        Category:
                        <div className="relative">
                            <select
                                name="category"
                                defaultValue={category}
                                className={`appearance-none border rounded w-full mt-2 p-2 pr-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.category ? 'border-red-500' : ''}`}
                                {...register('category', {
                                    required: 'Category is required',
                                })}
                            >
                                <option value="">Select a category</option>
                                <option value="Novel">Novel</option>
                                <option value="Thriller">Thriller</option>
                                <option value="History">History</option>
                                <option value="Drama">Drama</option>
                                <option value="Sci-Fi">Sci-Fi</option>
                                {/* Add more options as needed */}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                {/* You can replace the icon below with your own custom SVG icon or use an icon library */}
                                <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>
                    </label>
                    {errors.category && <p className="text-red-500 mt-2">{errors.category.message}</p>}
                </div>

                <label className="block mb-4">
                    Rating:
                    <input
                        type="number"
                        name="Rating"
                        defaultValue={Rating}
                        step="any" // Allows float and decimal numbers
                        className={`shadow appearance-none border rounded w-full mt-2 p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.productRating ? 'border-red-500' : ''}`}
                        {...register('Rating', { required: 'Rating is required' })}
                    />
                    {errors.Rating && <p className="text-red-500 mt-2">{errors.Rating.message}</p>}
                </label>

                <button
                    type="submit"
                    className="bg-purple-500 text-white px-8 py-2 w-full font-medium rounded-md hover:bg-purple-700 transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default BookUpdate;