import qs from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";

const Category = ({ categoryitem, selected }) => {
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    const handleClick = () => {
        let currentQuery = {}
        if (params) {
            currentQuery = qs.parse(params.toString());

        }
        const updatedQuery = { ...currentQuery, category: categoryitem }

        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery,
        })
        navigate(url)
    }
    params.get('category')
    return (
        <div onClick={handleClick} className={`${selected ? 'border-b-2 border-purple-500 text-purple-500'  : 'border-b-2 '}`}>
            <h1 className='font-bold md:text-xl cursor-pointer'>{categoryitem}</h1>
        </div>
    );
};

export default Category;

// import React from 'react';
// import qs from "query-string";
// import { useNavigate, useSearchParams } from "react-router-dom";

// const Category = ({ categoryitem, selected }) => {
//     const [params, setParams] = useSearchParams();

//     const navigate = useNavigate();

//     const handleClick = () => {
//         if (params) {
//             const updatedQuery = { ...params, category: categoryitem };

//             const url = qs.stringifyUrl({
//                 url: '/',
//                 query: updatedQuery
//             });

//             navigate(url);
//         }
//     }

//     return (
//         <div onClick={handleClick} className={`${selected ? 'border-b-4 border-indigo-500' : ''}`}>
//             <h1 className='font-medium'>{categoryitem}</h1>
//         </div>
//     );
// };

// export default Category;

