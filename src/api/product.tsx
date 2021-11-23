import { IProduct } from "../model/model";
import instance from "./instance";

export const ListAll = () => {
    const url = "/products";
    return instance.get(url)
}
export const create = (product : IProduct) => {
    const url = "/products";
    return instance.post(url,product);
}
export const update =async ( product: IProduct) =>{
    const url = "/products/"+ product.id;
    return await instance.put(url,product)
}
export const remove = async (id: number) =>{
    const url = `/products/${id}`;
    return await instance.delete(url)
}
export const get = (id: number) => {
    const url = "/products/" + id;
    return instance.get(url);
  };