import appwriteService from "../appwrite/serve";
import { Link } from "react-router";



function PostCard({ $id, title, featuredImage}) {




  return (


    <Link
      to={`/post/${$id}`}
      className="block group transition-transform transform hover:scale-[1.02]"
    >



      <div className="rounded-2xl bg-white/50 shadow-md overflow-hidden flex flex-col h-full">


        {/* Image */}
        <div className="h-56 overflow-hidden">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>



        {/* Text Content */}
        <div className="p-5 flex flex-col gap-2">

          <h2 className="text-xl font-serif font-semibold text-black ">
            {title}
          </h2>

         



        </div>

      </div>

    </Link>

  );
}

export default PostCard;
