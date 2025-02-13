"use client";

import InputField from "@/components/element/InputField"
import { useAuth } from "@/providers/userContext";
import { showDialog } from "@/utils/alertUtils";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
    const [emailValue, setEmailValue] = useState<string>('');
    const [passwordValue, setPasswordValue] = useState<string>('');
    const router = useRouter();
    const { setToken } = useAuth();
    const apiRoute = "https://bpmp-kepri-backend.my.id/api/login";

    const fetchSign = async () => {
        try {
            console.log(apiRoute);
            const response = await fetch(apiRoute, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: emailValue,
                    password: passwordValue,
                }),
            });

        
            if(response.status === 200) {
                showDialog('success', 'Login successful');
                const data = await response?.json();
                setToken(data.data.token);
                 router.push('/admin')
            }else if (response.status === 404) {
                // Handle 404 specifically
                showDialog('error', 'Login Failed', 'Email and password salah');
            } else if (response.status === 422) {
                
                const errorData = await response.json();
                const errorMessage = errorData.message || 'Invalid email or password';
                showDialog('error', 'Login Failed', errorMessage);
            } else {
                
                const errorData = await response.json();
                showDialog('error', 'Login Failed', errorData.message || 'An unexpected error occurred');
            }
    
        } catch (error) {
            showDialog('error', 'Network Error', 'Unable to connect to the server');
            console.error(error);
        }
    }

    const handleSubmit = () => {
        if (!emailValue || !passwordValue) {
            showDialog('error', 'Error', 'Email dan password tidak boleh kosong');
        } else {
            fetchSign();
        }
    }


    return (
        <div className='w-full h-screen bg-blue-secondary center-flex'>
            <div className='h-max w-[90%] max-w-[500px] bg-white rounded-xl shadow-lg p-8 md:p-10 flex-col flex gap-5 items-center'>
                
                <div className='flex flex-col w-full '>
                    <h1 className='text-xl font-semibold'>Selamat Datang!</h1>
                    <p>Masuk dengan akun yang terdaftar</p>
                </div>

                <div className="flex flex-col gap-6 w-full mt-5">
                    <InputField 
                        title="Email"
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                    />
                    <InputField 
                        title="Password"
                        value={passwordValue}
                        onChange={(e) => setPasswordValue(e.target.value)}
                    />

                    <button 
                        onClick={handleSubmit}
                        className="h-12 w-full bg-blue-secondary hover:opacity-90 text-white rounded mt-7"
                    >
                        Sign In 
                    </button>
                </div>

            </div>
        
        </div>
    )
}

export default Page