"use client";
import { useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoClock } from "react-icons/go";
import { LuCalendarDays } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { Modal, Pagination } from "antd";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdOutlineRateReview } from "react-icons/md";
import RejectModal from "./components/modals/rejectModal";
import ReviewModal from "./components/modals/reviewModal";

export default function Home() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalReviewOpen, setIsModalReviewOpen] = useState(false);
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

  const showReviewModal = () => {
    setIsModalReviewOpen(true);
  };
  const handleReviewOk = () => {
    setIsModalReviewOpen(false);
  };
  const handleReviewCancel = () => {
    setIsModalReviewOpen(false);
  };

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return (
        <a className="flex justify-center items-center h-[30px] text-[#000] font-[500] select-none">
          <IoIosArrowBack />
        </a>
      );
    }
    if (type === "next") {
      return (
        <a className="flex justify-center items-center h-[30px] text-[#000] font-[500] select-none">
          <IoIosArrowForward />
        </a>
      );
    }
    return originalElement;
  };

  return (
    <div>
      <Modal
        title="Reject"
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
        open={isModalReviewOpen}
        centered
        footer={false}
        onOk={handleReviewOk}
        onCancel={handleReviewCancel}
      >
        <ReviewModal
          handleReviewOk={handleReviewOk}
          handleReviewCancel={handleReviewCancel}
        />
      </Modal>
      <div className="bg-[#fff] my-7 py-4 lg:py-7  mx-2  lg:mx-7 min-h-[calc(100vh-150px)] rounded-xl">
        <div className="flex flex-col items-start justify-center gap-3 px-2 md:justify-between md:flex-row lg:px-8 ">
          <div className="flex flex-col gap-3 md:items-center md:flex-row max-md:w-full ">
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
              <option>All</option>
              <option>Pending</option>
              <option>Complete</option>
              <option>Cancelled</option>
            </select>
          </div>

          <div className="max-md:w-full ">
            <select
              type="text"
              placeholder="Select Location"
              className="report-placeholder w-full md:w-[149px] h-[50px] py-2 px-3 bg-white border border-borderColor border-opacity-[0.1] rounded shadow-none focus:outline-none   text-[#000] text-opacity-[0.58] "
            >
              <option>Select Service</option>
              <option>Select 1</option>
              <option>Select 2</option>
              <option>Select 3</option>
            </select>
          </div>
        </div>

        <div className="px-3 mt-4 overflow-x-auto table-class ">
          <table className="bg-white ">
            <thead className="ltr:text-left rtl:text-right">
              <tr className="mt-4 bg-[#FAFBFF] p-5 ">
                <th className="px-4 py-3 whitespace-nowrap text-dashboardPrimary ">
                  #
                </th>
                <th className="px-4 py-3 whitespace-nowrap text-dashboardPrimary ">
                  Date
                </th>
                <th className="px-4 py-3 whitespace-nowrap text-dashboardPrimary ">
                  Time
                </th>
                <th className="px-4 py-3 whitespace-nowrap text-dashboardPrimary ">
                  Service Type
                </th>
                <th className="px-4 py-3 whitespace-nowrap text-dashboardPrimary ">
                  Status
                </th>
                <th className="px-4 py-3 whitespace-nowrap text-dashboardPrimary ">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <tr className="" key={index}>
                  <td className="p-3 font-medium text-dashboardPrimary whitespace-nowrap ">
                    0{index + 1}
                  </td>
                  <td className="whitespace-nowrap p-3    text-dashboardPrimary   flex items-center gap-2 max-xl:w-[200px] ">
                    <LuCalendarDays className="text-[20px] " />
                    17 July, 2022
                  </td>

                  <td className="whitespace-nowrap p-3    text-dashboardPrimary  max-xl:w-[300px]  ">
                    <span className="flex items-center gap-2 ">
                      <GoClock className="text-[20px] " /> 10 : 00 PM
                    </span>
                  </td>

                  <td className="whitespace-nowrap p-3   text-dashboardPrimary   max-xl:w-[300px]  ">
                    Car Oil Changer
                  </td>
                  <td className="whitespace-nowrap p-3   text-dashboardPrimary   max-xl:w-[300px]  ">
                    <button
                      className={`w-[88px] h-[30px] ${
                        index % 2 ? "bg-[#ED1C24]" : "]  bg-[#22A960]"
                      }  rounded-lg text-[14px] text-white `}
                    >
                      {index % 2 ? "Cancelled" : "Booked"}
                    </button>
                  </td>
                  <td className="whitespace-nowrap p-3   text-dashboardPrimary   max-xl:w-[300px]  relative">
                    <button
                      className="border border-[rgba(0, 0, 0, 0.07)] p-2 bg-[248, 249, 255, 0.72] rounded-lg"
                      onClick={() => handleShow(index)}
                    >
                      <BsThreeDotsVertical />
                    </button>
                    {show && selected === index && (
                      <div
                        ref={divRef}
                        className="absolute top-[60px] left-[-30px] max-[1340px]:left-[-90px] w-[142px] bg-white border border-[rgba(194, 194, 206, 0.22)] px-3 py-2 flex flex-col gap-4 rounded-md z-20 shadow-dropDownBoxShadow "
                      >
                        <div className="flex items-center gap-3 cursor-pointer">
                          <FiEdit className="text-[#696974]" />
                          <p className="text-[#696974] font-normal text-[14px]">
                            Accepted
                          </p>
                        </div>
                        <div
                          className="flex items-center gap-3 cursor-pointer"
                          onClick={showReviewModal}
                        >
                          <MdOutlineRateReview className="text-[#696974]" />
                          <p className="text-[#696974] font-normal text-[14px]">
                            Review
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

        <div className="flex items-center justify-center mt-8 ">
          <Pagination defaultCurrent={1} total={30} itemRender={itemRender} />
        </div>
      </div>
    </div>
  );
}
