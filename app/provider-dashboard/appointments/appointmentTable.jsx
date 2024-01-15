"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import profileImage from "@/public/images/profileImage.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Modal } from "antd";
import { IoSearch } from "react-icons/io5";
import { CiImport } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import RejectModal from "../components/modals/rejectModal";
import ViewModal from "../components/modals/viewModal";
import EditModal from "../components/modals/editModal";

const AppointmentTable = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalViewOpen, setIsModalViewOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
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

  const showViewModal = () => {
    setIsModalViewOpen(true);
  };
  const handleViewOk = () => {
    setIsModalViewOpen(false);
  };
  const handleViewCancel = () => {
    setIsModalViewOpen(false);
  };

  const showEditModal = () => {
    setIsModalEditOpen(true);
  };
  const handleEditOk = () => {
    setIsModalEditOpen(false);
  };
  const handleEditCancel = () => {
    setIsModalEditOpen(false);
  };

  return (
    <div>
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
      <Modal
        title=""
        open={isModalViewOpen}
        centered
        footer={false}
        onOk={handleViewOk}
        onCancel={handleViewCancel}
      >
        <ViewModal
          handleViewOk={handleViewOk}
          handleViewCancel={handleViewCancel}
        />
      </Modal>

      <Modal
        title="Edit"
        open={isModalEditOpen}
        centered
        footer={false}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
      >
        <EditModal
          handleEditOk={handleEditOk}
          handleEditCancel={handleEditCancel}
        />
      </Modal>

      <div className="py-4 bg-white rounded-md ">
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
              className="report-placeholder  w-full md:w-[149px] h-[50px] py-2 px-3  bg-white border border-borderColor border-opacity-[0.1] rounded shadow-none focus:outline-none   text-[#000] text-opacity-[0.58] "
            >
              <option>All Users</option>
              <option>Service</option>
              <option>Customer</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row max-md:w-full ">
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
                  Service
                </th>
                <th className="px-4 py-3 whitespace-nowrap text-providerPrimary ">
                  Phone Number
                </th>
                <th className="px-4 py-3 whitespace-nowrap text-providerPrimary ">
                  Date
                </th>
                <th className="px-4 py-3 whitespace-nowrap text-providerPrimary ">
                  Time
                </th>
                <th className="px-4 py-3 whitespace-nowrap text-providerPrimary ">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <tr className="border-t border-[#E2E2E2] " key={index}>
                  <td className="whitespace-nowrap p-3   text-providerPrimary  font-[600] flex items-center gap-2 max-xl:w-[200px] ">
                    <Image src={profileImage} alt="image" />
                    <span>Car Oil Changer</span>
                  </td>

                  <td className="whitespace-nowrap p-3   text-grayish   max-xl:w-[300px]  ">
                    oil Changer
                  </td>
                  <td className="whitespace-nowrap p-3   text-grayish   max-xl:w-[300px]  ">
                    +01 444444 6669
                  </td>
                  <td className="whitespace-nowrap p-3   text-grayish   max-xl:w-[300px]  ">
                    15 Feb, 2018
                  </td>
                  <td className="whitespace-nowrap p-3   text-grayish   max-xl:w-[300px]  ">
                    10 : 00 PM
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
                        <div
                          className="flex items-center gap-3 cursor-pointer"
                          onClick={showViewModal}
                        >
                          <LuEye className="text-[#696974]" />
                          <p className="text-[#696974] font-normal text-[14px]">
                            View
                          </p>
                        </div>
                        <div
                          className="flex items-center gap-3 cursor-pointer"
                          onClick={showEditModal}
                        >
                          <FiEdit className="text-[#696974]" />
                          <p className="text-[#696974] font-normal text-[14px]">
                            Edit
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

export default AppointmentTable;
