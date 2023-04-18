import { ReactNode } from "react";

type IFooterIconListProps = {
  children: ReactNode;
};

const FooterIconList = (props: IFooterIconListProps) => (
  <div className="footer-icon-list flex flex-wrap w-full">{props.children}</div>
);

export { FooterIconList };
