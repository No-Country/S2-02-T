import React, { Component } from "react";
import Students from "./Json.json";
export class Inicio extends Component {
    render() {
        return (
            <>
            <div class="container">
                <table class="">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Department</th>
                        </tr>
                        {Students.students.map((alumno, x) => (
                            <tr key={x}>
                                <td>{x}</td>

                                <td>{alumno.name}</td>
                                <td>{alumno.department}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </>
        );
    }
}
export default Inicio;