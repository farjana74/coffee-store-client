
const AddCoffee = () => {
    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;

        const newCoffee = {name, chef,supplier, taste, category, details, photoUrl };
        console.log(newCoffee)

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(`Server error: ${res.status}`);
            }
            return res.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error('Fetch error:', error));

    }
  return (
    <div className="bg-[#F4F3F0] p-20">
      <h3 className="text-center text-3xl text-bold mb-3">Add coffee</h3>
      <form onSubmit={handleSubmit} action="">
        {/* form row */}
      <div className="flex mb-4">
        <div className="md:w-1/2 ">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow w-full" name = "name" placeholder="Enter Coffee Name" />
          </label>
        </div>
        <div className="md:w-1/2 ml-4">
          <label className="input input-bordered flex items-center gap-2">
            
            <input type="text" className="grow w-full" name="chef" placeholder="Enter Coffee Chef" />
          </label>
        </div>
      </div>
      <div className="flex mb-4 ">
        <div className="md:w-1/2 ">
          <label className="input input-bordered flex items-center gap-2">
            
            <input type="text" className="grow w-full" name = "supplier" placeholder="Enter Coffee Suplier" />
          </label>
        </div>
        <div className="md:w-1/2 ml-4">
          <label className="input input-bordered flex items-center gap-2">
         
            <input type="text" className="grow w-full" name="taste" placeholder="Enter Coffee Taste" />
          </label>
        </div>
      </div>
      <div className="flex mb-4">
        <div className="md:w-1/2 ">
          <label className="input input-bordered flex items-center gap-2">
            
            <input type="text" className="grow w-full" name = "category" placeholder="Enter Coffee Category" />
          </label>
        </div>
        <div className="md:w-1/2 ml-4">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow w-full" name="details" placeholder="Enter Coffee Details" />
          </label>
        </div>
        
      </div>
     <div>
     <div className="w-full ">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow w-full" name="photoUrl" placeholder="Enter Coffee Photo " />
          </label>
        </div>
     </div>
     {/* <button type="button"></button> */}
     <input type="submit" value="Add Coffee" className="btn btn-primary mt-4" />
      </form>
    </div>
  );
};

export default AddCoffee;
