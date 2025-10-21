import { useState, useRef } from "react";
import { user_password } from "./data";
import { useNavigate } from "react-router-dom";

export default function SignUp({ isVisible, setIsLoggedIn }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [enterPassword, setEnterPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [userNameValidation, setUserNameValidation] = useState("");
  const [registerWarning, setRegisterWarning] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const [passwordBorder, setPasswordBorder] = useState("");
  const userInputRef = useRef();
  ///--------------------------------------------------------------------------------------------------------------///
  const cancelHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate("/");
    setUserName("");
    setEnterPassword("");
    setReEnterPassword("");
    setBorderColor("");
    setPasswordBorder("");
    setRegisterWarning("");
    setUserNameValidation("");
  };
  ///--------------------------------------------------------------------------------------------------------------///
  const inputClickHandler = () => {
    setBorderColor("");
    setRegisterWarning("");
    setPasswordBorder("");
  };
  ///----------------------------------------------------------------------------------------------------------------///
  const userNameHandler = (e) => {
    const value = userInputRef.current.value.trim();
    const findUser = user_password.find(
      (user) => user.userName.toLowerCase() === value.toLowerCase()
    );

    if (findUser) {
      setUserNameValidation("This username is already used");
      setBorderColor("ring-1 ring-red-500");
    } else {
      setUserNameValidation("");
      setBorderColor("");
    }
    setUserName(e.target.value);
  };
  ///----------------------------------------------------------------------------------------------------------------///

  const registerHandler = (e) => {
    e.preventDefault();

    if (userName == "" || enterPassword == "" || reEnterPassword == "") {
      setRegisterWarning("Please enter all information");
      setBorderColor("ring-1 ring-red-500");
      setPasswordBorder("ring-1 ring-red-500");
    } else {
      if (enterPassword == reEnterPassword && userNameValidation == "") {
        // sendDataToParent("hidden");
        user_password.push({
          userName: userName,
          password: enterPassword,
        });
        setIsLoggedIn(true);
        setUserName("");
        setEnterPassword("");
        setReEnterPassword("");
        // sendDataToParent("hidden");
        navigate("/");
        console.log(user_password);
      } else if (userNameValidation == "This username is already used") {
        // setUserNameValidation("");
        setRegisterWarning("Pleas enter another user name");
      } else {
        setRegisterWarning("Please enter correct password");
      }
    }
  };
  ///-------------------------------------------------------------------------------------------------------------///

  ///-----------------------------------------------------------------------------------------------------------///

  return (
    <>
      <form
        className={`${isVisible} flex justify-self-center mt-36 w-fit bg-gray-300 rounded-md border-solid border-gray-500 border-1`}
      >
        <div className="grid grid-row-8 p-4">
          <div className="grid m-1 grid-cols-5 items-center">
            <div className="justify-self-center font-bold text-gray-600">
              <p>User Name</p>
            </div>
            <div className={`col-span-4 grid`}>
              <input
                type="text"
                value={userName}
                ref={userInputRef}
                onClick={inputClickHandler}
                onChange={userNameHandler}
                placeholder="Enter User Name"
                className={`w-5/6 m-3 p-2 rounded-md focus:outline-none  ${borderColor} text-gray-500`}
              />
              <p className="pl-10 self-start text-red-500 text-sm">
                {userNameValidation}
              </p>
            </div>
          </div>
          <div className="grid m-1 grid-cols-5 items-center">
            <div>
              <p className="justify-self-center font-bold text-gray-600">
                Password
              </p>
            </div>
            <div className="grid col-span-4">
              <input
                type="password"
                value={enterPassword}
                onClick={inputClickHandler}
                onChange={(e) => setEnterPassword(e.target.value)}
                placeholder="Enter Password"
                className={`w-5/6 m-3 p-2 rounded-md focus:outline-none  ${passwordBorder}  text-gray-500`}
              />
            </div>
          </div>
          <div className="grid m-1 grid-cols-5 items-center">
            <div>
              <p className="justify-self-center font-bold text-gray-600">
                Password
              </p>
            </div>
            <div className="grid col-span-4">
              <input
                type="password"
                value={reEnterPassword}
                onClick={inputClickHandler}
                onChange={(e) => setReEnterPassword(e.target.value)}
                placeholder=" Re Enter Password"
                className={`w-5/6 m-3 p-2 rounded-md focus:outline-none  ${passwordBorder}  text-gray-500`}
              />
              <p className="pl-10 self-start text-red-500 text-sm">
                {registerWarning}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-self-center">
            <button
              onClick={registerHandler}
              className="p-1 px-7 border-solid border-2 transition duration-150 hover:scale-95  border-gray-500 rounded-md text-black m-2  justify-self-end"
            >
              Registred
            </button>
            <button
              onClick={cancelHandler}
              className="p-1 px-7 border-solid border-2  transition duration-150 hover:scale-95  border-gray-500 rounded-md text-black m-2  justify-self-end"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
