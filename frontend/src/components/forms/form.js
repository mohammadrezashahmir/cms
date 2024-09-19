import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Select from "react-select";

export const DynamicForm = ({fields, onSubmit}) => {
    const validationSchema = Yup.object(
        fields?.reduce((schema, field) => {
            if (field.validation) {
                schema[field.name] = field.validation;
            }
            return schema;
        }, {})
    );

    const initialValues = fields.reduce((values, field) => {
        values[field.name] = field.initialValue || null;
        return values;
    }, {});

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, {resetForm}) => {
                onSubmit(values, resetForm);
            }}
        >
            {({setFieldValue}) => (
                <Form>
                    {fields.map((field, index) => (
                        <div key={index} className="intro-y col-span-12 lg:col-span-8 mt-6">
                            <label htmlFor="show_author" className="form-label ml-0 mb-2">{field.label}</label>
                            {field.type == 'select' ?
                                <Select
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    className='flex-grow'
                                    options={field.options.map((opt) => ({
                                        value: opt.id,
                                        label: opt.title,
                                    }))}
                                    onChange={(option)=>setFieldValue(field.name,option ? option.value : null)}
                                    isClearable={field.isClearable}
                                    isMulti={field.isMulti}
                                />
                                : <Field type={field.type || 'text'} name={field.name}
                                         className='intro-y form-control py-3 px-4 box pl-10 placeholder-theme-13'
                                         placeholder={field.placeholder}/>

                            }
                            <ErrorMessage
                                name={field.name}
                                component="div"
                                className="text-theme-6 text-md mt-1"
                            />
                        </div>
                    ))}
                    <button type="submit" className="btn btn-primary mt-5">
                        ذخیره
                    </button>
                </Form>
            )
            }
        </Formik>
    )
        ;
};
