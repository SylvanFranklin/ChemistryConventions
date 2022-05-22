import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { MdOutlineLogin } from 'react-icons/md'
import { auth } from "../App";
import { FriendlyAuthError } from "./freindlyErrors";
import { LoginInput } from "./LoginInput";

export const LogIn: React.FC = () => {
  const login = () => {
    signInWithEmailAndPassword(auth, formValue.email, formValue.password)
      .then()
      .catch((error: Error) =>
        setShowingError(FriendlyAuthError(error.message))
      );

    return "";
  };

  interface User {
    email: string;
    password: string;
  }

  const [formValue, setFormValue] = useState<User>({ email: "", password: "" });
  const [showingError, setShowingError] = useState("");

  return (
    <div>
      <h1 className="text-standard">Log In</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
        className="flex w-3/4 flex-col"
      >
        <LoginInput
          placeholder="email"
          value={formValue.email}
          changeFN={(e: string) => setFormValue({ ...formValue, email: e })}
        />

        <LoginInput
          placeholder="password"
          value={formValue.password}
          changeFN={(e: string) => setFormValue({ ...formValue, password: e })}
          password={true}
        />
        <button
          className="bg-standard text-standard mt-3 flex flex-row rounded-md p-2 text-lg focus:outline-none "
          type="submit"
        >
          <div className="mx-auto flex flex-row">
            {/* <MdOutlineLogin className="my-auto mr-2 text-2xl" /> */}
            Log In
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
