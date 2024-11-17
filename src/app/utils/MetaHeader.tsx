import React, { FC } from "react";

interface Header {
  title: string;
  description: string;
  keywords: string;
}

const MetaHeader: FC<Header> = ({ title, description, keywords }) => {
  return (
    <>
      <title>{title}</title>
      {/* Meta tags for SEO */}
      <meta charSet="UTF-8" />
      <meta content={description} name="description" />
      <meta content={keywords} name="keywords" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    </>
  );
};

export default MetaHeader;
