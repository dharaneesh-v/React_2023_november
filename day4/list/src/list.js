import { useState } from 'react';

function Elistitems(){
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
            <table align='center'>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                {students.map((student)=>(
                    <tr>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
export default Elistitems