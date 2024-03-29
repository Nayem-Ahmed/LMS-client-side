import React, { useState } from 'react';
import Modal from 'react-modal';
import useAuth from '../Hooks/useAuth';
import { Borrowedbooks } from '../API/books';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axiosPublice from '../API/axiosPublice';


const ModalPopup = ({ isOpen, onRequestClose, bookDetails }) => {
    const [quantity, setQuantity] = useState(bookDetails?.quantity)
    console.log(bookDetails);
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const date = e.target.date.value;
        // current datemake
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1);
        const day = currentDate.getDate().toString();
        const borroweddate = `${year}-${month}-${day}`;

        // send books information
        const BorrowedBooksData = {
            name: user?.displayName,
            email: user?.email,
            returndate: date,
            borrowedDate:borroweddate,
            bookImage: bookDetails.bookImage,
            bookName: bookDetails.bookName,
            category: bookDetails.category,

        };
        try {
            await Borrowedbooks(BorrowedBooksData);
            toast.success('Borrowed Books Success')

            // Reduce the quantity of the book by 1
            const newQuantity = quantity - 1;
            setQuantity(newQuantity)

            // Update the quantity of the book in the database
            axiosPublice.patch(`/addbooks/${bookDetails._id}`, { quantity: newQuantity })
            navigate('/borrowed')

        } catch (error) {
            toast.error('You have already borrowed this book', error);

        }

    }
    const handleCancel = () => {
        onRequestClose(); // Close the modal when cancel button is clicked
    };
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Borrowed Books Form Modal"
        >
            <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md mt-10">
                <label className="block mb-4">
                    <span className="text-gray-700">User Name:</span>
                    <input type="text" defaultValue={user?.displayName} disabled className="form-input mt-1 block w-full" />
                </label>

                <label className="block mb-4">
                    <span className="text-gray-700">Email:</span>
                    <input type="email" defaultValue={user?.email} disabled className="form-input mt-1 block w-full" />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Return Date:</span>
                    <input
                        type="date"
                        name='date'
                        required
                        className="form-input mt-1 block w-full"
                    />
                </label>

                <div className="flex  gap-4">
                    <button type="submit" className="btn-sm bg-purple-500 text-white px-3 py-1 rounded-md hover:bg-purple-800">
                        Submit
                    </button>
                    <button type="button" onClick={handleCancel} className="btn-sm bg-purple-500 text-white px-3 py-1 rounded-md hover:bg-purple-800">
                        Cancel
                    </button>
                </div>
            </form>

        </Modal>
    );
};

export default ModalPopup;