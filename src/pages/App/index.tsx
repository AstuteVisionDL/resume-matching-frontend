import {ThemeProvider, Button, Col, Row} from '@gravity-ui/uikit';
import './App.css'
import React from "react";
import {cities, schedules, moves, employments, educations} from "../../constants.ts";
import {SingleValue} from "react-select";
import {VacancyType} from "../../types/vacancy.ts";
import Header from "../../components/Header";
import VacancyForm from "../../components/VacancyForm";
import {match} from "../../api/match.ts";

const defaultData: VacancyType =  {
    name: "",
    salaryType: "no",
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
        match(vacancy, resume)
            .then(({value}) => {
                setLoading(false);
                setMatchValue(Math.round(value))
            })
            .catch(() => {
                setLoading(false);
                setMatchValue(null);
            })
    }

    return (
        <ThemeProvider theme={theme}>
            <Header setTheme={setTheme}/>
            <Row space={0}>
                <Col s={1}>
                </Col>
                <Col s={10}>
                    <Row space={0}>
                        <Col xl={6} s={12} style={{paddingRight: "32px", paddingLeft: "32px"}}>
                            <h2 className="yc-text_variant_header-2 text-align-center">
                                Вакансия
                            </h2>
                            <VacancyForm theme={theme} vacancy={vacancy} setVacancy={setVacancy}/>
                        </Col>
                        <Col xl={6} s={12} style={{paddingRight: "32px", paddingLeft: "32px"}}>
                            <h2 className="yc-text_variant_header-2 text-align-center">
                                Резюме
                            </h2>
                            <VacancyForm theme={theme} vacancy={resume} setVacancy={setResume}/>
                        </Col>
                    </Row>
                </Col>
                <Col s={1}>
                </Col>
            </Row>
            <Row space={1} style={{marginTop: "16px"}}>
                <Col xl={5} s={4}></Col>
                <Col xl={2} s={4}>
                    <Button view={"normal"} size={"l"} width={"max"} loading={loading} onClick={matchData}>
                        Сравнить
                    </Button>
                </Col>
                <Col xl={5} s={4}></Col>
            </Row>
            {
                matchValue !== null &&
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