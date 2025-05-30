import { use } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContex } from "./context/AuthContex";
import Google from "./Google";
const Login = () => {
  const { handlSing } = use(AuthContex);

  const hadleSingin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    handlSing(email, password)
      .then((res) => {
        const singInInfo = {
          email,
          lastSignInTime: res.user?.metadata?.lastSignInTime,
        };

        console.log(res.user);

        return fetch("http://localhost:5000/user", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(singInInfo),
        });
      })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Sign in successful!",
          icon: "success",
          timer: 1500,
        });
        console.log(data);
      })
      .catch((error) => {
        console.error("Sign in failed:", error);
      });
  };

  return (
    <div>
      <div>
        <div className=" w-11/12 mx-auto py-10 flex min-h-[calc(100vh-200px)] flex-col items-center justify-center">
          <div className="md:max-w-sm   mx-auto border rounded p-6 shadow ">
            <h2 className="text-xl font-semibold mb-6">Login Now !!</h2>
            <form onSubmit={hadleSingin} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Username or Email</label>
                <input
                  required
                  name="email"
                  type="email"
                  className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
                  placeholder="Enter your username or email"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Password</label>
                <input
                  name="password"
                  type="password"
                  className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex items-center justify-between text-sm"></div>

              <button
                type="submit"
                className="w-full bg-[#E3B577] hover:bg-[#6F4E37] text-white py-2 rounded shadow-lg hover:shadow-purple-500/50 transition duration-300 "
              >
                Login
              </button>

              <p className="text-center text-sm mt-4">
                Don’t have an account? Please{" "}
                <Link
                  to="/singup"
                  href="#"
                  className="text-[#E3B577] underline"
                >
                  Register
                </Link>
              </p>
            </form>
            <div className="divider text-0">OR</div>
            <div className="  flex items-center justify-center">
              <Google></Google>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
