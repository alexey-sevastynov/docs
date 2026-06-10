const TEENS: Record<string, string> = {
    "10": "десять",
    "11": "одинадцять",
    "12": "дванадцять",
    "13": "тринадцять",
    "14": "чотирнадцять",
    "15": "п'ятнадцять",
    "16": "шістнадцять",
    "17": "сімнадцять",
    "18": "вісімнадцять",
    "19": "дев'ятнадцять",
};

const TENS = [
    "",
    "",
    "двадцять",
    "тридцять",
    "сорок",
    "п'ятдесят",
    "шістдесят",
    "сімдесят",
    "вісімдесят",
    "дев'яносто",
] as const;

const HUNDREDS = [
    "",
    "сто",
    "двісті",
    "триста",
    "чотириста",
    "п'ятсот",
    "шістсот",
    "сімсот",
    "вісімсот",
    "дев'ятсот",
] as const;

type PluralForm = "one" | "few" | "many";

type Scale = {
    one: string;
    few: string;
    many: string;
    gender: "male" | "female";
};

const SCALES = [
    null,
    { one: "тисяча", few: "тисячі", many: "тисяч", gender: "female" },
    { one: "мільйон", few: "мільйони", many: "мільйонів", gender: "male" },
    { one: "мільярд", few: "мільярди", many: "мільярдів", gender: "male" },
] as const;

function isScale(scale: unknown): scale is Scale {
    return typeof scale === "object" && scale !== null && "one" in scale && "few" in scale && "many" in scale;
}

/**
 * IMPORTANT FIX:
 * 0 теперь валидный кейс → не считаем его "empty"
 */
function isEmpty(value: unknown): boolean {
    return value === null || value === undefined || value === "";
}

function splitThousands(num: string): string[] {
    const res: string[] = [];
    let n = num;

    while (n.length > 3) {
        res.unshift(n.slice(-3));
        n = n.slice(0, -3);
    }

    res.unshift(n);
    return res;
}

function getPluralForm(n: number): PluralForm {
    const mod10 = n % 10;
    const mod100 = n % 100;

    if (mod100 >= 11 && mod100 <= 14) return "many";
    if (mod10 === 1) return "one";
    if (mod10 >= 2 && mod10 <= 4) return "few";
    return "many";
}

function getUnits(gender: "male" | "female") {
    return gender === "female"
        ? ["", "одна", "дві", "три", "чотири", "п'ять", "шість", "сім", "вісім", "дев'ять"]
        : ["", "один", "два", "три", "чотири", "п'ять", "шість", "сім", "вісім", "дев'ять"];
}

function formatTriplet(num: string, scaleIndex: number): string {
    const n = num.padStart(3, "0");

    const h = +n[0];
    const t = +n[1];
    const u = +n[2];

    let result = "";

    if (h) result += HUNDREDS[h] + " ";

    if (t === 1) {
        return (result + TEENS[`${t}${u}`]).trim();
    }

    if (t) result += TENS[t] + " ";

    const gender: "male" | "female" = scaleIndex === 0 ? "female" : "male";
    const units = getUnits(gender);

    result += units[u];

    return result.trim();
}

function capitalizeFirst(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function numberToUahWords(value: number | string | null | undefined): string | null {
    // ✔ null / undefined / "" → null
    if (isEmpty(value)) return null;

    const num = Number(value);
    if (!Number.isFinite(num)) return null;

    const [intRaw, fracRaw = "00"] = num.toFixed(2).split(".");

    const intPart = intRaw.replace(/^0+/, "") || "0";
    const groups = splitThousands(intPart);

    const words = groups
        .map((g, i) => {
            const scaleIndex = groups.length - i - 1;
            const numGroup = Number(g);

            const text = formatTriplet(g, scaleIndex);
            if (!text) return "";

            const scale = SCALES[scaleIndex];

            if (scaleIndex === 0 || !isScale(scale)) {
                return text;
            }

            const form = getPluralForm(numGroup);
            return `${text} ${scale[form]}`;
        })
        .filter(Boolean)
        .join(" ");

    const kop = fracRaw.padStart(2, "0");

    // ✔ 0 теперь нормально обрабатывается
    return capitalizeFirst(`${words || "нуль"} грн ${kop} коп`);
}
