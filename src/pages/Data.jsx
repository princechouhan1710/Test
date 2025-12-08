import { useState } from 'react'
import { useEffect } from 'react'
function Data() {
    let [products,setProducts] =useState([]);
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then((res)=>res.json())
        .then((data)=>setProducts(data.products));
    },[]);
     const handleDelete = (id) => {
   setProducts(products.filter((item) => item.id !== id));
 };
   return (
     <div className='w-[80%] mx-auto  my-5' >
       

       <table border="1" width="100%" cellPadding="10" className='border border-separate border-gray-400'>
         <thead>
           <tr className='bg-gray-400 h-10 text-xl text-center border-separate' >
             <th className='text-center border'>ID</th>
             <th className='text-center'>Thumbnail</th>
             <th className='text-center'>Title</th>
             <th className='text-center'>Price</th>
             <th className='text-center'>Brand</th>
             <th className='text-center'>Category</th>
             <th className='text-center'>Delete</th>
           </tr>
         </thead>

         <tbody className='border-separate border-gray-400'>
           {  (
            products.map((item) => (
               <tr key={item.id} className='border-separate border-gray-400'>
                 <td className='text-center border-separate border-gray-400 border'>{item.id}</td>
                 <td className='text-center border'>
                   <img src={item.thumbnail} alt="" width="50" className='text-center'/>
                 </td>
                 <td className='text-center'>{item.title}</td>
                 <td className='text-center'>${item.price}</td>
                 <td className='text-center'>{item.brand}</td>
                 <td className='text-center'>{item.category}</td>
                 <td className='text-center'>
                   <button
                     onClick={() => handleDelete(item.id)}
                     style={{
                       background: "red",
                       color: "white",
                       padding: "5px 10px",
                       border: "none",
                       cursor: "pointer",
                     }}
                   >
                     Delete
                   </button>
                 </td>
               </tr>
             ))
           )}
         </tbody>
       </table>
     </div>
   );
 }

 export default Data;

