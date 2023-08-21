import { IconButton, Typography } from "@material-tailwind/react";
import { useState } from "react";

export const CommentBtn = ({ handleSetComment }: any) => {
  return (
    <>
      <IconButton onClick={handleSetComment}>
        <Typography>تعليق</Typography>
      </IconButton>
    </>
  );
};
