import React from "react";

const Rating = () => {
  return (
    <div className="container  bg-gray-900 rounded-3xl w-96 h-96">
      <div className=" flex justify-center items-center bg-gray-700 rounded-full w-10 h-10 mt-10 ml-10 ">
        <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
            fill="#FC7614"
          />
        </svg>
      </div>
      <div className=" ml-8 mt-8 flex flex-col justify-center">
        <h1 className="text-white text-3xl">How did we do?</h1>
        <p className="text-zinc-600 mt-4 w-[80%]">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className=" flex justify-center  w-[80%] mt-4 items-center text-white">
          <div className="flex justify-center items-center bg-gray-700 rounded-full w-10 h-10 hover:bg-orange-400 hover:text-black ml-4">
            1
          </div>
          <div className="flex justify-center items-center bg-gray-700 rounded-full w-10 h-10 hover:bg-orange-400 hover:text-black ml-4">
            2
          </div>
          <div className="flex justify-center items-center bg-gray-700 rounded-full w-10 h-10 hover:bg-orange-400 hover:text-black ml-4">
            3
          </div>
          <div className="flex justify-center items-center bg-gray-700 rounded-full w-10 h-10 hover:bg-orange-400 hover:text-black ml-4">
            4
          </div>
          <div className="flex justify-center items-center bg-gray-700 rounded-full w-10 h-10 hover:bg-orange-400 hover:text-black ml-4">
            5
          </div>
        </div>
        <button className=" bg-orange-400 flex justify-center items-center w-[80%] mt-4 rounded-2xl py-1 hover:bg-white ml-6 mb-4">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Rating;
