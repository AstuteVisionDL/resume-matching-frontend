import {SingleValue} from "react-select";

interface VacancyType {
    name: string,
    salaryType: string,
    salaryData: {value: number, minValue: number, maxValue: number},
    city: SingleValue<{value: string, label: string}>,
    schedule: SingleValue<{value: string, label: string}>,
    move: SingleValue<{value: string, label: string}>,
    employment: SingleValue<{value: string, label: string}>,
    education: SingleValue<{value: string, label: string}>
}

export type {VacancyType}