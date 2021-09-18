import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const requireAuth = (Children) => {
  const AuthChecker = () => {
    const authState = useSelector((state) => state.auth);
    const history = useHistory();
    useEffect(() => {
      if (!authState) {
        history.replace("/");
      }
    }, [authState, history]);

    return <Children />;
  };
  return AuthChecker;
};

export default requireAuth;
