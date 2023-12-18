import {ThemeProvider, Button} from '@gravity-ui/uikit';
import './App.css'
import React from "react";
import Header from "./../../components/Header";
import VacancyForm from "../../components/VacancyForm";
import {cities, schedules, moves, employments, educations} from "../../constants.ts";
import {SingleValue} from "react-select";
import {VacancyType} from "../../types/vacancy.ts";

const defaultData: VacancyType =  {
    name: "",
    salaryType: "no salary",
    salaryData: {value: 0, minValue: 0, maxValue: 0},
    city: cities[0] as SingleValue<{value: string, label: string}>,
    schedule: schedules[0] as SingleValue<{value: string, label: string}>,
    move: moves[0] as SingleValue<{value: string, label: string}>,
    employment: employments[0] as SingleValue<{value: string, label: string}>,
    education: educations[0] as SingleValue<{value: string, label: string}>
}

function App() {
    const [theme, setTheme] = React.useState<string>(localStorage.getItem("theme") || 'light');
    const [vacancy, setVacancy] = React.useState(defaultData);
    const [resume, setResume] = React.useState(defaultData)
    const [loading, setLoading] = React.useState(false);
    const [matchValue, setMatchValue] = React.useState<null | number>(null)

    const matchData = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
            setMatchValue(Math.round(Math.random() * 100))
        }, 1000)
    }

    return (
        <ThemeProvider theme={theme}>
            <Header setTheme={setTheme}/>
            <div className="yc-row">
                <div className="yc-col_s-s_1"></div>
                <div className="yc-row yc-col_s-s_10">
                    <div className="yc-col_s-xl_6 yc-col_s-s_12 py-32">
                        <h2 className="yc-text_variant_header-2 text-align-center">
                            Вакансия
                        </h2>
                        <VacancyForm theme={theme} vacancy={vacancy} setVacancy={setVacancy}/>
                    </div>
                    <div className="yc-col_s-xl_6 yc-col_s-s_12 py-32">
                        <h2 className="yc-text_variant_header-2 text-align-center">
                            Резюме
                        </h2>
                        <VacancyForm theme={theme} vacancy={resume} setVacancy={setResume}/>
                    </div>
                </div>
                <div className="yc-col_s-s_1"></div>
            </div>
            <div className="yc-row" style={{marginTop: "16px"}}>
                <div className="yc-col_s-xl_5 yc-col_s-s_4"></div>
                <div className="yc-row yc-col_s-xl_2 yc-col_s-s_4">
                    <Button view={"normal"} size={"l"} width={"max"} loading={loading} onClick={matchData}>
                        Сравнить
                    </Button>
                </div>
                <div className="yc-col_s-xl_5 yc-col_s-s_4"></div>
            </div>
            {
                matchValue &&
                <div className="yc-row">
                    <div className="yc-col_s-xl_5 yc-col_s-s_4"></div>
                    <div className="yc-row yc-col_s-xl_2 yc-col_s-s_4">
                        <h3 className="yc-text_variant_subheader-3 text-align-center" style={{width: "100%"}}>
                            Совпадение: {matchValue.toString()} %
                        </h3>
                    </div>
                    <div className="yc-col_s-xl_5 yc-col_s-s_4"></div>
                </div>
            }

        </ThemeProvider>
    )
}

export default App