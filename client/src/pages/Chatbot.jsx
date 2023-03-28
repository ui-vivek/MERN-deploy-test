import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  //media
  // states
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");

  //register ctrl
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/openai/chatbot", { text });
      console.log(data);
      const newMessages = [...messages, { text, summary: data }];
      setMessages(newMessages);
      setText("");
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
        {messages.map((message, index) => (
          <>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src="https://images.unsplash.com/photo-1610353458972-73d1d9313347?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmxzJTIwcGhvdG98ZW58MHx8MHx8&w=1000&q=80" />
                </div>
              </div>
              <div className="chat-bubble">
                <p>{message.text}</p>
              </div>
            </div>
            <div className="chat chat-start my-2">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/800px-ChatGPT_logo.svg.png" />
                </div>
              </div>
              <div className="chat-bubble chat-bubble-primary">
                <p>{message.summary}</p>
              </div>
            </div>
          </>
        ))}

        <form onSubmit={handleSubmit} className="flex justify-center">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            multiline={true}
            required
          />
          <button className="btn btn-primary mx-2">
            <i className="bx bxs-send bx-sm"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
