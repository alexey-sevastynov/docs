import { createContext, Dispatch, SetStateAction } from "react";

export interface CustomerName {
    id: number;
    name: string;
}

export interface MyContextType {
    count: string | number;
    setCount: Dispatch<SetStateAction<string | number>>;
    months: string[];
    names: CustomerName[];
    month: string;
    name: string;
    price1: string | number;
    price2: string | number;
    day: string | number;
    year: string | number;
    setName: Dispatch<SetStateAction<string>>;
    setNames: Dispatch<SetStateAction<CustomerName[]>>;
    setMonth: Dispatch<SetStateAction<string>>;
    setYear: Dispatch<SetStateAction<string | number>>;
    setDay: Dispatch<SetStateAction<string | number>>;
    setPrice1: Dispatch<SetStateAction<string | number>>;
    setPrice2: Dispatch<SetStateAction<string | number>>;
    nav: string;
    setNav: Dispatch<SetStateAction<string>>;
    tab: boolean;
    setTab: Dispatch<SetStateAction<boolean>>;
    activeEdit: boolean;
    setActivEdit: Dispatch<SetStateAction<boolean>>;
    activeInputEdit: boolean;
    setInputActivEdit: Dispatch<SetStateAction<boolean>>;
    order: CustomerName[];
    setOrder: Dispatch<SetStateAction<CustomerName[]>>;
}

export const MyContext = createContext<MyContextType>({} as MyContextType);
