"use client";

import { useRef } from "react";
import Image from "next/image";
import { Carousel, Tabs } from "antd";
import type { TabsProps } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const videosList = [
  { id: 1, src: "https://www.youtube.com/embed/xmKFsMq9x5E" },
  { id: 2, src: "https://www.youtube.com/embed/4d84bXqbwxg" },
  { id: 3, src: "https://www.youtube.com/embed/-wSB2DsqAPc" },
  { id: 4, src: "https://www.youtube.com/embed/zsb6ekM37hM" },
  { id: 5, src: "https://www.youtube.com/embed/xb5cBScagxc" },
  { id: 6, src: "https://www.youtube.com/embed/43w4hLaJId4" },
  { id: 7, src: "https://www.youtube.com/embed/tSHWR5mwvsM" },
  { id: 8, src: "https://www.youtube.com/embed/tW5w79pIq9U" },
  { id: 9, src: "https://www.youtube.com/embed/kpAMZs9HKkk" },
  { id: 10, src: "https://www.youtube.com/embed/wpQ-Hs3YgNg" },
  { id: 11, src: "https://www.youtube.com/embed/9p_IEIsUmNs" },
  { id: 12, src: "https://www.youtube.com/embed/Xx2DqY-AWDc" },
  { id: 13, src: "https://www.youtube.com/embed/seYdZjPnnzM" },
  { id: 14, src: "https://www.youtube.com/embed/xmIL-BQ4POY" },
  { id: 15, src: "https://www.youtube.com/embed/OBpl-BZzyEA" },
  { id: 16, src: "https://www.youtube.com/embed/0h2GGGCPdQg" },
  { id: 17, src: "https://www.youtube.com/embed/5zw7_MiEgy0" },
  { id: 18, src: "https://www.youtube.com/embed/B81N8sKvXzM" },
  { id: 19, src: "https://www.youtube.com/embed/QVRfNfsW7ls" },
  { id: 20, src: "https://www.youtube.com/embed/BD_N8uGu518" },
  { id: 21, src: "https://www.youtube.com/embed/uQfgcioKDB0" },
];

const imgList = [
  { id: 1, src: "/asset/images/png/abt/abt1.jpg" },
  { id: 2, src: "/asset/images/png/abt/abt2.jpg" },
  { id: 7, src: "/asset/images/png/abt/abt7.jpg" },
  { id: 8, src: "/asset/images/png/abt/abt8.jpg" },
  { id: 9, src: "/asset/images/png/abt/abt9.jpg" },
  { id: 10, src: "/asset/images/png/abt/abt10.jpg" },
  { id: 11, src: "/asset/images/png/abt/abt11.jpg" },
  { id: 12, src: "/asset/images/png/abt/abt12.jpg" },
  { id: 13, src: "/asset/images/png/abt/abt13.jpg" },
  { id: 14, src: "/asset/images/png/abt/abt14.jpg" },
  { id: 15, src: "/asset/images/png/abt/abt15.jpg" },
  { id: 16, src: "/asset/images/png/abt/abt16.jpg" },
  { id: 17, src: "/asset/images/png/abt/abt17.jpg" },
  { id: 18, src: "/asset/images/png/abt/abt18.jpg" },
  { id: 19, src: "/asset/images/png/abt/abt19.jpg" },
  { id: 20, src: "/asset/images/png/abt/abt20.jpg" },
  { id: 21, src: "/asset/images/png/abt/abt21.jpg" },
  { id: 22, src: "/asset/images/png/abt/abt22.jpg" },
  { id: 23, src: "/asset/images/png/abt/abt23.jpg" },
  { id: 24, src: "/asset/images/png/abt/abt24.jpg" },
  { id: 25, src: "/asset/images/png/abt/abt25.jpg" },
  { id: 26, src: "/asset/images/png/abt/abt26.jpg" },
  { id: 27, src: "/asset/images/png/abt/abt27.jpg" },
  { id: 28, src: "/asset/images/png/abt/abt28.jpg" },
  { id: 29, src: "/asset/images/png/abt/abt29.jpg" },
  { id: 30, src: "/asset/images/png/abt/abt30.jpg" },
  { id: 31, src: "/asset/images/png/abt/abt31.jpg" },
  { id: 32, src: "/asset/images/png/abt/abt32.jpg" },
  { id: 33, src: "/asset/images/png/abt/abt33.jpg" },
  { id: 34, src: "/asset/images/png/abt/abt34.jpg" },
];
const ScrollableList = ({
  children,
  scrollRef,
  scroll,
}: {
  children: React.ReactNode;
  scrollRef: React.RefObject<HTMLDivElement>;
  scroll: (direction: "left" | "right") => void;
}) => (
  <div className="relative w-full">
    <button
      className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
      onClick={() => scroll("left")}
    >
      <LeftOutlined />
    </button>

    <div
      ref={scrollRef}
      className="flex overflow-x-auto gap-4 px-10 py-4 scrollbar-hide"
      style={{ scrollBehavior: "smooth" }}
    >
      {children}
    </div>

    <button
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
      onClick={() => scroll("right")}
    >
      <RightOutlined />
    </button>
  </div>
)
const PhotoGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.7;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <ScrollableList scrollRef={scrollRef} scroll={scroll}>
      {imgList.map((img) => (
        <div key={img.id} className="relative w-96 h-72 bg-gray-100 flex-shrink-0">
          <Image
            src={img.src}
            alt={`Image ${img.id}`}
            layout="fill"
            objectFit="contain"
            className="w-full h-full rounded-lg"
          />
        </div>
      ))}
    </ScrollableList>
  );
};

const VideoList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.7;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <ScrollableList scrollRef={scrollRef} scroll={scroll}>
      {videosList.map((video) => (
        <iframe
          key={video.id}
          src={video.src}
          title={`Video ${video.id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-96 h-72 flex-shrink-0 border rounded-lg"
        />
      ))}
    </ScrollableList>
  );
};

export default function ServiceGallery() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Photos",
      children: <PhotoGallery />,
    },
    {
      key: "2",
      label: "Videos",
      children: <VideoList />,
    },
  ];

  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}