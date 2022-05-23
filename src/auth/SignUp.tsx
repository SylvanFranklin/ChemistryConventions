import firebase from "firebase/compat";
import { useState } from "react";
import { HiUserAdd } from "react-icons/hi";
import { FriendlyAuthError } from "./friendlyErrors";
import { LoginInput } from "./LoginInput";

export const SignUp: React.FC = () => {
  interface User {
    username: string;
    email: string;
    confirm_email: string;
    password: string;
    confirm_password: string;
  }

  const [formValue, setFormValue] = useState<User>({
    username: "",
    email: "",
    confirm_email: "",
    password: "",
    confirm_password: "",
  });

  const [showingError, setShowingError] = useState("");


  const signUp = (formValue: User) => {
    if (formValue.password !== formValue.confirm_password) {
      setShowingError("passwords do not match");
      return;
    }

    if (formValue.email !== formValue.confirm_email) {
      setShowingError("passwords do not match");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(formValue.email, formValue.password)
      .then((result) => result.user.updateProfile({displayName: formValue.username}))
      .catch((error: Error) =>
        setShowingError(FriendlyAuthError(error.message))
      );
  };

  return (
    <div>
      <h1 className="text-standard">Register</h1>{" "}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signUp(formValue);
        }}
        className="flex w-3/4 flex-col"
      >
        <LoginInput
          placeholder={"username"}
          value={formValue.username}
          changeFN={(e: string) => setFormValue({ ...formValue, username: e })}
        />
        <LoginInput
          placeholder={"email"}
          value={formValue.email}
          changeFN={(e: string) => setFormValue({ ...formValue, email: e })}
        />
        <LoginInput
          placeholder={"confirm email"}
          value={formValue.confirm_email}
          changeFN={(e: string) =>
            setFormValue({ ...formValue, confirm_email: e })
          }
        />
        <LoginInput
          placeholder={"password"}
          password={true}
          value={formValue.password}
          changeFN={(e: string) => setFormValue({ ...formValue, password: e })}
        />
        <LoginInput
          placeholder={"confirm password"}
          value={formValue.confirm_password}
          password={true}
          changeFN={(e: string) =>
            setFormValue({ ...formValue, confirm_password: e })
          }
        />
        <button
          className="bg-standard text-standard mt-3 flex flex-row rounded-md p-2 text-lg focus:outline-none"
          type="submit"
        >
          <div className="mx-auto flex flex-row">
            <HiUserAdd className="my-auto mr-2 text-2xl" />
            Sign up
          </div>
        </button>

        {showingError !== "" && (
          <h1 className="bg-standard text-standard mt-3 rounded-md border-4 border-red-400 p-2 text-center text-lg focus:outline-none">
            {showingError}
          </h1>
        )}
      </form>
    </div>
  );
};
