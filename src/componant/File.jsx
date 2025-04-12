import React from 'react';
import { useEffect, useState } from 'react';


const File = () => {

 const [products, setProducts] = useState([])
     
     useEffect(() => {
          fetch("Product.json")
               .then(res => res.json())
               .then(data => setProducts(data))
     }
     , [])
     console.log(products); 
     
     return (
          <div>

                <div>
                  

               </div>
               <div>
         
               </div>
               
          </div>
     );
}

export default File;
