import React, { useState } from "react";
import '../index.css';
import myImage from '../Artboard 1 copy.png'
import yrImage from '../bg-img.png'
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();
        const loginData = { 'email': email, 'password': password }

        console.log(loginData)


        setEmail("");
        setPassword("");
         }

         const signUp = () =>{
            navigate('/signup')

         }

    return (
        <div className="flex justify-center items-center">
        <div className=" bg-gradient-to-r from-bg1 to-bg2  flex gap-7 mt-[70px] mb-[50px] justify-center items-center ">
            <div className="flex-col">
                <div className="absolute mt-[51px]">
                    <img src={myImage} alt="" className="w-[200px] h-[50px] ml-[225px] " />
                </div>
                <div className="w-[450px] h-[35px] font-pop font-semibold text-[22px] leading-none flex items-center text-wht pt-[130px] ml-[200px]">
                    Login to your account
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <div className="pt-[40px] ml-[180px] ">
                        <label htmlFor="" className="font-pop font-semibold h-[25px] leading-none flex items-center text-[20px] text-wht ">Email</label>
                        <input type="email" name="email" id="" value={email} onChange={handleEmailChange} className="h-[35px] w-[350px] rounded-md bg-lg text-wht font-pop" />
                        <label htmlFor="" className="font-pop font-semibold h-[25px] leading-none flex items-center text-[20px] text-wht mt-[25px] ">Password</label>
                        <input type="password" name="password" id="" value={password} onChange={handlePasswordChange} className="h-[35px] w-[350px] rounded-md bg-lg text-wht"  />
                    </div>
                    <button type="submit" className="w-[350px] h-[35px] flex flex-row items-center justify-center gap-[5px] bg-btn rounded-[8px] p-[16px] mt-[25px] ml-[180px] ">Login</button>
                </form>
                <p className="text-wht ml-[220px] pt-[10px] pb-[25px]">Don't have an account?&nbsp;&nbsp; <a href="" className="text-blue-500" onClick={signUp}>sign-up</a></p>
            </div>
            


        </div>
        </div>

    )


}
export default LoginPage;