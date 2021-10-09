import { ArrowSmLeftIcon } from "@heroicons/react/outline";
import React from "react";
import { PropsLoginPage } from '..';
import { ViewMode } from '../constants/view-modes';

const ForgotPassword = (props:PropsLoginPage) => {

    const backToLogin = () =>{
        const option:string = ViewMode.LOGIN;
        props.setViewMode(option);
    }

    return (
        <div>
            <ArrowSmLeftIcon onClick={backToLogin} className="h-10 w-30 text-blue-500"/>
            <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-4">We'll send you a temporary password to your email</h1>
            <form className="mt-6" action="#" method="POST">
            <div>
                <label className="block text-gray-700">Email Address</label>
                <input type="email" name="" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="off" required />
            </div>
            <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Send Password</button>
            </form>
            </div>
        </div>

    );
}

export default ForgotPassword