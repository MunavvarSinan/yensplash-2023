import Container from '@/components/Layout';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useLoginMutation } from '@/store/apiSlice';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, { data, isLoading, error }] = useLoginMutation();
    const router = useRouter()
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        const credentials = {
            email: email,
            password: password
        }
        login(credentials);
    };

    if (isLoading) {
        <LoadingSpinner />
    }
    if (data?.success) {
        if (typeof window !== 'undefined') {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
        }
        router.replace('/');
    }
    if (error) {
        console.log(error);
    }

    return (
        <Container>

            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl text-white font-bold sm:text-3xl">Login to book your ticket</h1>
                    <p className="mt-4 text-gray-500">Please use your email registered with the YIT Alumni website</p>
                </div>
                <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label className="sr-only">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {/* Location icon path */}
                                </svg>
                            </span>

                        </div>
                    </div>
                    <div>
                        <label className="sr-only">Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {/* Password icon path */}
                                </svg>
                            </span>
                            {error && <p className="text-red-500 mt-2">{(error as any).data?.message}</p>}
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button
                            onClick={handleSubmit}
                            className="inline-block mt-5 w-full rounded-lg bg-[#EACD69] px-5 py-3 text-sm font-bold text-black "
                        >
                            {isLoading ?
                                (
                                    <div role="status " className='flex justify-center'>
                                        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                ) : 'Sign In '}

                        </button>
                    </div>
                </div>
            </div>
        </Container >
    );
}