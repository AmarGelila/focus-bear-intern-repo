import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
function FromikTask() {
  return (
    <Formik
      initialValues={{ fullname: "", email: "" }}
      validationSchema={yup.object({
        fullname: yup
          .string()
          .max(15, "Name's length must be 15 or less")
          .required("Required"),
        email: yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <label htmlFor="fullname" className="block text-blue-950">
          Name:-
        </label>
        <Field
          id="fullname"
          name="fullname"
          type="text"
          className="border-2 block rounded-md border-blue-200 p-3"
        ></Field>
        <ErrorMessage name="fullname" className="block text-red-700" />

        <label htmlFor="email" className="block mt-3 text-blue-950">
          Email:-
        </label>
        <Field
          id="email"
          name="email"
          type="email"
          className="border-2 block rounded-md  border-blue-200 p-3"
          autoComplete="true"
        ></Field>
        <ErrorMessage name="email" className="block text-red-700" />

        <button
          type="submit"
          className="border-2 bg-blue-200 text-blue-950 block mt-5 py-3 px-5 rounded-lg hover:bg-blue-50 hover:cursor-pointer transition-colors"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default FromikTask;
