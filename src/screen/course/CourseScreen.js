import React from 'react';
import AnimalCart from '../../component/cart/AnimalCart';
const pig_url = require("../../assets/image/animal/pig.jpg")
const cat_url = require("../../assets/image/animal/cat.jpg")
const tiger_url = require("../../assets/image/animal/tiger.jpg")

const CourseScreen = () => {

    // sample create component
    const MyComponen1 = () => <h1>Demo1</h1>;
    const MyComponent2 = () => (<h1>Demo2</h1>);

    const MyComponent3 = () => (
        // var x = 0 can not declare some variable
        <div>
            <h1>Demo3</h1>
            <h1>Demo3</h1>
        </div>
    );

    const MyComponent4 = () => {
        var x = 0;
        x = 100;
        if(x > 100){

        }
        return(
            <div>
                {x}
            </div>
        )
    }



    return(
        <div>
            <h1>Page Course</h1>
            {/* call component */}
            <MyComponen1/>
            <MyComponent2/>
            <MyComponent3/>
            <MyComponent4 />

            <AnimalCart 
                names = "Pig"
                image_url={pig_url}
                description = {"description about pig"}
            />
            <AnimalCart 
                name = "Cat"
                image_url={cat_url}
                description = {"description about Cat"}

            />
            <AnimalCart 
                name = "Tiger"
                image_url={tiger_url}
                description={"description about Tiger"}
            />

            {
                ["Animal1","Animal2","Animal3"].map((item,index)=>{
                    return (
                        <AnimalCart 
                            name = {item}
                            image_url={tiger_url}
                            description={"description about Tiger"}
                        />
                    )
                })
            }
            

            {/* name and color are props in component Animal */}

        </div>
    )
}

export default CourseScreen;


// create component

