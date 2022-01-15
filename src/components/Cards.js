import React from "react";

const Cards = (props) => {
    return (
                <div className="card" style={{ width: "18rem" }}>
                    <img src={props.img || 'https://www.lagzero.net/wp-content/uploads/2008/11/cueck.jpg'} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"> {props.title || 'titulo'} </h5>
                        <p className="card-text"> {props.desc || 'descripcion'} </p>
                        <a href={props.url || 'https://www.youtube.com/watch?v=Om6tCq_tC5I'} target={"__blank"} class="btn btn-primary"> {props.btntxt || 'texto boton'} </a>
                    </div>
                </div>
    );
}

export default Cards;