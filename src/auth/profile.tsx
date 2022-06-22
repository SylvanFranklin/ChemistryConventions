import { BsFillDice4Fill } from "react-icons/bs";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/micah";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../App";
import DefaultLayout from "../Page Layouts/Default";
import { LogIn } from "./Login";
import { SignUp } from "./SignUp";
import { AiOutlineLoading } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import { MdExitToApp } from "react-icons/md";
import { User } from "firebase/auth";

export const LoggedIn: React.FC = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <DefaultLayout>
      <div className="mx-auto h-full w-2/3 rounded-md p-6">
        {user ? (
          <div>
            <div className="bg-standard flex flex-row">
              <Profile user={user} />
              <div className="flex flex-col">
                {
                  // put the main content of the website in hear
                }
              </div>
            </div>

            <button
              className="mx-auto mt-20 flex w-1/4 flex-row rounded-lg p-1"
              onClick={() => auth.signOut()}
            >
              <div className="text-standard button-standard mx-auto flex flex-row">
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

interface ProfileProps {
  user: User;
}

const Profile: React.FC<ProfileProps> = (props) => {
  const [svg, setSvg] = useState(
    createAvatar(style, { seed: String(Math.random()) })
  );

  const peak_animation = useAnimation();

  return (
    <div className="flex h-full flex-col p-3">
      <div className="h-full items-end">
        {/* <div className="mb-[-2rem] rounded-full border-4 w-min p-3 bg-opacity-100 bg-standard">
          <BsFillDice4Fill className="text-standard text-2xl" />
        </div> */}
        <motion.div className="h-40 w-32 overflow-clip rounded-t-full rounded-b-lg border-4 pt-6 align-baseline">
          <motion.div
            onClick={() => {
              setSvg(createAvatar(style, { seed: String(Math.random()) }));
              peak_animation.start({
                y: [200, 0],
                transition: { duration: 1 },
              });
            }}
            animate={peak_animation}
            dangerouslySetInnerHTML={{ __html: svg }}
          ></motion.div>
        </motion.div>
      </div>
      <h2 className="text-standard mt-4 h-min rounded-md bg-blue-300 p-2 text-center">
        {props.user.displayName ? props.user.displayName : "unnamed account"}
      </h2>
    </div>
  );
};
