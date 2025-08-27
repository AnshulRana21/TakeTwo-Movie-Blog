import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { login as authLogin } from '../store/authSlice'
import { Input, Button } from './index'

import { useDispatch } from "react-redux"
import authService from "../appwrite/auth"
import { useForm } from "react-hook-form"
import { motion } from 'framer-motion'

function Login() {

    const backgroundImage = "https://wallpaperaccess.com/full/2720373.jpg"
    const backgroundImageTwo = "https://wallpaperaccess.com/full/8170304.jpg"

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { register, handleSubmit } = useForm()

    const [error, setError] = useState("")

    const login = async (data) => {

        setError("")

        try {
            
            const currentUser = await authService.getCurrentUser();

            if (currentUser) {
                // User already logged in, redirect instead of re-logging in
                dispatch(authLogin(currentUser));
                navigate("/");
                return;
            }

            // Otherwise create a session (login)
            const session = await authService.login(data);

            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    dispatch(authLogin(userData));
                    navigate("/");
                }
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (

        <div className="bg-gray-600 flex items-center justify-center min-h-screen "
            style={{ backgroundImage: `url(${backgroundImageTwo})`, backgroundSize: "cover" }}
        >

            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="w-[390px] h-[570px]  rounded-3xl overflow-hidden shadow-xl border-gray-500 relative mt-30 mb-10 "
                style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                {/* Glass Login Box */}
                <div className="absolute bottom-0 w-full bg-black/50 backdrop-blur-md px-5 py-5 border-1 shadow-md shadow-gray-600 rounded-4xl">

                    <h2 className="text-2xl font-bold text-white mb-1">Get started</h2>
                    <p className="text-sm text-gray-300 mb-4">
                        Welcome Back ! Sign in to your account.
                    </p>

                    {error && <p className="text-red-400 text-sm mb-3 text-center">{error}</p>}

                    <form onSubmit={handleSubmit(login)} className="space-y-3">
                        <Input
                            className="text-white"
                            type="email"
                            placeholder="Email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be valid",
                                },
                            })}
                        />
                        <Input
                            className="text-white"
                            type="password"
                            placeholder="Password"

                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button type="submit" className="font-bold w-full bg-gray-950 text-white hover:bg-white hover:text-black ">
                            Log in
                        </Button>
                    </form>

                    <p className="mt-4 text-sm text-center text-gray-400">
                        Don&apos;t have an account?{" "}
                        <Link to="/signup" className="text-white underline hover:text-gray-200">
                            Sign up.
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default Login;