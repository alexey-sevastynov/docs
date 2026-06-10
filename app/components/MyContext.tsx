import { createContext, Dispatch, SetStateAction } from "react";
import { DocumentType } from "@/shared/constants/document-types";

export interface CustomerName {
    id: number;
    name: string;
}

export interface MyContextType {
    invoiceNumber: string | number;
    setInvoiceNumber: Dispatch<SetStateAction<string | number>>;
    months: string[];
    customerNames: CustomerName[];
    setCustomerNames: Dispatch<SetStateAction<CustomerName[]>>;
    customerName: string;
    setCustomerName: Dispatch<SetStateAction<string>>;
    invoiceTotalAmountMajor: string | number;
    setInvoiceTotalAmountMajor: Dispatch<SetStateAction<string | number>>;
    invoiceTotalAmountMinor: string | number;
    setInvoiceTotalAmountMinor: Dispatch<SetStateAction<string | number>>;
    documentDateDay: string | number;
    setDocumentDateDay: Dispatch<SetStateAction<string | number>>;
    documentDateMonth: string;
    setDocumentDateMonth: Dispatch<SetStateAction<string>>;
    documentDateYear: string | number;
    setDocumentDateYear: Dispatch<SetStateAction<string | number>>;
    transportRoute: string;
    setTransportRoute: Dispatch<SetStateAction<string>>;
    documentType: DocumentType;
    setDocumentType: Dispatch<SetStateAction<DocumentType>>;
    activeEdit: boolean;
    setActivEdit: Dispatch<SetStateAction<boolean>>;
    activeInputEdit: boolean;
    setInputActivEdit: Dispatch<SetStateAction<boolean>>;
    order: CustomerName[];
    setOrder: Dispatch<SetStateAction<CustomerName[]>>;
}

export const MyContext = createContext<MyContextType>({} as MyContextType);
