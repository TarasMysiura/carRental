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

  const onChangeFilter = ({ make }) => {
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
              // as="select"
              className="input inputCarBrand"
              name="make"
              list="makes"
              type="text"
              autoComplete="true"
              placeholder="Enter the text"
            ></Field>

            <datalist id="makes" className="makesList">
              <option value="Buick" />
              <option value="Volvo" />
              <option value="HUMMER" />
              <option value="Subaru" />
              <option value="Mitsubishi" />
              <option value="Nissan" />
              <option value="Lincoln" />
              <option value="GMC" />
              <option value="Hyundai" />
              <option value="MINI" />
              <option value="Bentley" />
              <option value="Mercedes" />
            </datalist>

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
