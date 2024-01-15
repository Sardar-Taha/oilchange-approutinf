import React, { useRef, useState } from "react";
import { Modal } from "antd";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiSolidRightArrow } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import RejectModal from "../components/modals/rejectModal";
import EditModal from "../components/modals/editModal";

const PriceCard = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const showEditModal = () => {
    setIsModalEditOpen(true);
  };
  const handleEditOk = () => {
    setIsModalEditOpen(false);
  };
  const handleEditCancel = () => {
    setIsModalEditOpen(false);
  };

  const planData = [
    {
      id: 1,
      header: "Starter",
      text: "Lorem Ipsum",
      amount: "$78",
      time: "/m",
      button: "Start Plan Now",
    },
    {
      id: 2,
      header: "Starter",
      text: "Lorem Ipsum",
      amount: "$78",
      time: "/m",
      button: "Start Plan Now",
    },
    {
      id: 3,
      header: "Starter",
      text: "Lorem Ipsum",
      amount: "$78",
      time: "/m",
      button: "Start Plan Now",
    },
  ];

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
      <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 xxl:grid-cols-3 ">
        {planData.map((item) => (
          <div
            className="min-h-[507px] bg-white rounded-md px-2 lg:px-6 py-3 lg:py-4 "
            key={item.id}
          >
            <div className="flex justify-between ">
              <div>
                <h1 className="text-[24px] font-[700] ">{item.header} </h1>
                <p className="text-[16px] font-[500] text-black ">
                  {item.text}
                </p>
                <p className="text-[36px] font-[800]  ">
                  {item.amount}{" "}
                  <span className="text-grayish text-[16px] font-[400] ">
                    {item.time}
                  </span>
                </p>
              </div>
              <div className="relative ">
                <BsThreeDotsVertical
                  onClick={() => handleShow(item.id)}
                  className="cursor-pointer "
                />

                {show && selected === item.id && (
                  <div
                    ref={divRef}
                    className="absolute top-[0px] right-[20px]  w-[113px] shadow-lg bg-white border border-[rgba(194, 194, 206, 0.22)] px-3 py-2 flex flex-col gap-4 rounded-md z-20 shadow-dropDownBoxShadow "
                  >
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
              </div>
            </div>

            <button className="bg-providerSecondary w-full mt-3 rounded-md text-white h-[50px] text-[16px] font-[500] ">
              {item.button}
            </button>

            <h1 className="text-[16px] mt-3 font-[500] ">
              This Plan Includes:
            </h1>

            {[1, 2, 3, 4, 5, 6, 7, 8].map((__, index) => (
              <p
                className={`text-[14px] ${
                  index === 0 ? "mt-3" : "mt-2 "
                }   flex items-center gap-1 `}
                key={index}
              >
                <BiSolidRightArrow className="rounded-lg text-providerSecondary " />
                lorem ipsum dolor sit amet, consectetur dolo
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;
