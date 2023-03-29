import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  price: Yup.number().required('Price is required'),
  photo: Yup.string().required('Photo URL is required'),
  rating: Yup.number().required('Rating is required'),
  stock: Yup.number().required('Stock is required'),
  category: Yup.string().required('Category is required')
});

const AddProductForm = ({ onSubmit }) => {
  const initialValues = {
    name: '',
    description: '',
    price: '',
    photo: '',
    rating: '',
    stock: '',
    category: ''
  };

  const handleSubmit = (values) => {
    onSubmit(values);
  }

  return (
    <Formik initialValues={initialValues} validationSchema={FormSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <Field type="text" name="description" />
            <ErrorMessage name="description" />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <Field type="number" name="price" />
            <ErrorMessage name="price" />
          </div>
          <div>
            <label htmlFor="photo">Photo URL</label>
            <Field type="text" name="photo" />
            <ErrorMessage name="photo" />
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <Field type="number" name="rating" />
            <ErrorMessage name="rating" />
          </div>
          <div>
            <label htmlFor="stock">Stock</label>
            <Field type="number" name="stock" />
            <ErrorMessage name="stock" />
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <Field type="text" name="category" />
            <ErrorMessage name="category" />
          </div>
          <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default AddProductForm;
