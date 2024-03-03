import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProviders';
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        // Handle form submission logic here
        signIn(data.email, data.password)
            .then((result) => {
                console.log("user", result.user);
                toast.success('Login Successful')
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                console.error(error);
                toast('Envalid Password')
            })
    };
    const googleLogin = async () => {
        try {
            const result = await signInWithGoogle()
            navigate('/')
            toast.success('User created successfully');
            // Additional logic or redirection after Google sign-in
        } catch (error) {
            toast.error(error.message);
        }
    };


    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96 text-left">
                <h1 className="text-2xl font-bold mb-6">Login Form</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                        Email
                    </label>
                    <input
                        id="email"
                        className="border border-gray-300 p-2 mb-4 w-full"
                        type="text"
                        placeholder="Enter your email"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span className="text-red-500">email is required</span>}

                    <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
                        Password
                    </label>
                    <input
                        id="password"
                        className="border border-gray-300 p-2 mb-4 w-full"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", { required: true })}
                    />
                    {errors.password && <span className="text-red-500">Password is required</span>}

                    <button
                        type="submit"
                        className="bg-[#00c7c4] text-white p-2 w-full rounded hover:bg-cyan-600"
                    >
                        Submit
                    </button>
                    <i className="divider">OR</i>
                    <button onClick={googleLogin} className="btn btn-block btn-outline">
                        <FcGoogle className="text-2xl" /> Continue With Google
                    </button>
                    <p className='my-3'>Not a Member ? <Link to='/signup' className='underline text-blue-500'>Signup</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
