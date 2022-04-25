import React , {useState,useEffect} from "react";
import axios from 'axios';
const HomeScreen = () => {
    const [loading,setLoading] = useState(true);
    const [studentList,setStudentList] = useState([]);

    useEffect(()=>{
        axios({
            method:"GET",
            url:"https://nitc.cleverapps.io/api/student",
        }).then(response=>{
            var res = response.data;
            setStudentList(res.data);
            setLoading(false);
        })
    },[]);


    /// custom component 
    const ListStudent = (props) => {
        return (
            <div
                style={{
                    backgroundColor:'red',
                    padding:10,
                    marginTop:20
                }}
            >
                <h1>{props.fname}-{props.lastname}</h1>
                <div>{props.tel}</div>
                <p>{props.email}</p>
            </div>
        )
    }


    return (
        <div>
            {loading === true && <h4>Loading...</h4>}
            {
                studentList.map((item,index)=>{
                    return (
                        <ListStudent
                            key={index}
                            fname={item.fname}
                            lastname={item.lastname}
                            tel={item.tel}
                            email={item.email}
                        />
                    )
                })
            }
        </div>
    )

}
export default HomeScreen;



{/* <ProductCart
    name = "Macbook 2000"
    categroy = "Mac"
    ram = "256G"
    cpu = "core"
/> */}

// Review 
// -install project ok 
// -understand project default folder/file
// -Say hello 
//     import React from "react"
//     const HomeScreen = () => {
//         return (
//             <div>
//                 <h1 class>Hello</h1>
//                 <h1>Hello</h1>
//                 <h1>Hello</h1>
//                 <h1>Hello</h1>
//                 <h1>Hello</h1>
//             </div>
//         )
//     }
//     export default HomeScreen;
// - HTML element 
//     h1 - h2
//     list 
//     table 
//     image 
//     video 
//     cart 
//     menu 
//     button 
//     form 
//     input
// - CSS 
// - JavaScript 
//     variable 
//         let var const 
//     function 
//     event 
//     loop
//     ....
// - Declare variable / display 
// - function / call 
// - Route 
// - state + array / render    
//     insert show update delete  
// - How to declare state 
//     const [stateName,setTer] = userState(initialize)
// - Componet 
//     how create / call / props

