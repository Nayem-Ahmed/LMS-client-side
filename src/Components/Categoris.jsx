import React from 'react';
import { bookCetagory } from './bookCategory';
import Category from './Category';
import { useSearchParams } from 'react-router-dom';

const Categoris = () => {
    const [params, setParams] = useSearchParams();
    const category = params.get('category');
    return (
        <div className='flex flex-col md:flex-row gap-6 justify-evenly items-center my-10  '>
            {
                bookCetagory.map((item, index) => (
                    <Category key={index} selected={category === item.tap} categoryitem={item.tap} />
                ))
            }
        </div>
    );
};

export default Categoris;
