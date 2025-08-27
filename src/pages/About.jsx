import React from "react";
import { motion } from "framer-motion";

const backgroundImage =
    "https://wallpapercave.com/wp/wp4027189.jpg";

const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const About = () => {
    return (

        <>

            <div
                className="min-h-screen bg-cover bg-center text-left"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="flex flex-col gap-32 px-10 py-40">





                    {/* Box 1: Left side */}

                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        className="bg-white/30 backdrop-blur-md p-10 rounded-xl shadow-md max-w-xl"
                    >
                        <h1 className="text-4xl font-serif font-light tracking-wider text-gray-800">
                            Take:Two
                        </h1>
                        <hr className="w-80 border-t-2 border-black my-4" />

                        <p className="text-gray-700 mb-4 leading-relaxed text-md tracking-wide">
                            Take:Two is the favorite corner of the internet for every movie lover. Whether you're into thrillers, rom-coms, indie gems, or cult classics — this is your safe space to dive into the magic of cinema.
                        </p>

                        <p className="text-gray-700 leading-relaxed text-md tracking-wide">
                            Express how films make you feel. Share how a scene influenced your day or a character changed your view. Take:Two is your personal cinema diary — beautifully simple, easy to use, and made to celebrate your love for the screen.
                        </p>
                    </motion.div>





                    {/* Box 2: Right side */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        className="bg-white/30 backdrop-blur-md p-10 rounded-xl shadow-md max-w-xl self-end"
                    >
                        <h2 className="text-3xl font-serif font-light text-gray-800 mb-4">
                            Why We Built It
                        </h2>
                        <hr className="w-80 border-t-2 border-black my-4" />
                        <p className="text-gray-700 mb-4 leading-relaxed text-md tracking-wide">
                            Movies are more than entertainment — they are personal, emotional, reflective. Take:Two was built for movie lovers to archive their thoughts, reactions, and recommendations without friction.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-md tracking-wide">
                            Whether you write daily, weekly, or once in a blue moon — this space is yours to turn screen time into story time.
                        </p>
                    </motion.div>





                    {/* Box 3: Left side */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        className="bg-white/30 backdrop-blur-md p-10 rounded-xl shadow-md max-w-xl"
                    >
                        <h2 className="text-3xl font-serif font-light text-gray-800 mb-4">
                            How to Create
                        </h2>
                        <hr className="w-80 border-t-2 border-black my-4" />
                        <p className="text-gray-700 mb-4 leading-relaxed text-md tracking-wide">
                            We provide a distraction-free content writing space that feels like your personal notebook. Customize fonts, layout, and tone to match your cinematic style.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-md tracking-wide">
                            Want to add a poster or a still from the movie? Upload any image that fits your story. Pick your background shades, mood tones, and organize your entries however you like. It's your canvas.
                        </p>
                    </motion.div>






                </div>
            </div>
        </>
    );
};

export default About;
