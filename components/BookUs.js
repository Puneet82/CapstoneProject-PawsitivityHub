import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import Img1 from '../public/img/adoption/img1.png';

const BookUs = () => {
    const [submitted, setSubmitted] = useState(false);

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        phone: Yup.string().required('Required'),
        service: Yup.string().required('Required'),
        message: Yup.string().required('Required'),
    });

    const onSubmit = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            setSubmitted(true);
            setSubmitting(false);
            resetForm();
        }, 400);
    };

    return (
        <div className="book-us max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
            <h1 className="text-4xl font-bold mb-6 text-center text-paw-blue">Schedule Your Pet's Perfect Day with Us</h1>
            <div className="relative h-56 mb-8">
                <Image src={Img1} layout="fill" objectFit="cover" alt="Adoption Background" className="rounded-lg" />
            </div>
            {submitted ? (
                <div className="text-center text-xl text-green-600">
                    See you soon! You will receive an email from us.
                </div>
            ) : (
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-6">
                            <div className="form-group">
                                <label htmlFor="name" className="block text-lg font-medium text-gray-800">Name</label>
                                <Field 
                                    type="text" 
                                    name="name" 
                                    className="w-full mt-2 p-3 border border-gray-300 rounded bg-white text-gray-900" 
                                />
                                <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="block text-lg font-medium text-gray-800">Email</label>
                                <Field 
                                    type="email" 
                                    name="email" 
                                    className="w-full mt-2 p-3 border border-gray-300 rounded bg-white text-gray-900" 
                                />
                                <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone" className="block text-lg font-medium text-gray-800">Phone</label>
                                <Field 
                                    type="text" 
                                    name="phone" 
                                    className="w-full mt-2 p-3 border border-gray-300 rounded bg-white text-gray-900" 
                                />
                                <ErrorMessage name="phone" component="div" className="text-red-600 text-sm mt-1" />
                            </div>
                            <div className="form-group">
                                <label className="block text-lg font-medium text-gray-800">Service</label>
                                <Field 
                                    as="select" 
                                    name="service" 
                                    className="w-full mt-2 p-3 border border-gray-300 rounded bg-white text-gray-900" 
                                >
                                    <option value="">Select a service</option>
                                    <option value="daycare">Daycare</option>
                                    <option value="grooming">Pet Grooming</option>
                                    <option value="training">Training</option>
                                    <option value="swimming">Swimming</option>
                                </Field>
                                <ErrorMessage name="service" component="div" className="text-red-600 text-sm mt-1" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="block text-lg font-medium text-gray-800">Message</label>
                                <Field 
                                    as="textarea" 
                                    name="message" 
                                    className="w-full mt-2 p-3 border border-gray-300 rounded bg-white text-gray-900" 
                                    rows="4" 
                                />
                                <ErrorMessage name="message" component="div" className="text-red-600 text-sm mt-1" />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-paw-blue text-white py-3 px-4 rounded-lg hover:bg-paw-dark-blue"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </Form>
                    )}
                </Formik>
            )}
        </div>
    );
};

export default BookUs;