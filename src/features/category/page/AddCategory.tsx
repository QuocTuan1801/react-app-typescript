import React from "react";
import { useForm, Resolver, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
type FormValues = {
    id:number;
    name: string;
}
type Props = {
    onAddCate : (category: FormValues)=> void
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
  const AddCategory : React.FC<Props> = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    }=useForm<FormValues>({resolver});

    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = (data) =>{
        props.onAddCate(data);
        navigate("/admin/cateories", {replace:true});
    };
    return(
    <div>
      <h2>Add</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name", { required: true })} />
        {errors?.name && <p>{errors.name.message}</p>}
        <button>Add</button>
      </form>
    </div>
    )
}
export default AddCategory;