import SessionContext from "contexts/sessionContext";
import { useContext } from "react";

const NavBar = () => {
    const { username } = useContext(SessionContext);

    return <nav className="bg-emerald-800 flex justify-center font-lato">
        <div className="flex items-center w-full max-w-5xl justify-between px-8 py-2">
            <div className="font-playfair text-white text-2xl flex flex-col items-center">
                <img className="w-10" src='https://static-task-assets.react-formula.com/capstone_logo_light.png' />
                Rica's Plants
            </div>
            <div className="">
                <button className="text-emerald-200 flex items-center">
                    <i className="fa-solid fa-user text-xl mr-2"></i>{username}
                </button>
            </div>
        </div>
    </nav>
};

export default NavBar;