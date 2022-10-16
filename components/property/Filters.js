import React, { useState } from "react";
import Price from "./Price";
import "rsuite/dist/rsuite.min.css";
import { Formik } from "formik";




const Filters = () => {
  const [priceValue, setPriceValue] = useState([0, Infinity])
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          bedrooms: 0,
          building_size: 0,
          built_year: 0,
          city: "",
          country: "",
          floors: 0,
          min_price: priceValue[0],
          max_price: priceValue[1],
          plot_size: 0,
          renovated_year: 0,
          state: "",
          street_address: "",
          title: "",
          zip: 0,
          facilities: [],
          nearby: [],
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <div className="text-[#221F60] text-xl my-8">
                Search by Filters
              </div>
              <select
                name="country"
                onChange={handleChange}
                onBlur={handleBlur}
                defaultValue={"DEFAULT"}
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="DEFAULT" disabled>
                  Choose Country
                </option>
                <option value={values.country}>United States</option>
                <option value="something">Canada</option>
                <option value="something">France</option>
                <option value="something">Germany</option>
              </select>

              <select
                defaultValue={"DEFAULT"}
                name="city"
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="DEFAULT" disabled>
                  Choose City
                </option>
                <option value={values.city}>United States</option>
                <option value="something">Canada</option>
                <option value="something">France</option>
                <option value="something">Germany</option>
              </select>

              <select
                defaultValue={"DEFAULT"}
                name="state"
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="DEFAULT" disabled>
                  States
                </option>
                <option value="ggrthtr">United States</option>
                <option value="something">Canada</option>
                <option value="something">France</option>
                <option value="something">Germany</option>
              </select>

              <select
                defaultValue={"DEFAULT"}
                name="floors"
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="DEFAULT" disabled>
                  Floors
                </option>
                <option value={values.city}>United States</option>
                <option value="something">Canada</option>
                <option value="something">France</option>
                <option value="something">Germany</option>
              </select>

              <select
                defaultValue={"DEFAULT"}
                name="zip"
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="DEFAULT" disabled>
                  Zip
                </option>
                <option value={values.city}>United States</option>
                <option value="something">Canada</option>
                <option value="something">France</option>
                <option value="something">Germany</option>
              </select>

              <select
                defaultValue={"DEFAULT"}
                name="building_size"
                onChange={handleChange}
                onBlur={handleBlur}
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="DEFAULT" disabled>
                  Choose Size
                </option>
                <option value={values.size}>United States</option>
                <option value="something">Canada</option>
                <option value="something">France</option>
                <option value="something">Germany</option>
              </select>
              <div className="px-2 py-2 my-2 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg">
                Price
                <Price setPriceValue={setPriceValue} />
              </div>

              <select
                defaultValue={"DEFAULT"}
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="bedrooms"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="DEFAULT" disabled>
                  Bedrooms
                </option>
                <option value={values.bedrooms}>United States</option>
                <option value="something">Canada</option>
                <option value="something">France</option>
                <option value="something">Germany</option>
              </select>

              <input
                type="text"
                defaultValue={"DEFAULT"}
                placeholder="Building Year"
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="built_year"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {/* <select
                defaultValue={"DEFAULT"}
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="DEFAULT" disabled>
                  Seller
                </option>
                <option value={values.seller}>United States</option>
                <option value="something">Canada</option>
                <option value="something">France</option>
                <option value="something">Germany</option>
              </select> */}

              <input
                type="text"
                defaultValue={"DEFAULT"}
                placeholder="Plot Size"
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="plot_size"
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <select
                defaultValue={"DEFAULT"}
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="facilities"
                onChange={handleChange}
                onBlur={handleBlur}
                
              >
                <option value="DEFAULT" disabled>
                  Facility
                </option>
                <option value="something">United States</option>
                <option value="something">Canada</option>
                <option value="something">France</option>
                <option value="something">Germany</option>
              </select>

              <select
                defaultValue={"DEFAULT"}
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="nearby"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="DEFAULT" disabled>
                  Nearby
                </option>
                <option value="something">United States</option>
                <option value="something">Canada</option>
                <option value="something">France</option>
                <option value="something">Germany</option>
              </select>

              <select
                defaultValue={"DEFAULT"}
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="renovated_year"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="DEFAULT" disabled>
                  Renivated
                </option>
                <option value="something">United States</option>
                <option value="something">Canada</option>
                <option value="something">France</option>
                <option value="something">Germany</option>
              </select>

              <select
                defaultValue={"DEFAULT"}
                className="block w-full p-1 mt-3 text-sm text-gray-600 bg-white border border-gray-400 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="DEFAULT" disabled>
                  Condition
                </option>
                <option value="something">United States</option>
                <option value="something">Canada</option>
                <option value="something">France</option>
                <option value="something">Germany</option>
              </select>

              <button
                type="submit"
                className="bg-[#221F60] text-white text-sm font-medium rounded-full px-4 py-2 mt-3"
              >
                Apply Filters
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Filters;
