import { useState } from 'react';

function Listitems(){
    const[students]=useState([
        {
            id:1,
            name:"Jack Sparrow",
            age:20,
        },
        {
            id:2,
            name:"Ben",
            age:21,
        },
        {
            id:3,
            name:"Max",
            age:23,
        }
    ]);
    return(
        <div>
            <h1>ListItems</h1>
            <hr></hr>
            <ul style={{listStyleType:"none"}}>
                {students.map((student)=>(
                    <li key={student.id}>
                        <h2>ID: {student.id}</h2>
                        <p> Name:{student.name}</p>
                        <p> Age:{student.age}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Listitems