import { IconButton, Typography } from "@material-tailwind/react";
import { useState } from "react";

export const Like = () => {
  const [like, setLike] = useState(false);

  return (
    <>
      <IconButton variant="text" className=" max-h-[40%]">
        <i className="fas fa-heart" />
      </IconButton>
    </>
  );
};
