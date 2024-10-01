// /components/HRBox.tsx
import Image from "next/image";

const HRBox = () => {
  return (
    <div className="bg-[#EEF2F6] p-4 font-sans w-full max-w-[443px] h-auto sm:h-[454px]">
      <div className="space-y-4">
        {/* Header */}
        <div className="bg-[#0F47A6] rounded-xl p-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="rounded-full p-1.5">
              <Image src="/Vector (2).png" alt="" width={20} height={20} />
            </div>
            <div className="space-x-1 ml-auto">
              <span className="inline-block w-14 h-1.5 bg-[#3E77D9] rounded mr-6 ml-36"></span>
              <span className="inline-block w-8 h-1.5 bg-[#3E77D9] rounded mr-2"></span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Image
              src="/basil_notification-solid.png"
              alt="Notification"
              width={24}
              height={24}
            />
            <Image
              src="/Rectangle 31.png"
              alt="User"
              width={28}
              height={28}
              className="rounded-full"
            />
          </div>
        </div>

        {/* Syed Ahad Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex items-center">
              <Image
                src="/Rectangle 31.png"
                alt=""
                width={40}
                height={40}
                className="rounded-full mr-3"
              />
              <div>
                <h2 className="font-bold text-[#0F47A6]">Syed Ahad</h2>
                <p className="text-sm text-[#5A6478]">Web Development</p>
              </div>
            </div>
            <div className="w-full h-px bg-[#D9D9D9] my-4 mx-auto"></div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-5 h-5 mr-2 flex-shrink-0 bg-[#22C55E] rounded-full flex items-center justify-center">
                  <svg
                    width="12"
                    height="9"
                    viewBox="0 0 12 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4L4.5 7.5L11 1"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-sm text-[#5A6478]">
                  Ask candidate if she want Mac or Windows
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 mr-2 flex-shrink-0 bg-[#22C55E] rounded-full flex items-center justify-center">
                  <svg
                    width="12"
                    height="9"
                    viewBox="0 0 12 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4L4.5 7.5L11 1"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-sm text-[#5A6478]">
                  Invite candidate to our next team lunch
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 mr-2 flex-shrink-0 border-2 border-[#3E77D9] rounded-full"></div>
                <span className="text-sm text-[#3E77D9]">
                  Collecting Documents
                </span>
             </div>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HRBox;
