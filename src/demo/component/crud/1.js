// inline style 
// internal style 
// external style

// Component 

import React,{useState} from "react";
import AnimalCart from "../../component/cart/AnimalCart";
import "./style1.css";
const HomeScreen = () => {

    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [gender,setGender] = useState("");
    const [salary,setSalary] = useState("");

    const [isIndexUpdate,setIsIndexUpdate] = useState(null);

    const [arrStaff,setArrStaff] = useState([]);

    const handleAdd = () => {
        if(isIndexUpdate !== null){
            // arrStaff[isIndexUpdate].fname = fname;
            // arrStaff[isIndexUpdate].lname = lname;
            // arrStaff[isIndexUpdate].gender = gender;
            // arrStaff[isIndexUpdate].salary = salary;
            // setArrStaff([...arrStaff]);

            var dataNew = {
                "fname" : fname,
                "lname" : lname,
                "gender" : gender,
                "salary" : salary,
            }
            arrStaff[isIndexUpdate] = dataNew;
            setArrStaff([...arrStaff])

        }else{
            var person_obj = {
                "fname" : fname,
                "lname" : lname,
                "gender" : gender,
                "salary" : salary,
            };

            // var arrTmp = [...arrStaff,person_obj];
            // setArrStaff([...arrTmp]);

            arrStaff.push(person_obj)
            setArrStaff([...arrStaff])
           
        }
        handleClear();
    }

    const handleRemove = (param_index) => {
        debugger
        var dataTmp = arrStaff.filter((item,index)=> index !== param_index);
        setArrStaff(dataTmp);
    }

    const handleClear = () => {
        setFname("");
        setLname("");
        setGender("");
        setSalary("");
        setIsIndexUpdate(null);
    }

    const handleEdit = (Paramitem,Paramindex) => {
        setFname(Paramitem.fname);
        setLname(Paramitem.lname);
        setGender(Paramitem.gender);
        setSalary(Paramitem.salary);
        setIsIndexUpdate(Paramindex);
    }
    const image_tiger_url = require("../../assets/image/animal/tiger.jpg")
    return(
        <div>
            <h1>HomeScreen</h1>
            <AnimalCart
                name="Tiger"
                description={"Demo descrioption tiger"}
                image_url = {image_tiger_url}
            />
            <div className="frmStaff">
                <div className="txtMain">Staff form</div>
                <input
                    value={fname} 
                    className="input" 
                    placeholder="fname"
                    onChange={(event)=>setFname(event.target.value)}
                />
                <input 
                    value={lname}
                    className="input" 
                    placeholder="lname"
                    onChange={(event)=>setLname(event.target.value)}
                />
                <input 
                    value={gender}
                    className="input"
                    placeholder="gender"
                    onChange={(event)=>setGender(event.target.value)}
                />
                <input 
                    value={salary}
                    className="input"
                    placeholder="salary"
                    onChange={(event)=>setSalary(event.target.value)}
                />
                <button 
                    className="btnAdd"
                    onClick={handleAdd}
                >
                    {isIndexUpdate !== null ? "Update" : "Add"}
                </button>
                <button 
                    className="btnAdd"
                    onClick={handleClear}
                >
                    Clear
                </button>
            </div>
            <div className="gri">
                <h1>List Staff</h1>

                {arrStaff.map((item,index)=>{
                    return(
                        <div className="rowStaff">
                            <div>
                                <div>{index + 1}. {item.fname}-{item.lname}</div>
                                <div>{item.gender}</div>
                                <div>{item.salary+"$"}</div>
                            </div>
                            <div>
                                <button onClick={()=>handleRemove(index)} className="btnRemove">Remove</button>
                                <button onClick={()=>handleEdit(item,index)} className="btnEdit">Edit</button>
                            </div>
                        </div>
                    )
                })}
                {/* display in table  */}
                <table>
                    <thead>
                        <tr>
                            <th>Fist name</th>
                            <th>Last name</th>
                            <th>Gender</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arrStaff.map((item,index)=>{
                                return (
                                    <tr>
                                        <td>{item.fname}</td>
                                        <td>{item.lname}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.salary}$</td>
                                        <td style={{textAlign:"center"}}>
                                            <button onClick={()=>handleRemove(index)} className="btnRemove">Remove</button>
                                            <button onClick={()=>handleEdit(item,index)} className="btnEdit">Edit</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HomeScreen;

