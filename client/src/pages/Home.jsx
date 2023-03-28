import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container mx-auto my-5">
        <div className="flex flex-wrap justify-around mx-4">
          <Link to={"/summary"}>
            <div className="hover:bg-secondary-focus card w-64 h-48 bg-secondary text-secondary-content border-solid border-2 border-primary my-2 cursor-pointer">
              <div className="card-body flex flex-col justify-center">
                <h2 className="card-title">Text Summry</h2>
                <p className="mt-2">
                  Short your larger paragraph into breife summary
                </p>
              </div>
            </div>
          </Link>{" "}
          <Link to={"/paragraph"}>
            <div className="hover:bg-secondary-focus card w-64 h-48 bg-secondary text-secondary-content border-solid border-2 border-primary my-2 cursor-pointer">
              <div className="card-body flex flex-col justify-center">
                <h2 className="card-title">Card title!</h2>
                <p className="mt-2">
                  If a dog chews shoes whose shoes does he choose?
                </p>
              </div>
            </div>
          </Link>{" "}
          <Link to={"/chatbot"}>
            <div className="hover:bg-secondary-focus card w-64 h-48 bg-secondary text-secondary-content border-solid border-2 border-primary my-2 cursor-pointer">
              <div className="card-body flex flex-col justify-center">
                <h2 className="card-title">Card title!</h2>
                <p className="mt-2">
                  If a dog chews shoes whose shoes does he choose?
                </p>
              </div>
            </div>
          </Link>{" "}
          <Link to={"/codehelper"}>
            <div className="hover:bg-secondary-focus card w-64 h-48 bg-secondary text-secondary-content border-solid border-2 border-primary my-2 cursor-pointer">
              <div className="card-body flex flex-col justify-center">
                <h2 className="card-title">Card title!</h2>
                <p className="mt-2">
                  If a dog chews shoes whose shoes does he choose?
                </p>
              </div>
            </div>
          </Link> 
           <Link to={"/imagegen"}>
            <div className="hover:bg-secondary-focus card w-64 h-48 bg-secondary text-secondary-content border-solid border-2 border-primary my-2 cursor-pointer">
              <div className="card-body flex flex-col justify-center">
                <h2 className="card-title">Card title!</h2>
                <p className="mt-2">
                  If a dog chews shoes whose shoes does he choose?
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
