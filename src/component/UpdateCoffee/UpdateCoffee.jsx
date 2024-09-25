import { useLoaderData } from "react-router-dom";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    console.log(coffee)
    const {_id, name, chef, supplier, taste, category, details, photoUrl } = coffee;

    return (
        <div>
            <h3>update cofee:{coffee._id}</h3>
           





            {/* const { _id, name, chef, supplier, taste, category, details, photoUrl } = coffee; */}

        </div>
    );
};

export default UpdateCoffee;