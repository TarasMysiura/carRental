import React from "react";

import { Formik, Form, Field } from "formik";
import * as yup from "yup";

import { FormError } from "components/FormError/FormError";

import { StyleForm } from "./SearchForm.styled";
import { useDispatch } from "react-redux";
import { setFilter } from "redux/filterSlice";

const schema = yup.object().shape({
  make: yup.string(),
  price: yup.string(),
  priceFrom: yup.string(),
  priceTo: yup.string(),
});

export const SearchForm = () => {
  const dispatch = useDispatch();

  const onChangeFilter = ({make}) => {
    dispatch(setFilter(make));
  };

  const handleSubmit = (values, { resetForm }) => {
    onChangeFilter(values);
  };

  return (
    <StyleForm>
      <Formik
        initialValues={{
          make: "",
          price: "",
          priceFrom: "",
          priceTo: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form className="formStyle">
          <label className="label">
            <span className="span">Car brand</span>
            <Field
              as="select"
              className="input inputCarBrand"
              name="make"
              type="text"
              autoComplete="true"
              placeholder="Enter the text"
            >
              <option value=""> Enter the text </option>
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

            <FormError name="make" />
          </label>
          <label className="label">
            <span className="span">Price/ 1 hour</span>
            <Field
              className="input inputPrice"
              type="text"
              name="price"
              autoComplete="true"
              placeholder="To $"
            />
            <FormError name="price" />
          </label>
          <div className="inputWrapper">
            <label className="label">
              <span className="span">Сar mileage / km</span>
              <Field
                className="input inputPriceFrom"
                type="text"
                name="priceFrom"
                autoComplete="true"
                placeholder="From"
              />
              <FormError name="priceFrom" />
            </label>
            <label className="label">
              <Field
                className="input inputPriceTo"
                type="text"
                name="priceTo"
                autoComplete="true"
                placeholder="To"
              />
              <FormError name="priceTo" />
            </label>
          </div>

          <button type="submit" className="button">
            Search
          </button>
        </Form>
      </Formik>
    </StyleForm>
  );
};


