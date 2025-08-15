import { Formik, Form, Field } from 'formik'
import  css  from './PostCreator.module.css'

export const PostCreator = () => {
    return(
        <div className={ css.creator }>
         <Formik
            initialValues={{ post: '' }}
            onSubmit={(values) =>{
                console.log(values);
            }}>
            <Form>
                <Field 
                as='textarea'
                name='post'
                placeholder='Put something smart ;)'   
                rows='5'
                className={ css.input }>
                </Field>
                <div className={ css.actions }>
                    <button type='submit' className={ css.button }>Post</button>
                </div>
            </Form>

         </Formik>
        </div>
    )
}