import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, photo, name, price, taste } = coffee;

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);

      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });

              const reaminingCoffees = coffees.filter((cof) => cof._id !== _id);

              setCoffees(reaminingCoffees);
            }

            console.log("delete coffee", data);
          });
      }
    });
  };

  return (
    <div>
      <div>
        <div>
          <div className="flex items-center gap-2 md:gap-6 bg-[#F5F4F1] shadow-md py-4 px-8 rounded-xl w-full ">
            <img
              src={photo}
              image
              URL
              alt="Coffee"
              className=" w-20 md:w-24 h-28 md:h-32 object-contain "
            />
            <div className="flex flex-col justify-between flex-grow">
              <p>
                <span className="font-semibold">Name:</span> {name}
              </p>
              <p>
                <span className="font-semibold">Taste :</span> {taste}
              </p>
              <p>
                <span className="font-semibold">Price:</span> {price}
              </p>
            </div>
            <div className="flex flex-col gap-2 md:mr-4">
              <Link to={`/details/${_id}`}>
                <button className="btn btn-sm bg-[#D2B48C] text-white hover:bg-[#c1a373]">
                  <FaEye />
                </button>
              </Link>
              <Link to={`/update/${_id}`}>
                <button className="btn btn-sm bg-gray-600 text-white hover:bg-gray-700">
                  <FaEdit />
                </button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
