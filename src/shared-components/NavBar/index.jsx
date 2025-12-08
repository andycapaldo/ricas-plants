import SessionContext from "contexts/sessionContext";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";

const NavBar = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { username, signOut } = useContext(SessionContext);

  return (
    <nav 
        className="bg-emerald-800 flex justify-center font-lato"
        onMouseLeave={() => setUserMenuOpen(false)}
    >
      <div className="flex items-center w-full max-w-5xl justify-between px-8 py-2">
        <Link to='/plants'>
          <div className="font-playfair text-white text-2xl flex flex-col items-center">
            <img
              className="w-10"
              src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
            />
            Rica's Plants
          </div>
        </Link>
        <div className=" flex-1 flex justify-end">
            <div className="relative min-w-32">
                <button
                    className="text-emerald-200 flex items-center"
                    onClick={() => setUserMenuOpen(true)}
                >
                    <i className="fa-solid fa-user text-xl mr-2"></i>
                    {username}
                </button>
                {userMenuOpen && (
                    <div className="absolute bottom-[-46px] left-0 bg-white mt-20 rounded-md shadow-md">
                    <button className="text-slate-500 hover:text-emerald-700 px-4 py-2"
                        onClick={signOut}
                    >
                        <i className="mr-2 fa-solid fa-arrow-right-from-bracket"></i>
                        sign out
                    </button>
                    </div>
                )}
            </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
