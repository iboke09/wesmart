import Image from "next/image";
import React from "react";
import img from "./img/404 Error-amico.svg";
function notFound() {
  return (
    <>
      <div>
        <div
          style={{
            height: "100vh",
            placeItems: "center",
            placeContent: "center",
          }}
        >
          <div class="bg-white pt-6 sm:pt-12 pb-12 sm:pb-18">
            <div class="container mx-auto">
              <div class=" lg:w-2/3 xl:w-1/2 mx-auto flex flex-col items-center justify-center px-6 sm:px-16">
                <div class="w-full pb-full relative">
                  <Image
                    src={img}
                    width={100}
                    height={100}
                    alt="error illustration"
                    class="left-0 top-0 w-full h-full"
                    load
                  />
                </div>{" "}
                <h4 class="text-gray-900 text-3xl mb-2 mt-4 font-bold text-center">
                  Oops! Page not found
                </h4>{" "}
                <p
                  class="text-gray-700 mb-4 text-center leading-relaxed"
                  style={{ fontSize: "13px" }}
                >
                  The page you are trying to access does not exist or has been
                  moved.
                  <br />
                  Try going back to our homepage.
                </p>{" "}
                <a
                  href="/"
                  class="bg-blue-500 hover:bg-blue-600 py-3 px-6 rounded font-bold text-lg text-white"
                >
                  Go to homepage
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default notFound;
