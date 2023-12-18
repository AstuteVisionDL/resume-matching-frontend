import Select from 'react-select'
import {TextInput, Label, RadioButton, RadioButtonOption} from '@gravity-ui/uikit';
import {cities, schedules, moves, employments, educations} from "../../constants.ts";
import "./VacancyForm.css"
import {VacancyType} from "../../types/vacancy.ts";


interface VacancyFormProps {
    theme: string,
    vacancy: VacancyType,
    setVacancy: (vacancy: VacancyType) => void
}

const VacancyForm = (props: VacancyFormProps) => {
    const {theme, vacancy, setVacancy} = props;

    const salaryOptions: RadioButtonOption[] = [
        {value: 'no', content: 'Не указана'},
        {value: 'value', content: 'Значение'},
        {value: 'range', content: 'Диапазон'},
    ];

    return (
        <div style={{display: "grid", gridTemplateColumns: "128px 1fr", gridGap: "8px", alignItems: "center"}}>
                <Label size="m">Должность</Label>
                <TextInput
                    placeholder="Введите здесь название должности"
                    value={vacancy.name}
                    onChange={(event) => setVacancy({...vacancy, name: event.target.value})}
                    hasClear
                    size="l"
                />
                <Label size="m">Зарплата</Label>
                <div>
                    <RadioButton
                        size="l"
                        width="max"
                        defaultValue={salaryOptions[0].value}
                        options={salaryOptions}
                        value={vacancy.salaryType}
                        onChange={(event) => setVacancy({...vacancy, salaryType: event.target.value})}
                    />
                </div>
                {
                    vacancy.salaryType === 'value'
                    &&
                    <>
                        <div></div>
                        <div style={{display: "grid", gridTemplateColumns: "1fr 50px", gridGap: "8px", alignItems: "center"}}>
                            <TextInput
                                placeholder="Введите здесь название должности"
                                type="number"
                                value={vacancy.salaryData.value.toString()}
                                onChange={(event) => setVacancy({...vacancy, salaryData: {...vacancy.salaryData, value: +event.target.value}})}
                                size="l"
                            />
                            <Label size="m">руб.</Label>
                        </div>
                    </>
                }
                {
                    vacancy.salaryType === 'range'
                    &&
                    <>
                        <div></div>
                        <div style={{display: "grid", gridTemplateColumns: "50px 1fr 50px 1fr", gridGap: "8px", alignItems: "center"}}>
                            <Label size="m">От</Label>
                            <TextInput
                                placeholder="Введите здесь название должности"
                                type="number"
                                value={vacancy.salaryData.minValue.toString()}
                                onChange={(event) => setVacancy({...vacancy, salaryData: {...vacancy.salaryData, minValue: +event.target.value}})}
                                size="l"
                            />
                            <Label size="m">До</Label>
                            <TextInput
                                placeholder="Введите здесь название должности"
                                type="number"
                                value={vacancy.salaryData.maxValue.toString()}
                                onChange={(event) => setVacancy({...vacancy, salaryData: {...vacancy.salaryData, maxValue: +event.target.value}})}
                                size="l"
                            />
                        </div>

                    </>
                }

                <Label size="m">Город</Label>
                <Select
                    value={vacancy.city}
                    onChange={option => setVacancy({...vacancy, city: option})}
                    options={cities}
                    placeholder="Введите здесь название города"
                    classNamePrefix={`react-select-${theme}`}
                    noOptionsMessage={ () => "Подходящего города не найдено"}
                />
                <Label size="m">Переезд</Label>
                <Select
                    options={moves}
                    isSearchable={false}
                    value={vacancy.move}
                    onChange={option => setVacancy({...vacancy, move: option})}
                    placeholder="Выберите подходящий вариант"
                    classNamePrefix={`react-select-${theme}`}
                    noOptionsMessage={ () => "Подходящего варианта не найдено"}
                />
                <Label size="m">Занятость</Label>
                <Select
                    options={employments}
                    isSearchable={false}
                    value={vacancy.employment}
                    onChange={option => setVacancy({...vacancy, employment: option})}
                    placeholder="Выберите подходящий вариант"
                    classNamePrefix={`react-select-${theme}`}
                    noOptionsMessage={ () => "Подходящего варианта не найдено"}
                />
                <Label size="m">График</Label>
                <Select
                    options={schedules}
                    isSearchable={false}
                    value={vacancy.schedule}
                    onChange={option => setVacancy({...vacancy, schedule: option})}
                    placeholder="Выберите подходящий вариант"
                    classNamePrefix={`react-select-${theme}`}
                    noOptionsMessage={ () => "Подходящего варианта не найдено"}
                />
                <Label size="m">Образование</Label>
                <Select
                    options={educations}
                    isSearchable={false}
                    value={vacancy.education}
                    onChange={option => setVacancy({...vacancy, education: option})}
                    placeholder="Выберите подходящий вариант"
                    classNamePrefix={`react-select-${theme}`}
                    noOptionsMessage={ () => "Подходящего варианта не найдено"}
                />
        </div>
    );
};

export default VacancyForm;