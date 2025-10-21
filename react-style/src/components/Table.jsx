import { useLocation, useNavigate } from "react-router-dom";
import { user_password } from "./data";
import Trow from "./Trow";
import { useState, useEffect } from "react";

export default function Table({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const location = useLocation();

  const { username, userpassword, bgColor, userid } = location.state || {};

  const [myArray, setMyArray] = useState(user_password);
  const [myColor, setMyColor] = useState(bgColor);
  const [myId, setMyId] = useState(userid);
  ///-----------------------------------------------------------------------------------
  console.log(location.state);

  useEffect(() => {
    setMyColor(bgColor);
    setMyId(userid);
  }, [bgColor, userid]);

  // useEffect(() => {
  //   if (bgColor !== undefined) setMyColor(bgColor);
  //   if (userid !== undefined) setMyId(userid);
  // }, [bgColor, userid]);

  const signOutHandler = () => {
    setIsLoggedIn(false);
    navigate("/");
  };
  ///-------------------------------------------------------------------------------------
  const deleteHandler = (index) => {
    myId > index ? setMyId(myId - 1) : setMyId(myId);
    // myId == index + 1 ? setMyColor(false) : setMyColor(true);

    if (myId == index + 1) {
      setMyColor(false);
    }

    let newArray = [...myArray];
    newArray.splice(index, 1);
    user_password.splice(index, 1);
    setMyArray(newArray);
  };
  ///-------------------------------------------------------------------------------------
  return (
    <>
      <div className="flex justify-end">
        <p className="flex text-gray-600 p-2 px-20 font-extrabold text-lg">
          Welcome {username}
          {"---"}
          {userpassword}
        </p>
        <button
          onClick={signOutHandler}
          className="flex bg-gray-600 text-white p-3 px-5 rounded-md justify-self-end"
        >
          Sign Out
        </button>
      </div>
      <div className="justify-center h-screen mt-5 justify-items-center">
        <table className="border border-separate  rounded-md border-none border-spacing-1 w-screen m-12 p-12">
          <thead className=" ">
            <tr className="text-white">
              <th className="border border-gray-300 bg-gray-600  px-3 py-3 rounded-md ">
                Id
              </th>
              <th className="border border-gray-300 bg-gray-600  px-6 py-3 rounded-md ">
                User Name
              </th>
              <th className="border border-gray-300 bg-gray-600  px-6 py-3 rounded-md ">
                Password
              </th>
            </tr>
          </thead>
          <tbody className="">
            {user_password
              .map((row, index) =>
                myId == index + 1 ? (
                  <Trow
                    deleteButton={() => deleteHandler(index)}
                    key={index}
                    {...row}
                    id={index + 1}
                    bg={`${
                      myColor
                        ? "transition  duration-200 scale-110  bg-green-600 text-white hover:bg-green-400"
                        : "bg-gray-200 "
                    }`}
                  />
                ) : (
                  <Trow
                    deleteButton={() => deleteHandler(index)}
                    key={index}
                    {...row}
                    id={index + 1}
                  />
                )
              )
              .reverse()}
          </tbody>
        </table>
      </div>
    </>
  );
}
