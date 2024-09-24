import Image from "next/image";

export default function CompanyImageBanner() {
  const companies = [
    { src: "/Docker.png", alt: "Docker" },
    { src: "/Amplitude.png", alt: "Amplitude" },
    { src: "/Atlassian.png", alt: "Atlassian" },
    { src: "/Basecamp.png", alt: "Basecamp" },
    { src: "/Dropbox.png", alt: "Dropbox" },
    { src: "/Thematic.png", alt: "Thematic" },
  ];

  return (
    <div className="w-full max-w-[1190px] overflow-x-hidden mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-12 sm:mt-24 lg:mt-48 mb-8 sm:mb-12 lg:mb-16">
        <p className="font-poppins text-[#091e4c] font-normal text-center text-sm sm:text-base lg:text-lg">
          More than 100+ companies trusted us
        </p>
      </div>
      <div className="relative w-full ">
        <div className="flex animate-marquee whitespace-nowrap">
          {companies.concat(companies).map((company, index) => (
            <div key={index} className="flex-shrink-0 mx-4 sm:mx-8 lg:mx-12">
              <Image
                src={company.src}
                alt={company.alt}
                width={120}
                height={32}
                className="w-24 sm:w-28 lg:w-32 h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
