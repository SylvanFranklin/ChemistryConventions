import React from "react";
import { AiOutlineTable } from "react-icons/ai";
import { Link } from "react-router-dom";

export function TableButton({}) {
  return (
    <Link
      className="my-auto flex h-12 flex-row rounded-xl bg-gradient-to-r from-[#6d597a] to-[#e56b6f] px-4 text-dark-text transition-all delay-75 duration-200 ease-in hover:to-red-300"
      to={"/table"}
    >
      <h2 className="m-2 my-auto">Table</h2>
      <AiOutlineTable className="my-auto text-3xl" />
    </Link>
  );
}
