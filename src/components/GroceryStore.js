// const GroceryStore = () => {
//     return (
//         <div className="grocery-store">
//             <h1>Hello and welcome to our grocery store.</h1>
//         </div>
//     )
// }

// export default GroceryStore

import "bootstrap/dist/css/bootstrap.min.css";

const GroceryStore = () => {
    return (
        <div className="container text-center d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
            <h1 className="display-4 text-success fw-bold">Welcome to Our Grocery Store</h1>
            <p className="lead text-muted">Your one-stop destination for fresh and quality groceries.</p>
            <a href="/" className="btn btn-success mt-3 px-4 py-2">Shop Now</a>
        </div>
    );
};

export default GroceryStore;
