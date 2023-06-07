import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MuiMarkdown from "mui-markdown";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import JoditEditor from "jodit-react";
import { Typography } from "@mui/material";

import styles from "./Description.module.scss";
import "./Descriptions.css";

interface DescriptionPropsType {
  onChange: (value: string) => void;
  description: string | undefined;
  stage?: number;
}

const Description: React.FC<DescriptionPropsType> = ({
  onChange,
  description = "",
  stage,
}) => {
  const editor = useRef(null);
  const [content, setContent] = useState(description || "");
  const [config] = useState({
    readonly: false,
    height: 400,
  });

  useEffect(() => {
    if (description !== content) {
      setContent(description);
    }
  }, [description]);

  function onBlur(value: string) {
    if (value !== description) {
      setContent(value);
      onChange(value);
    }
  }

  return (
    <>
      <Typography variant="h3" sx={{mt: 2}} gutterBottom>
        {stage === undefined ? `Описание мероприятия` : `Этап ${stage + 1}`}
      </Typography>
      <JoditEditor
        className={styles.editor}
        ref={editor}
        value={content}
        config={config}
        onBlur={onBlur}
      />
    </>
  );
};

export default Description;
