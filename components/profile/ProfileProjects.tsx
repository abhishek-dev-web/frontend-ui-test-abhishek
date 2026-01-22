"use client";

import Image from "next/image";
import Card from "../common/Card";

const projects = [
    {
        id: 1,
        title: "Modern",
        subtitle: "Project #1",
        description:
            "As Uber works through a huge amount of internal management turmoil.",
        image: "/image1.png",
    },
    {
        id: 2,
        title: "Scandinavian",
        subtitle: "Project #2",
        description:
            "Music is something that every person has his or her own specific opinion about.",
        image: "/img.png",
    },
    {
        id: 3,
        title: "Minimalist",
        subtitle: "Project #3",
        description:
            "Different people have different taste, and various types of music.",
        image: "/image3.png",
    },
];

const users = [
    "/user1.png",
    "/user2.png",
    "/user3.png",
    "/user4.png",
];


export default function ProfileProjects() {
    return (
        <Card>
            <div className="mb-4">
                <h3 className="text-lg font-bold text-[#2D3748]">
                    Projects
                </h3>
                <p className="text-sm font-normal text-[#A0AEC0]">
                    Architects design houses
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white overflow-hidden"
                    >
                        <div className="relative h-36">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover rounded-2xl"
                            />
                        </div>

                        <div className="p-4">
                            <p className="text-[10px] text-[#A0AEC0] mb-1">
                                {project.subtitle}
                            </p>

                            <h4 className="text-lg font-bold text-[#2D3748] mb-2">
                                {project.title}
                            </h4>

                            <p className="text-xs font-normal text-[#A0AEC0] mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex items-center justify-between">
                                <button className="px-6 py-2 text-[10px] font-bold rounded-xl border border-[#4FD1C5] text-[#4FD1C5] cursor-pointer">
                                    VIEW ALL
                                </button>

                                <div className="flex -space-x-2">
                                    {users.map((user, i) => (
                                        <Image
                                            key={i}
                                            src={user}
                                            alt={`user-${i}`}
                                            width={20}
                                            height={20}
                                            className="rounded-full border-2 border-white"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="flex items-center justify-center rounded-xl border border-[#E0E1E2] cursor-pointer">
                    <div className="text-center">
                        <div className="mx-auto mb-2 flex items-center justify-center text-[#718096]">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 6.56298V23.438" stroke="#718096" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M23.4375 15.0005H6.5625" stroke="#718096" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="text-lg font-bold text-[#A0AEC0]">
                            Create a New Project
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    );
}
