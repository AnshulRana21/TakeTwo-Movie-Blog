import { PostForm } from "../components";
import { motion } from "framer-motion";

function AddPost() {

    const createImage = "https://static01.nyt.com/images/2020/10/05/arts/05social-network01/05social-network01-superJumbo-v3.jpg?quality=75&auto=webp"

    return (
        <div className="p-20 bg-right-bottom"
            style={{ backgroundImage: `url(${createImage})` }}>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, }}
                className='w-full max-w-7xl mx-auto px-4'
            >
                <PostForm />


            </motion.div>

        </div >
    )
}

export default AddPost;