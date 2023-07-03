import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to="/home">
                <button>HOME</button>
            </Link>
            <Link to="/about">
                <button>ABOUT</button>
            </Link>
        </div>
    );
};

export default Header;
