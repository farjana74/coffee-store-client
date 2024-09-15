import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const {_id, name, chef, supplier, taste, category, details, photoUrl } = coffee;

  const handleDelete = (_id)=>{
console.log(_id)
swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel!",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    // swal.fire({
    //   title: "Deleted!",
    //   text: "Your file has been deleted.",
    //   icon: "success"
    // });
  }
  })
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
          <button onClick={()=>handleDelete(_id)} className="btn bg-orange-500">DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
