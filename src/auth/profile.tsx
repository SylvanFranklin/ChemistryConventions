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

const svg = createAvatar(style, {
  seed: "ctm-sdfasdfasdfseed",
  // ... and other options
});

export const Profile: React.FC = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <DefaultLayout>
      <div className="mx-auto h-full w-2/3 rounded-md p-6">
        {user ? (
          <div className="bg-standard flex  flex-row rounded-md p-6">
            <div className="flex h-full flex-col p-3">
              <div className="h-full items-end">
                <div
                  className=" aspect-square overflow-clip rounded-full border-4"
                  dangerouslySetInnerHTML={{ __html: svg }}
                  onClick={() => auth.signOut()}
                ></div>
              </div>
              <h2 className="text-standard mt-4 h-min rounded-md bg-blue-300 p-2">
                {user.displayName ? user.displayName : "unnamed account"}
              </h2>
            </div>
            <h1>leaderboards and content coming soon</h1>
          </div>
        ) : !loading ? ( // otherwise render a sign in page
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
             transition={{ repeat: Infinity, duration:1}}
             
            >
              <AiOutlineLoading className="text-standard text-9xl font-bold mx-auto"/>
            </motion.div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};
