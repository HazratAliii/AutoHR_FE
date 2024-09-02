import React from "react";
import Image from "next/image";

const Profile = ({ data }: any) => {
  return (
    <>
      <h1 className="text-center font-bold mt-10">User profile</h1>
      <div
        className="flex  w-[50%] ml-auto mr-auto mt-5 h-[60%] justify-around"
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      >
        <div className="flex-2">
          <div className="ml-3 mt-3">
            <Image
              src="/resources/user.jpg"
              height={150}
              width={150}
              alt="user image"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex-1 ml-20 mt-10">
          <div>
            <span>First Name: </span>
            <span>{data.first_name ? data.first_name : "N/A"}</span>
          </div>
          <br />
          <div>
            <span>Last Name: </span>
            <span>{data.last_name ? data.last_name : "N/A"}</span>
          </div>
          <br />
          <div>
            <span>E-mail: </span>
            <span>{data.gmail ? data.gmail : "N/A"}</span>
          </div>
          <br />
          <div>
            <span>Phone: </span>
            <span>{data.phone ? data.phone : "N/A"}</span>
          </div>
          <br />
          <div>
            <span>Employee-ID: </span>
            <span>{data.employee_id ? data.employee_id : "N/A"}</span>
          </div>
          <br />
          <div>
            <span>Join-date: </span>
            <span>{data.join_date ? data.join_date : "N/A"}</span>
          </div>
          <br />
          <div>
            <span>Blood group: </span>
            <span>{data.blood_group ? data.blood_group : "N/A"}</span>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default Profile;
