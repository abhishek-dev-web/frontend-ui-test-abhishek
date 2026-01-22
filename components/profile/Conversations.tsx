"use client";

import Image from "next/image";
import Card from "../common/Card";

const chats = [
  {
    name: "Esthera Jackson",
    message: "Hi! I need more information...",
    avatar: "/img1.png",
  },
  {
    name: "Esthera Jackson",
    message: "Awesome work, can you change...",
    avatar: "/img2.png",
  },
  {
    name: "Esthera Jackson",
    message: "Have a great afternoon...",
    avatar: "/img3.png",
  },
  {
    name: "Esthera Jackson",
    message: "About files I can...",
    avatar: "/img4.png",
  },
];

export default function Conversations() {
  return (
    <Card>
      <h3 className="font-bold text-lg mb-4 text-[#2D3748]">
        Conversations
      </h3>

      {chats.map((chat, i) => (
        <div
          key={i}
          className="flex items-center gap-4 py-3"
        >
          <Image
            src={chat.avatar}
            width={50}
            height={50}
            alt={chat.name}
            className="rounded-xl object-cover"
          />

          <div className="flex-1">
            <p className="text-sm font-semibold text-[#2D3748]">
              {chat.name}
            </p>
            <p className="text-xs text-[#A0AEC0] truncate">
              {chat.message}
            </p>
          </div>

          <button
            className="text-xs font-semibold text-teal-500 hover:underline cursor-pointer"
          >
            REPLY
          </button>
        </div>
      ))}
    </Card>
  );
}

