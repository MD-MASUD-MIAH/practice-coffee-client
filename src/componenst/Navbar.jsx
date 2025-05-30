import { use } from "react";
import { Link, NavLink } from "react-router";
import Swal from "sweetalert2";
import nav from "../assets/hero.png";
import logo from "../assets/logo.png";
import { AuthContex } from "./context/AuthContex";

const Navbar = () => {
  const { user, singOUt } = use(AuthContex);

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to be Logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout it!",
    }).then((result) => {
      if (result.isConfirmed) {
        singOUt()
          .then(() => {})
          .catch((error) => {
            console.log(error.message);
          });

        Swal.fire({
          title: "Logout!",
          text: "Logout Successfully.",
          icon: "success",
        });
      }
    });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addcoffee">Add Coffee</NavLink>
      </li>
      <li>
        <NavLink to={`/add-coffee/${user.email}`}>My Coffee</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div
        className="flex  gap-5 justify-between items-center py-1 px-5"
        style={{
          backgroundImage: `url(${nav})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div></div>
        <div className="flex  justify-center items-center gap-4">
          <img className="w-[60px]" src={logo} alt="" />{" "}
          <h1 className=" text-xl md:text-3xl text-white">Espresso Emporium</h1>
        </div>

        <div className="flex justify-end items-center gap-10">
          <ul className="text-white flex gap-4 items-center justify-center">
            {links}
          </ul>
          <div>
            {user ? (
              <div className="flex gap-6">
                {user.photoURL && (
                  <img className="w-10 h-10" src={user.photoURL} alt="User" />
                )}
                <button
                  onClick={handleSignOut}
                  className="btn bg-[#E3B577] hover:bg-[#6F4E37] text-white"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="btn bg-[#E3B577] hover:bg-[#6F4E37] text-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
