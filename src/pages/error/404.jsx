import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigation = useNavigate();
  return (
    <div className="">
      <main id="content" role="main" class="main">
        <div class="content container-fluid">
          <div class="row justify-content-center align-items-sm-center py-sm-10">
            <div class="col-9 col-sm-6 col-lg-4">
              <h1 class="my-2 text-gray-800 font-bold text-2xl">
                Looks like you've found the doorway to the great nothing
              </h1>
              <p class="my-2 text-gray-800">
                Sorry about that! Please go back to get where you need
                to go.
              </p>
              <button class="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-primary text-white text-lg">
                Take me back!
              </button>
            </div>

            <div class="col-sm-6 col-lg-4 text-center text-sm-start">
              <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
