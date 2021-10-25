import React from "react";
import Link from 'next/link';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { IRegister } from "@pages/sign-up/models/register.models";
import { POST_REGISTER } from "@api/auth/register-api.instance";


const schema = yup.object({
    FirstName: yup.string().required(), 
    LastName: yup.string().required(), 
    Email: yup.string().required(), 
    Phone: yup.string().required(),
    Password: yup.string().required(),
}).required();

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<IRegister>({
        // resolver: yupResolver(schema)
    });

    const onSubmit = async (data: IRegister) => {
        const response = await POST_REGISTER(data);
        console.log(response);
    };

    return (
        <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-4">Create an account</h1>
            <form className="mt-6">
                <div className="grid md:grid-cols-2 md:gap-4">
                    <div className="col-span-1">
                        <label className="block text-gray-700" >First Name</label>
                        <input {...register('FirstName')} type="text" placeholder="Enter First Name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="off"  />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-gray-700">Last Name</label>
                        <input {...register('LastName')} type="text" placeholder="Enter Last Name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="off"  />
                    </div>
                </div>
                <div className="mt-2">
                    <label className="block text-gray-700">Email Address</label>
                    <input {...register('Email')} type="email" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="off"  />
                </div>
                <div className="mt-2">
                    <label className="block text-gray-700 mt-2">Phone</label>
                    <input {...register('Phone')} type="phone" placeholder="Enter Phone" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="off"  />
                </div>
                <div className="mt-2">
                    <label className="block text-gray-700">Password</label>
                    <input {...register('Password')} type="password"  placeholder="EnterPassword" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="off"  />
                </div>
                <div>
                    <Link href="login">
                        <a href="login" className="mt-2 block text-blue-400 text-right hover:text-blue-700 font-semibold">I'm already have an account</a>
                    </Link>
                </div>
                <button onClick={handleSubmit(onSubmit)} type="button" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                    px-4 py-3 mt-6">Register</button>
            </form>
        </div>
    );
}

export default Register