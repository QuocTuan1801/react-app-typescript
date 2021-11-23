import React from "react";
import { Route, Routes, Navigate} from "react-router-dom";

import { ICategory, IProduct } from "./model/model";

import Product from "./features/product/pages/Product";
import AddProduct from "./features/product/pages/AddProduct";
import LayoutWebsite from "./layout/LayoutWebsite";
import LayoutAdmin from "./layout/LayoutAdmin";
import EditProduct from "./features/product/pages/EditProduct";
import Category from "./features/category/page/Category";
import AddCategory from "./features/category/page/AddCategory";
import EditCategory from "./features/category/page/EditCategory";
// import Signup from "./features/auth/pages/Signup";
// import Signin from "./features/auth/pages/Signin"
type Props = {
    products: IProduct[];
    categories: ICategory[];
    onRemoveCate: (id:number) =>void;
    onAddCate: (category: ICategory) => void;
    onUpdateCate:(category: ICategory) => void;



    onRemove: (id:number) => void;
    onAdd: (product: IProduct) => void;
    onUpdate: (product: IProduct) => void;
};
const Router: React.FC<Props> =(props) =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={<div>Home Page</div>} />
                    <Route path="products" element={<div>Trang sản phẩm </div>} />
                    {/* <Route path="signup" element={<Signup/>} /> */}
                    {/* <Route path="signin" element={<Signin/>} /> */}
                </Route>
                <Route path="admin/*" element={<LayoutAdmin />}>
                    <Route index element={<Navigate to="dashboard" />}/>
                    <Route path="dashboard" element={<div>Admin dashboard </div>}/>
                    <Route path="product" element={<Product{...props} />} />
                    <Route path ="product/add" element= {<AddProduct onAdd={props.onAdd}/>} />
                    <Route path ="product/:id/edit" element= {<EditProduct onUpdate={props.onUpdate}/>} />
                    <Route path="categories" element={<Category{...props} />} />
                    <Route path ="categories/add" element= {<AddCategory onAddCate={props.onAddCate} />} />
                    <Route path ="categories/:id/edit" element= {<EditCategory onUpdateCate={props.onUpdateCate}/>} />
                </Route>
            </Routes>

        </div>
    )
}
export default Router;