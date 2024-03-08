import React from 'react';
import { useForm } from 'react-hook-form';
import { FaPhoneAlt,FaLocationArrow } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { toast } from 'react-toastify';
 

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            // Your form submission logic goes here
            console.log(data);
            reset();
            toast.success("Send message")

        } catch (error) {
            toast.error(error.message);
        }
    };
    return (
        <div className='flex items-center justify-between  flex-col lg:flex-row md:flex-row gap-5 p-5 bg-purple-50'>
            <div className='basis-1/2 w-full'>
                <form onSubmit={handleSubmit(onSubmit)} className="shadow-sm rounded w-full  p-5 my-4">
                    <h2 className="text-2xl font-bold mb-4 text-center">Contact With Us</h2>
                    {/* Name Input */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">

                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            {...register("name", { required: true })}
                            className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''
                                }`}
                        />
                        {errors.name && <p className="text-red-500 text-xs italic">This field is required</p>}
                    </div>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', { required: 'Email is required' })}
                            className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''
                                }`}
                        />
                        {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                    </div>

                    {/* Phone Number Input */}
                    <div className="mb-6">
                        <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"  // Use type "tel" for phone number input
                            id="phone"
                            {...register('phone', { required: 'Phone number is required' })}
                            className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.phone ? 'border-red-500' : ''
                                }`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone.message}</p>}
                    </div>

                    {/* Textarea Input */}
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            {...register('message', { required: 'Message is required' })}
                            className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.message ? 'border-red-500' : ''
                                }`}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-xs italic">{errors.message.message}</p>}
                    </div>


                    {/* submit In Button */}
                    <div className="mb-6">
                        <button
                            type="submit"
                            className="bg-purple-600 hover:bg-purple-800 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </div>
                </form>

            </div>

            <div className='basis-1/2'>
                <div className='flex gap-3 items-center shadow-sm p-2 mb-12 '>
                    <div className="flex items-center justify-center rounded-lg bg-purple-500 h-16 w-16 shadow-lg ">
                        <FaPhoneAlt className="text-3xl text-white animate-bounce" />
                    </div>
                    <div className=''>
                        <h1 className='font-bold md:text-2xl '>Call Us Anytime</h1>
                        <h3 className='text-gray-400'>(+88) 01861495973</h3>
                        <h4 className='text-gray-400'>01936797600</h4>
                    </div>
                </div>
                <div className='flex gap-3 items-center shadow-sm p-2 mb-12'>
                    <div className="flex items-center justify-center rounded-lg bg-purple-500 h-16 w-16 shadow-lg">
                        <CiMail className="text-3xl text-white animate-bounce" />
                    </div>
                    <div className=''>
                        <h1 className='font-bold md:text-2xl '>Send An Email</h1>
                        <h3 className='text-gray-400'>webdevnayem@gmail.com</h3>
                        <h4 className='text-gray-400'>01936797600</h4>
                    </div>
                </div>
                <div className='flex gap-3 items-center shadow-sm p-2'>
                    <div className="flex items-center justify-center rounded-lg bg-purple-500 h-16 w-16 shadow-lg">
                        <FaLocationArrow className="text-3xl text-white animate-bounce" />
                    </div>
                    <div className=''>
                        <h1 className='font-bold md:text-2xl '>Visit anytime</h1>
                        <h3 className='text-gray-400'>66 broklyn golden street. New York</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;