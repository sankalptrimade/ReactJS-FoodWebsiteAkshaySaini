// import { useRouteError } from "react-router";

// const Error = () => {
//     const error = useRouteError();
//     return (
//         <div className="error">
//             <h1>Ooppss, its an error</h1>
//             <h2>Something went wrong!!!</h2>
//             <h2>{error.status} : {error.statusText}</h2>
//         </div>
//     )
// }

// export default Error;
import { useRouteError } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

const Error = () => {
    const error = useRouteError();
    return (
        <div className="container text-center d-flex flex-column justify-content-center align-items-center vh-100">
            <h1 className="display-3 text-danger fw-bold">Oops! Something went wrong</h1>
            <h2 className="text-muted">We encountered an unexpected issue.</h2>
            {error && (
                <h3 className="text-dark">
                    Error {error.status} : {error.statusText}
                </h3>
            )}
            <a href="/" className="btn btn-primary mt-3">Go Back Home</a>
        </div>
    );
};

export default Error;
