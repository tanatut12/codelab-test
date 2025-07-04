// Import SVG files
import cpu from "@public/assets/svgs/categories/cpu.svg";
import hardisk from "@public/assets/svgs/categories/hardisk.svg";
import gpu from "@public/assets/svgs/categories/gpu.svg";
import m2 from "@public/assets/svgs/categories/m2.svg";
import mainboard from "@public/assets/svgs/categories/mainboard.svg";
import caseIcon from "@public/assets/svgs/categories/case.svg";
import ssd from "@public/assets/svgs/categories/ssd.svg";
import liquidCooler from "@public/assets/svgs/categories/liquidCooler.svg";
import ram from "@public/assets/svgs/categories/ram.svg";
import cooler from "@public/assets/svgs/categories/cooler.svg";
import memory from "@public/assets/svgs/categories/memory.svg";
import power from "@public/assets/svgs/categories/power.svg";
import monitor from "@public/assets/svgs/categories/monitor.svg";
import keyboard from "@public/assets/svgs/categories/keyboard.svg";
import mouse from "@public/assets/svgs/categories/mouse.svg";

export const firstRowCategories = [
  {
    id: 1,
    name: "CPU",
    icon: cpu,
  },
  {
    id: 2,
    name: "HARD DISK",
    icon: hardisk,
  },
  {
    id: 3,
    name: "VGA CARD",
    icon: gpu,
  },
  {
    id: 4,
    name: "M2",
    icon: m2,
  },
  {
    id: 5,
    name: "MAIN BOARD",
    icon: mainboard,
  },
  {
    id: 6,
    name: "CASE",
    icon: caseIcon,
  },
  {
    id: 7,
    name: "SOLID STATE DRIVE",
    icon: ssd,
  },
  {
    id: 8,
    name: "CPU LIQUID COOLER",
    icon: liquidCooler,
  },
];

export const secondRowCategories = [
  {
    id: 9,
    name: "RAM",
    icon: ram,
  },
  {
    id: 10,
    name: "CPU COOLER",
    icon: cooler,
  },
  {
    id: 11,
    name: "MEMORY",
    icon: memory,
  },
  {
    id: 12,
    name: "POWER SUPPLY",
    icon: power,
  },
  {
    id: 13,
    name: "MONITOR",
    icon: monitor,
  },
  {
    id: 14,
    name: "KEYBOARD",
    icon: keyboard,
  },
  {
    id: 15,
    name: "MOUSE",
    icon: mouse,
  },
];

// รวมทั้งหมด (ถ้าต้องการใช้)
export const categories = [...firstRowCategories, ...secondRowCategories];
