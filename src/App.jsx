import { useEffect, useState } from 'react'
import { apiurl, filterData } from './data'
import NavBar from './components/NavBar'
import Filter from './components/Filters'
import Cards from './components/Cards'
import Spinner from './components/Spinner'

function App() {
  const [courses, setcourses] = useState({});
  const [loading, setloading] = useState(true);
  const [category, setcategory] = useState(filterData[0].title);

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

  }, []);

  return (
    <>
      <div className='min-h-screen flex flex-col bg-bgDark2'>
        <div>
          <NavBar />
        </div>
        <div className='bg-bgdark2'>
          <Filter 
            filterData={filterData}
            category={category}
            setcategory={setcategory}
          />
        </div>
        <div className=" w-11/12  max-w-[1200px]  mx-auto  flex flex-wrap  justify-center  items-center min-h[50vh]">
          {loading ? <Spinner /> : <Cards courses={courses} category={category}></Cards>}
        </div>
      </div>
    </>
  )
}

export default App
