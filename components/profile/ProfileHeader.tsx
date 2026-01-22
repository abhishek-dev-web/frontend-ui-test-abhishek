"use client";

import Image from "next/image";
import { useState } from "react";
import Topbar from "../layout/Topbar";

type TabType = "overview" | "teams" | "projects";

export default function ProfileHeader() {
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  const tabBase =
    "flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all duration-200";

  const inactiveTabStyle =
    "text-[#A0AEC0] hover:text-[#2D3748] hover:bg-[#F8FAFC]";


  const activeTabStyle =
    "bg-[#F8FAFC] text-[#2D3748] shadow-sm hover:shadow-md";


  return (
    <div className="relative py-4">
      <div className="relative h-60 rounded-xl overflow-hidden">
        <Image
          src="/Background.png"
          alt="Profile cover"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-teal-500/20" />

        <div className="absolute top-0 left-0 w-full z-20">
          <Topbar variant="dark" />
        </div>
      </div>

      <div className="relative -mt-10 mx-6 bg-white/70 backdrop-blur-md rounded-xl shadow-sm px-6 py-4 flex items-center justify-between z-30">


        <div className="flex items-center gap-4">
          <div className="relative">
            <Image
              src="/CreditsToUnsplash.com.png"
              alt="Profile avatar"
              width={68}
              height={68}
              className="rounded-xl object-cover"
            />

            <button
              className="
                absolute -bottom-2 -right-2
                h-6 w-6
                flex items-center justify-center
                cursor-pointer"
            >
              <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_67_308)">
                  <rect x="5.5" y="3.5" width="26" height="26" rx="8" fill="white" />
                </g>
                <g clipPath="url(#clip0_67_308)">
                  <path d="M13.9998 19.23V20.75C13.9998 20.89 14.1098 21 14.2498 21H15.7698C15.8348 21 15.8998 20.975 15.9448 20.925L21.4048 15.47L19.5298 13.595L14.0748 19.05C14.0248 19.1 13.9998 19.16 13.9998 19.23ZM22.8548 14.02C23.0498 13.825 23.0498 13.51 22.8548 13.315L21.6848 12.145C21.4898 11.95 21.1748 11.95 20.9798 12.145L20.0648 13.06L21.9398 14.935L22.8548 14.02Z" fill="#4FD1C5" />
                </g>
                <defs>
                  <filter id="filter0_d_67_308" x="4.76837e-07" y="3.57628e-07" width="37" height="37" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="2.75" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_67_308" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_67_308" result="shape" />
                  </filter>
                  <clipPath id="clip0_67_308">
                    <rect width="12" height="12" fill="white" transform="translate(12.4998 10.5)" />
                  </clipPath>
                </defs>
              </svg>

            </button>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#2D3748]">
              Esthera Jackson
            </h2>
            <p className="text-sm font-normal text-[#718096]">
              esthera@simmmple.com
            </p>
          </div>
        </div>


        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab("overview")}
            className={`${tabBase} ${activeTab === "overview"
              ? activeTabStyle
              : inactiveTabStyle
              }`}
          >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_67_316)">
                <path d="M1.03125 3.65161V7.88231L5.15625 10.3118V6.10083L1.03125 3.65161Z" fill="#2D3748" />
                <path d="M5.84375 10.3118L9.96875 7.88231V3.65161L5.84375 6.10083V10.3118Z" fill="#2D3748" />
                <path d="M9.625 3.09326L5.5 0.687012L1.375 3.09326L5.5 5.49951L9.625 3.09326Z" fill="#2D3748" />
              </g>
              <defs>
                <clipPath id="clip0_67_316">
                  <rect width="11" height="11" fill="white" />
                </clipPath>
              </defs>
            </svg>

            OVERVIEW
          </button>

          <button
            onClick={() => setActiveTab("teams")}
            className={`${tabBase} ${activeTab === "teams"
              ? activeTabStyle
              : inactiveTabStyle
              }`}
          >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_67_344)">
                <path d="M6.41072 5.32801C6.42765 5.32802 6.44421 5.32304 6.45832 5.31367C6.47242 5.30431 6.48345 5.29099 6.49001 5.27539C6.49658 5.25978 6.49838 5.24258 6.49521 5.22596C6.49203 5.20933 6.48402 5.194 6.47217 5.18191L4.78779 3.46918C4.77582 3.45703 4.76051 3.44871 4.74379 3.44529C4.72708 3.44187 4.70973 3.4435 4.69395 3.44997C4.67816 3.45645 4.66467 3.46747 4.65517 3.48164C4.64567 3.49582 4.64061 3.51249 4.64063 3.52955V5.0702C4.64063 5.13857 4.66779 5.20415 4.71614 5.2525C4.76449 5.30085 4.83006 5.32801 4.89844 5.32801H6.41072Z" fill="#2D3748" />
                <path d="M4.23242 5.73633C4.14418 5.64927 4.07406 5.54559 4.02612 5.43127C3.97818 5.31695 3.95337 5.19427 3.95312 5.07031V3.09375H2.40625C2.04191 3.09483 1.6928 3.24004 1.43517 3.49767C1.17754 3.7553 1.03233 4.10441 1.03125 4.46875V9.28125C1.03125 9.64592 1.17612 9.99566 1.43398 10.2535C1.69184 10.5114 2.04158 10.6562 2.40625 10.6562H5.5C5.86467 10.6562 6.21441 10.5114 6.47227 10.2535C6.73013 9.99566 6.875 9.64592 6.875 9.28125V6.01562H4.89844C4.77447 6.01545 4.65176 5.99067 4.53744 5.94273C4.42311 5.89478 4.31944 5.82463 4.23242 5.73633Z" fill="#2D3748" />
                <path d="M7.99219 2.57776H9.50447C9.5214 2.57778 9.53796 2.57279 9.55207 2.56343C9.56617 2.55407 9.5772 2.54075 9.58376 2.52514C9.59033 2.50954 9.59213 2.49234 9.58896 2.47571C9.58578 2.45908 9.57777 2.44376 9.56592 2.43167L7.88154 0.718936C7.86957 0.706781 7.85426 0.698464 7.83754 0.695044C7.82083 0.691623 7.80348 0.693254 7.7877 0.699728C7.77191 0.706202 7.75842 0.717227 7.74892 0.731399C7.73942 0.745571 7.73436 0.762248 7.73438 0.779307V2.31995C7.73438 2.38833 7.76154 2.4539 7.80989 2.50225C7.85824 2.5506 7.92381 2.57776 7.99219 2.57776Z" fill="#2D3748" />
                <path d="M7.99219 3.26544C7.74206 3.26353 7.50273 3.16332 7.32586 2.98645C7.14899 2.80959 7.04878 2.57025 7.04687 2.32013V0.343567H4.72656C4.3848 0.343965 4.05716 0.479904 3.8155 0.721564C3.57384 0.963224 3.4379 1.29087 3.4375 1.63263V2.40607H4.34242C4.45793 2.40653 4.5722 2.42981 4.67868 2.47457C4.78516 2.51933 4.88175 2.58469 4.96289 2.66689L7.30812 5.05165C7.47174 5.21766 7.56309 5.44162 7.56228 5.6747V8.59356H8.70203C9.40049 8.59356 9.96853 8.0152 9.96853 7.3045V3.26544H7.99219Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_67_344">
                  <rect width="11" height="11" fill="white" />
                </clipPath>
              </defs>
            </svg>

            TEAMS
          </button>

          <button
            onClick={() => setActiveTab("projects")}
            className={`${tabBase} ${activeTab === "projects"
              ? activeTabStyle
              : inactiveTabStyle
              }`}
          >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_67_364)">
                <path d="M10.0882 2.58967C10.0635 2.54153 10.0277 2.49991 9.9838 2.46821C9.93992 2.43652 9.88917 2.41563 9.83569 2.40725C9.78221 2.39888 9.72751 2.40325 9.67604 2.42001C9.62457 2.43678 9.57779 2.46546 9.5395 2.50373L8.2195 3.82459C8.1547 3.88845 8.06738 3.92425 7.9764 3.92425C7.88543 3.92425 7.79811 3.88845 7.73331 3.82459L7.16268 3.25311C7.13075 3.22119 7.10543 3.18329 7.08815 3.14158C7.07087 3.09987 7.06197 3.05516 7.06197 3.01001C7.06197 2.96486 7.07087 2.92016 7.08815 2.87845C7.10543 2.83674 7.13075 2.79884 7.16268 2.76692L8.4771 1.45229C8.5165 1.41289 8.54574 1.3645 8.56228 1.3113C8.57883 1.25809 8.5822 1.20166 8.5721 1.14686C8.56199 1.09207 8.53872 1.04055 8.50428 0.996743C8.46984 0.952939 8.42527 0.918164 8.3744 0.895413C7.38161 0.451546 6.14239 0.683147 5.361 1.45873C4.69714 2.11787 4.49927 3.14783 4.81852 4.28457C4.83574 4.34519 4.83584 4.40939 4.81881 4.47006C4.80178 4.53073 4.7683 4.58551 4.72206 4.62832L1.14534 7.89502C1.006 8.02013 0.893613 8.17231 0.815026 8.34228C0.736438 8.51225 0.693301 8.69645 0.688246 8.88365C0.683192 9.07084 0.716326 9.2571 0.785627 9.43106C0.854927 9.60503 0.958942 9.76305 1.09133 9.8955C1.22371 10.0279 1.38169 10.132 1.55562 10.2014C1.72956 10.2708 1.91581 10.304 2.103 10.299C2.29019 10.2941 2.47441 10.251 2.64442 10.1725C2.81443 10.094 2.96666 9.98165 3.09183 9.84236L6.39354 6.2577C6.43574 6.21205 6.48959 6.17879 6.54929 6.16149C6.609 6.14419 6.67229 6.1435 6.73235 6.15951C7.05598 6.24819 7.38981 6.29419 7.72536 6.29637C8.44294 6.29637 9.07264 6.06412 9.52682 5.6166C10.3679 4.78795 10.4962 3.38244 10.0882 2.58967ZM2.13771 9.60711C1.99621 9.62255 1.85341 9.5937 1.72901 9.52453C1.60461 9.45536 1.50475 9.34928 1.4432 9.22094C1.38165 9.0926 1.36146 8.94832 1.38541 8.80801C1.40935 8.6677 1.47626 8.53828 1.57688 8.43762C1.67751 8.33695 1.80691 8.27 1.94721 8.24601C2.08751 8.22201 2.2318 8.24216 2.36016 8.30366C2.48852 8.36516 2.59464 8.46498 2.66385 8.58936C2.73306 8.71373 2.76197 8.85653 2.74657 8.99803C2.72963 9.15372 2.66005 9.29896 2.54933 9.40972C2.43861 9.52048 2.29339 9.59012 2.13771 9.60711Z" fill="#2D3748" />
              </g>
              <defs>
                <clipPath id="clip0_67_364">
                  <rect width="11" height="11" fill="white" />
                </clipPath>
              </defs>
            </svg>
            PROJECTS
          </button>
        </div>
      </div>
    </div>
  );
}
