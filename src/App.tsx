import axios, {AxiosResponse} from "axios";
import React, { useEffect, useState } from "react";

import {ICategory, IProduct} from "./model/model";
import { ListAll,create,remove, update } from "./api/product";
import Router from './Router';
import { ToastContainer, toast } from "react-toastify";

import "./style.css"
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import { createCate, ListCate, removeCate, updateCate } from "./api/category";

const App = ()=>{
    const [products, setProducts] = useState<IProduct[]>([]);
    const [categories, setCategories] = useState<ICategory[]>([]);

    useEffect(()=>{
      ListAll().then((response: AxiosResponse)=>setProducts(response.data));
      ListCate().then((response: AxiosResponse)=>setCategories(response.data));
    },[])
    //Category
    const onHandleAddCate = (category:ICategory) => {
      createCate(category).then((res:AxiosResponse)=>{
        setCategories([...categories,res.data])
      })
    }
    const onHandleRemoveCate = (id:number)=>{
      removeCate(id).then((res:AxiosResponse)=>{
        setCategories([...categories,res.data])
      })
    }
    const onHandleUpdateCate = (category:ICategory)=>{
      updateCate(category)
      .then((res:AxiosResponse)=>{
        const newCategory = categories.map((item)=>
          item.id === res.data.id? res.data: item)
          setCategories(newCategory)
        })
      .catch((error)=> console.log(error)
      )
    }

    //Product
    const onHandleAdd = (product:IProduct) =>{
      create(product).then((res: AxiosResponse)=>{
        setProducts([...products,res.data])
      })
    }
    const onHandleRemove = (id:number) =>{
      remove(id).then((res: AxiosResponse)=>{
        setProducts(products.filter((item)=>item.id !== res.data.id))
      })
    }
    const onHandleUpdate = (product: IProduct) => {
      update(product)
      .then((res: AxiosResponse)=>{
      //Tạo ra 1 mạng mới đã cập nhật
        const newProducts = products.map((item)=>
        //duyệt tất cả sản phẩm nếu sản phẩm nào trùng với id của sản phẩm thì lấy cái mới
        //ngược lại thì giữ nguyên
        item.id === res.data.id? res.data: item)
      setProducts(newProducts);
      })
      //Cập nhật lại state product sau khi update
      .catch((error)=> console.log(error)
      )
    };
   
      return <div className ="App">
        <ToastContainer />
        <Router 
         categories ={categories}
         products = {products}
         onRemoveCate ={onHandleRemoveCate}
         onAddCate = {onHandleAddCate}
         onUpdateCate={onHandleUpdateCate}
         
         onRemove = {onHandleRemove}
         onAdd={onHandleAdd}
         onUpdate={onHandleUpdate}
         />
       
    </div>
  }
export default App;