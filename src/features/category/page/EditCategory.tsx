import { AxiosResponse } from "axios";
import React, { useEffect } from "react";
import { useForm,Resolver } from "react-hook-form";
import {useParams} from "react-router-dom"
import { getCate } from "../../../api/category";
type FormValues = {
    id: number;
    name :string;
}
type Props = {
    onUpdateCate:(category: FormValues) => void;
}
const resolver: Resolver<FormValues> = async (values) => {
    return {
      values: values.name ? values : {},
      errors: !values.name
        ? {
            name: {
              type: "required",
              message: "This is required."
            }
          }
        : {}
    };
  };
const EditCategory: React.FC<Props> = (props) => {
    const {id}= useParams();
    const convertId = Number(id)
    
    const {
          register,
          handleSubmit,
          formState: { errors },
          reset
        } = useForm<FormValues>({ resolver });
      
      useEffect(() => {
        // sử dụng id để gửi lên API
        getCate(convertId).then((response: AxiosResponse) => {
          reset(response.data);
        });
      }, [convertId, reset]);
        
  
  
      const onSubmit = (data: FormValues) => {
          props.onUpdateCate(data);
        };
      return(
      <div>
        <h2>Edit</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("name", { required: true })} />
          {errors?.name && <p>{errors.name.message}</p>}
          <button>Update</button>
        </form>
      </div>
      )
}
export default EditCategory;