import { useState } from "react";
import { generateResponse } from "../../lib/openai";
import aiImage from "../../public/aiIcon.png";
import Image from "next/image";
import SectionHeader from "../UI/SectionHeader";
// import job from "../lib/cron";
// import Link from "next/link";

export default function Ai() {
  const [inputText, setInputText] = useState("");
  const [conversation, setConversation] = useState([]);
  const [savedThreads, setSavedThreads] = useState([]);

  const handleGenerateResponse = async () => {
    const response = await generateResponse(inputText, conversation);
    setConversation([
      ...conversation,
      { role: "user", content: inputText },
      { role: "assistant", content: response },
    ]);
    setInputText("");
  };

  const handleSaveThread = () => {
    if (conversation.length > 0) {
      const title = conversation[0].content; // Assuming the first message is the title
      setSavedThreads([...savedThreads, { title, conversation }]);
      setConversation([]);
    }
  };

  const handleDeleteThread = (index) => {
    const updatedThreads = [...savedThreads];
    updatedThreads.splice(index, 1);
    setSavedThreads(updatedThreads);
  };

  const handleLoadThread = (conversation) => {
    setConversation(conversation);
  };

  return (
    <div className="relative w-full bg-[#F4F7F8] px-12">
      <SectionHeader
        title="VPChat"
        className="border border-b-2 border-b-slate-200"
      />
      {/* <div className="absolute top-3 left-3 flex w-auto items-center justify-center rounded-full bg-white p-2">
        <Image src={aiImage} width={40} height={40} />
      </div> */}

      <div className="chat-container">
        {conversation.map((message, index) => (
          <div
            className={`chat-message ${message.role}`}
            key={`message-${index}`}
          >
            <div className="message-content text-lg">{message.content}</div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          value={inputText}
          className="input mx-12 h-12 w-full px-3"
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button onClick={handleGenerateResponse}>Send</button>
        <button onClick={handleSaveThread}>Save</button>
      </div>
      <div className="">
        <SectionHeader
          title="Saved Chats"
          className="border border-b-2 border-b-slate-200"
        />
        <ul>
          {savedThreads.map((thread, index) => (
            <div key={index}>
              <h2 className="text-md my-2 w-auto">{thread.title}</h2>
              <button onClick={() => handleDeleteThread(index)}>Delete</button>
              <button onClick={() => handleLoadThread(thread.conversation)}>
                Re-visit thread
              </button>
            </div>
          ))}
        </ul>
      </div>
      {/* <Home /> */}
    </div>
  );
}

// const Home = ({ message, data }) => {
//   job.start();
//   return (
//     <div>
//       <h1>Scraper is running...</h1>
//       <p>{message}</p>
//       <Link href="/data">
//         <a>View scraped data</a>
//       </Link>
//     </div>
//   );
// };
