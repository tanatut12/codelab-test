"use client";
import React, { FC, useState } from "react";
import { Button } from "antd";
import { IFilter } from "@src/interfaces/common.interface";

interface IProps<T = string> {
  filterOptions: IFilter<T>[];
  onChange: (key: T) => void;
}

const Filter = <T extends string | number = string>({
  filterOptions,
  onChange,
}: IProps<T>) => {
  const [activeFilter, setActiveFilter] = useState<T | null>(null);

  const handleFilterClick = (key: T) => {
    setActiveFilter(activeFilter === key ? null : key);
    onChange(key);
  };

  return (
    <div className="flex gap-4">
      {filterOptions.map((option) => (
        <Button
          key={option.key}
          size="small"
          shape="round"
          type={activeFilter === option.key ? "primary" : "default"}
          className="text-2sm font-bold min-w-24 h-8 py-2"
          onClick={() => handleFilterClick(option.key)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};

export default Filter;
