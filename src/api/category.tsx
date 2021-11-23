import { ICategory } from "../model/model";
import instance from "./instance";

export const ListCate = () => {
    const url = "/categories";
    return instance.get(url)
}
export const createCate = (category : ICategory) => {
    const url = "/categories";
    return instance.post(url,category);
}
export const updateCate =async ( category: ICategory) =>{
    const url = "/categories/"+ category.id;
    return await instance.put(url,category)
}
export const removeCate = async (id: number) =>{
    const url = `/categories/${id}`;
    return await instance.delete(url)
}
export const getCate = (id: number) => {
    const url = "/categories/" + id;
    return instance.get(url);
  };