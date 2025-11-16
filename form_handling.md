### Handling Forms with Formik #21
##### How does Formik simplify form management compared to handling state manually?
By using <Formik> component I do not have to write any event handlers , formik do it implicitly for me by matching name attributes with keys in initial values passed to it
##### What are the benefits of using Formik’s validation instead of writing validation logic manually?
It makes the code clean and there is a single source of truth for errors , espcially with Yup as it minimize the validation code and has many built in validation functions that saves time and effort
Also , it has <ErrorMessage> component that renders errors for each field only when visited.
