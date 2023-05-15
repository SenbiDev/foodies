import { useSelector } from "react-redux";
import { selectAuth } from "../redux/reducers/authSlice";

function useIsUserAuthorized() {
    const { token } = useSelector(selectAuth);

    return token === 'undefined' || token === undefined || token === null ? false : true;
}

export default useIsUserAuthorized;