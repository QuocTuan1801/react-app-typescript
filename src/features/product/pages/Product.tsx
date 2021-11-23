import {IProduct} from "../../../model/model";
import React from "react";
import {Link} from "react-router-dom";
type ProductProps = {
    products :IProduct[];
    onRemove: (id:number) => void;
}
const Product: React.FC<ProductProps>= (props)=>{
    return(
        <div>
            <h2>List</h2>
            {props.products.map((item,index) => {
                return (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>
                            <button onClick={() => props.onRemove(item.id)}>Remove</button>
                            <Link to={`${item.id}/edit`}>Edit</Link>
                        </td>
                    </tr>
                )
            })}
        </div>
    )
}
export default Product;