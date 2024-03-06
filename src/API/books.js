import axiosPublice from "./axiosPublice"

// Add products (post) databse
export const AddBookPost = async (bookdata) => {
    const { addData } = await axiosPublice.post('/addbooks', bookdata)
    return addData;
}
// Fetch all addbooks from db
export const getAllBooks = async () => {
    const { data } = await axiosPublice('/addbooks')
    return data;
}

// Get All add books by params
export const getAddAllBooks = async (email) => {
    // const { data } = await axiosSecure(`/addcart?email=${email}`)
    const { data } = await axiosPublice(`/addbooks/email/${email}`)
    return data;
}

// Books Update


// borrowed 
export const Borrowedbooks = async (borrowed) => {
    const { addData } = await axiosPublice.post('/borrowed', borrowed)
    return addData;
}
// get borrowed 
export const getBorrowedBooks = async (email) => {
    const { data } = await axiosPublice(`/borrowed/${email}`)
    return data;
}
