import React from "react";
import { Field } from "redux-form";
import "./FormsControls.scss";

// export const Input = ({ input, meta, ...props }) => {
//   return (
//     <div
//       className={`form__control ${meta.touched && meta.error && "form__error"}`}
//     >
//       <input type="text" {...input} {...props} />
//       {meta.touched && meta.error && <span>{meta.error}</span>}
//     </div>
//   );
// };

const FormControl = ({ input, meta, Formtype, ...props }) => {
  return (
    <div
      className={`form__control ${meta.touched && meta.error && "form__error"}`}
    >
      <Formtype {...input} {...props} />
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  return <FormControl {...props} Formtype="textarea"></FormControl>;
};

export const Input = (props) => {
  return <FormControl {...props} Formtype="input"></FormControl>;
};

export const createField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  className
) => {
  return (
      <Field
        placeholder={placeholder}
        name={name}
        validate={validators}
        component={component}
        {...props}
        className={className}
      />
      
    
  );
};
