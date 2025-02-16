import { React, useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const ref = useRef();
  const passwordref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  useEffect(() => {
    let passowrds = localStorage.getItem("passwords");

    if (passowrds) {
      setPasswordArray(JSON.parse(passowrds));
    }
  }, []);

  const showpassword = () => {
    passwordref.current.type = "text";
    // console.log(ref.current.src);
    if (ref.current.src.includes("icons/eyecross.png")) {
      passwordref.current.type = "password";
      ref.current.src = "icons/eye.png";
    } else {
      passwordref.current.type = "text";
      ref.current.src = "icons/eyecross.png";
    }
  };

  const copyText = (text) => {
    //taken from tostify of url https://fkhadra.github.io/react-toastify/introduction/
    navigator.clipboard.writeText(text);
    toast("Copied to Clipboard ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const savepassword = () => {
    console.log(form);
    if (
      form.site.length > 0 &&
      form.username.length > 0 &&
      form.password.length > 0
    ) {
      setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
      localStorage.setItem(
        "passwords",
        JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
      );
      setform({ site: "", username: "", password: "" });
      console.log([...passwordArray, form]);

      toast("Password Saved Successfully ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast("Please fill all the fields");
    }
  };
  const deletePassword = (id) => {
    console.log("Deleting the password with id ", id);
    if (window.confirm("Are you sure you want to delete this password?")) {
      setPasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
      );
    }

    toast("Password deleted Successfully ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const editPassword = (id) => {
    console.log("Editing the password with id ", id);
    setform(passwordArray.find((item) => item.id === id));
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
  };
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className=" p-3 pt-3 md:mycontainer min-h-[84.4vh]">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-700"> &lt;</span>
          <span> Pass</span>
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your own Passoword Manager
        </p>

        <div className="flex flex-col p-4 text-black gap-8 items-center">
          <input
            value={form.site}
            name="site"
            onChange={handleChange}
            className="rounded-full border border-green-500 w-full p-4 py-1"
            type="text"
            placeholder="Enter Website URL"
          />
          <div className="flex flex-col md:flex-row w-full gap-8 justify-between">
            <input
              value={form.username}
              name="username"
              onChange={handleChange}
              className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
              placeholder="Enter user name"
            />
            <div className="relative">
              <input
                value={form.password}
                ref={passwordref}
                type="password"
                name="password"
                onChange={handleChange}
                className="rounded-full border border-green-500 w-full p-4 py-1"
                placeholder="Enter Password"
              />
              <span
                className="absolute right-[3px] top-[3px] cursor-pointer"
                onClick={showpassword}
              >
                <img
                  ref={ref}
                  className="p-1"
                  width={30}
                  src="icons/eye.png"
                  alt=""
                />
              </span>
            </div>
          </div>
          <button
            onClick={savepassword}
            className="flex justify-center items-center  gap-2 bg-green-500 rounded-full w-fit px-8 py-2 border border-green-600 hover:bg-green-300"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Save
          </button>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-2xl py-4"> Your Passwords</h2>
          {passwordArray.length === 0 && <div>No Passwords to show</div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden mb-10">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2">site</th>
                  <th className="py-2">username</th>
                  <th className="py-2">passowrd</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="  py-2 border border-white  text-center ">
                        <div className="flex items-center justify-center ">
                          <a target="_blank" href={item.site}>
                            {item.site}
                          </a>
                          <div
                            className="cursor-pointer size-7 lordicons "
                            onClick={() => {
                              copyText(item.site);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className=" py-2 border border-white text-center ">
                        <div className="flex items-center justify-center ">
                          <span>{item.username}</span>
                          <div
                            className="cursor-pointer size-7 lordicons "
                            onClick={() => {
                              copyText(item.username);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className=" py-2 border border-white text-center ">
                        <div className="flex items-center justify-center ">
                          <span>{item.password}</span>
                          <div
                            className="cursor-pointer size-7 lordicons "
                            onClick={() => {
                              copyText(item.password);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className=" py-2 border border-white text-center ">
                        <span
                          className=" mx-1cursor-pointer size-7 lordicons "
                          onClick={() => {
                            editPassword(item.id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/gwlusjdu.json"
                            trigger="hover"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                        <span
                          className=" mx-1 cursor-pointer size-7 lordicons "
                          onClick={() => {
                            deletePassword(item.id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
