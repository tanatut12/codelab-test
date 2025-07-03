"use client";

import { FC, ReactNode } from "react";
import { ConfigProvider } from "antd";
import { getAntTheme } from "@src/constants/theme";
import { AntdRegistry } from "@ant-design/nextjs-registry";

interface IProps {
  children: ReactNode;
}
const AppLayout: FC<IProps> = ({ children }) => {
  const antTheme = getAntTheme();

  return (
    <html>
      <body id="root" className={"font-FCIconic"}>
        <ConfigProvider theme={antTheme}>
          <AntdRegistry>{children}</AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
};

export default AppLayout;
