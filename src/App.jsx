
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import SingleProducts from './assets/SingleProducts'

function App() {
  // data store 
  const [products , setProducts] =useState([]);
  const [cart , setCart] = useState ([]);
    useEffect(()=>{
        fetch("Fake-data.json")
        .then(res =>res.json())
        .then (data =>{
          setProducts(data)
        })
    } ,[]);
    const handleCart = (p) =>{
      const isExist = cart.find((pd) =>pd.id == p.id)
          if (!isExist){
            setCart([...cart , p])
          }
          else{
            alert("already selected")
          }
    }

    const handleDelete =(id) =>{
      const newCart = cart.filter(item => item.id !=id)
      setCart(newCart)

    }

    // console.log(cart)
  return (
    <>
      <div className='main-container'>
        <div className='cards-container'>
          {
            products.map((pd)=> <SingleProducts 
            product={pd}
            abc={handleCart}></SingleProducts>)
          }
        </div>
        <div className='cart-container'>
            <h1>this is cart</h1>
            <div className="cart-title">
              <h5>Name :</h5>
              <h5>Price :</h5>
            </div>
            <div>
             {
              cart.map((item ,index) =>(
                <div className='cart-info'>
                  <p>{index+1}</p>
                  <h5>Name: {item.title.slice(0,10)}</h5>
                  <h5>Price:{item.price}</h5>
                  <button onClick={()=>handleDelete(item.id)}>Delete</button>
              </div>
              ))
              
             }
            </div>
        </div>
      </div>
    </>
  )
}

export default App
