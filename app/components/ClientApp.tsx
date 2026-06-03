"use client";

import React, { useState } from "react";
import "./App.css";
import Act from "./Act";
import Count from "./Count";
import Header from "./Header";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { MyContext, CustomerName } from "./MyContext";

const months = [
  "Січня",
  "Лютого",
  "Березня",
  "Квітня",
  "Травня",
  "Червня",
  "Липня",
  "Серпня",
  "Вересня",
  "Жовтня",
  "Листопада",
  "Грудня",
];

const defaultNames: CustomerName[] = [
  { id: 1, name: "?" },
  { id: 2, name: 'ПП "НПФ СВК"' },
  { id: 3, name: 'ТОВ ВКФ "Інватех"' },
];

export function ClientApp() {
  const currentDate = new Date();

  const [tab, setTab] = useState(true);
  const [order, setOrder] = useState<CustomerName[]>([]);

  const [count, setCount] = useState<string | number>(4444);
  const [name, setName] = useState("?");

  const [price1, setPrice1] = useState<string | number>(0);
  const [price2, setPrice2] = useState<string | number>("00");
  const [day, setDay] = useState<string | number>(currentDate.getDate());
  const [month, setMonth] = useState(months[currentDate.getMonth()]);
  const [year, setYear] = useState<string | number>(currentDate.getFullYear());
  const [nav, setNav] = useState("м.Дніпро");

  const [activeEdit, setActivEdit] = useState(true);
  const [activeInputEdit, setInputActivEdit] = useState(true);

  const [names, setNames] = useLocalStorage<CustomerName[]>(
    defaultNames,
    "order"
  );

  return (
    <MyContext.Provider
      value={{
        count,
        setCount,
        months,
        names,
        month,
        name,
        price1,
        price2,
        day,
        year,
        setName,
        setNames,
        setMonth,
        setYear,
        setDay,
        setPrice1,
        setPrice2,
        nav,
        setNav,
        tab,
        setTab,
        activeEdit,
        setActivEdit,
        activeInputEdit,
        setInputActivEdit,
        order,
        setOrder,
      }}
    >
      <Header />
      {tab ? (
        <>
          <div className="bckgr-white"></div>
          <div className="gorizontal-a4">
            <div className="container-gorizontal">
              <Count />
            </div>
          </div>
        </>
      ) : (
        <div className="vertical-a4">
          <div className="container-vertical">
            <Act />
          </div>
        </div>
      )}
    </MyContext.Provider>
  );
}

export default ClientApp;
