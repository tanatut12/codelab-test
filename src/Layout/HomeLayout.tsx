import React, { FC, ReactNode } from "react";
import Header from "@src/components/Header";
import Footer from "@src/components/Footer";

interface IProps {
  children: ReactNode;
  //   configPage: IConfigPage | null
}
const Layout: FC<IProps> = ({ children }) => {
  return (
    <div className="text-base">
      <Header />
      <div className="bg-white">{children}</div>
      <Footer />
      {/* <LayoutUtil configPage={configPage} /> */}
    </div>
  );
};

export default Layout;
