import React from "react";

const ReactRouter = () => {
  return (
    <div className="absolute right-75 -bottom-40 flex w-fit flex-col items-center gap-6 rounded-full bg-white px-7 py-9">
      <div class="flex h-26 w-26 items-center rounded-full p-3 ring-4 ring-[#e7ad8a]">
        <img
          class="p-2"
          src="https://miro.medium.com/v2/resize:fit:572/0*KgNXU3tz-AOj2k4b.png"
          alt=""
        />
      </div>

      <div class="flex flex-col gap-5">
        <p class="h-4 w-25 rounded-full bg-[#cee8ef]"></p>
        <p class="h-4 w-15 rounded-full bg-[#cee8ef]"></p>
        <p class="h-4 w-25 rounded-full bg-[#cee8ef]"></p>
      </div>
    </div>
  );
};

export default ReactRouter;
