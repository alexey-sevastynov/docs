import React, { useState, useEffect } from "react";
import {
  getStrNumbsUpTo10,
  getStrNumbsUpTo20,
  getStrNumbsUpTo100,
  getStrNumbsUpTo1000,
  getStrNumbsUpTo10000,
} from "../lib/getStringNumbsUpTo";
import { MyContext } from "./MyContext";
import "./Count.css";

const units = ["", "Км.", "Год."];

interface TableRow {
  id: number;
  input: string;
  clock: string;
  price: string;
}

export function Count() {
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
    order,
    setOrder,
    activeEdit,
    setActivEdit,
    activeInputEdit,
    setInputActivEdit,
  } = React.useContext(MyContext);

  const [unit, setUnits] = useState("");

  const [tableRows, setTableRows] = useState<TableRow[]>(() => {
    const initialRows: TableRow[] = [
      { id: 1, input: "м.Дніпро - по місту", clock: "", price: "" },
    ];
    for (let i = 2; i <= 15; i++) {
      initialRows.push({ id: i, input: "", clock: "", price: "" });
    }
    return initialRows;
  });

  const handleRowChange = (id: number, field: keyof TableRow, value: string) => {
    setTableRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const numberInString = (numberPrice1: string, price2Val: string | number): string => {
    const price2 = String(price2Val);
    if (
      numberPrice1.length > 5 ||
      numberPrice1 === "00" ||
      numberPrice1 === "000" ||
      numberPrice1 === "0000" ||
      numberPrice1 === "00000"
    ) {
      return `Вивели більше 5 цифр або поставили 0 на початку рядка!`;
    }

    if (!numberPrice1 || numberPrice1 === "0") {
      return `Введіть значення. ${price2} коп.`;
    }

    if (numberPrice1.length === 1) {
      switch (numberPrice1) {
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

    if (numberPrice1.length === 2 && numberPrice1[0] === "1") {
      switch (numberPrice1) {
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

    if (numberPrice1.length === 2) {
      return `${getStrNumbsUpTo100(numberPrice1[0])} ${getStrNumbsUpTo10(
        numberPrice1[1]
      ).toLowerCase()} грн.${price2} коп.`;
    }

    if (numberPrice1.length === 3 && numberPrice1[1] !== "1") {
      return `${getStrNumbsUpTo1000(numberPrice1[0])} ${getStrNumbsUpTo100(
        numberPrice1[1]
      ).toLowerCase()} ${getStrNumbsUpTo10(numberPrice1[2]).toLowerCase()} грн.${price2} коп.`;
    }

    if (numberPrice1.length === 3) {
      return `${getStrNumbsUpTo1000(numberPrice1[0])} ${getStrNumbsUpTo20(
        `${numberPrice1[1]}${numberPrice1[2]}`
      ).toLowerCase()} грн.${price2} / price2 коп.`;
    }

    if (numberPrice1.length === 4 && numberPrice1[2] !== "1") {
      return `${getStrNumbsUpTo10000(numberPrice1[0])} ${getStrNumbsUpTo1000(
        numberPrice1[1]
      ).toLowerCase()} ${getStrNumbsUpTo100(numberPrice1[2]).toLowerCase()} ${getStrNumbsUpTo10(
        numberPrice1[3]
      ).toLowerCase()} грн.${price2} коп.`;
    }

    if (numberPrice1.length === 4) {
      return `${getStrNumbsUpTo10000(numberPrice1[0])} ${getStrNumbsUpTo1000(
        numberPrice1[1]
      ).toLowerCase()} ${getStrNumbsUpTo20(
        `${numberPrice1[2]}${numberPrice1[3]}`
      ).toLowerCase()} грн.${price2} коп.`;
    }

    if (numberPrice1.length === 5 && numberPrice1[0] === "1" && numberPrice1[3] !== "1") {
      return `${getStrNumbsUpTo20(
        `${numberPrice1[0]}${numberPrice1[1]}`
      )} тисяч ${getStrNumbsUpTo1000(numberPrice1[2]).toLowerCase()} ${getStrNumbsUpTo100(
        numberPrice1[3]
      ).toLowerCase()} ${getStrNumbsUpTo10(numberPrice1[4]).toLowerCase()} грн.${price2} коп.`;
    }

    if (numberPrice1.length === 5 && numberPrice1[0] === "1") {
      return `${getStrNumbsUpTo20(
        `${numberPrice1[0]}${numberPrice1[1]}`
      )} тисяч ${getStrNumbsUpTo1000(numberPrice1[2]).toLowerCase()} ${getStrNumbsUpTo20(
        `${numberPrice1[3]}${numberPrice1[4]}`
      ).toLowerCase()} грн.${price2} коп.`;
    }

    const tensAndUnits = `${numberPrice1[3]}${numberPrice1[4]}`;
    const isTeens = ["11", "12", "13", "14", "15", "16", "17", "18", "19"].includes(tensAndUnits);
    if (numberPrice1.length === 5 && numberPrice1[0] !== "1" && isTeens) {
      return `${getStrNumbsUpTo100(numberPrice1[0])} ${getStrNumbsUpTo10(
        numberPrice1[1]
      ).toLowerCase()} тисяч ${getStrNumbsUpTo1000(numberPrice1[2]).toLowerCase()} ${getStrNumbsUpTo20(
        tensAndUnits
      ).toLowerCase()} грн.${price2} коп.`;
    }

    if (numberPrice1.length === 5 && numberPrice1[0] !== "1") {
      return `${getStrNumbsUpTo100(numberPrice1[0])} ${getStrNumbsUpTo10(
        numberPrice1[1]
      ).toLowerCase()} тисяч ${getStrNumbsUpTo1000(numberPrice1[2]).toLowerCase()} ${getStrNumbsUpTo100(
        numberPrice1[3]
      ).toLowerCase()} ${getStrNumbsUpTo10(numberPrice1[4]).toLowerCase()} грн.${price2} коп.`;
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

  // Calculate row amounts and sum total
  const calculatedRows = tableRows.map((row) => {
    const amount =
      row.clock === "" || row.price === ""
        ? 0
        : Number((Number(row.clock) * Number(row.price)).toFixed(2));
    return { ...row, amount };
  });

  const sum = calculatedRows.reduce((acc, row) => acc + row.amount, 0);
  const sumFixed = sum.toFixed(2);
  const sumInt = sumFixed.split(".")[0];
  const sumDec = sumFixed.split(".")[1] || "00";

  return (
    <>
      <h2 className="bold-italic margin5">ПП Севастьянов О.В.</h2>
      <h2 className="bold-italic">UA66 305299 00000 26001050202399</h2>
      <p className="tac">код ПІН 2666600291</p>
      <div className="title">
        <p className="bold">Платник</p>

        {activeInputEdit ? (
          <>
            <select
              className="select-tac"
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
            <img
              onClick={() => removeItemInArrNames(name)}
              src="./icon/delete.png"
              alt="del"
              width={19}
              className="img__del"
            />
            <img
              onClick={() => setInputActivEdit(!activeInputEdit)}
              className="img__edit"
              src="./icon/editing.png"
              alt="edit"
              width={16}
            />
          </>
        ) : (
          <>
            <input
              className="input-tac"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <img
              onClick={addItemToArrNames}
              src="./icon/accept.png"
              alt="accept"
              width={20}
              className="img__accept"
            />
            <img
              onClick={() => setInputActivEdit(!activeInputEdit)}
              className="img__close"
              src="./icon/close.png"
              alt="close"
              width={16}
            />
          </>
        )}
      </div>

      <h2 className="bold-italic letter-sp">
        Рахунок №
        <input
          onChange={(e) => setCount(e.target.value)}
          value={count}
          className="input-count"
          type="text"
        />
      </h2>
      <p className="tac">
        &quot;{day}&quot; {month} {year}р.
      </p>

      <table>
        <thead>
          <tr>
            <th className="table__col-1" id="ver">
              <p>Найменування</p>
            </th>
            <th className="table__col-2" id="ver">
              <p>
                Од.
                <br />
                вим.
              </p>
            </th>
            <th className="table__col-3" id="ver">
              <p>К-сть</p>
            </th>
            <th className="table__col-4" id="ver">
              <p>Ціна</p>
            </th>
            <th className="table__col-5">
              <p>Сума</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="table__text-a-left" id="ver">
              <p>Послуги перевезення вантажу.</p>
            </th>
            <th id="ver"></th>
            <th id="ver"></th>
            <th id="ver"></th>
            <th></th>
          </tr>
          {calculatedRows.map((item) => (
            <tr key={item.id}>
              <th id="ver">
                <input
                  value={item.input}
                  onChange={(e) => handleRowChange(item.id, "input", e.target.value)}
                  className="table__input-text"
                  type="text"
                />
              </th>
              <th id="ver">
                <select
                  className="table__select"
                  name="units"
                  value={unit}
                  onChange={(e) => setUnits(e.target.value)}
                >
                  {units.map((u, id) => (
                    <option key={id} value={u}>
                      {u}
                    </option>
                  ))}
                </select>
              </th>
              <th id="ver">
                <input
                  className="table__input-number"
                  type="number"
                  value={item.clock}
                  onChange={(e) => handleRowChange(item.id, "clock", e.target.value)}
                />
              </th>
              <th id="ver">
                <input
                  className="table__input-number"
                  type="number"
                  value={item.price}
                  onChange={(e) => handleRowChange(item.id, "price", e.target.value)}
                />
              </th>
              <th>
                <p>
                  {item.clock === "" || item.price === ""
                    ? ""
                    : item.amount.toFixed(2)}
                </p>
              </th>
            </tr>
          ))}
        </tbody>
      </table>

      <table>
        <tfoot>
          <tr>
            <th id="ver" className="tfoot__col-1 bold">
              Всього до сплати :
            </th>
            <th id="ver" className="tfoot__col-2">
              Разом
            </th>
            <th className="tfoot__col-3">
              {sumFixed.replace(".", ",")}
            </th>
          </tr>
          <tr>
            {activeEdit ? (
              <th id="ver" className="tfoot__col-1 relative">
                {numberInString(sumInt, sumDec)}
                <img
                  onClick={() => setActivEdit(!activeEdit)}
                  className="absolute"
                  src="./icon/editing.png"
                  alt="edit"
                  width={16}
                />
              </th>
            ) : (
              <th id="ver" className="tfoot__col-1 relative">
                <input className="table__input-text" type="text" />
                <img
                  onClick={() => setActivEdit(!activeEdit)}
                  className="absolute"
                  src="./icon/close.png"
                  alt="close"
                  width={16}
                />
              </th>
            )}

            <th id="ver" className="tfoot__col-2">
              ПДВ
            </th>
            <th className="tfoot__col-3" colSpan={2}>
              --------------
            </th>
          </tr>
          <tr>
            <th id="ver" className="tfoot__col-1"></th>
            <th id="ver" className="tfoot__col-2">
              Всього :
            </th>
            <th className="tfoot__col-3">
              {sumFixed.replace(".", ",")}
            </th>
          </tr>
        </tfoot>
      </table>

      <p className="bold margin5">Директор _______________________</p>

      <button onClick={() => window.print()} className="btn">
        Друкувати
      </button>
    </>
  );
}

export default Count;
