const SingleProducts = ({product ,abc}) => {
    // console.log(abc)
    return (
        <div>
            <div className="card">
              <img src={product.image} alt="" className="card-img" />
              <h1>{product.title.slice(0,10)}</h1>
              <p>{product.description}</p>
              <div className="card-footer">
                <h1>{product.price}$</h1>
                <button onClick={(e)=>abc(product)} className="add-btn">Add to card</button>
              </div>
            </div>
            
        </div>
    );
};

export default SingleProducts;