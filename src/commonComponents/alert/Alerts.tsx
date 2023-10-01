import { ApplicationConstant } from "@/constant/applicationConstant";
import { RootState } from "@/store/store";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export const AlertForStudent = (props: {
  completeAlert?: boolean;
  verifyAlert?: boolean;
  blockAlert?: boolean;
}) => {
  const student = useSelector((state: RootState) => state.student);

  return (
    <div>
      {props.completeAlert && (
        <IsCompleteForStudent
          name={`${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}`}
        />
      )}
      {props.verifyAlert && (
        <IsVerifyForStudent
          name={`${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}`}
        />
      )}
      {props.blockAlert && (
        <IsBlockForStudent
          name={`${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}`}
        />
      )}
    </div>
  );
};

export const NotAvailable = (props: { label?: string }) => {
  return (
    <div className="p-3 text-red-400 font-medium">
      {props.label ? props.label : "Details"} not available
    </div>
  );
};

const IsCompleteForStudent = (props: { name: string }) => {
  return (
    <div className="w-full p-5 text-white bg-red-500">
      <span className="font-semibold">{props.name}</span> your profile is
      pending, please complete it as soon as possible.{" "}
      <u>
        <Link href={ApplicationConstant.PROFILE_PATH}>
          Click here to complete
        </Link>
      </u>
    </div>
  );
};

const IsVerifyForStudent = (props: { name: string }) => {
  return (
    <div className="w-full p-5 text-white bg-yellow-500">
      <span className="font-semibold">{props.name}</span> your profile is not
      verified yet, please wait for verification after that you are eligible to
      participate in campus drives.
    </div>
  );
};

const IsBlockForStudent = (props: { name: string }) => {
  return (
    <div className="w-full p-5 text-white bg-red-500">
      <span className="font-semibold">{props.name}</span> your profile is
      blocked by TPO cell, please contact TPO cell to unblock your profile.
    </div>
  );
};
