export const documentTypes = {
    invoice: "invoice",
    report: "report",
} as const;

export type DocumentType = (typeof documentTypes)[keyof typeof documentTypes];
