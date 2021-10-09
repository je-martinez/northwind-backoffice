import { Enum_AssetsImg } from '@shared/constants/imgs.constants';
import type { NextPage } from 'next'
import { Fragment, useState } from 'react';
import Login from './components/login';
import ForgotPassword from './components/forgot-password';
import Register from './components/register';
import { ViewMode } from './constants/view-modes';

export interface PropsLoginPage{
    viewMode:string;
    setViewMode:Function; 
}

const AuthPage: NextPage = () => {

const [viewMode, setViewMode] = useState(`${ViewMode.LOGIN}`);

const View = () => {

    const searchBarProps = {};

    switch(viewMode){
        case ViewMode.LOGIN:
            return (
                <Fragment>
                    <Login viewMode={viewMode} setViewMode={setViewMode} />
                </Fragment>
            )
        break;
        case ViewMode.FORGOT_PASSWORD:
            return (
                <Fragment>
                    <ForgotPassword viewMode={viewMode} setViewMode={setViewMode} />
                </Fragment>
            )
        break;
        case ViewMode.REGISTER:
            return (
                <Fragment>
                    <Register />
                </Fragment>
            )
        break;
        default:
            return <Fragment></Fragment>
        break;
        
    }
}
    
return (
    <div>
        <section className="flex flex-col md:flex-row h-screen items-center">
            <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <img src={Enum_AssetsImg.BACKGROUND_LOGO} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                flex items-center justify-center">
            <View />
            </div>
        </section>
    </div>
    );
}



export default AuthPage