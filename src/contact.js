import { useFormik } from 'formik'
export const Contact=()=>{

    const {handleChange,handleSubmit,values}=useFormik({
       initialValues:{
        username:"",
        password:""
       },
       onSubmit:(values)=>{
        console.log(values);
       }
    })

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input id="username" value={values.username} onChange={handleChange}/><br/>
                <label htmlFor="password">Username</label>
                <input id="password" value={values.password} onChange={handleChange}/><br/>
                <button type="submit">Sign in</button>

            </form>
        </div>
    );
}