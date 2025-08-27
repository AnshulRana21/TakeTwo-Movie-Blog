import { useEffect,useState } from "react";
import { PostForm } from "../components";
import appwriteService from "../appwrite/serve";
import { useNavigate,useParams } from "react-router";

function EditPost(){

    const [post,setPosts] =useState(null)
    const {slug} = useParams();
    const navigate = useNavigate();

    const createImage = "https://static01.nyt.com/images/2020/10/05/arts/05social-network01/05social-network01-superJumbo-v3.jpg?quality=75&auto=webp"


    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

    return post? (
        <div className="p-20 bg-right-bottom"
        style={{backgroundImage: `url(${createImage})`}}>

            <div className='w-full max-w-7xl mx-auto px-4'>
                <PostForm post={post}/>
            </div>

        </div>
    ) :null


}


export default EditPost;