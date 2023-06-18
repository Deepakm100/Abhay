import React, { useState } from "react";
import '../index.css';
import myImage from '../Artboard 1 copy.png'
import yrImage from '../bg-img.png'

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[phone,setPhone]  =useState('');
    const[selectedoption, setSelectedOption] = useState('')

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    function handlePhoneChange(e){
        setPhone(e.target.value)
    }
    function handleOPtionChange(e){
        setSelectedOption(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();
        const loginData = { 'email': email, 'password': password ,'phone':phone ,'Role':selectedoption}

        console.log(loginData)


        setEmail("");
        setPassword("");
        setPhone("");

    }

    return (
        <div className="flex justify-center items-center">
        <div className=" flex gap-7  bg-gradient-to-r from-bg1 to-bg2 mt-[65px]
        mr-[150px] ml-[150px] mb-[80px] rounded-md justify-center items-center">
            <div className="flex-col">
                <div className="absolute mt-[30px]">
                    <img src={myImage} alt="" className="w-[200px] h-[50px] ml-[150px] " />
                </div>
                <div className="w-[495px] h-[30px] font-pop font-semibold text-[25px] leading-none flex items-center text-wht pt-[120px] ml-[150px]">
                    Create account
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <div className="pt-[30px] ml-[150px] ">
                        <label htmlFor="" className="font-pop font-semibold h-[22px] leading-none flex items-center text-[18px] text-wht ">Email</label>
                        <input type="email" name="email" id="" value={email} onChange={handleEmailChange} className="h-[35px] w-[350px] rounded-md bg-lg text-wht font-pop bg-gradient-to-r from-bg1 to-bg2
                        border-white border" />

                        <label htmlFor="" className="font-pop font-semibold h-[22px] leading-none flex items-center text-[18px] text-wht mt-[20px] ">Password</label>
                        <input type="password" name="password" id="" value={password} onChange={handlePasswordChange} className="h-[35px] w-[350px] rounded-md bg-lg text-wht bg-gradient-to-r from-bg1 to-bg2
                        border-white border"  />

                        <label htmlFor="" className="font-pop font-semibold h-[22px] leading-none flex items-center text-[18px] text-wht mt-[20px]">Phone</label>
                        <input type="number" name="phone" id="" value={phone} className="h-[35px] w-[350px] rounded-md bg-lg text-wht bg-gradient-to-r from-bg1 to-bg2
                        border-white border" onChange={handlePhoneChange} />

                        <div>
                        <select name="selectedoption" id="" value={selectedoption} className="rounded-md bg-lg h-[40px] w-[350px] mt-[20px] text-wht bg-gradient-to-r from-bg1 to-bg2
                        border-white border" onChange={handleOPtionChange}>
                        <option value="Role">Role</option>
                        <option value="Student">Student</option>
                        <option value="Teacher">Teacher</option>
                        </select>
                        </div>
            
                    </div>
                    <button type="submit" className="w-[350px] h-[40px] flex flex-row items-center justify-center gap-[5px] bg-btn rounded-[8px] p-[16px] mt-[25px] ml-[150px] ">Signin</button><button type="submit" className="w-[350px] h-[40px] flex flex-row items-center justify-center gap-[5px] bg-btn rounded-[8px] p-[16px] mt-[25px] ml-[150px] mb-[28px]">Signin with google</button>
                </form>
            </div>
            </div>
            </div>

    )


}
export default SignupPage;