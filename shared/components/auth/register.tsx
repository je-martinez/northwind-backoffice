import React from "react";
import { GeneralUtils } from "@shared/utils/general.utils";
import Link from 'next/link';

const Register = () => {

    const submitForm = () => {
        const data = GeneralUtils().CastClassToJSON({
            "Hola":"Test",
            "Adios":"Tes2",
            "Avion":[
                {"Test1":'Test1_Value'},
                {"Test1":'Test1_Value'},
                {"Test1":'Test1_Value'},
            ],
            "Bye":{
                "A":"A_Value",
                "B":"B_Value",
                "C":"C_Value"
            }
        });
    }

    return (
        <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-4">Create an account</h1>
            <form className="mt-6" action="#" method="POST">
            <div className="grid md:grid-cols-2 md:gap-4">
                <div className="col-span-1">
                    <label className="block text-gray-700">First Name</label>
                    <input type="text" name="first_name" id="first_name" placeholder="Enter First Name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="off" required />
                </div>
                <div className="col-span-1">
                    <label className="block text-gray-700">Last Name</label>
                    <input type="text" name="last_name" id="last_name" placeholder="Enter Last Name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="off" required />
                </div>
            </div>
            <div className="mt-2">
                <label className="block text-gray-700">Email Address</label>
                <input type="email" name="email_address" id="email_address" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="off" required />
            </div>
            <div className="mt-2">
                <label className="block text-gray-700 mt-2">Phone</label>
                <input type="phone" name="phone" id="phone" placeholder="Enter Phone" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="off" required />
            </div>
            <div className="mt-2">
                <label className="block text-gray-700">Password</label>
                <input type="password" name="password" id="password" placeholder="EnterPassword" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="off" required />
            </div>
            <div>
                <Link href="login">
                    <a className="mt-2 block text-blue-400 text-right hover:text-blue-700 font-semibold">I'm already have an account</a>
                </Link>
            </div>
            <button onClick={submitForm} type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Register</button>
            </form>
        </div>
    );
}

export default Register