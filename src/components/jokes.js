import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../store/jokes";

const Jokes = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.list);

    useEffect(() => {
        dispatch(loadPosts()); }, [dispatch]);

    return (
        <div className="col-md-12 text-center">
            <h1 className="text-success">Jokes</h1>
            <ul>
               
                <h2 className="text-danger">{posts.id}</h2>
                <h3 className="text-primary">{posts.setup}</h3>
                <h4 className="secondary">{posts.punchline}</h4>
            </ul>
        </div>
    );
};

export default Jokes;
