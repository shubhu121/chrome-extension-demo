import React from "react";
import {
  AtSymbolIcon,
  PaperAirplaneIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";

const ChatBot = () => {
  return (
    <div className="p-4 font-sans font-normal text-white text-base bg-gray-100 rounded-lg shadow-md w-[22rem] overflow-hidden">
      <div className="flex justify-between items-center mb-4 mx-8">
        <img src="chatbot.svg" alt="Chat Bot" width={30} height={30} />
        <h2 className="text-lg font-bold text-[#4D5154]">Help AI Chat Bot</h2>
        <button
          onClick={() => window.close()}
          className="text-black hover:text-gray-600 text-5xl mb-1 flex items-center"
        >
          &times;
        </button>
      </div>

      <div className="mb-4 mt-10">
        <div className="flex justify-center items-center mb-4 gap-1">
          <img src="chatbot.svg" alt="Chat Bot" width={30} height={30} />
          <h1 className="text-xl font-bold text-[#10B0FC]">Techstack</h1>
        </div>
        <div className="bg-[#CBEFFF] flex flex-col rounded-md p-3 justify-between items-start gap-1 relative">
          <div className="pr-2 text-[#626B6F]">
            <h3 className="text-[#626B6F]">
              The smartest and fastest AI yet?
            </h3>
            <p className="text-[#626B6F]">
              Invite friends to try Claude 3.5 Sonnet for free!
            </p>
          </div>
          <button className="absolute right-0.5 top-0.5 text-black hover:text-gray-600 text-md bg-white rounded-full w-6">
            &times;
          </button>
          <div className="flex justify-end gap-2 mt-2">
            <button className="text-[#25B7FF] font-bold">Try Now</button>
            <button className="text-gray-400 hover:text-gray-600 ml-2">
              Dismiss
            </button>
          </div>
        </div>
      </div>

      <div className="my-4">
        <h3 className="text-center text-base font-semibold text-[#5A5E61]">
          How can I assist you today?
        </h3>
        <ul className="mt-2 space-y-2 text-[#646565]">
          <li className="p-2 bg-white rounded-md shadow-sm text-justify">
            Tell me something about the Big Bang so that I can explain it to my
            5-year-old child
          </li>
          <li className="p-2 bg-white rounded-md shadow-sm text-justify">
            Please provide me with 10 gift ideas for my friend's birthday
          </li>
          <li className="p-2 bg-white rounded-md shadow-sm text-justify">
            Generate five catchy titles for my writing about the use case of
            ChatGPT
          </li>
        </ul>
      </div>

      <div className="mt-4 bg-[#CBEFFF] p-3 rounded-md relative">
        <div className="flex gap-1">
          <p className="text-[#626B6F]">
            Sider starts a new chat each time you reopen the sidebar. If you
            want to resume the last chat,{" "}
            <a href="#" className="text-[#83D7FF]">
              change this in the settings.
            </a>
          </p>
          <button className="absolute right-0.5 top-0.5 text-black hover:text-gray-600 text-md bg-white rounded-full w-6">
            &times;
          </button>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center">
          <button className="text-[#EC4235] text-xl mr-1.5">⚡</button>
          <button className="text-[#B4B4B4] text-xl mr-2">
            <img src="scissor.png" height={16} width={16} alt="" />
          </button>
          <button className="text-gray-500 text-xl">
            <img src="pin.png" height={16} width={16} alt="" />
          </button>
        </div>
        <div className="flex items-center gap-3 mr-2">
          <button className="text-xl">
            <img src="history.png" height={16} width={16} alt="" />
          </button>
          <button className="text-green-500 text-xl">
            <img src="chat.png" height={20} width={20} alt="" />
          </button>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg shadow-md py-3 mt-4">
        <div className="p-3 pb-8 bg-white rounded-lg shadow-inner relative">
          <input
            type="text"
            className="border-gray-300 rounded-lg focus:outline-none p-3 w-full h-12"
            placeholder="Type a message..."
          />
          <div className="flex justify-between absolute bottom-2 left-0 right-0 ml-2">
            <div className="flex justify-start">
              <button className="p-1 text-[#0AB0FF] rounded-lg">
                <img src="tool.png" alt="" height={20} width={20} />
              </button>
              <button className="p-1 text-[#0AB0FF] rounded-lg">
                <AtSymbolIcon className="h-4 w-4" />
              </button>

              <button className="flex items-center justify-between px-2 bg-[#CBEFFF] text-white rounded-3xl ml-1">
                <PlusIcon className="h-3 w-3 text-[#0AB0FF]" />
                <h3 className="text-xs text-[#7A8A91]">Add Tools</h3>
              </button>
            </div>
            <div>
              <button className="p-2 text-[#0AB0FF] rounded-lg ml-2">
                <PaperAirplaneIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;