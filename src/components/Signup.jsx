import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router'
import { Input, Button } from './index'

import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { login } from '../store/authSlice'

function Signup() {

    const backgroundImage = "https://wallpapercave.com/wp/wp7278137.jpg"

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [error, setError] = useState("")

    const { register, handleSubmit } = useForm()

    const create = async (data) => {

        setError("")

        try {
            const account = await authService.createAccount(data)

            if (account) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(login(userData));
                    navigate("/");
                }
            }
        }

        catch (error) {
            setError(error.message)
        }
    }

    return (

        <div className="flex items-center justify-center"
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover" }}>

            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className={`mx-auto w-full max-w-lg bg-white/20 backdrop-blur-md rounded-3xl p-10 border border-black/10 mt-21 mb-20`}
            >

                <div className="mb-5 flex justify-center">
                    <span className="inline-block w-full max-w-[140px] font-bold text-white text-3xl">
                        Take:Two
                    </span>
                </div>

                <h2 className="text-center text-2xl  leading-tight text-white">Sign up to create account</h2>

                <p className="mt-2 mb-10 text-center text-base text-black/40">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="text-white font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In.
                    </Link>
                </p>


                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}


                <form onSubmit={handleSubmit(create)}>

                    <div className='space-y-5'>
                        <Input
                            className="bg-white"
                            placeholder="Name"
                            {...register("name", {
                                required: true,
                            })}
                        />
                        <Input
                            className="bg-white"
                            placeholder="Email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            className="bg-white text-black "
                            type="password"
                            placeholder="Password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                    </div>

                </form>
            </motion.div>

        </div>
    )
}

export default Signup;