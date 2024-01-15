"use client";
import { Modal } from "antd";
import React, { useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiImport } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import profileImage from "@/public/images/profileImage.png";
import Image from "next/image";
import RejectModal from "../components/modals/rejectModal";

const CustomerTable = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const divRef = useRef();

  const handleShow = (id) => {
    setShow(!show);
    setSelected(id);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="py-4 mx-2 mt-4 bg-white rounded-md lg:mx-7 ">
        <Modal
          title="Warning"
          open={isModalOpen}
          centered
          footer={false}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <RejectModal handleOk={handleOk} handleCancel={handleCancel} />
        </Modal>

        <div className="flex flex-col items-start justify-center gap-2 px-2 md:justify-between md:flex-row ">
          <div className="flex flex-col gap-2 md:items-center md:flex-row max-md:w-full ">
            <div className="relative ">
              <input
                type="text"
                placeholder="Search all users"
                className="pl-8 nav-placeholder w-full md:w-[268px] h-[50px] py-2 px-3 bg-[#fff] border  border-[#0B1903] border-opacity-[0.1] rounded shadow-none focus:outline-none"
              />
              <IoSearch className="absolute top-4 left-2 z-1 text-[18px] cursor-pointer text-[rgba(0,0,0,0.5)]" />
            </div>

            <select
              type="text"
              placeholder="Select Location"
              className="report-placeholder w-full md:w-[149px] h-[50px] py-2 px-3  bg-white border border-borderColor border-opacity-[0.1] rounded shadow-none focus:outline-none   text-[#000] text-opacity-[0.58] "
            >
              <option>All Users</option>
              <option>Pending</option>
              <option>Complete</option>
              <option>Cancelled</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row max-md:w-full ">
            <button className="w-full sm:w-[130px] h-[50px] bg-providerSecondary text-white rounded-md text-[14px]  ">
              Add New User
            </button>
            <button className="w-full sm:w-[130px] h-[50px] bg-[#F6FBFF] border border-[#B1DDFE]  text-black rounded-md text-[14px] flex items-center justify-center  gap-1  ">
              <CiImport className="text-[18px] " /> Excel Export
            </button>
          </div>
        </div>

        <div className="px-3 mt-8 overflow-x-auto table-class ">
          <table className="">
            <thead className="ltr:text-left rtl:text-right">
              <tr className="p-5 mt-4 ">
                <th className="px-4 py-3 whitespace-nowrap text-providerPrimary ">
                  User Name
                </th>

                <th className="px-4 py-3 whitespace-nowrap text-providerPrimary ">
                  Email Address
                </th>
                <th className="px-4 py-3 whitespace-nowrap text-providerPrimary ">
                  Phone Number
                </th>
                <th className="px-4 py-3 whitespace-nowrap text-providerPrimary ">
                  Added On
                </th>
                <th className="px-4 py-3 whitespace-nowrap text-providerPrimary ">
                  Status
                </th>
                <th className="px-4 py-3 whitespace-nowrap text-providerPrimary ">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <tr className="" key={index}>
                  <td className="whitespace-nowrap p-3    text-providerPrimary  font-[600] flex items-center gap-2 max-xl:w-[200px] ">
                    <Image src={profileImage} alt="image" />
                    <span>Car Oil Changer</span>
                  </td>

                  <td className="whitespace-nowrap p-3   text-grayish   max-xl:w-[300px]  ">
                    user67@email.com
                  </td>
                  <td className="whitespace-nowrap p-3   text-grayish   max-xl:w-[300px]  ">
                    +01 444444 6669
                  </td>
                  <td className="whitespace-nowrap p-3   text-grayish   max-xl:w-[300px]  ">
                    15 Feb, 2018
                  </td>
                  <td className="whitespace-nowrap p-3   text-providerPrimary   max-xl:w-[300px]  ">
                    <button
                      className={`w-[88px] h-[30px] ${
                        index % 2 ? "bg-[#ED1C24]" : "]  bg-[#22A960]"
                      }  rounded-lg text-[14px] text-white `}
                    >
                      {index % 2 ? "Cancelled" : "Booked"}
                    </button>
                  </td>
                  <td className="whitespace-nowrap p-3   text-providerPrimary   max-xl:w-[300px]  relative">
                    <button
                      className="border border-[rgba(0,0,0,0.07)] p-2 bg-[rgba(248,249,255,0.72)] rounded-lg"
                      onClick={() => handleShow(index)}
                    >
                      <BsThreeDotsVertical />
                    </button>
                    {show && selected === index && (
                      <div
                        ref={divRef}
                        className="absolute top-[60px] left-[-40px] max-[1340px]:left-[-90px] w-[142px] bg-white border border-[rgba(194, 194, 206, 0.22)] px-3 py-2 flex flex-col gap-4 rounded-md z-20 shadow-dropDownBoxShadow "
                      >
                        <div className="flex items-center gap-3 cursor-pointer">
                          <FiEdit className="text-[#696974]" />
                          <p className="text-[#696974] font-normal text-[14px]">
                            Accepted
                          </p>
                        </div>

                        <div
                          className="flex items-center gap-3 cursor-pointer"
                          onClick={showModal}
                        >
                          <RiDeleteBin6Line className="text-[#696974]" />
                          <p className="text-[#696974] font-normal text-[14px]">
                            Reject
                          </p>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerTable;
