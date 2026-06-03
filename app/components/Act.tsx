import React, { useContext, useState } from "react";
import "./Act.css";
import {
  getStrNumbsUpTo10,
  getStrNumbsUpTo20,
  getStrNumbsUpTo100,
  getStrNumbsUpTo1000,
  getStrNumbsUpTo10000,
} from "../lib/getStringNumbsUpTo";
import { MyContext } from "./MyContext";

export function Act() {
  const {
    count,
    setCount,
    setName,
    name,
    names,
    setNames,
    setDay,
    day,
    setMonth,
    month,
    months,
    setYear,
    year,
    setPrice1,
    price1,
    price2,
    setPrice2,
    nav,
    setNav,
    order,
    setOrder,
    activeEdit,
    setActivEdit,
    activeInputEdit,
    setInputActivEdit,
  } = useContext(MyContext);

  const [text, setText] = useState("");
  const [toggleCount, setToggleCount] = useState(false);

  const numberInString = (numberPrice1: string | number): string => {
    const numStr = String(numberPrice1);

    if (
      numStr.length > 5 ||
      numStr === "00" ||
      numStr === "000" ||
      numStr === "0000" ||
      numStr === "00000"
    ) {
      return "Вивели більше 5 цифр або поставили 0 на початку рядка!";
    }

    if (!numStr || numStr === "0") {
      return `Введіть значення. ${price2} коп.`;
    }

    if (numStr.length === 1) {
      switch (numStr) {
        case "1":
          return `Одна грн. ${price2} коп.`;
        case "2":
          return `Дві грн. ${price2} коп.`;
        case "3":
          return `Три грн. ${price2} коп.`;
        case "4":
          return `Чотири грн. ${price2} коп.`;
        case "5":
          return `П'ять грн. ${price2} коп.`;
        case "6":
          return `Шість грн. ${price2} коп.`;
        case "7":
          return `Сім грн. ${price2} коп.`;
        case "8":
          return `Вісім грн. ${price2} коп.`;
        case "9":
          return `Дев'ять грн. ${price2} коп.`;
        default:
          return `Нуль грн. ${price2} коп.`;
      }
    }

    if (numStr.length === 2 && numStr[0] === "1") {
      switch (numStr) {
        case "10":
          return `Десять грн. ${price2} коп.`;
        case "11":
          return `Одинадцять грн. ${price2} коп.`;
        case "12":
          return `Дванадцять грн. ${price2} коп.`;
        case "13":
          return `Тринадцять грн. ${price2} коп.`;
        case "14":
          return `Чотирнадцять грн. ${price2} коп.`;
        case "15":
          return `П'ятнадцять грн. ${price2} коп.`;
        case "16":
          return `Шістнадцять грн. ${price2} коп.`;
        case "17":
          return `Сімнадцять грн. ${price2} коп.`;
        case "18":
          return `Вісімнадцять грн. ${price2} коп.`;
        case "19":
          return `Дев'ятнадцять грн. ${price2} коп.`;
        default:
          return `Нуль грн. ${price2} коп.`;
      }
    }

    if (numStr.length === 2) {
      return `${getStrNumbsUpTo100(numStr[0])} ${getStrNumbsUpTo10(
        numStr[1]
      ).toLowerCase()} грн.${price2} коп.`;
    }

    if (numStr.length === 3 && numStr[1] !== "1") {
      return `${getStrNumbsUpTo1000(numStr[0])} ${getStrNumbsUpTo100(
        numStr[1]
      ).toLowerCase()} ${getStrNumbsUpTo10(numStr[2]).toLowerCase()} грн.${price2} коп.`;
    }

    if (numStr.length === 3) {
      return `${getStrNumbsUpTo1000(numStr[0])} ${getStrNumbsUpTo20(
        `${numStr[1]}${numStr[2]}`
      ).toLowerCase()} грн.${price2} коп.`;
    }

    if (numStr.length === 4 && numStr[2] !== "1") {
      return `${getStrNumbsUpTo10000(numStr[0])} ${getStrNumbsUpTo1000(
        numStr[1]
      ).toLowerCase()} ${getStrNumbsUpTo100(numStr[2]).toLowerCase()} ${getStrNumbsUpTo10(
        numStr[3]
      ).toLowerCase()} грн.${price2} / price2 коп.`;
    }

    if (numStr.length === 4) {
      return `${getStrNumbsUpTo10000(numStr[0])} ${getStrNumbsUpTo1000(
        numStr[1]
      ).toLowerCase()} ${getStrNumbsUpTo20(
        `${numStr[2]}${numStr[3]}`
      ).toLowerCase()} грн.${price2} коп.`;
    }

    if (numStr.length === 5 && numStr[0] === "1" && numStr[3] !== "1") {
      return `${getStrNumbsUpTo20(
        `${numStr[0]}${numStr[1]}`
      )} тисяч ${getStrNumbsUpTo1000(numStr[2]).toLowerCase()} ${getStrNumbsUpTo100(
        numStr[3]
      ).toLowerCase()} ${getStrNumbsUpTo10(numStr[4]).toLowerCase()} грн.${price2} коп.`;
    }

    if (numStr.length === 5 && numStr[0] === "1") {
      return `${getStrNumbsUpTo20(
        `${numStr[0]}${numStr[1]}`
      )} тисяч ${getStrNumbsUpTo1000(numStr[2]).toLowerCase()} ${getStrNumbsUpTo20(
        `${numStr[3]}${numStr[4]}`
      ).toLowerCase()} грн.${price2} коп.`;
    }

    const tensAndUnits = `${numStr[3]}${numStr[4]}`;
    const isTeens = ["11", "12", "13", "14", "15", "16", "17", "18", "19"].includes(tensAndUnits);
    if (numStr.length === 5 && numStr[0] !== "1" && isTeens) {
      return `${getStrNumbsUpTo100(numStr[0])} ${getStrNumbsUpTo10(
        numStr[1]
      ).toLowerCase()} тисяч ${getStrNumbsUpTo1000(numStr[2]).toLowerCase()} ${getStrNumbsUpTo20(
        tensAndUnits
      ).toLowerCase()} грн.${price2} коп.`;
    }

    if (numStr.length === 5 && numStr[0] !== "1") {
      return `${getStrNumbsUpTo100(numStr[0])} ${getStrNumbsUpTo10(
        numStr[1]
      ).toLowerCase()} тисяч ${getStrNumbsUpTo1000(numStr[2]).toLowerCase()} ${getStrNumbsUpTo100(
        numStr[3]
      ).toLowerCase()} ${getStrNumbsUpTo10(numStr[4]).toLowerCase()} грн.${price2} коп.`;
    }

    return "";
  };

  const addItemToArrNames = () => {
    const newId = names.length > 0 ? names[names.length - 1].id + 1 : 1;
    setNames([...names, { name: name, id: newId }]);
    alert(`Ви добавили нову назву ${name}`);
    setInputActivEdit(!activeInputEdit);
    setOrder([...order, { name: name, id: newId }]);
  };

  const removeItemInArrNames = (targetName: string) => {
    if (
      names.length > 1 &&
      targetName !== "?" &&
      targetName !== 'ПП "НПФ СВК"' &&
      targetName !== 'ТОВ ВКФ "Інватех"'
    ) {
      const objDelete = names.find((item) => item.name === targetName);
      if (objDelete) {
        const objFilter = names.filter((item) => item.id !== objDelete.id);
        setNames(objFilter);
        alert(`Ви видалили назву ${targetName}`);
      }
    }
  };

  const clickToggle = () => {
    setToggleCount(!toggleCount);
  };

  return (
    <>
      <div className="flex">
        <div className="col-1">
          <p className="head">Затверджую</p>
          <p>Приватний підприємець</p>
          <p>Севастьянов О.В.</p>
          <p className="foot">____________________________</p>
        </div>

        <div className="col-2">
          <p className="head">Затверджую</p>

          {activeInputEdit ? (
            <div className="edit-name">
              <select
                className="name"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              >
                {names.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
              <p className="test">{name}</p>
              <img
                onClick={() => removeItemInArrNames(name)}
                src="./icon/delete.png"
                alt="del"
                width={19}
                className="edit-img__name-1"
              />
              <img
                onClick={() => setInputActivEdit(!activeInputEdit)}
                className="edit-img__name"
                src="./icon/editing.png"
                alt="edit"
                width={16}
              />
            </div>
          ) : (
            <div className="edit-name">
              <input
                className="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <p className="test">{name}</p>
              <img
                onClick={addItemToArrNames}
                src="./icon/accept.png"
                alt="accept"
                width={20}
                className="edit-img__name-1"
              />
              <img
                onClick={() => setInputActivEdit(!activeInputEdit)}
                className="edit-img__name"
                src="./icon/close.png"
                alt="close"
                width={16}
              />
            </div>
          )}

          <p className="foot">____________________________</p>
        </div>
      </div>

      <div className="title-act">
        <h1>АКТ здачі-прийняття робіт</h1>
        <h1>(надання послуг)</h1>
        <h1 className="title-act__count">{toggleCount && `№${count}`}</h1>
        <button className="title-act__btn" onClick={clickToggle}>
          {toggleCount ? (
            <img src="./icon/on.png" alt="on" height={15} />
          ) : (
            <img src="./icon/off.png" alt="off" height={15} />
          )}
        </button>
      </div>

      <div className="text">
        <p>
          Ми, що нижче підписались представники Замовника {name} , з однієї
          сторони, і представник Виконавця. Приватний підприємець Севастьянов
          О.В, з другої сторони, склали справжній акт про те, що Виконавцем були
          проведені наступні роботи (надання таких послуг) за рахунком №{count}{" "}
          від &quot;{day}&quot; {month} {year}р.:
          <br />
          <input
            onChange={(e) => setCount(e.target.value)}
            value={count}
            className="count"
            type="text"
          />
          <input
            onChange={(e) => setDay(e.target.value)}
            value={day}
            className="data"
            type="text"
          />
          <select
            className="month"
            name="month"
            onChange={(e) => setMonth(e.target.value)}
            value={month}
          >
            {months.map((item, key) => (
              <option key={key} value={item}>
                {item}
              </option>
            ))}
          </select>
          <input
            onChange={(e) => setYear(e.target.value)}
            value={year}
            className="year"
            type="text"
          />
        </p>
        <p>Послуги перевезення вантажу:</p>
        <div className="flex">
          <input
            value={nav}
            onChange={(e) => setNav(e.target.value)}
            className="route"
            type="text"
          />
          <div className="col-2a">
            <p>
              <input
                onChange={(e) => setPrice1(e.target.value)}
                value={price1}
                className="price-1"
                type="number"
              />
              ,
              <input
                onChange={(e) => setPrice2(e.target.value)}
                value={price2}
                className="price-2"
                type="number"
              />
              грн(без ПДВ 20%)
            </p>
          </div>
        </div>
        <br />

        {activeEdit ? (
          <p className="edit-text">
            Загальна вартість робіт (послуги) склала без ПДВ {price1}грн.{" "}
            {price2}коп.({numberInString(price1)})
            <img
              onClick={() => setActivEdit(!activeEdit)}
              className="edit"
              src="./icon/editing.png"
              alt="edit"
              width={16}
            />
          </p>
        ) : (
          <>
            <p className="edit-text">
              Загальна вартість робіт (послуги) склала без ПДВ {price1}грн.{" "}
              {price2}коп.({text})
              <img
                onClick={() => setActivEdit(!activeEdit)}
                className="edit"
                src="./icon/close.png"
                alt="close"
                width={16}
              />
            </p>
            <input
              onClick={() =>
                setText(numberInString(price1).replace(/\s+/g, " ").trim())
              }
              className="input100"
              onChange={(e) => setText(e.target.value)}
              value={text}
              type="text"
            />
          </>
        )}

        <br />
        <p>ПДВ 0.00 грн.</p>
        <p>Сторони претензій одна до одної не мають.</p>
      </div>

      <br />

      <div className="flex">
        <div className="col-1">
          <p>Від Виконавця:</p>
          <br />
          <p>____________________________</p>
          <p>
            &quot;{day}&quot; {month} {year} р.
          </p>
          <p>Приватний підприємець</p>
          <p>Севастьянов О.В.</p>
        </div>
        <div className="col-2">
          <p>Від Замовника:</p>
          <br />
          <p>____________________________</p>
          <p>
            &quot;{day}&quot; {month} {year} р.
          </p>
          <p>{name}</p>
        </div>
      </div>

      <button onClick={() => window.print()} className="btn">
        Друкувати
      </button>
    </>
  );
}

export default Act;
