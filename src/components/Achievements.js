import React from "react";
import background from "../assets/background.png";

const achievements = [
  {
    title: "BEST PAPER PEKAN ESAI NASIONAL AKADEMIK-2",
    subtitle: "The National Academic Essay Week (PENA) - 2023",
    description:
      'I presented an innovation titled "Activism Now: Igniting the Transformation of Activism through Technological Solutions for Sustainable Development." I was awarded Best Paper among participants from across Indonesia.',
    certificate: "/profile2025/certificates/pena-best-paper.pdf",
  },
  {
    title: "TOP 25 BUSINESS PLAN MAHASISWA TERBAIK LPDP",
    subtitle: "Organized by LPDP - 2021",
    description:
      'My team and I created a business plan for diabetes-friendly cookies called "Last\'A Kuykis". We were selected as one of the Top 25 Business Plans.',
    certificate: "/profile2025/certificates/lpdp-business-plan.pdf",
  },
  {
    title: "TOP GRADUATE FACULTY OF INFORMATION TECHNOLOGY",
    subtitle: "Andalas University - 2025",
    description:
      "Graduated as the top student of the Faculty of Information Technology with a GPA of 3.92, demonstrating consistent academic excellence and active contribution throughout my study period.",
    certificate: "/profile2025/certificates/lulusan-terbaik.pdf",
  },
];

export default function AchievementSection() {
  return (
    <section id="achievements"
    className="relative text-white min-h-screen items-center bg-cover bg-center px-10 py-20 w-full md:px-20"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold z-10 text-center mb-14">
        <span className="text-[#4b4848]">ACHIEVEMENTS </span>
      </h2>
      
      <div className="grid gap-8 md:grid-cols-2 px-10 ">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-[#e9e9e6] shadow-md rounded-2xl p-9 border border-[#f2dce3] transition hover:shadow-lg"
          >
            <h3 className="text-xl sm:text-lg md:text-xl font-bold z-10 text-[#b8798c] mb-1">
              {item.title}
            </h3>
            <p className="text-sm sm:text-xs md:text-sm z-10 text-gray-500 italic mb-5">{item.subtitle}</p>
            <p className="text-sm sm:text-base md:text-lg z-10 text-[#4b4848] mb-4">{item.description}</p>
            <a
              href={item.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-[#4b4848] text-white rounded-full hover:bg-[#b8798c] transition text-sm sm:text-xs md:text-sm z-10"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
