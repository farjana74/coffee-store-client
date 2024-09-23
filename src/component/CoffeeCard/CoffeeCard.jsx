import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee }) => {

    // const { _id, name, quantity, supplier, taste, photo } = coffee;

    const { _id, name, chef, supplier, taste, category, details, photoUrl } = coffee;
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            // const remaining = coffees.filter(cof => cof._id !== _id);
                            // setCoffees(remaining);
                        }
                    })

            }
        })
    }

    return (
      <div className="card card-side  shadow-xl  bg-orange-50">
      <figure>
        <img className="w-40" src={photoUrl} alt="Movie" />
      </figure>
      <div className="card-body flex justify-between">
        <div>
          <h2 className="">{name}</h2>
          <p>{details}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-[#D2B48C]">VIEW</button>
          <button className="btn btn-orange-500">UPDATE</button>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-orange-500 text-white"
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
    );
};

export default CoffeeCard;