"use client";

import { cn } from "@/lib/utils";

const Container = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(" px-0 md:px-5 lg:px-10 w-full", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;