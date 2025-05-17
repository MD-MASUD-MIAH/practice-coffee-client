import { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const AllUser = () => {
  const datas = useLoaderData();

  const [users, setUsers] = useState(datas);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://y-rouge-mu-18.vercel.app/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaingUser = users.filter((user) => user._id !== id);
            setUsers(remaingUser);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            console.log(data);
          });
      }
    });

    console.log(id);
  };

  return (
    <div className="w-11/12 mx-auto  min-h-[calc(100vh-100px)]  ">
      <div className="text-center  py-10 md:pt-20 space-y-5">
        <h1 className="text-3xl font-bold text-shadow-lg">Users List</h1>
        <p className="text-[#7D5A50]">
          Users List is a section where you can view and manage all registered
          users of the platform. It displays essential information such as
          usernames, email addresses, roles,
        </p>
      </div>

      <div className="py-10">
        <table className="table">
          <thead>
            <tr>
              <th className="hidden md:table-cell">No :</th>
              <th>Name</th>
              <th className="hidden md:table-cell">Address</th>
              <th className="hidden md:table-cell">Last Sign-In Time</th>
              <th>a</th>
            </tr>
          </thead>

          {users.map((user, index) => (
            <tbody key={user._id} user={user}>
              <tr>
                <td className="hidden md:table-cell">{index + 1}</td>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-8 w-8 md:h-12 md:w-12">
                        <img src={user.photo} alt={`${user.name}'s avatar`} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.email}</div>
                    </div>
                  </div>
                </td>

                <td className="hidden md:table-cell">
                  {user.address}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {user.phone}
                  </span>
                </td>

                <td className="hidden md:table-cell">{user.lastSignInTime}</td>

                <td>
                  <div className="flex gap-1 md:mr-4">
                    <Link to="#" className="hidden md:block">
                      <button className="btn btn-sm bg-[#D2B48C] text-white hover:bg-[#c1a373]">
                        <FaEye />
                      </button>
                    </Link>
                    <Link to="#">
                      <button className="btn btn-sm bg-gray-600 text-white hover:bg-gray-700">
                        <FaEdit />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllUser;
