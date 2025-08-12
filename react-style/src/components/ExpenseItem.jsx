import { useState } from "react";
import Table from "./Table";
import { user_password } from "./data";
import SignUp from "./SignUp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function ExpenseItem() {
  const [userNameu, setUserName] = useState("");
  const [passwordu, setPassword] = useState("");
  const [bgcolor, setBgcolor] = useState(false);
  const [userId, setUserId] = useState();
  const [registerVisible, setRegisterVisible] = useState("hidden ");
  const [signInVisble, setSignInVisble] = useState("flex");
  const [warning, setWarning] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const [passwordVisible, setPasswordVisible] = useState("password");
  ///------------------------------------------------------------------------------------------------///
  const signUpHandle = (event) => {
    event.preventDefault();
    setSignInVisble("hidden");
    setRegisterVisible("flex");
    setBgcolor(false);
    setBorderColor("");
    setWarning("");
    setUserName("");
    setPassword("");
  };
  ///---------------------------------------------------------------------------------------------------///
  const handleDataFromChild = () => {
    setRegisterVisible("hidden");
    setSignInVisble("flex");
  };
  ///-----------------------------------------------------------------------------------------------///
  const eyeClickHandlerDown = () => {
    setPasswordVisible("text");
  };
  const eyeClickHandlerUp = () => {
    setPasswordVisible("password");
  };
  ///-------------------------------------------------------------------------------------------------///
  const inputClickHandler = (e) => {
    e.preventDefault();
    setWarning("");
    setBorderColor("");
  };
  const signInHandler = (event) => {
    event.preventDefault();

    if (userNameu == "" || passwordu == "") {
      setWarning("Please Enter User name and Password");
      setBorderColor("border-red-400");
    } else {
      {
        setWarning("");
        const user = user_password.find(
          (user) => user.userName === userNameu && user.password === passwordu
        );

        if (user) {
          setBgcolor(true);
          setUserId(user_password.indexOf(user) + 1);
          setBorderColor("");
        } else {
          setWarning("Incorrect User name or Password");
          setWarning("Incorrect User name or Password");
          setBorderColor("border-red-400 ");
        }

        // user_password.push({ userName: userNameu, password: passwordu });
        setUserName("");
        setPassword("");
      }
    }
  };

  ///---------------------------------------------------------------------------------------------------///
  return (
    <>
      <body className="grid place-content-center">
        <div className={`${signInVisble} p-1 rounded-md`}>
          <form className="grid grid-row-6 mt-36 border-solid border-2 border-gray-500 bg-gray-300 rounded-lg justify-self-center">
            <div className="grid m-1 grid-cols-4">
              <div className="m-2 content-around">
                <p className="justify-self-center font-bold text-gray-600">
                  User Name
                </p>
              </div>
              <div className="col-span-3 grid content-center">
                <input
                  type="text"
                  value={userNameu}
                  onClick={inputClickHandler}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="User name"
                  className={` m-3 p-2 rounded-md focus:outline-none  ${borderColor} border font-medium text-gray-500`}
                />
              </div>
            </div>
            <div className="grid grid-cols-4 m-1">
              <div className="m-2 content-around">
                <p className="justify-self-center font-bold text-gray-600">
                  Password
                </p>
              </div>
              <div className="grid col-span-3 content-center">
                <input
                  type={`${passwordVisible}`}
                  value={passwordu}
                  onClick={inputClickHandler}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className={`m-3 p-2  rounded-md focus:outline-none ${borderColor} border font-medium  text-gray-500`}
                />
                <FontAwesomeIcon
                  onMouseDown={eyeClickHandlerDown}
                  onMouseUp={eyeClickHandlerUp}
                  className={`absolute self-center place-self-end mr-6 cursor-pointer`}
                  icon={faEye}
                />
              </div>
            </div>
            <div>
              <p className="flex  text-sm p-2 justify-self-center text-red-400 font-medium">
                {warning}
              </p>
            </div>
            <div className="grid grid-cols-2  content-around">
              <div className="grid content-center p-1 font-bold text-black">
                <button
                  onClick={signInHandler}
                  className="p-1 px-7 transition duration-150 hover:scale-95 border-solid border-2 border-orange-500 place-self-center  bg-orange-500 rounded-md text-gray-100  m-2"
                >
                  Sign In
                </button>
              </div>
              <div className="grid content-center p-1 font-bold text-black">
                <button
                  onClick={signUpHandle}
                  className="p-1 px-6 transition duration-150 hover:scale-95 border-solid border-2 border-orange-500 place-self-center bg-orange-500 rounded-md text-gray-100 m-2"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
        <SignUp
          isVisible={registerVisible}
          sendDataToParent={handleDataFromChild}
        />
        <div className="">
          <Table
            bgColor={bgcolor}
            userId={userId}
            isVisible={registerVisible}
          />
        </div>
      </body>
    </>
  );
}
