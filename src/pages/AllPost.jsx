import { useEffect, useState } from 'react'
import appwriteService from '../appwrite/serve'
import { PostCard } from '../components'

function AllPost() {

    const hubImage = "https://www.siff.net/images/CINEMA/2023/Films%20Jun-Dec/CIN_FallenLeaves_1600x900.jpg"

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        appwriteService.getPosts().then((res) => {

            if (res) {
                setPosts(res.documents);
            }

        }).finally(() => setLoading(false));
    }, []);


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
        <div className=" w-screen min-h-screen bg-cover bg-center bg-no-repeat p-30"
            style={{ backgroundImage: `url(${hubImage})` }}
        >

            <div className="relative max-w-7xl mx-auto rounded-3xl p-10 overflow-hidden border border-white/30 shadow-xl">

                {/* Background image with blur */}
                <div
                    className="absolute inset-0 bg-cover bg-center blur-md"
                    style={{ backgroundImage: `url(${hubImage})` }}
                />

                {/* Overlay to darken if needed */}
                <div className="absolute inset-0 bg-black/10" />

                {/* Content Layer */}
                <div className="relative z-10">
                    <h2 className="text-5xl text-amber-300 font-serif mb-10 text-center">
                        Hub For All Posts
                    </h2>

                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {posts.map((post) => (
                                <PostCard key={post.$id} {...post} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-white text-lg">
                            No posts available at the moment.
                        </div>
                    )}
                </div>
            </div>


        </div>
    );
}


export default AllPost