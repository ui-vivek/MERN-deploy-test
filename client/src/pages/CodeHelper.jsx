import React, { useState } from "react";
import axios from "axios";

const CodeHelper = () => {
  //media
  // states
  const [text, settext] = useState("");
  const [summary, setSummary] = useState("");
  const [error, setError] = useState("");

  //register ctrl
  const handleSubmit = async (e) => {
    setSummary("");
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/openai/codehelper", { text });
      console.log(data);
      let len = data.length;
      let i = 0;
      setInterval(() => {
        if (i === len) {
          return;
        }
        setSummary((pre) => [...pre, data[i]]);
        i++;
      }, 15);
    } catch (err) {
      console.log(error);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <div style={{ position: "absolute", bottom: "20px", width: "80%" }}>
        <div className="chat chat-start">
          {summary ? (
            <div className="chat-bubble chat-bubble-primary">
              <pre>{summary}</pre>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="chat chat-end">
          {text ? (
            <div className=" chat-bubble mb-2">
              {" "}
              {/* <p>{text}</p> */}
            </div>
          ) : (
            ""
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex justify-center">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            value={text}
            onChange={(e) => {
              settext(e.target.value);
            }}
            multiline={true}
            required
          />
          <button className="btn btn-primary mx-2">
            <i class="bx bxs-send bx-sm"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CodeHelper;
