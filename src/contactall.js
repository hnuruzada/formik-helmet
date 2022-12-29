import {Formik,Form,Field} from "formik"

export const Contactall=()=>{

    return(
        <div>
            <h3>Contact All</h3>


            <Formik
            initialValues={{
                name:"Hasan",
                about:"",
                gender:1,
                accept:false,
                skills:["javascript","css"]
            }
        }
        onSubmit={values=>{
            console.log(values);
        }}
            >

                {
                    ({values})=>(
                        <Form>
                            <Field name="name"/><br/>
                            <Field component="textarea" cols={10} rows={10} name="about"/><br/>
                            <Field component="select" name="gender">
                                <option value={1}>Female</option>
                                <option value={2}>Male</option>
                            </Field> <br/>
                            <Field component="select" name="skills" multiple={true}>
                                <option value="javascript">Javascript</option>
                                <option value="css">CSS</option>
                                <option value="php">PHP</option>
                                <option value="java">Java</option>
                                <option value="python">Python</option>
                            </Field> <br/>
                            <label>
                                <Field type="checkbox" name="accept"/>
                                Sertleri qebul edin!
                            </label>
                            <button disabled={!values.accept} type="Submit">Send</button>
                        </Form>
                    )
                }
            </Formik>

        </div>
    );
}