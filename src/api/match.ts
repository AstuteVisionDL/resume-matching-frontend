import axios from 'axios'
import {VacancyType} from "../types/vacancy.ts";


const match = async (vacancy: VacancyType, resume: VacancyType): Promise<{ value: number, message: string }> => {
    const response = await axios
        .post("/api/match/", {
            "vacancy": {
                "name": vacancy.name,
                "salary_type": vacancy.salaryType,
                "min_value": vacancy.salaryData.minValue,
                "max_value": vacancy.salaryData.maxValue,
                "value": vacancy.salaryData.value,
                "city": vacancy.city?.value,
                "move": vacancy.move?.value,
                "employment": [
                    vacancy.employment?.value
                ],
                "schedule": [
                    vacancy.schedule?.value
                ],
                "education": vacancy.education?.value
            },
            "resume": {
                "name": resume.name,
                "salary_type": resume.salaryType,
                "min_value": resume.salaryData.minValue,
                "max_value": resume.salaryData.maxValue,
                "value": resume.salaryData.value,
                "city": resume.city?.value,
                "move": resume.move?.value,
                "employment": [
                    resume.employment?.value
                ],
                "schedule": [
                    resume.schedule?.value
                ],
                "education": resume.education?.value
            }
        })
    return await response.data
}

export {match};