import { emptyCellValue } from "@/app/components/invoice/constants";
import { TableRow } from "@/app/components/invoice/Invoice";

export const updateTableRow = (
    setTableRows: React.Dispatch<React.SetStateAction<TableRow[]>>,
    rowId: number,
    field: keyof TableRow,
    value: string,
) => {
    setTableRows((prev) => prev.map((row) => (row.id === rowId ? { ...row, [field]: value } : row)));
};

export function createInitialTableRows() {
    const countTableRows = 14;

    return [createBaseTableRow(), ...createEmptyTableRows(countTableRows)];
}

function createBaseTableRow() {
    const baseTableRow: TableRow = {
        id: 1,
        input: "м.Дніпро - по місту",
        clock: emptyCellValue,
        price: emptyCellValue,
        unit: emptyCellValue,
    };

    return baseTableRow;
}

function createEmptyTableRows(countRows: number) {
    const rows: TableRow[] = [];

    for (let i = 0; i < countRows; i++) {
        rows.push({
            id: 2 + i,
            input: "",
            clock: emptyCellValue,
            price: emptyCellValue,
            unit: emptyCellValue,
        });
    }

    return rows;
}
