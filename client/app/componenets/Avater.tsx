"use client";

import Image from "next/image";
import userIcon from "../../assets/user_icon.png";

const Avater = () => {
  return (
    <div>
      <Image
        className="rounded-full"
        height={30}
        width={30}
        alt="Avater"
        src={userIcon}
      />
    </div>
  );
};

export default Avater;
