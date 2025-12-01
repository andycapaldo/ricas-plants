import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SessionContext from "contexts/sessionContext";

const RedirectToSignInIfSignedOut = (props) => {
  const { username } = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (username === null) {
      navigate("/");
    }
  }, [username]);

  return props.children;
};

export default RedirectToSignInIfSignedOut;
