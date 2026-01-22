import Card from "../common/Card";

export default function ProfileInfo() {
    return (
        <Card>
            <h3 className="text-lg font-bold text-[#2D3748] mb-3">
                Profile Information
            </h3>

            <p className="text-xs text-[#A0AEC0] leading-relaxed mb-4">
                {`Hi, I’m Alec Thompson. Decisions: If you can’t decide, the
                answer is no. If two equally difficult paths, choose the one
                more painful in the short term (pain avoidance is creating an
                illusion of equality).`}
            </p>

            <div className="h-px w-full bg-gray-100 mb-4" />

            <ul className="space-y-3 text-xs">
                <li className="flex gap-2">
                    <span className="text-xs font-bold text-[#718096]">
                        Full Name:
                    </span>
                    <span className="text-xs font-normal text-[#A0AEC0]">
                        Alec M. Thompson
                    </span>
                </li>

                <li className="flex gap-2">
                    <span className="text-xs font-bold text-[#718096]">
                        Mobile:
                    </span>
                    <span className="text-xs font-normal text-[#A0AEC0]">
                        (44) 123 1234 123
                    </span>
                </li>

                <li className="flex gap-2">
                    <span className="text-xs font-bold text-[#718096]">
                        Email:
                    </span>
                    <span className="text-xs font-normal text-[#A0AEC0]">
                        alecthompson@mail.com
                    </span>
                </li>

                <li className="flex gap-2">
                    <span className="text-xs font-bold text-[#718096]">
                        Location:
                    </span>
                    <span className="text-xs font-normal text-[#A0AEC0]">
                        United States
                    </span>
                </li>

                <li className="flex gap-3 items-center">
                    <span className="text-xs font-bold text-[#718096]">
                        Social Media:
                    </span>

                    <div className="flex gap-3 text-teal-500">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_68_501)">
                                <path d="M11 6C11 3.24 8.76 1 6 1C3.24 1 1 3.24 1 6C1 8.42 2.72 10.435 5 10.9V7.5H4V6H5V4.75C5 3.785 5.785 3 6.75 3H8V4.5H7C6.725 4.5 6.5 4.725 6.5 5V6H8V7.5H6.5V10.975C9.025 10.725 11 8.595 11 6Z" fill="#4FD1C5" />
                            </g>
                            <defs>
                                <clipPath id="clip0_68_501">
                                    <rect width="12" height="12" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>


                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_68_506)">
                                <path d="M11.625 2.56662C11.203 2.74999 10.7565 2.87079 10.2996 2.92522C10.7798 2.64406 11.1409 2.19738 11.3152 1.66897C10.8612 1.93442 10.3654 2.12067 9.8489 2.21975C9.63142 1.99183 9.36987 1.81051 9.08014 1.68681C8.7904 1.56312 8.47854 1.49964 8.16351 1.50022C6.88804 1.50022 5.85586 2.5174 5.85586 3.77131C5.85495 3.94572 5.87494 4.11962 5.91539 4.28928C5.00078 4.2464 4.1052 4.01309 3.28593 3.60426C2.46666 3.19543 1.74175 2.6201 1.15758 1.91506C0.952634 2.26056 0.844249 2.65476 0.84375 3.05647C0.84375 3.84397 1.25461 4.54006 1.875 4.94787C1.50744 4.93915 1.1474 4.84186 0.825469 4.66428V4.6924C0.825469 5.79396 1.62234 6.71037 2.67703 6.91896C2.4787 6.97183 2.27432 6.99862 2.06906 6.99865C1.92342 6.9989 1.7781 6.98477 1.63523 6.95646C1.92844 7.85881 2.7818 8.51506 3.79265 8.53381C2.97126 9.16683 1.9628 9.50898 0.925781 9.50646C0.741707 9.50619 0.557804 9.49523 0.375 9.47365C1.42996 10.1473 2.65628 10.5036 3.90797 10.5002C8.15859 10.5002 10.4808 7.03849 10.4808 4.03615C10.4808 3.93772 10.4782 3.83928 10.4735 3.74318C10.9242 3.42257 11.3142 3.02415 11.625 2.56662Z" fill="#4FD1C5" />
                            </g>
                            <defs>
                                <clipPath id="clip0_68_506">
                                    <rect width="12" height="12" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>


                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_68_506)">
                                <path d="M11.625 2.56662C11.203 2.74999 10.7565 2.87079 10.2996 2.92522C10.7798 2.64406 11.1409 2.19738 11.3152 1.66897C10.8612 1.93442 10.3654 2.12067 9.8489 2.21975C9.63142 1.99183 9.36987 1.81051 9.08014 1.68681C8.7904 1.56312 8.47854 1.49964 8.16351 1.50022C6.88804 1.50022 5.85586 2.5174 5.85586 3.77131C5.85495 3.94572 5.87494 4.11962 5.91539 4.28928C5.00078 4.2464 4.1052 4.01309 3.28593 3.60426C2.46666 3.19543 1.74175 2.6201 1.15758 1.91506C0.952634 2.26056 0.844249 2.65476 0.84375 3.05647C0.84375 3.84397 1.25461 4.54006 1.875 4.94787C1.50744 4.93915 1.1474 4.84186 0.825469 4.66428V4.6924C0.825469 5.79396 1.62234 6.71037 2.67703 6.91896C2.4787 6.97183 2.27432 6.99862 2.06906 6.99865C1.92342 6.9989 1.7781 6.98477 1.63523 6.95646C1.92844 7.85881 2.7818 8.51506 3.79265 8.53381C2.97126 9.16683 1.9628 9.50898 0.925781 9.50646C0.741707 9.50619 0.557804 9.49523 0.375 9.47365C1.42996 10.1473 2.65628 10.5036 3.90797 10.5002C8.15859 10.5002 10.4808 7.03849 10.4808 4.03615C10.4808 3.93772 10.4782 3.83928 10.4735 3.74318C10.9242 3.42257 11.3142 3.02415 11.625 2.56662Z" fill="#4FD1C5" />
                            </g>
                            <defs>
                                <clipPath id="clip0_68_506">
                                    <rect width="12" height="12" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </li>
            </ul>
        </Card>
    );
}
