import React from "react";
import { useFormContext, Controller } from "react-hook-form";

function PersonalInformation() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <div className="w-screen flex flex-wrap justify-center text-red-500 text-xl font-bold">
        Registration and Sponsorship Form
      </div>
      <div className="max-w-full border border-red-500 p-5 m-5">
        <div className=" text-red-500 font-semibold mb-2">
          Personal Information:{" "}
        </div>
        <div className="grid md:grid-flow-col md:grid-cols-12 md:mb-2">
          <div className="col-span-1 md:text-right mr-2">Name:</div>
          <div className="md:col-span-20 grid md:grid-flow-col gap-3">
            <select
              {...register("salution")}
              className="md:col-auto border border-gray-500 text-black w-[50px]"
            >
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
            </select>
            <div className="col-span-3">
              <input
                type="text"
                {...register("firstname")}
                placeholder="First Name"
              />
              <div className="text-sm text-red-600">
                {errors.firstname?.message}
              </div>
            </div>

            <input
              type="text"
              {...register("middlename")}
              className="col-span-3"
              placeholder="Middle Name"
            />
            <div className="col-span-3">
              <input
                type="text"
                {...register("lastname")}
                placeholder="Last Name"
              />
              <div className="text-sm text-red-600">
                {errors.lastname?.message}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-flow-col md:grid-cols-12 md:mb-2">
          <div className="col-span-1 md:text-right mr-2">Address:</div>
          <div className="md:grid-flow-row">
            <input
              type="text"
              id="first_name"
              className="w-full md:col-span-1 md:w-[300px] mb-1"
              placeholder="Adress1"
            />
            <input
              type="text"
              id="first_name"
              className="w-full md:col-span-1 md:w-[300px] mb-1"
              placeholder="Address2"
            />
          </div>
        </div>

        <div className="grid md:grid-flow-col md:grid-cols-12 md:mb-2">
          <div className="col-span-1 md:text-right mr-2">Country:</div>
          <select
            defaultValue={"Mr"}
            className="col-span-1 w-full border border-gray-500 text-black"
          >
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
          </select>
          <div className="md:col-span-1 md:text-right mr-2">City:</div>
          <input
            type="text"
            id="city"
            className="col-span-2"
            placeholder="City"
          />
          <div className="md:col-span-1 md:text-right">State:</div>
          <select
            defaultValue={"Mr"}
            className="col-span-2 border border-gray-500 text-black"
          >
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
          </select>
          <div className="md:col-span-1 md:text-right">Zip Code:</div>
          <input
            type="text"
            id="last_name"
            className="col-span-2"
            placeholder="Zip Code"
          />
        </div>

        <div className="grid md:grid-flow-col md:grid-cols-12 md:mb-2">
          <div className="col-span-1 md:text-right mr-2">Email:</div>
          <input
            type="text"
            id="email"
            className=" w-full col-span-2 border border-gray-500 text-black"
            placeholder="Email"
          />
          <div className="md:col-span-1 md:text-right mr-2">Phone No:</div>
          <input
            type="text"
            id="city"
            className=" w-full col-span-2 border border-gray-500 text-black"
            placeholder="Home Number"
          />
          <div className="md:col-span-1 md:text-right mr-2">Mobile No:</div>

          <input
            type="text"
            id="last_name"
            className="col-span-2"
            placeholder="Mobile Number"
          />
        </div>
      </div>
    </>
  );
}

export default PersonalInformation;
