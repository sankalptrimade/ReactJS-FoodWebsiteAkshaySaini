// // import User from "./User";
// import React from "react";
// import UserClass from "./UserClass";
// import { Component } from "react";      //You can use like this also the way use in UserClass and here are same here we are destructuring it.


// class About extends Component {
//     constructor(props) {
//         super(props);
//         // console.log("Parent Constructor");
//       }

//     //   componentDidMount() {
//     //     console.log("Parent componentDidMount");
//     //   }
    
//     render() {
//         // console.log("Parent Render");
        
//         return (
//             <div className="about">
//               <h1>This is About Page</h1> 
//               <h2>Hi there welcome to the ReactJS course</h2>
//               <UserClass name="First Class" location="Raipur Class" />
//             </div>
//           );
//     }
// }

// // const About = () => {
// //   return (
// //     <div className="about">
// //       <h1>This is About Page</h1>
// //       <h2>Hi there welcome to the ReactJS course</h2>
// //       {/* <User name="Sankalp Trimade Function" location="Raipur Function" /> */}
// //       <UserClass name="Sankalp Trimade Class" location="Raipur Class" />
// //     </div>
// //   );
// // };

// export default About;


import React from "react";
import UserClass from "./UserClass";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class About extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="about p-10 text-white text-center min-h-screen flex flex-col justify-center items-center" style={{ background: "linear-gradient(135deg, #2d2f3a, #3a3d4a)" }}>
                <h1 className="text-5xl font-extrabold text-yellow-400 mb-6">About Our Restaurant</h1>
                <p className="text-xl mb-6 max-w-4xl mx-auto leading-relaxed">
                    Welcome to our culinary haven! We bring you the finest dishes, crafted with love and fresh ingredients. 
                    Whether you're craving a hearty meal or a delightful snack, our menu is designed to satisfy every palate.
                </p>
                <p className="text-xl mb-6 max-w-4xl mx-auto leading-relaxed">
                    At our restaurant, we prioritize quality, taste, and customer satisfaction. 
                    Our chefs are passionate about creating mouth-watering experiences that leave you coming back for more.
                </p>
                <p className="text-xl mb-6 max-w-4xl mx-auto leading-relaxed">
                    Our cozy ambiance, exceptional service, and diverse menu make us the perfect spot for a casual meal, 
                    a family gathering, or a special celebration. Join us and embark on a gastronomic adventure like never before!
                </p>
                <UserClass name="Guest Experience" location="Exceptional Dining" />
            </div>
        );
    }
}

export default About;


