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
// borrowed 
export const  Borrowedbooks = async (borrowed) => {
    const { addData } = await axiosPublice.post('/borrowed', borrowed)
    return addData
  }