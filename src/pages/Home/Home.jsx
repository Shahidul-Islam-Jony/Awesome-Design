import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            Hello
            <Link to="/login" className="btn btn-primary ml-4">Login</Link>
        </div>
    );
};

export default Home;