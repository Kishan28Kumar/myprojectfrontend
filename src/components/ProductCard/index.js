import "./index.css";

function ProdcutCard({props}){
    return (
        <>
            <div className="card">
                <img className="product-img"src={props.imgURL} />
                <p>Name: {props.Name}</p> 
            </div>
        </>
    )
}

export default ProdcutCard;