
import { useLoaderData } from 'react-router-dom';
import './App.css';
import CoffeeCard from './component/CoffeeCard/CoffeeCard';

function App() {

const coffees = useLoaderData()
  return (
    <>
      <div>
        
     <h3 className='text-4xl mb-4 text-blue-300'>Our Popular Products</h3>
     <div className='grid md:grid-cols-2 gap-5'>
     {
        coffees.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee} />)
      }
     </div>
      </div>
    </>
  )
}

export default App
