import React from 'react';
import Select from 'react-select'
import {TextInput, Label, RadioButton, RadioButtonOption} from '@gravity-ui/uikit';
import {schedules, cities, moves, employments, educations} from "../../constants.ts";
import "./VacancyForm.css"


interface VacancyFormProps {
    theme: string
}

const VacancyForm = (props: VacancyFormProps) => {
    const {theme} = props;
    const [name, setName] = React.useState("");
    const [salaryType, setSalaryType] = React.useState("no salary");
    const [salaryData, setSalaryData] = React.useState({value: 0, minValue: 0, maxValue: 0});

    const salaryOptions: RadioButtonOption[] = [
        {value: 'no salary', content: 'Не указана'},
        {value: 'value', content: 'Значение'},
        {value: 'range', content: 'Диапазон'},
    ];

    return (
        <div style={{display: "grid", gridTemplateColumns: "128px 1fr", gridGap: "8px", alignItems: "center"}}>
                <Label size="m">Должность</Label>
                <TextInput
                    placeholder="Введите здесь название должности"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    hasClear
                    size="l"
                    //errorMessage="Поле должно быть заполнено"
                    //validationState="invalid"
                />
                <Label size="m">Зарплата</Label>
                <div>
                    <RadioButton
                        size="l"
                        width="max"
                        defaultValue={salaryOptions[0].value}
                        options={salaryOptions}
                        value={salaryType}
                        onChange={(event) => setSalaryType(event.target.value)}
                    />
                </div>
                {
                    salaryType === 'value'
                    &&
                    <>
                        <div></div>
                        <div style={{display: "grid", gridTemplateColumns: "1fr 50px", gridGap: "8px", alignItems: "center"}}>
                            <TextInput
                                placeholder="Введите здесь название должности"
                                type="number"
                                value={salaryData.value.toString()}
                                onChange={(event) => setSalaryData({...salaryData, value: +event.target.value})}
                                size="l"
                                //errorMessage="Поле должно быть заполнено"
                                //validationState="invalid"
                            />
                            <Label size="m">руб.</Label>
                        </div>
                    </>
                }
                {
                    salaryType === 'range'
                    &&
                    <>
                        <div></div>
                        <div style={{display: "grid", gridTemplateColumns: "50px 1fr 50px 1fr", gridGap: "8px", alignItems: "center"}}>
                            <Label size="m">От</Label>
                            <TextInput
                                placeholder="Введите здесь название должности"
                                type="number"
                                value={salaryData.minValue.toString()}
                                onChange={(event) => setSalaryData({...salaryData, minValue: +event.target.value})}
                                size="l"
                                //errorMessage="Поле должно быть заполнено"
                                //validationState="invalid"
                            />
                            <Label size="m">До</Label>
                            <TextInput
                                placeholder="Введите здесь название должности"
                                type="number"
                                value={salaryData.maxValue.toString()}
                                onChange={(event) => setSalaryData({...salaryData, maxValue: +event.target.value})}
                                size="l"
                                //errorMessage="Поле должно быть заполнено"
                                //validationState="invalid"
                            />
                        </div>

                    </>
                }

                <Label size="m">Город</Label>
                <Select
                    options={cities}
                    placeholder="Введите здесь название города"
                    classNamePrefix={`react-select-${theme}`}
                    noOptionsMessage={ () => "Подходящего города не найдено"}
                />
                <Label size="m">Переезд</Label>
                <Select
                    options={moves}
                    isSearchable={false}
                    defaultValue={moves[0]}
                    placeholder="Выберите подходящий вариант"
                    classNamePrefix={`react-select-${theme}`}
                    noOptionsMessage={ () => "Подходящего варианта не найдено"}
                />
                <Label size="m">Занятость</Label>
                <Select
                    options={employments}
                    isSearchable={false}
                    defaultValue={employments[0]}
                    placeholder="Выберите подходящий вариант"
                    classNamePrefix={`react-select-${theme}`}
                    noOptionsMessage={ () => "Подходящего варианта не найдено"}
                />
                <Label size="m">График</Label>
                <Select
                    options={schedules}
                    isSearchable={false}
                    defaultValue={schedules[0]}
                    placeholder="Выберите подходящий вариант"
                    classNamePrefix={`react-select-${theme}`}
                    noOptionsMessage={ () => "Подходящего варианта не найдено"}
                />
                <Label size="m">Образование</Label>
                <Select
                    options={educations}
                    isSearchable={false}
                    defaultValue={educations[0]}
                    placeholder="Выберите подходящий вариант"
                    classNamePrefix={`react-select-${theme}`}
                    noOptionsMessage={ () => "Подходящего варианта не найдено"}
                />
        </div>
    );
};

export default VacancyForm;