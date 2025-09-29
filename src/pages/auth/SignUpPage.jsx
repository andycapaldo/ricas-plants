import { useState } from "react";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link, useNavigate } from "react-router-dom";
import * as userService from "services/user";
import RedirectToPlantsIfSignedIn from "shared-components/RedirectToPlantsIfSignedIn";

const SignUpPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  return (
    <RedirectToPlantsIfSignedIn>
      <FormContainer>
        <div className="text-red-700 font-lato">{error}</div>
        <AuthForm
          fields={[
            {
              label: "username",
              type: "text",
            },
            {
              label: "password",
              type: "password",
            },
            {
              label: "confirm password",
              type: "password",
            },
          ]}
          submitButtonLabel="create an account"
          onSubmit={async (values) => {
            if (values.username.length < 4) {
              setError("username too short");
              return;
            }

            if (values.password.length < 4) {
              setError("password too short");
              return;
            }

            if (values.password != values["confirm password"]) {
              setError("passwords do not match");
              return;
            }
            const response = await userService.createUser({
              username: values.username,
              password: values.password,
            });

            if (response.status === 201) {
              setError("");
              navigate("/", {
                state: {
                  accountCreated: true,
                },
              });
            } else {
              const data = await response.json();
              setError(data.error);
            }
          }}
        />
        <Link to="/" className="text-green-600 underline text-sm">
          sign in
        </Link>
      </FormContainer>
    </RedirectToPlantsIfSignedIn>
  );
};

export default SignUpPage;
