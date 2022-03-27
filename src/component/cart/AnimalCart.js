import React from "react";

const AnimalCart = (props) => {

    return (
        <div 
            style={{
                padding:10,
                marginBottom:50,
                backgroundColor:"yellow",
                borderRadius:10
            }}
        >
            <h1>{props.name}</h1>
            <p>
                {props.description}
            </p>
            <img
                alt={"Animal image"}
                style={{
                    borderRadius:100,
                    width:200,
                    height:200,
                }}
                src={props.image_url}
                
            />
            <button>Details</button>
        </div>
    )
}

export default AnimalCart;