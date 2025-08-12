import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { user_password } from "./data";
import { useState } from "react";

export default function Trow({ id, userName, password, bg, deleteButton }) {
  const [deleteIcon, setDeleteIcon] = useState("hidden");

  const hoverHandlerEnter = () => {
    setDeleteIcon("flex");
  };
  const hoverHandlerLeave = () => {
    setDeleteIcon("hidden");
  };

  return (
    <>
      <tr
        // onClick={messega}
        onMouseEnter={hoverHandlerEnter}
        onMouseLeave={hoverHandlerLeave}
        className={`${bg} transition dealy-150 hover:scale-105 bg-gray-200 hover:bg-gray-600 hover:text-white`}
      >
        <td className=" rounded-md p-2 px-3">{id}</td>
        <td className=" rounded-md p-2 px-6">{userName}</td>
        <td className=" rounded-md p-2 px-6">
          {password}
          <FontAwesomeIcon
            onClick={deleteButton}
            className={`${deleteIcon} absolute top-1/4 right-3  mt-1 cursor-pointer`}
            icon={faTrashCan}
          />
        </td>
      </tr>
    </>
  );
}
