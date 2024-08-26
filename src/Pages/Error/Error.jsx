import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <p>oops error</p>
            <Link to={"/"}>
            <Button>Back to home</Button>
            </Link>
        </div>
    );
};

export default Error;