import { ukrainianMonthNames } from "@/shared/constants/ukrainian-month-names";

export function getUkrainianMonthName() {
    return ukrainianMonthNames[new Date().getMonth()];
}

export function getCurrentDayOfMonth() {
    return new Date().getDate();
}

export function getCurrentYear() {
    return new Date().getFullYear();
}
