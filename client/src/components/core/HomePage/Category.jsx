import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Categorycard from "../../home/Categorycard";
import { RiWhatsappFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa6";

function Category() {
  const { category, yt } = useSelector((state) => state.news);

  const ytVideo = [...yt].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const rightYtVideos = yt.filter((currElem) => currElem?.type === "middle-yt");
  const firstThreeVideos = rightYtVideos.slice(0, 3);
  const remainingVideos = rightYtVideos.slice(3);

  return (
    <div className="lg:w-11/12 mx-auto">
      <div className="main grid grid-cols-1 md:grid-cols-3 max-w-[1500px] mx-auto px-5 lg:pl-6 gap-10">
        {/* cards */}
        <div className="col-span-1 md:col-span-2">
          {category?.map((cate) => (
            <div key={cate?._id}>
              <Categorycard category={cate} />
            </div>
          ))}
        </div>

        {/* ADS */}
        <div className="col-span-1 md:col-span-1 my-10">
          {/* First three YouTube videos */}
          {firstThreeVideos.map((currElem, index) => (
            <iframe
              key={index}
              className="mt-3 h-[315px] w-full"
              src={currElem?.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ))}
          {/* WhatsApp and Telegram join links */}
          <div className="my-10 text-2xl text-white font-bold shadow-xl p-4">
            <a
              href="https://wa.me/7798180354"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#01AD18] p-2 pl-5 rounded-3xl py-3 mb-5 gap-3"
            >
              <RiWhatsappFill size={30} />
              ज्वॉइन वॉट्सऐप चैनल
            </a>
            <a
              href="mailto:pahilikhabar@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#D44638] p-2 pl-5 py-3 rounded-3xl"
            >
              <FaEnvelope size={30} />
              ईमेल से जुड़ें
            </a>
          </div>

          {/* Remaining YouTube videos */}
          {remainingVideos.map((currElem, index) => (
            <iframe
              key={index + 3} // Ensure unique key for the second part
              className="mt-3 h-[315px] w-full"
              src={currElem?.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
