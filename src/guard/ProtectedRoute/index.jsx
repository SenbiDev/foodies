import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import { selectAuth, setUserStatus } from "../../redux/reducers/authSlice";
import useIsUserAuthorized from "../../hooks/useIsUserAthorized";

const ProtectedRoute = () => {
    const { userStatus } = useSelector(selectAuth);
    const dispatch = useDispatch();
    const isUserAuthorized = useIsUserAuthorized();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(false);
        if (!isUserAuthorized) {
            dispatch(setUserStatus('unlogged'));
            navigate('/');
            setTimeout(() => dispatch(setUserStatus('')), 4000);
        }
    }, [dispatch, userStatus, isUserAuthorized, navigate]);

    if (loading) {
        return null;
    }

    // returns child route elements
    return <Outlet />
}

export default ProtectedRoute;