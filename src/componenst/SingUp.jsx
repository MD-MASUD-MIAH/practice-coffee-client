import { use } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContex } from "./context/AuthContex";
const SingUp = () => {
  const { handleingup } = use(AuthContex);

  const handleSingup = (e) => {
    e.preventDefault();

    const fmrs = e.target;

    const frData = new FormData(fmrs);
    const newUser = Object.fromEntries(frData.entries());

    const { email, password, ...restDAta } = newUser;

    console.log(email, password, restDAta);

    handleingup(email, password)
      .then((res) => {
        console.log(res.user);

        const userProfile = {
          email,
          ...restDAta,
          creationTime: res.user?.metadata?.creationTime,
          lastSignInTime: res.user?.metadata?.lastSignInTime,
        };

        fetch("https://y-rouge-mu-18.vercel.app/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Sing Up successfully!",
              icon: "success",
              draggable: true,
              timer: 1500,
            });

            console.log("after add data", data);
          });
      })
      .catch((data) => {
        console.log(data.message);
      });
  };
  return (
    <div>
      <div>
        <div className=" w-11/12 mx-auto py-10 flex min-h-[calc(100vh-200px)] flex-col items-center justify-center">
          <div className="md:max-w-sm   mx-auto border rounded p-6 shadow ">
            <h2 className="text-xl font-semibold mb-6">Sing Up Now !!</h2>
            <form onSubmit={handleSingup} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input
                  required
                  name="name"
                  type="text"
                  className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
                  placeholder="Enter you name"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Address</label>
                <input
                  required
                  name="address"
                  type="text"
                  className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
                  placeholder="Enter your Address"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Phone</label>
                <input
                  required
                  name="phone"
                  type="text"
                  className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Photo URL</label>
                <input
                  required
                  name="photo"
                  type="text"
                  className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
                  placeholder="Enter your username Phone URL"
                />
              </div>

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

              <button
                type="submit"
                className="w-full bg-[#E3B577] hover:bg-[#6F4E37] text-white py-2 rounded shadow-lg hover:shadow-purple-500/50 transition duration-300 "
              >
                SingUp
              </button>

              <p className="text-center text-sm mt-4">
                Don’t have an account? Please{" "}
                <Link to="/login" href="#" className="text-[#E3B577] underline">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
