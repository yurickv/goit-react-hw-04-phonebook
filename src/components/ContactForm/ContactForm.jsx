import React from "react";
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid'
import * as Yup from "yup";
import css from './Contact-style.module.css'

export const ContactForm = ({ addContact }) => {
    const handleSubmit = ({ name, number }, { resetForm }) => {
        const id = nanoid();

        addContact({ name, number, id });
        resetForm();
    };




    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            onSubmit={handleSubmit}
            validationSchema={Yup.object().shape({
                name: Yup.string()
                    .required("Name Required")
                    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Must Contain only letter"),
                number: Yup.number()
                    .positive()
                    // .integer()
                    .required("Phone number Required")
                // .matches(/(?=.*[0-9])/, "Must Contain Number")
            })}
        >
            <Form className={css.form}>
                <label htmlFor="name" className={css.inputLabel}> <span>Name</span>
                    <Field
                        type="text"
                        name="name"
                        maxlength="20"
                        placeholder="Add the name"
                        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label htmlFor="number" className={css.inputLabel}><span>Number</span>
                    <Field
                        type="tel"
                        name="number"
                        minlength="10"
                        maxlength="13"
                        placeholder="Add the phone number"
                        // pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button type='submit'>Add contact</button>
            </Form>
        </Formik>
    )





}


