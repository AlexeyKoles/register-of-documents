import React from 'react';
import "./SearchFields.css";
const SearchFields = (props) => {
    
    return (
        
            <div className='wrapper'>

                <div className='id-Block'>
                    <p >ID документа</p>
                    <input className='wide-input' value={props.valueID} placeholder='введите ' type="number" onChange={props.onInputValueID}  />
                </div>

                <div >
                    <p >Создан</p>
                    <div className='iii'>
                        <input className='narrow-input' type="date" onChange={props.onInputDateValue1}  />
                        <input className='narrow-input' type="date" onChange={props.onInputDateValue2}  />
                    </div>
                </div>

                <div className='document-name-block'>
                    <p >Название документа</p>
                    <input className='wide-input' type="text" onChange={props.onInputValueName} />
                </div>

                <div >
                    <p >Сортировка</p>
                    <div className='iii'>
                        <select className='sort'>
                            <option>Создан</option>
                        </select>

                        <select className='sort'>
                            <option>По убыванию</option>
                            <option>По возрастанию </option>
                        </select>
                    </div>

                </div>
            </div>
       


    )

}

export default SearchFields;
