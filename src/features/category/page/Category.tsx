import { ICategory } from "../../../model/model";
import React from "react";
import {Link} from 'react-router-dom'

type CategoryProps ={
    categories : ICategory[];
    onRemoveCate: (id: number) => void;
}
const Category: React.FC<CategoryProps> = (props) =>{
    return(
        <div>
            {props.categories.map((item,index) => {
                return (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>
                            <button onClick={() => props.onRemoveCate(item.id)}>Remove</button>
                            <Link to={`${item.id}/edit`}>Edit</Link>
                        </td>
                    </tr>
                )
            })}
        </div>
    )
}
export default Category;