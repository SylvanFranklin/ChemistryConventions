import DefaultLayout from "../Page Layouts/Default";
import { signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/micah";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../App";
import { useState } from "react";

const svg = createAvatar(style, {
  seed: "custom-seed",
  // ... and other options
});

export const Profile: React.FC = () => {
  const [user] = useAuthState(auth);

  return (
    <DefaultLayout>
      <div className="mx-auto h-full w-1/2 rounded-md p-6">
        {/* <div
          className="h-1/6 w-1/6 overflow-clip rounded-full border-4"
          dangerouslySetInnerHTML={{ __html: svg }}
        ></div> */}

        <>
          {user ? (
            <div onClick={() => signOut(auth)}>
              some stats {user.displayName}
            </div>
          ) : (
            <SignUp />
          )}
        </>
      </div>
    </DefaultLayout>
  );
};

const SignUp: React.FC = () => {
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

  const signUp = (formValue: User) => {
    if (
      formValue.email === formValue.confirm_email &&
      formValue.password === formValue.confirm_password &&
      formValue.username &&
      formValue.email &&
      formValue.password
    ) {
      createUserWithEmailAndPassword(auth, formValue.email, formValue.password);
    } else {
      console.log("failed");
    }
  };

  return (
    <div className="w-1/2">
      <h1>Register</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signUp(formValue);
        }}
      >
        <input
          className="bg-standard text-standard mt-3 rounded-md p-2 text-lg focus:outline-none"
          type="text"
          placeholder="username"
          value={formValue.username}
          onChange={(e) =>
            setFormValue({ ...formValue, username: e.target.value })
          }
        />
        <input
          className="bg-standard text-standard mt-3 rounded-md p-2 text-lg focus:outline-none "
          type="email"
          placeholder="email"
          value={formValue.email}
          onChange={(e) =>
            setFormValue({ ...formValue, email: e.target.value })
          }
        />
        <input
          className="bg-standard text-standard mt-3 rounded-md p-2 text-lg focus:outline-none "
          type="email"
          placeholder="confirm email"
          value={formValue.confirm_email}
          onChange={(e) =>
            setFormValue({ ...formValue, confirm_email: e.target.value })
          }
        />
        <input
          className="bg-standard text-standard mt-3 rounded-md p-2 text-lg focus:outline-none "
          type="password"
          placeholder="password"
          value={formValue.password}
          onChange={(e) =>
            setFormValue({ ...formValue, password: e.target.value })
          }
        />
        <input
          className="bg-standard text-standard mt-3 rounded-md p-2 text-lg focus:outline-none "
          type="password"
          placeholder="confirm password"
          value={formValue.confirm_password}
          onChange={(e) =>
            setFormValue({ ...formValue, confirm_password: e.target.value })
          }
        />
        <button
          className="bg-standard text-standard mt-3 rounded-md p-2 text-lg focus:outline-none"
          type="submit"
        >
          Make
        </button>
      </form>
    </div>
  );
};
