export function formatMoney(value: number) {
    if (!Number.isFinite(value)) return "0,00";

    return (Math.round(value * 100) / 100).toFixed(2).replace(".", ",");
}
