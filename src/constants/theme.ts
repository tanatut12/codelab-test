import { ThemeConfig } from "antd";
import { themeConfig } from "@root/tailwind.config";

export enum ThemeTypeEnum {
  primary = "primary",
  secondary = "secondary",
  thirdinary = "thirdinary",
}

export const getAntTheme = (): ThemeConfig => {
  const antTheme: ThemeConfig = {
    token: {
      fontFamily: themeConfig.fontFamily.FCIconic.map((font) => font).join(
        ", "
      ),
      colorPrimary: themeConfig.color.primary[300],
      colorBgContainer: themeConfig.color.white,
      colorPrimaryBg: themeConfig.color.primary[300],
      colorText: themeConfig.color.text,
      colorError: themeConfig.color.error,
      colorPrimaryHover: themeConfig.color.primary[300],
      colorPrimaryTextHover: "red",
      controlOutlineWidth: 0,
    },
    components: {
      Menu: {
        itemActiveBg: themeConfig.color.primary[900],
        itemSelectedColor: themeConfig.color.primary[900],
        itemBorderRadius: 0,
        subMenuItemBg: themeConfig.color.white,
        itemHoverColor: themeConfig.color.primary[900],
      },
      Pagination: {
        itemActiveBg: "white",
        itemBg: "white",
      },
      Input: {
        borderRadius: 9999,
        colorPrimary: themeConfig.color.primary[900],
        colorPrimaryHover: themeConfig.color.primary[900],
        colorPrimaryActive: themeConfig.color.primary[900],
        colorPrimaryBorder: themeConfig.color.primary[900],
        colorPrimaryBorderHover: themeConfig.color.primary[900],
      },
      Button: {
        defaultBg: themeConfig.color.light[300],
        defaultColor: themeConfig.color.primary[300],
        defaultHoverBg: themeConfig.color.primary[300],
        defaultHoverColor: themeConfig.color.white,
        defaultActiveBg: themeConfig.color.primary[300],
        defaultActiveColor: themeConfig.color.white,
        defaultBorderColor: "transparent",
        defaultHoverBorderColor: "transparent",
        defaultActiveBorderColor: "transparent",
        fontWeight: 700,
        borderRadius: 9999,
        paddingInline: 24,
        paddingBlock: 8,
      },
    },
  };
  return antTheme;
};
