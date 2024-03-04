import axiosPublice from "./axiosPublice"

// Add products (post) databse
export const AddBookPost = async (bookdata) => {
    const { addData } = await axiosPublice.post('/addbooks', bookdata)
    return addData;
}
