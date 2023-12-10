"use client";

import { HTMLAttributes } from "react";

export const Button = (props: HTMLAttributes<HTMLButtonElement>) => {
  const { children } = props;

  const testMe = () => {
    console.log("Test Me!");
  };

  return (
    <button
      className="mx-auto mt-6 bg-slate-500 px-4 py-2 rounded-sm"
      onClick={testMe}
      data-cy="cy-button"
    >
      {children}
    </button>
  );
};
