import { useState } from 'react'
import { useEffect } from 'react'
function Data() {
    let [products,setProducts] =useState([]);
  const [filterText, setFilterText] = useState("");
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then((res)=>res.json())
        .then((data)=>setProducts(data.products));
    },[]);
     const handleDelete = (id) => {
   setProducts(products.filter((item) => item.id !== id));
 };
   const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(filterText.toLowerCase())
  );
   return (
     <div className='w-[80%] mx-auto  my-5' >
     <input
  type="text"
  placeholder="Search products..."
  value={filterText}
  onChange={(e) => setFilterText(e.target.value)}
  className="px-3 py-2 w-72 mb-5 text-lg border border-gray-300 rounded-lg "
/>

       <table border="1" width="100%" cellPadding="10" className='border border-separate border-gray-400'>
         <thead>
           <tr className='bg-gray-400 h-10 text-xl text-center border-separate' >
             <th className='text-center px-3 '>ID</th>
             <th className='text-center '>Thumbnail</th>
             <th className='text-center'>Title</th>
             <th className='text-center'>Price</th>
             <th className='text-center'>Brand</th>
             <th className='text-center'>Category</th>
             <th className='text-center'>Delete</th>
           </tr>
         </thead>

         <tbody className='border-separate border-gray-400'>
           {  (
             filteredProducts.map((item) => (
               <tr key={item.id} className='border-separate border-gray-400'>
                 <td className='text-center border-separate border-gray-400 border'>{item.id}</td>
                 <td className='text-center border w-50'>
                   <img src={item.thumbnail} alt=""  className='text-center m-auto flex justify-center items-center w-[50px]'/>
                 </td>
                 <td className='text-center border'>{item.title}</td>
                 <td className='text-center border'>${item.price}</td>
                 <td className='text-center border'>{item.brand}</td>
                 <td className='text-center border'>{item.category}</td>
                 <td className='text-center border'>
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

