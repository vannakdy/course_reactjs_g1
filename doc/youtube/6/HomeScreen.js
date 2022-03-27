import React,{useState} from "react";
import "./HomeScreen.css";
const HomeScreen = () => {
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [gender,setGender] = useState("male");
    const [salary,setSalary] = useState(0);

    const tmpArr = [
        {
            firstname : "sok",
            lastname : "dara",
            gender : "male",
            salary : "1k",
        },
        {
            firstname : "Som",
            lastname : "Solo",
            gender : "male",
            salary : "1k",
        }
    ]
    const [listStaff,setListStaff] = useState([]);

    const onChangeFirstName = (event) => {
        setFirstname(event.target.value);
    }

    const onChangeLastName = (e) => {
        setLastname(e.target.value);
    }

    const onChangeGender = () => {
        
    }

    const onChangeSalary = (event) =>{
        setSalary(event.target.value)
    }


    const hadleAdd = () => {
        var objTmp = {
            "firstname" : firstname,
            "lastname" : lastname,
            "gender" : gender,
            "salary" : salary,
        };

        // var dataTmp = listStaff;
        // dataTmp.push(objTmp);
        // setListStaff([...dataTmp]);

        var dataTmp = [...listStaff,objTmp];
        setListStaff(dataTmp);
    }

    return (
        <div>
            <div className="frmStaff">
                <input onChange={onChangeFirstName} className="input" placeholder="firstname" />
                <input  onChange={onChangeLastName} className="input" placeholder="lastname" />
                <input value={gender} onChange={(event)=>setGender(event.target.value)} className="input"placeholder="gender" />
                <input value={salary} onChange={onChangeSalary} className="input" placeholder="salary" />

                <button onClick={hadleAdd} className="btnAdd">Add</button>
            </div>
            <div className="listStaff">

                {
                    listStaff.map((item,index)=>{
                        return (
                            <div className="rowStaff">
                                <div className="txtName">{index+1} {item.firstname}-{item.lastname}</div>
                                <div>{item.gender}</div>
                                <div>{item.salary}$</div>
                            </div>
                        )
                    })
                }

                {/* <h1>firstname : {firstname}</h1>
                <h1>lastname : {lastname}</h1>
                <h1>gender : {gender}</h1>
                <h1>salary : {salary}</h1> */}
            </div>
        </div>
    )
}

export default HomeScreen;