import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import PostCard from "../components/PostCard"
import appwriteService from "../appwrite/serve";



const Dashboard = () => {

    const dashImage = "https://wallpapercave.com/wp/wp3893286.jpg"

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const authStatus = useSelector((state) => state.auth.status);
    const userData = useSelector((state) => state.auth.userData);
    const userId = userData ? userData.$id : null;

    useEffect(() => {
        if (authStatus && userId) {
            appwriteService
                .getPosts(userId)
                .then((res) => {
                    if (res) setPosts(res.documents);
                })
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, [authStatus, userId]);

    return (

        <div
            className=" w-screen min-h-screen bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${dashImage})` }}
        >


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, }}
                className="w-screen min-h-screen px-6 py-25"
            >
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl font-serif text-center text-amber-400 mb-16">
                        All Posts
                    </h1>

                    {loading ? (
                        <p className="text-center text-black text-lg">Loading posts…</p>
                    ) : posts.length > 0 ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post) => (
                                <PostCard
                                    key={post.$id}
                                    $id={post.$id}
                                    title={post.title}
                                    featuredImage={post.featuredImage}
                                    content={post.content}
                                />
                            ))}
                        </motion.div>
                    ) : (
                        <p className="text-center text-amber-400 text-lg">
                            You haven’t posted anything yet. Start creating now!
                        </p>
                    )}
                </div>
            </motion.div>

        </div>
    );
};

export default Dashboard;
