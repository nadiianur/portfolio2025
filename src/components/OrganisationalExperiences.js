import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/background.png";
import background1 from "../assets/background1.png";   
import logo from "../assets/logo.png" 
import event1 from "../assets/organisational/gdsc/1.png";
import event2 from "../assets/organisational/gdsc/2.png";
import event3 from "../assets/organisational/gdsc/3.png";
import event4 from "../assets/organisational/gdsc/4.png";
import event5 from "../assets/organisational/gdsc/5.png";
import event6 from "../assets/organisational/gdsc/6.png";
import event7 from "../assets/organisational/gdsc/7.png";
import event8 from "../assets/organisational/gdsc/8.png";
import bem1 from "../assets/organisational/bem/1.jpg";
import bem2 from "../assets/organisational/bem/2.jpg";
import bem3 from "../assets/organisational/bem/3.png";
import bem4 from "../assets/organisational/bem/4.png";
import lea0 from "../assets/organisational/lea/0.png";
import lea1 from "../assets/organisational/lea/1.png";
import lea2 from "../assets/organisational/lea/2.png";
import lea3 from "../assets/organisational/lea/3.png";
import lea4 from "../assets/organisational/lea/4.png";
import lea5 from "../assets/organisational/lea/5.png";  
import lea6 from "../assets/organisational/lea/6.png";  
import mc from "../assets/organisational/mc/mc.png";
import mc1 from "../assets/organisational/mc/mc1.png";
import galery from "../assets/organisational/galery.png"

const OrganizationalExperience = () => {
  return (
    <section>
        <div className="bg-[#f7f7f7] py-4 px-6 flex flex-wrap gap-10 justify-center sticky top-0 z-50 shadow-md">
            <Link to="/" className="inline-block transition-all duration-300 hover:scale-105">
                <img src={logo} alt="Back to Home" className="w-20 h-10 object-contain" />
            </Link>
            <a href="#gdsc" className="text-[#b8798c] hover:text-[#4b4848] font-semibold">GDSC</a>
            <a href="#bem" className="text-[#b8798c] hover:text-[#4b4848] font-semibold">BEM KM FTI </a>
            <a href="#lea" className="text-[#b8798c] hover:text-[#4b4848] font-semibold">LEA</a>
            <a href="#mc" className="text-[#b8798c] hover:text-[#4b4848] font-semibold">MC</a>
            <a href="#galery" className="text-[#b8798c] hover:text-[#4b4848] font-semibold">GALLERY</a>
        </div>

        <div className="relative text-white min-h-screen bg-cover bg-center px-10 py-20"
        style={{ backgroundImage: `url(${background})` }}
        >       
            {/* GDSC EO */}
            <div id="gdsc" className="flex flex-col md:flex-row gap-20">
                <div className="w-full md:w-1/2 grid grid-cols-3 gap-2 px-12">
                    <div className="flex flex-col items-center">
                        {/* <span className="text-[#b8798c] text-xs font-bold rotate-[-90deg] origin-left md:origin-center md:mr-2">
                        Content Planning
                        </span> */}
                        <img src={event2} alt="Content Planning" className="rounded-lg shadow-lg mb-8 h-36 sm:h-32 md:h-52 lg:h-72" />
                        <img src={event4} alt="Event Planning" className="rounded-lg shadow-lg h-36 sm:h-32 md:h-52 lg:h-72" />
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={event3} alt="Content Planning" className="rounded-lg shadow-lg h-36 sm:h-32 md:h-52 lg:h-72" />
                        <img src={event5} alt="Event Planning" className="rounded-lg shadow-lg mt-8 h-36 sm:h-32 md:h-52 lg:h-72" />
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={event1} alt="Content Planning" className="rounded-lg shadow-lg h-36 sm:h-32 md:h-52 lg:h-72" />
                        <img src={event6} alt="Event Planning" className="rounded-lg shadow-lg mt-8 h-36 sm:h-32 md:h-52 lg:h-72" />
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center me-10">
                    <div className="flex flex-col md:flex-row md:items-center mb-8 justify-start">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold z-10">
                            <span className="text-[#b8798c]">EVENT </span>
                            <span className="text-[#4b4848]"> ORGANIZER</span>
                        </h2>
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#4b4848]">
                        GOOGLE DEVELOPER STUDENT CLUBS CHAPTER ANDALAS UNIVERSITY
                    </h3>
                    <p className="text-[#b8798c] font-mono text-xs sm:text-sm md:text-base mb-2">As a Core Team Event Organizer</p>
                    <p className="text-[#4b4848] max-w-xl font-light text-xs sm:text-xs md:text-xs lg:text-lg mb-6">
                        Responsible for end-to-end event planning, coordination, and execution, while managing team members to ensure each event’s success and meaningful participant engagement.
                    </p>
                    <div className="flex flex-wrap gap-8">  
                        <img src={event8} alt="Workshop UI/UX" className="rounded-lg shadow-lg mb-4 h-36 sm:h-32 md:h-52 lg:h-80 " />
                        <img src={event7} alt="Event Organizer Team" className="rounded-lg shadow-lg h-36 sm:h-32 md:h-52 lg:h-80 " />
                    </div>
                    
                </div>
            </div>

            {/* BEM KM FT UNAND */}
            <div id="bem" className="flex flex-col md:flex-row gap-20 mt-40 px-28">
                <div className="w-full md:w-1/2 flex flex-col justify-center me-10">
                    <div className="flex flex-col md:flex-row md:items-center mb-14 justify-start">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold z-10">
                            <span className="text-[#b8798c]">GENERAL TREASURER </span>
                        </h2>
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#4b4848] mb-2">
                        BEM KM FACULTY OF TECHNOLOGY INFORMATION ANDALAS UNIVERSITY
                    </h3>
                    <p className="text-[#b8798c] font-mono text-xs sm:text-sm md:text-base mb-2">As a Core General Treasure</p>
                    <p className="text-[#4b4848] max-w-xl font-light text-xs sm:text-xs md:text-xs lg:text-lg mb-2 mt-1">
                        Managing the financial affairs of the student council, including planning and allocating budgets, preparing detailed financial reports, and ensuring that all transactions were transparent and accountable.
                    </p>
                    <p className="text-[#4b4848] max-w-xl font-light text-xs sm:text-xs md:text-xs lg:text-lg mb-6">
                        My role supported various student programs and initiatives, helping the organization run effectively and responsibly while maintaining trust with all stakeholders.
                    </p>
                </div>

                <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 justify-center">
                    <div className="flex flex-col items-center">
                        {/* <span className="text-[#b8798c] text-xs font-bold rotate-[-90deg] origin-left md:origin-center md:mr-2">
                        Content Planning
                        </span> */}
                        <img src={bem1} alt="Content Planning" className="rounded-lg shadow-lg mb-8 " />
                        <img src={bem4} alt="Event Planning" className="rounded-lg shadow-lg " />
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={bem2} alt="Content Planning" className="rounded-lg shadow-lg " />
                        <img src={bem3} alt="Event Planning" className="rounded-lg shadow-lg mt-8 " />
                    </div>
                </div>
            </div>

            {/* Assistant LEA */}
            <div id="lea" className="flex flex-col-5 md:flex-row gap-20 mt-40 px-28">
                <div className="w-full md:w-1/5 flex flex-col justify-start">
                    <div className="flex flex-col md:flex-row md:items-center justify-start -mx-14">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold z-10">
                            <span className="text-[#4b4848]">LABORATORY ASSISTANT</span>
                        </h2>
                    </div>
                    <img src={lea0} alt="profile" className="rounded-lg mb-4 mt-52" />
                </div>

                <div className="w-full md:w-2/5 flex flex-col justify-center mx-16 ms-40 mt-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#4b4848] mb-2">
                        LABORATORY ASSISTANT OF ENTERPRISE APPLICATION
                    </h3>
                    <p className="text-[#b8798c] font-mono text-xs sm:text-sm md:text-base mb-2">As a Member of Service and Training <br/> (Sep 2023 - Sep 2024)</p>
                    <p className="text-[#4b4848] max-w-xl font-light text-xs sm:text-xs md:text-xs lg:text-lg mb-2 mt-1">
                        Participated in community service projects focused on applying enterprise knowledge to real-world situations, contributing to community development while enhancing practical understanding of business and system applications.
                    </p>
                    <p className="text-[#b8798c] font-mono text-xs sm:text-sm md:text-base mb-2 mt-2">As a Member of Research and Development <br/> (Sep 2024 - Jan 2025)</p>
                    <p className="text-[#4b4848] max-w-xl font-light text-xs sm:text-xs md:text-xs lg:text-lg mb-2 mt-1">
                        Conducted research to support organizational programs and initiatives by identifying relevant topics, analyzing data, and developing innovative ideas to enhance event quality and internal systems.
                    </p>
                </div>

                <div className="w-full md:w-2/5 grid grid-cols-2 gap-4 justify-center">
                    <div className="flex flex-col items-center">
                        <img src={lea2} alt="Content Planning" className="rounded-lg shadow-lg mb-8" />
                        <img src={lea1} alt="Event Planning" className="rounded-lg shadow-lg" />
                        <img src={lea6} alt="Event Planning" className="rounded-lg shadow-lg mt-8" />
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={lea4} alt="Content Planning" className="rounded-lg shadow-lg mb-8" />
                        <img src={lea3} alt="Event Planning" className="rounded-lg shadow-lg" />
                        <img src={lea5} alt="Event Planning" className="rounded-lg shadow-lg mt-8" />
                    </div>
                </div>
            </div>

            {/* MC */}
            <div id="mc" className="flex flex-col md:flex-row gap-20 mt-40">
                <div className="w-full md:w-1/2 px-12">
                    <img src={mc1} alt="Content Planning" className="rounded-lg shadow-lg " />
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center me-10">
                    <div className="flex flex-col md:flex-row md:items-center mb-8 justify-start">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold z-10">
                            <span className="text-[#4b4848]">MASTER OF </span>
                            <span className="text-[#b8798c]"> CEREMONIES</span>
                        </h2>
                    </div>
                    {/* <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#4b4848] mb-4">
                            FACULTY OF TECHNOLOGY INFORMATION ANDALAS UNIVERSITY
                    </h3> */}
                    <p className="text-[#4b4848] max-w-xl font-light text-xs sm:text-xs md:text-xs lg:text-lg mb-6">
                        Served as Master of Ceremonies for 4 graduation events and 6++ event committee, coordinating with 12+ faculty leaders and ensuring seamless execution. Earned 100% positive feedback for clear communication and strong public speaking skills.
                    </p>
                    <img src={mc} alt="MC" className="rounded-lg mb-4 me-24" />
                </div>
            </div>
        </div>

        {/* Gallery */}
        <div id="galery" className="relative text-white min-h-screen bg-cover bg-center px-10 py-20 justify-center text-center"
            style={{ backgroundImage: `url(${background1})` }}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold z-10 mb-4">
                <span className="soft-glows">Organisational Experience Gallery</span>
            </h2>
            <img src={galery} alt="Content Planning" className="rounded-lg px-24 mt-8" />
        <div className="text-center mt-16">
            <Link to="/" className="inline-block bg-[#b8798c] hover:bg-[#a4697c] text-white font-bold py-2 px-6 rounded-full transition-all duration-300">
                Back to Home
            </Link>
        </div>
        </div>
        
        <style>
        {`
          .soft-glows {
            text-shadow:
               0 0 4px rgba(255, 192, 203, 0.5),
              0 0 8px rgba(255, 192, 203, 0.4);
            color: #fff;
          }
        `}
      </style>
    </section>
  );
};

export default OrganizationalExperience;

