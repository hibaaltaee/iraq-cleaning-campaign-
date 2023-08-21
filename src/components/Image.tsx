import React from "react";

type Props = {
  img: {
    id: number;
    imgLink: string;
  };
};

// Gallery Image
export default function Image({ img }: Props) {
  return (
    <div
      key={img.id}
      className="imgContainer h-[300px] sm:h-[400px] rounded-md overflow-hidden shadow-[0px_0px_0px_0px_#9DDBAD] transition"
    >
      <div className={`w-full h-full`}>
        <img src={img.imgLink} className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
}
