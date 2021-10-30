import { Enum_AssetsImg } from '@shared/constants/imgs.constants';
import type { NextPage } from 'next'
import ForgotPassword from '@shared/components/auth/forgot-password';
import Image from 'next/image';

const AuthPage: NextPage = () => {

return (
    <div>
        <section className="flex flex-col md:flex-row h-screen items-center">
            <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                {/* <Image src={Enum_AssetsImg.BACKGROUND_LOGO} alt="" className="w-full h-full object-cover" /> */}
            </div>
            <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                flex items-center justify-center">
            <ForgotPassword  />
            </div>
        </section>
    </div>
    );
}



export default AuthPage