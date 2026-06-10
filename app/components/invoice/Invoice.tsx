import { useContext, useState } from "react";
import { MyContext } from "@/app/components/MyContext";
import "@/app/components/invoice/invoice.css";
import { Button } from "@/shared/ui/button/Button";
import { numberToUahWords } from "@/shared/utils/number-to-ua-currency";
import { formatMoney } from "@/shared/utils/formatMoney";
import { emptyCellValue, invoiceMeasurementUnits } from "./constants";
import { createInitialTableRows } from "./invoice.funcs";
import { CustomerEditor } from "./customer-editor/CustomerEditor";
import { InvoiceHeader } from "./invoice-header/InvoiceHeader";

export interface TableRow {
    id: number;
    input: string;
    clock: string;
    price: string;
    unit: string;
}

export function Invoice() {
    const { activeEdit, setActivEdit } = useContext(MyContext);
    const [tableRows, setTableRows] = useState<TableRow[]>(() => createInitialTableRows());

    const handleRowChange = (rowId: number, field: keyof TableRow, value: string) => {
        setTableRows((prev) => prev.map((row) => (row.id === rowId ? { ...row, [field]: value } : row)));
    };

    const calculatedRows = tableRows.map((row) => {
        const amount =
            row.clock === emptyCellValue || row.price === emptyCellValue
                ? 0
                : Number((Number(row.clock) * Number(row.price)).toFixed(2));
        return { ...row, amount };
    });

    const sum = calculatedRows.reduce((acc, row) => acc + row.amount, 0);

    return (
        <>
            <div className="bckgr-white" />
            <div className="gorizontal-a4">
                <div className="container-gorizontal">
                    <h2 className="bold-italic margin5">ПП Севастьянов О.В.</h2>
                    <h2 className="bold-italic">UA66 305299 00000 26001050202399</h2>
                    <p className="tac">код ПІН 2666600291</p>

                    <CustomerEditor />
                    <InvoiceHeader />

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
                                            onChange={(e) =>
                                                handleRowChange(item.id, "input", e.target.value)
                                            }
                                            className="table__input-text"
                                            type="text"
                                        />
                                    </th>
                                    <th id="ver">
                                        <select
                                            className="table__select"
                                            name="units"
                                            value={item.unit}
                                            onChange={(e) => handleRowChange(item.id, "unit", e.target.value)}
                                        >
                                            {invoiceMeasurementUnits.map((invoiceMeasurementUnit, id) => (
                                                <option key={id} value={invoiceMeasurementUnit}>
                                                    {invoiceMeasurementUnit}
                                                </option>
                                            ))}
                                        </select>
                                    </th>
                                    <th id="ver">
                                        <input
                                            className="table__input-number"
                                            type="number"
                                            value={item.clock}
                                            onChange={(e) =>
                                                handleRowChange(item.id, "clock", e.target.value)
                                            }
                                        />
                                    </th>
                                    <th id="ver">
                                        <input
                                            className="table__input-number"
                                            type="number"
                                            value={item.price}
                                            onChange={(e) =>
                                                handleRowChange(item.id, "price", e.target.value)
                                            }
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
                                <th className="tfoot__col-3">{formatMoney(sum)}</th>
                            </tr>
                            <tr>
                                {activeEdit ? (
                                    <th id="ver" className="tfoot__col-1 relative">
                                        {numberToUahWords(sum)}
                                        <Button
                                            onClick={() => setActivEdit(!activeEdit)}
                                            iconName="edit"
                                            className="absolute"
                                        />
                                    </th>
                                ) : (
                                    <th id="ver" className="tfoot__col-1 relative">
                                        <input className="table__input-text" type="text" />
                                        <Button
                                            onClick={() => setActivEdit(!activeEdit)}
                                            iconName="close"
                                            className="absolute"
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
                                <th className="tfoot__col-3">{formatMoney(sum)}</th>
                            </tr>
                        </tfoot>
                    </table>

                    <p className="bold margin5">Директор _______________________</p>

                    <Button onClick={() => window.print()} iconName="printer">
                        Друкувати
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Invoice;
