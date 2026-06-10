import { useContext, useState } from "react";
import "./Act.css";
import { MyContext } from "../MyContext";
import { numberToUahWords } from "@/shared/utils/number-to-ua-currency";

export function Act() {
    const {
        invoiceNumber: count,
        setInvoiceNumber: setCount,
        setCustomerName: setName,
        customerName: name,
        customerNames: names,
        setCustomerNames: setNames,
        setDocumentDateDay: setDay,
        documentDateDay: day,
        setDocumentDateMonth: setMonth,
        documentDateMonth: month,
        months,
        setDocumentDateYear: setYear,
        documentDateYear: year,
        setInvoiceTotalAmountMajor: setPrice1,
        invoiceTotalAmountMajor: price1,
        invoiceTotalAmountMinor: price2,
        setInvoiceTotalAmountMinor: setPrice2,
        transportRoute: nav,
        setTransportRoute: setNav,
        order,
        setOrder,
        activeEdit,
        setActivEdit,
        activeInputEdit,
        setInputActivEdit,
    } = useContext(MyContext);

    const [text, setText] = useState("");
    const [toggleCount, setToggleCount] = useState(false);

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
            <div className="vertical-a4">
                <div className="container-vertical">
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
                            Ми, що нижче підписались представники Замовника {name} , з однієї сторони, і
                            представник Виконавця. Приватний підприємець Севастьянов О.В, з другої сторони,
                            склали справжній акт про те, що Виконавцем були проведені наступні роботи (надання
                            таких послуг) за рахунком №{count} від &quot;{day}&quot; {month} {year}р.:
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
                                Загальна вартість робіт (послуги) склала без ПДВ {price1}грн. {price2}коп. (
                                {numberToUahWords(price1)})
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
                                    Загальна вартість робіт (послуги) склала без ПДВ {price1}грн. {price2}
                                    коп.({text})
                                    <img
                                        onClick={() => setActivEdit(!activeEdit)}
                                        className="edit"
                                        src="./icon/close.png"
                                        alt="close"
                                        width={16}
                                    />
                                </p>
                                <input
                                    onClick={() => setText(numberToUahWords(price1) ?? "")}
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
                </div>
            </div>
        </>
    );
}

export default Act;
