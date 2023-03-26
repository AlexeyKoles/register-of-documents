import React from 'react';
import "./SearchFields.css";
const SearchFields = (props) => {

    return (

        <div className='wrapper'>

            <div>
                <p>ID документа</p>
                <input className='idAndNameInput' placeholder='введите ' type="number" onChange={props.onInputValueID} />
            </div>

            <div >
                <p>Создан</p>
                <div className='dataAndSort'>
                    <input className='narrow-input' type="date" onChange={props.onInputDateValue1} />
                    <input className='narrow-input' type="date" onChange={props.onInputDateValue2} />
                </div>
            </div>

            <div>
                <p>Название документа</p>
                <input className='idAndNameInput' type="text" onChange={props.onInputValueName} />
            </div>

            <div>
                <p>Сортировка</p>
                <div className='dataAndSort'>
                    <select className='sort' onChange={props.sortValue1}>
                        <option value={"не выбрано"}>не выбрано</option>
                        <option value={"Создан"}>Создан</option>
                        <option value={"По идентификатору"}>По идентификатору</option>
                    </select>

                    <select className='sort' onChange={props.sortValue2}>
                        <option value={"не выбрано"} >не выбрано</option>
                        <option value={"По убыванию"}>По убыванию</option>
                        <option value={"По возрастанию"}>По возрастанию </option>
                    </select>
                </div>

            </div>
        </div>



    )

}

export default SearchFields;
