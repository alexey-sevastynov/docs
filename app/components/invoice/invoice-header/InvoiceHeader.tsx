import { useContext } from "react";
import { MyContext } from "@/app/components/MyContext";

export function InvoiceHeader() {
    const { invoiceNumber, setInvoiceNumber, documentDateDay, documentDateMonth, documentDateYear } =
        useContext(MyContext);

    return (
        <>
            <h2 className="bold-italic letter-sp">
                Рахунок №
                <input
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                    value={invoiceNumber}
                    className="input-count"
                    type="text"
                />
            </h2>
            <p className="tac">
                &quot;{documentDateDay}&quot; {documentDateMonth} {documentDateYear}р.
            </p>
        </>
    );
}
