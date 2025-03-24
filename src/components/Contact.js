// const Contact = () => {
//   return (
//     <div className="contact">
//       <h1>This is Contact Us Page</h1>
//       <h2>Hi there welcome to the ReactJS course</h2>
//     </div>
//   );
// };

// export default Contact;

// import React from "react";

// const Contact = () => {
//     return (
//         <div className="contact p-10 text-white text-center min-h-screen flex flex-col justify-center items-center" 
//              style={{ background: "linear-gradient(135deg, #1e1f29, #2a2c39)" }}>
//             <h1 className="text-5xl font-extrabold text-yellow-400 mb-6">Contact Us</h1>
//             <p className="text-xl mb-6 max-w-3xl mx-auto leading-relaxed">
//                 Have any questions or need to make a reservation? Reach out to us, and our team will be happy to assist you!
//             </p>
//             <div className="contact-details text-lg">
//                 <p className="mb-4">📍 Location: 123 Food Street, Gourmet City</p>
//                 <p className="mb-4">📞 Phone: +1 234 567 890</p>
//                 <p className="mb-4">📧 Email: contact@restaurant.com</p>
//             </div>
//             <form className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg w-96">
//                 <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 bg-gray-700 text-white rounded" />
//                 <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 bg-gray-700 text-white rounded" />
//                 <textarea placeholder="Your Message" className="w-full p-3 mb-4 bg-gray-700 text-white rounded h-32"></textarea>
//                 <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-all">
//                     Send Message
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Contact;

// import React from "react";

// const Contact = () => {
//     return (
//         <div className="contact-page min-h-screen flex flex-col justify-center items-center text-white p-10" style={{ background: "linear-gradient(135deg, #2d2f3a, #3a3d4a)" }}>
//             <h1 className="text-5xl font-extrabold text-yellow-400 mb-6">Contact Us</h1>
//             <p className="text-lg max-w-3xl text-center mb-6">
//                 Have any questions or feedback? We'd love to hear from you! Fill out the form below or reach out to us directly.
//             </p>
            
//             <form className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
//                 <div className="mb-4">
//                     <label className="block text-gray-300 text-sm font-bold mb-2">Name</label>
//                     <input type="text" className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Enter your name" />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-300 text-sm font-bold mb-2">Email</label>
//                     <input type="email" className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Enter your email" />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-300 text-sm font-bold mb-2">Message</label>
//                     <textarea className="w-full p-3 rounded-md bg-gray-700 text-white h-32 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Write your message..."></textarea>
//                 </div>
//                 <button type="submit" className="w-full bg-yellow-400 text-gray-900 py-3 rounded-md font-bold text-lg hover:bg-yellow-500 transition">Send Message</button>
//             </form>
//         </div>
//     );
// };

// export default Contact;

import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <p>Have any questions or feedback? We'd love to hear from you! Fill out the form below or reach out to us directly.</p>
            
            <form className="contact-form">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea placeholder="Write your message..."></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
