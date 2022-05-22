import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/micah";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../App";
import DefaultLayout from "../Page Layouts/Default";
import { LogIn } from "./Login";
import { SignUp } from "./SignUp";

const svg = createAvatar(style, {
  seed: "custom-seed",
  // ... and other options
});

export const Profile: React.FC = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <DefaultLayout>
      <div className="mx-auto h-full w-1/2 rounded-md p-6">
        <>
          {user ? (
            // <div onClick={() => signOut(auth)}>
            //   some stats {user.displayName}
            // </div>
            <div className="bg-standard flex flex-row rounded-md p-6">
              <div
                className="h-1/6 w-1/6 overflow-clip rounded-full border-4"
                dangerouslySetInnerHTML={{ __html: svg }}
              ></div>
            </div>
          ) : (
            !loading && ( // otherwise render a sign in page
              <div className="flex flex-row">
                <div className="mr-16 w-1/2 ">
                  <SignUp />
                </div>
                <div className="ml-16 w-1/2">
                  <LogIn />
                </div>
              </div>
            )
          )}
        </>
      </div>
    </DefaultLayout>
  );
};
