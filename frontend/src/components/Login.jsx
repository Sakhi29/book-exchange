import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.name);
      console.log(res.data.token);
      console.log(res.data.name);

      navigate("/add-book");
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
            Login
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
              <li className="text-white uppercase ml-2">Login</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        {/* Inner page banner */}

        {/* Inner page banner End */}
        {/* Contact area */}
        <section className="flex items-center justify-center w-[1080px]">
          {/* Product */}
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-between">
              {/* New Customer Section */}
              <div className="bg-white shadow-lg rounded-lg p-8 mb-4 md:mb-0 md:w-[48%]">
                <h4 className="text-2xl font-bold text-blue-950 mb-4">
                  NEW CUSTOMER
                </h4>
                <p className="text-gray-600 mb-6">
                  By creating an account with our platform, you will be able to
                  discover new books, and exchange new books and send requests
                  and more.
                </p>
                <a
                  className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-lg inline-block text-center"
                  href="/register"
                >
                  CREATE AN ACCOUNT
                </a>
              </div>

              {/* Login Section */}
              <div className="bg-white shadow-lg rounded-lg p-8 md:w-[48%]">
                <form onSubmit={onSubmit}>
                  <h4 className="text-2xl font-bold text-blue-950 mb-4">
                    LOGIN
                  </h4>
                  <p className="font-semibold mb-4 text-blue-950">
                    If you have an account with us, please log in.
                  </p>
                  <div className="mb-4">
                    <label className="block text-blue-950 mb-2 font-semibold">
                      E-mail address *
                    </label>
                    <input
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Your Email Id"
                      type="email"
                      name="email"
                      value={email}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-blue-950 mb-2 font-semibold">
                      Password *
                    </label>
                    <input
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Type Password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={onChange}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-lg"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Product END */}
        </section>
        {/* Contact area End */}
      </div>
    </>
  );
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const navigate = useNavigate();

  // const { email, password } = formData;

  // const onChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:5000/api/auth/login",
  //       formData
  //     );
  //     localStorage.setItem("token", res.data.token);
  //     console.log(res.data.token);

  //     navigate("/dashboard");
  //   } catch (err) {
  //     console.error(err.response.data.message);
  //   }
  // };

  // return (
  //   <form onSubmit={onSubmit} className="max-w-md mx-auto p-4">
  //     <h2 className="text-2xl font-bold mb-4">Login</h2>
  //     <input
  //       type="email"
  //       name="email"
  //       value={email}
  //       onChange={onChange}
  //       placeholder="Email"
  //       className="block w-full mb-3 p-2 border rounded"
  //       required
  //     />
  //     <input
  //       type="password"
  //       name="password"
  //       value={password}
  //       onChange={onChange}
  //       placeholder="Password"
  //       className="block w-full mb-3 p-2 border rounded"
  //       required
  //     />
  //     <button
  //       type="submit"
  //       className="w-full bg-blue-500 text-white p-2 rounded"
  //     >
  //       Login
  //     </button>
  //   </form>
  // );
}

export default Login;
