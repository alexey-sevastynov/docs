import { useContext } from "react";
import "@/app/components/header/Header.css";
import { MyContext } from "@/app/components/MyContext";
import { documentTypes } from "@/shared/constants/document-types";

export function Header() {
    const { setDocumentType } = useContext(MyContext);

    return (
        <div className="container">
            <div className="wrapper">
                <div className="wrapper__count" onClick={() => setDocumentType(documentTypes.invoice)}>
                    РАХУНОК
                </div>
                <div className="wrapper__act" onClick={() => setDocumentType(documentTypes.report)}>
                    АКТ
                </div>
            </div>
        </div>
    );
}

export default Header;
