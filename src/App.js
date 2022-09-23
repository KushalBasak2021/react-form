import React from "react";
import FormInput from "./components/FormInput";
function App() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let inputs = [
    {
      id: 1,
      placeholder: "Firstname",
      name: "firstName",
      type: "text",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Firstname",
      pattern: "^[a-zA-Z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      placeholder: "Lastname",
      name: "lastName",
      type: "text",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Lastname",
      pattern: "^[a-zA-Z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      placeholder: "Email",
      name: "email",
      type: "email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      placeholder: "Password",
      name: "password",
      type: "password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 5,
      placeholder: "ConfirmPassword",
      name: "confirmPassword",
      type: "password",
      errorMessage: "Passwords don't match!",
      label: "ConfirmPassword",
      pattern: formData.password,
      required: true,
    },
  ];
  function onChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }
  return (
    <div className="App">
      <form>
        <h1>Register</h1>
        {inputs.map((input) => {
          return (
            <FormInput
              key={input.id}
              {...input}
              value={formData[input.name]}
              onChange={onChange}
            />
          );
        })}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
