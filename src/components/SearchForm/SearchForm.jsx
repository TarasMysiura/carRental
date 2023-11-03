import React from "react";

import { Formik, Form, Field } from "formik";
import * as yup from "yup";

// import PropTypes from "prop-types";
import { FormError } from "components/FormError/FormError";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { nanoid } from "nanoid";
// import { addContact } from "redux/contactsSlice";
// import { toastConfig } from "redux/data";
import { StyleForm } from "./SearchForm.styled";

const schema = yup.object().shape({
  name: yup.string("no valid name").required("Required"),
  number: yup.number("no valid name").required("Required").positive().integer(),
});
// import { dataCarBrend } from "redux/data";

export const SearchForm = () => {
  // const contacts = useSelector((state) => state.contacts.contacts);

  // const dispatch = useDispatch();

  // const onAddContact = values => {
  //   const isInContacts = contacts.some(
  //     ({ name }) => name.toLowerCase() === values.name.toLowerCase()
  //   );

  //   if (isInContacts) {
  //     toast.error(`${values.name} is already in contacts`, toastConfig);
  //     return;
  //   }

  //   const finalContact = {
  //     id: nanoid(5),
  //     ...values,
  //   };

  //   dispatch(addContact(finalContact));
  // };

  const handleSubmit = (values, { resetForm }) => {
    // onAddContact(values);
    resetForm();
  };

  return (
    <StyleForm>
      {/* <h2 className={css.title}>{title}</h2> */}
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form className="formStyle">
          <label className="label">
            <span className="span">Car brand</span>
            <Field
              as="select"
              className="input"
              name="carBrand"
              type="text"
              autoComplete="true"
              placeholder="Enter the text"
            >
              <option value="Buick"> Buick </option>
              <option value="Volvo"> Volvo </option>
              <option value="HUMMER"> HUMMER </option>
              <option value="Subaru"> Subaru </option>
              <option value="Mitsubishi"> Mitsubishi </option>
              <option value="Nissan"> Nissan </option>
              <option value="Lincoln"> Lincoln </option>
              <option value="GMC"> GMC </option>
              <option value="Hyundai"> Hyundai </option>
              <option value="MINI"> MINI </option>
              <option value="Bentley"> Bentley </option>
              <option value="Mercedes-Benz"> Mercedes-Benz </option>
            </Field>

            <FormError name="carBrand" />
          </label>
          <label className="label">
            <span className="span">Price/ 1 hour</span>
            <Field
              className="input"
              type="text"
              name="price"
              autoComplete="true"
              placeholder="To $"
            />
            <FormError name="price" />
          </label>
          <label className="label">
            <span className="span">Name</span>
            <Field
              className="input"
              type="text"
              name="priceFrom"
              autoComplete="true"
              placeholder="Enter the text"
            />
            <FormError name="priceFrom" />
          </label>
          <label className="label">
            <span className="span">Number</span>
            <Field
              className="input"
              type="text"
              name="priceTo"
              autoComplete="true"
              placeholder="Enter the text"
            />
            <FormError name="priceTo" />
          </label>

          <button type="submit" className="button">
            Search
          </button>
        </Form>
      </Formik>
    </StyleForm>
  );
};

// SearchForm.propTypes = {
//   title: PropTypes.string.isRequired,
// };
