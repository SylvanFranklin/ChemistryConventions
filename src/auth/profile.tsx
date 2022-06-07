import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/micah";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../App";
import DefaultLayout from "../Page Layouts/Default";
import { LogIn } from "./Login";
import { SignUp } from "./SignUp";
import { AiOutlineLoading } from "react-icons/ai";
import { motion } from "framer-motion";
import { MdExitToApp } from "react-icons/md";

const svg = createAvatar(style, {
  seed: "ctmdfseed",
  // ... and other options
});

export const Profile: React.FC = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <DefaultLayout>
      <div className="mx-auto h-full w-2/3 rounded-md p-6">
        {user ? (
          <div className="flex flex-col">
            <div className="bg-standard flex flex-row rounded-md p-6">
              <div className="flex h-full flex-col p-3">
                <div className="h-full items-end">
                  <div
                    className=" aspect-square w-32 overflow-clip rounded-full border-4"
                    dangerouslySetInnerHTML={{ __html: svg }}
                  ></div>
                </div>
                <h2 className="text-standard mt-4 h-min rounded-md bg-blue-300 p-2">
                  {user.displayName ? user.displayName : "unnamed account"}
                </h2>
              </div>
              <h1 className="text-standard">
                leaderboards and content coming soon
              </h1>
            </div>
            <button
              className="mx-auto mt-20 flex w-1/4 flex-row rounded-lg p-1"
              onClick={() => auth.signOut()}
            >
              <div className="text-standard mx-auto flex flex-row">
                Sign out <MdExitToApp className="my-auto mx-2 text-2xl" />
              </div>
            </button>
          </div>
        ) : !loading ? (
          <div className="flex flex-row">
            <div className="mr-16 w-1/2 ">
              <SignUp />
            </div>
            <div className="ml-16 w-1/2">
              <LogIn />
            </div>
          </div>
        ) : (
          <div className="grid items-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <AiOutlineLoading className="text-standard mx-auto text-9xl font-bold" />
            </motion.div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};
