"use client";

import { useState } from "react";
import "@/app/components/App.css";
import Act from "@/app/components/act/Act";
import Invoice from "@/app/components/invoice/Invoice";
import Header from "@/app/components/header/Header";
import { useLocalStorage } from "@/app/hooks/useLocalStorage";
import { MyContext, CustomerName } from "@/app/components/MyContext";
import { documentTypes, DocumentType } from "@/shared/constants/document-types";
import { ukrainianMonthNames } from "@/shared/constants/ukrainian-month-names";
import {
    getCurrentDayOfMonth,
    getCurrentYear,
    getUkrainianMonthName,
} from "@/shared/utils/date/getUkrainianMonthName";

const defaultCustomerNames: CustomerName[] = [
    { id: 1, name: "?" },
    { id: 2, name: 'ПП "НПФ СВК"' },
    { id: 3, name: 'ТОВ ВКФ "Інватех"' },
];

export function ClientApp() {
    const [documentType, setDocumentType] = useState<DocumentType>(documentTypes.invoice);
    const [order, setOrder] = useState<CustomerName[]>([]);
    const [invoiceNumber, setInvoiceNumber] = useState<string | number>(4444);
    const [customerName, setCustomerName] = useState("?");
    const [invoiceTotalAmountMajor, setInvoiceTotalAmountMajor] = useState<string | number>(0);
    const [invoiceTotalAmountMinor, setInvoiceTotalAmountMinor] = useState<string | number>("00");
    const [documentDateDay, setDocumentDateDay] = useState<string | number>(getCurrentDayOfMonth());
    const [documentDateMonth, setDocumentDateMonth] = useState(getUkrainianMonthName());
    const [documentDateYear, setDocumentDateYear] = useState<string | number>(getCurrentYear());
    const [transportRoute, setTransportRoute] = useState("м.Дніпро");
    const [activeEdit, setActivEdit] = useState(true);
    const [activeInputEdit, setInputActivEdit] = useState(true);
    const [customerNames, setCustomerNames] = useLocalStorage<CustomerName[]>(defaultCustomerNames, "order");

    return (
        <MyContext.Provider
            value={{
                invoiceNumber,
                setInvoiceNumber,
                months: ukrainianMonthNames,
                customerNames,
                documentDateMonth,
                customerName,
                invoiceTotalAmountMajor,
                invoiceTotalAmountMinor,
                documentDateDay,
                documentDateYear,
                setCustomerName,
                setCustomerNames,
                setDocumentDateMonth,
                setDocumentDateYear,
                setDocumentDateDay,
                setInvoiceTotalAmountMajor,
                setInvoiceTotalAmountMinor,
                transportRoute: transportRoute,
                setTransportRoute: setTransportRoute,
                documentType,
                setDocumentType,
                activeEdit,
                setActivEdit,
                activeInputEdit,
                setInputActivEdit,
                order,
                setOrder,
            }}
        >
            <Header />
            {documentType === documentTypes.invoice ? <Invoice /> : <Act />}
        </MyContext.Provider>
    );
}

export default ClientApp;
