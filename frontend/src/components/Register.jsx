import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import React from "react";
import Header from "./Header";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      console.error(err.response.data.message);
    }
  };
  return (
    <>
      <Header />
      <div
        className="relative w-full h-[450px] bg-cover bg-center md:h-[300px] sm:h-[230px]"
        style={{ backgroundImage: "url('images/background/bg3.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-950 opacity-90 clip-path-polygon"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-white text-[3.5rem] font-bold md:text-[40px] sm:text-[30px]">
            Registration
          </h1>
          <nav
            aria-label="breadcrumb"
            className="relative z-10 flex justify-center"
          >
            <ul className="flex p-4 rounded-md mt-4">
              <li className="text-white uppercase mr-2">
                <a href="/" className="hover:text-gray-200">
                  Home
                </a>
              </li>
              <li className="text-white uppercase">›</li>
              <li className="text-white uppercase ml-2">Registration</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex items-center justify-center">
        {/* Inner page banner */}

        {/* Inner page banner End */}
        {/* Contact area */}
        <section className="flex items-center justify-center w-[620px]">
          <div className="flex w-full">
            <div className="row justify-center">
              <div className="col-lg-6 col-md-6 mb-4">
                <div className="p-[30px] h-[100%] m-[3%] rounded-lg shadow-md">
                  <form onSubmit={onSubmit}>
                    <h4 className="text-blue-950 font-bold text-2xl mb-4 uppercase">
                      Registration
                    </h4>
                    <p className="font-semibold mb-6 text-blue-950">
                      If you don't have an account with us, please register.
                    </p>
                    <div className="mb-4">
                      <label className="label-title block mb-2 font-medium text-blue-950">
                        Username *
                      </label>
                      <input
                        name="name"
                        required
                        className="form-control w-full px-4 py-2 border rounded-md "
                        placeholder="Your Username"
                        type="text"
                        onChange={onChange}
                        value={name}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="label-title block mb-2 font-medium text-blue-950">
                        Email address *
                      </label>
                      <input
                        name="email"
                        required
                        className="form-control w-full px-4 py-2 border rounded-md"
                        placeholder="Your Email address"
                        type="email"
                        onChange={onChange}
                        value={email}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="label-title block mb-2 font-medium text-blue-950">
                        Password *
                      </label>
                      <input
                        name="password"
                        required
                        className="form-control w-full px-4 py-2 border rounded-md"
                        placeholder="Type Password"
                        type="password"
                        onChange={onChange}
                        value={password}
                      />
                    </div>
                    <div className="mb-5">
                      <small className="text-gray-600">
                        Your personal data will be used to support your
                        experience throughout this website, to manage access to
                        your account, and for other purposes described in our{" "}
                        <a href="privacy-policy.html" className="text-blue-500">
                          privacy policy
                        </a>
                        .
                      </small>
                    </div>
                    <div className="text-left">
                      <button className="btn btn-primary btnhover w-full py-2 bg-orange-400 hover:bg-orange-500 text-white rounded-md">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact area End */}
      </div>
    </>
  );
};

export default Register;

// function Register() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const { name, email, password } = formData;

//   const onChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/register",
//         formData
//       );
//       localStorage.setItem("token", res.data.token);
//       navigate("/dashboard");
//     } catch (err) {
//       console.error(err.response.data.message);
//     }
//   };

//   return (
//     <form onSubmit={onSubmit} className="max-w-md mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Register</h2>
//       <input
//         type="text"
//         name="name"
//         value={name}
//         onChange={onChange}
//         placeholder="Name"
//         className="block w-full mb-3 p-2 border rounded"
//         required
//       />
//       <input
//         type="email"
//         name="email"
//         value={email}
//         onChange={onChange}
//         placeholder="Email"
//         className="block w-full mb-3 p-2 border rounded"
//         required
//       />
//       <input
//         type="password"
//         name="password"
//         value={password}
//         onChange={onChange}
//         placeholder="Password"
//         className="block w-full mb-3 p-2 border rounded"
//         required
//       />
//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white p-2 rounded"
//       >
//         Register
//       </button>
//     </form>
//   );
// }

// export default Register;
