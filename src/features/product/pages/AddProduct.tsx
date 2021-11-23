import React from "react";
import { useForm, Resolver, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
type FormValues = {
    img :string;
    id:number
    name: string;
    price:number;
    
}
type Props = {
    onAdd : (product: FormValues)=> void
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
const AddProduct : React.FC<Props> = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    }=useForm<FormValues>({resolver});

    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = (data) =>{
        props.onAdd(data);
        navigate("/admin/product", {replace:true});
    };
    return(
    <div>
      <h2>Add</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name", { required: true })} />
        {errors?.name && <p>{errors.name.message}</p>}
        <input type="number" {...register("price", { required: true })} />
        {errors.price && <p>Field is required</p>}
        <button>Add</button>
      </form>
    </div>
    )
}
export default AddProduct;