import Image from "next/image";

const ChatIcon = () => {
  return (
    <div className="fixed bottom-0 right-0 z-50 p-2">
      <Image
        src={"https://trolyao.vpbank.com.vn/images/vp-logo-2.png"}
        width={110}
        height={70}
        alt="chat-logo"
      />
    </div>
  );
};

export default ChatIcon;
