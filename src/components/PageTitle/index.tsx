import * as React from "react";

interface IPageTitleProps {
  readonly title: string;
}

const PageTitle: React.FunctionComponent<IPageTitleProps> = ({ title }) => {
  return (
    <div className="pt-32">
      <h1 className=" w-full text-center mx-auto text-5xl font-extrabold [text-shadow:_0_5px_5px_rgb(0_0_0_/_20%)]">
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
