import { useEffect, useState } from 'react';
import axios from 'axios'
export default function Data1() {
 

  let [data, setData] = useState([])


  let getdata = () => {
    axios.get("https://dummyjson.com/comment")
      .then((result) => {
        console.log(result)
        setData(result.data)
        
        
      
      }).catch((err) => {
          console.log(err)})
  }
  useEffect(() => {
    getdata()
  }, [])


 

 
 
 


  return (
      <div className='p-5 w-100' >
      
      
      
        <div className="d-flex gap-4 flex-wrap  justify-content-evenly ">
          {data?.length && data.map((v, i) => {
            
            return <div key={v._id} className=' flex-grow p-2  border bg-success text-white'  style={{width:"180px"}}>
              <img
              className='text-center'
                width="100px"
                height="100px"
                style={{ objectFit: "contain" }}
                src={
                  v?.images?.[0]?.url
                    ? v.images[0].url.replace("http://localhost:4000", "https://edu-wnys.onrender.com")
                    : "https://via.placeholder.com/100?text=No+Image"
                }
                alt={v.name}
              />            <p>{v.name}</p>
              <p>{v.price}</p>
              <p>{v.review}</p>
              {/* <button className='btn btn-danger' onClick={() => { deleteHandler(v._id) }}>Delete  </button>
              <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { updatehandler(v) }}>Update  </button> */}
            </div>
          })}
        </div>
     
      </div>
  )
}


