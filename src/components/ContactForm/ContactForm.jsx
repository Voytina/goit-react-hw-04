import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';

export default function ContactForm({ onAdd }) {
  const initialValues = {
    name: '',
    number: '',
  };

  const contactsRules = Yup.object().shape({
    name: Yup.string()
      .min(3, 'to short')
      .max(50, 'to big')
      .required('Required'),
    number: Yup.string()
      .matches(/^[+\d\s\-()]+$/, 'Number must contain only digits')
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required'),
  });

  return (
    <div>
      <Formik
        onSubmit={(values, action) => {
          onAdd(values, action);
        }}
        initialValues={initialValues}
        validationSchema={contactsRules}>
        <Form className={s.formContainer}>
          <label className={s.formLabel}>
            <span>Name</span>
            <Field type="text" name="name" />
            <ErrorMessage className={s.formEror} name="name" component="div" />
          </label>
          <label className={s.formLabel}>
            <span>Number</span>
            <Field type="number" name="number" />
            <ErrorMessage
              className={s.formEror}
              name="number"
              component="div"
            />
          </label>
          <button type="submit" className={s.btnAdd}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
