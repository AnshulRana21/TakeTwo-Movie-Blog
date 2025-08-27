import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import appwriteService from "../appwrite/serve";
import { Button } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {

  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const { slug } = useParams();


  // got the data for/of the current user....
  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;



  useEffect(() => {

    if (slug) {

      appwriteService.getPost(slug).then((post) => {

        if (post) {

          // we get the data of that post, the put it in in the useState
          setPost(post);

        }

        else navigate("/");

      });

    }

    else navigate("/");


  }, [slug, navigate]);



  const deletePost = () => {

    appwriteService.deletePost(post.$id).then((status) => {

      if (status) {

        appwriteService.deleteFile(post.featuredImage);
        navigate("/dashboard");

      }
      
    });

  };



  return post ? (

    <div className="p-30 bg-blue-400">


      <div className="px-4 min-h-screen bg-transparent">

        {/* Featured Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-10 backdrop-blur-xl bg-white/20 border border-white/30">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="w-full h-[420px] object-cover object-center rounded-3xl"
          />
          {isAuthor && (
            <div className="absolute top-5 right-5 flex gap-3">
              <Link to={`/edit-post/${post.$id}`}>
                <Button className="hover:bg-emerald-500">
                  Edit
                </Button>
              </Link>
              <Button className="hover:bg-rose-700" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>

        {/* Post Content */}
        <div className="mx-auto max-w-6xl p-10 rounded-[2rem] backdrop-blur-2xl bg-white/50 border border-white/30 shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
          <h1 className="text-center text-5xl font-bold text-zinc-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="text-center text-sm text-gray-500 mb-6">
            {`Posted by User ID: ${post.userId} (User identity anonymized for privacy)`}
          </div>

          <article className="prose prose-lg max-w-none text-zinc-800">
            {parse(post.content)}
          </article>
        </div>

      </div>

    </div>
  ) : null;
}