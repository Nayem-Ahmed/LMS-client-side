import React from 'react';
import Modal from 'react-modal';
import useAuth from '../Hooks/useAuth';
import { Borrowedbooks } from '../API/books';
import { toast } from 'react-toastify';


const ModalPopup = ({ isOpen, onRequestClose, bookDetails }) => {
    const { user } = useAuth()
    console.log(bookDetails);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const date = e.target.date.value;
        const BorrowedBooksData = {
            name: user?.displayName,
            email: user?.email,
            returndate: date,

        };
        try {
            await Borrowedbooks(BorrowedBooksData);
            toast.success('Borrowed Books Success')

        } catch (error) {
            toast.error('Error:', error);

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