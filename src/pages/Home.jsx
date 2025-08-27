import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";




//Framer.....

const fadeTop = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const fadeBottom = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};









// Replace with your actual image or keep as placeholder....

const backgroundImageOne =
  "https://nofilmschool.com/media-library/taylor-russell-and-timothee-chalamet-in-bones-and-all-luca-guadagnino-photo-by-yannis-drakoulidis-2022-220-copia-1669112465.png?id=34050374&width=1245&height=700&quality=90&coordinates=0%2C169%2C0%2C104"; // use local path if downloaded


const backgroundImageTwo = "https://wallpapercave.com/wp/wp2334071.jpg"











const Home = () => {

  const [loading, setLoading] = useState(true);

 

  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
 

  console.log(authStatus);
  console.log(userData);
  


  useEffect(() => {
    if (authStatus) {
      setLoading(false);
    } 
  }, [authStatus]);


  if (!authStatus) {

    return (
      <>



        <div
          className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url(${backgroundImageOne})`,
          }}
        >



          <div className="flex-grow flex items-center justify-center px-4">
            <motion.div
              variants={fadeTop}
              initial="hidden"
              animate="visible"
              className="bg-opacity-95 px-10 py-10 text-center w-full max-w-2xl"
            >
              <h1 className="text-5xl md:text-6xl font-serif tracking-wide mb-80 font-thin text-black drop-shadow-md">
                Lights, camera, thoughts.
              </h1>
            </motion.div>
          </div>





          <motion.div
            variants={fadeBottom}
            initial="hidden"
            animate="visible"
            className="absolute bottom-6 text-white text-sm tracking-wide"
          >
            <p className="text-white text-lg">
              Get Started,{" "}
              <NavLink
                to="/signup"
                className="text-white border-b-2 border-transparent hover:border-white transition duration-300"
              >
                Create an Account.
              </NavLink>
            </p>
          </motion.div>





        </div>
      </>
    );
  }






  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="p-4 rounded-full bg-white/60 backdrop-blur-xl shadow-lg">
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }









  return (

    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImageTwo})` }}
    >


      
      
      <motion.div
        variants={fadeInRight}
        initial="hidden"
        animate="visible"
        className="text-right text-white max-w-xl px-6 sm:px-10 md:px-20 ml-175 mb-25"
      >
        <h1 className="text-5xl sm:text-6xl font-serif mb-3 drop-shadow-md">
          Welcome{userData?.name ? `, ${userData.name}` : ""}.
        </h1>

        <p className="text-lg sm:text-xl text-white drop-shadow-md ">
          Would you like to see your{" "}
          <NavLink
            to="/dashboard"
            className="text-yellow-200 underline hover:text-indigo-200 transition"
          >
            Dashboard
          </NavLink>
          {" "}?
        </p>
      </motion.div>


    </div>


  )


};

export default Home;