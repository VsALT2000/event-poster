import React from "react";

import SmallTitle from "./SmallTitle";

interface DescriptionPropsType {
  description: string | undefined;
  stage?: number;
}

const Description: React.FC<DescriptionPropsType> = ({ description = "", stage }) => {
  return (
    <>
      <SmallTitle mb={2}>{stage === undefined ? "Описание:" : `Этап ${stage + 1}:`}</SmallTitle>
      {/* eslint-disable-next-line @typescript-eslint/naming-convention */}
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </>
  );
};

export default Description;
