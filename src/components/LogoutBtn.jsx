import { useDispatch } from "react-redux"
import authService from "../appwrite/auth"
import { logout } from "../store/authSlice"
import { useNavigate } from "react-router";




function LogoutBtn() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService.logout().then(() => {
    
            dispatch(logout());
            navigate("/", {replace:true});
        })
    }

    return (
        <button
            onClick={logoutHandler}

            className=" text-black bg-white shadow-emerald-800 font-semibold tracking-widest px-5 py-1.5 rounded-xl shadow-md  hover:bg-black hover:text-white hover:border hover:border-black "
        >
            LOGOUT
        </button>
    )
}

export default LogoutBtn;


