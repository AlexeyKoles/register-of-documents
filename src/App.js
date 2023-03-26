import './App.css';
import React, { StrictMode } from 'react';
import SearchFields from './components/form/SearchFields';
import ListDocument from './components/ListDocuments/ListDocuments';
import { useState } from "react";


function App() {
  const data = [
    { name: "приказ", organization: "ФЕДЕРАЛЬНОЕ АРХИВНОЕ АГЕНСТВО", id: "00000001", date: new Date('2021-12-12') },
    { name: "указ", organization: "Конструкторское бюро машиностроения", id: "00000002", date: new Date('1999-04-25') },
    { name: "постановление", organization: "ОАО «РЖД»", id: "02136548", date: new Date('2020-01-01') },
    { name: "протокол", organization: "ЗАО «Алмаз»", id: "00000004", date: new Date('2007-07-14') },
    { name: "инструкция", organization: "Бюро кредитных историй", id: "00000005", date: new Date('1999-11-24') },
    { name: "письмо", organization: "Исследовательский институт", id: "00000006", date: new Date('1985-02-05') },
    { name: "акт", organization: "Группа компаний «СТАНДАРТ»", id: "00000007", date: new Date('1970-12-23') },
    { name: "платёжное поручение", organization: "ПАО «РОМТП»", id: "00000008", date: new Date('1977-03-25') },
    { name: "счёт фактура", organization: "Государственный реестр", id: "00000009", date: new Date('2021-10-05') },
    { name: "накладная", organization: "ПАО «Магнит»", id: "85777778", date: new Date('2001-01-01') },
    { name: "служебная записка", organization: "Министерство юстиции РФ", id: "79463258", date: new Date('1999-12-30') },
    { name: "решение", organization: "ГИС ЖКХ", id: "85777778", date: new Date('2006-06-13') },
    { name: "платёжное поручение", organization: "Министерство обороны РФ", id: "14258563", date: new Date('2013-11-31') },
    { name: "счёт-фактура", organization: "МЧС России", id: "12356984", date: new Date('1960-06-06') },
    { name: "выписка", organization: "Министерство спорта РФ", id: "45632790", date: new Date('2001-08-17') },
    { name: "акт", organization: "Министерство транспорта РФ", id: "12563198", date: new Date('2009-10-26') }
  ];

  const [valueID, setValueID] = useState();
  const [valueName, setValueName] = useState("");
  const [dateValue1, setDateValue1] = useState();
  const [dateValue2, setDateValue2] = useState();
  const [sortValue1, setSortValue1] = useState("");
  const [sortValue2, setSortValue2] = useState("");
  

  return (
    <StrictMode>
      <div className="App">
        <div className='header'><h1>Поиск документов</h1></div>
        <div className='AppBlocks'>
          <SearchFields
            onInputValueID={(e) => setValueID(e.target.value)}
            onInputValueName={(e) => setValueName(e.target.value)}
            onInputDateValue1={(e) => setDateValue1(new Date(e.target.value))}
            onInputDateValue2={(e) => setDateValue2(new Date(e.target.value))}
            sortValue1={(e) => setSortValue1(e.target.value)}
            sortValue2={(e) => setSortValue2(e.target.value)}
          />
          <ListDocument data={data}
            valueName={valueName}
            valueID={valueID}
            dateValue1={dateValue1}
            dateValue2={dateValue2}
            sortValue1={sortValue1}
            sortValue2={sortValue2}
          />

        </div>
      </div>
    </StrictMode>
  );
}

export default App;
