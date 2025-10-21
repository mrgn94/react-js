import { useEffect, useState } from "react";
import Table from "./Table";
import { user_password } from "./data";
import SignUp from "./SignUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function SignIn({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [logInfo, setLogInfo] = useState({
    userNameu: "",
    passwordu: "",
    bgcolor: false,
    userId: "",
    registerVisible: "hidden",
    signInVisble: "flex",
    warning: "",
    borderColor: "",
    passwordVisible: "password",
  });

  ///------------------------------------------------------------------------------------------------///
  const signUpHandle = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    navigate("/signup");
    setLogInfo((prev) => ({
      ...prev,
      signInVisble: "hidden",
      registerVisible: "flex",
      bgcolor: false,
      borderColor: "",
      warning: "",
      userNameu: "",
      passwordu: "",
    }));
  };
  ///---------------------------------------------------------------------------------------------------///
  const handleDataFromChild = () => {
    setLogInfo((prev) => ({
      ...prev,
      registerVisible: "hidden",
      signInVisble: "flex",
    }));
  };
  ///-----------------------------------------------------------------------------------------------///
  const eyeClickHandlerDown = () => {
    setLogInfo((prev) => ({ ...prev, passwordVisible: "text" }));
  };
  const eyeClickHandlerUp = () => {
    setLogInfo((prev) => ({ ...prev, passwordVisible: "password" }));
  };
  ///-------------------------------------------------------------------------------------------------///
  const inputClickHandler = (e) => {
    e.preventDefault();
    setLogInfo((prev) => ({ ...prev, warning: "", borderColor: "" }));
  };
  const signInHandler = (event) => {
    event.preventDefault();

    if (logInfo.userNameu == "" || logInfo.passwordu == "") {
      setLogInfo((prev) => ({
        ...prev,
        warning: "Please Enter User name and Password",
        borderColor: "border-red-400",
      }));
      console.log("kullanici adi veya sifre bos");
    } else {
      {
        setLogInfo((prev) => ({ ...prev, warning: "" }));
        const user = user_password.find(
          (u) =>
            u.userName === logInfo.userNameu && u.password === logInfo.passwordu
        );

        if (user) {
          setLogInfo((prev) => ({
            ...prev,
            bgcolor: true,
            userId: user_password.indexOf(user) + 1,
            borderColor: "",
          }));

          console.log("Giris yapildi");
          setIsLoggedIn(true);
          navigate("/table", {
            state: {
              username: logInfo.userNameu,
              userpassword: logInfo.passwordu,
              bgColor: logInfo.bgcolor,
              userid: logInfo.userId,
            },
          });
        } else {
          setLogInfo((prev) => ({
            ...prev,
            warning: "Incorrect User name or Password",
            borderColor: "border-red-400 ",
          }));
          console.log("Giris yapilmadi");
        }
        setLogInfo((prev) => ({ ...prev, userNameu: "", passwordu: "" }));
        console.log(logInfo.bgcolor);
        console.log(logInfo.userNameu);
      }
    }
  };

  ///---------------------------------------------------------------------------------------------------///
  return (
    <>
      <div className="flex justify-self-center  w-fit">
        <div className={`${logInfo.signInVisble} p-1 rounded-md `}>
          <form className="grid grid-row-6 mt-36 border-solid border-1 border-gray-500 bg-gray-300 rounded-lg justify-self-center">
            <div className="grid m-1 grid-cols-4">
              <div className="m-2 content-around">
                <p className="justify-self-center font-bold text-gray-600">
                  User Name
                </p>
              </div>
              <div className="col-span-3 grid content-center">
                <input
                  type="text"
                  value={logInfo.userNameu}
                  onClick={inputClickHandler}
                  name="userNameu"
                  onChange={(e) =>
                    setLogInfo((c) => ({
                      ...c,
                      userNameu: e.target.value,
                    }))
                  }
                  placeholder="User name"
                  className={` m-3 p-2 rounded-md focus:outline-none  ${logInfo.borderColor} border font-medium text-gray-500`}
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
                  type={`${logInfo.passwordVisible}`}
                  value={logInfo.passwordu}
                  name="passwordu"
                  onClick={inputClickHandler}
                  onChange={(e) =>
                    setLogInfo((c) => ({
                      ...c,
                      passwordu: e.target.value,
                    }))
                  }
                  placeholder="Password"
                  className={`m-3 p-2  rounded-md focus:outline-none ${logInfo.borderColor} border font-medium  text-gray-500`}
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
                {logInfo.warning}
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
        {/* <SignUp
          isVisible={logInfo.registerVisible}
          sendDataToParent={handleDataFromChild}
        /> */}
      </div>
      <div className="">
        {/* <Table bgColor={logInfo.bgcolor} userid={logInfo.userId} /> */}
      </div>
    </>
  );
}
