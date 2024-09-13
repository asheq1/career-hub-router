import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="mx-auto">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has ocurred</p>
            <Link to="/"><button className="btn btn-ghost">Home</button></Link>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;