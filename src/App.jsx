import { useEffect, useState } from 'react'
import './App.css'
import { apiurl, filterData} from './data'
import NavBar from './components/NavBar'
import Filter from './components/Filters'
import Cards from './components/Cards'
import Spinner from './components/Spinner'

function App() {
  const[courses ,setcourses]=useState({});
  const[loading,setloading]=useState(true);
  const[category,setcategory]=useState(filterData[0].title);

  async function fetchdata() {

    setloading(true);
    try {
      let response = await fetch(apiurl);
      let output = await response.json();
      setcourses(output.data);
      // console.log(output);
    }
    catch (error) {
      console.log("Error");
    }
    setloading(false);
  }

  useEffect(() => {
    fetchdata();

  },[]);

  return (
    <>
    <div>
      <div>
        <NavBar/>
        <Filter 
        filterData={filterData}
        category={category}
        setcategory={setcategory}
        />
        <div>
          {loading ?<Spinner/> : <Cards courses={courses} category={category}></Cards>}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
