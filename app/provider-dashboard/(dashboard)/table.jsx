"use client";
import { useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { Modal, Pagination } from "antd";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LuCalendarDays } from "react-icons/lu";
import { GoClock } from "react-icons/go";
import RejectModal from "../components/modals/rejectModal";

const TableSection = () => {
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
        title="Warning"
        open={isModalOpen}
        centered
        footer={false}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <RejectModal handleOk={handleOk} handleCancel={handleCancel} />
      </Modal>
      <div className="bg-[#fff] px-3 py-3  rounded-xl">
        <h1 className="text-[18px] lg:text-[24px] font-[500] ">
          New Appointments
        </h1>

        <div className="px-3 mt-4 overflow-x-auto table-class ">
          <table className="bg-white ">
            <thead className="ltr:text-left rtl:text-right">
              <tr className="mt-4 bg-[#FAFBFF] p-5 ">
                <th className="px-4 py-3 whitespace-nowrap text-providerPrimary ">
                  #
                </th>
                <th className="px-4 py-3 whitespace-nowrap text-providerPrimary ">
                  Date
                </th>
                <th className="px-4 py-3 whitespace-nowrap text-providerPrimary ">
                  Time
                </th>
                <th className="px-4 py-3 whitespace-nowrap text-providerPrimary ">
                  Service Type
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
                  <td className="p-3 font-medium text-providerPrimary whitespace-nowrap ">
                    0{index + 1}
                  </td>
                  <td className="whitespace-nowrap p-3    text-providerPrimary   flex items-center gap-2 max-xl:w-[200px] ">
                    <LuCalendarDays className="text-[20px] " />
                    17 July, 2022
                  </td>

                  <td className="whitespace-nowrap p-3    text-providerPrimary  max-xl:w-[300px]  ">
                    <span className="flex items-center gap-2 ">
                      <GoClock className="text-[20px] " /> 10 : 00 PM
                    </span>
                  </td>

                  <td className="whitespace-nowrap p-3   text-providerPrimary   max-xl:w-[300px]  ">
                    Car Oil Changer
                  </td>
                  <td className="whitespace-nowrap p-3   text-providerPrimary   max-xl:w-[300px]  ">
                    <button
                      className={`w-[88px] h-[30px] ${
                        index % 2 ? "bg-[#ED1C24]" : "]  bg-[#22A960]"
                      }  rounded-lg text-[14px] text-white `}
                    >
                      {index % 2 ? "Cancelled" : "Confirm"}
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
};

export default TableSection;
