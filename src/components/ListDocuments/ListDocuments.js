import Document from "../Document/document";
import React from 'react';

const ListDocument = (props) => {

    const filterArray = props.data.filter(item => {

        //поиск по названию
        if (props.valueName) {
            return item.name.includes(props.valueName)
        }
        //поиск по ID
        if (props.valueID) {
            return item.id.includes(props.valueID)
        }
        //поиск по датам
        if (props.dateValue1 && props.dateValue2) {

            if (isNaN(props.dateValue1) || isNaN(props.dateValue2)) {
                return item
            }
            for (let i = props.dateValue1.getTime(); i < props.dateValue2.getTime(); i = i + 24 * 60 * 60 * 1000) {
                if (i === item.date.getTime()) {
                    return item
                }
            }
        }
        else return item

        return false
    });

    //сортировка
    if (props.sortValue1 === "По идентификатору" && props.sortValue2 === "По возрастанию") {
        filterArray.sort((item1, item2) => item1.id - item2.id);
    }
    if (props.sortValue1 === "По идентификатору" && props.sortValue2 === "По убыванию") {
        filterArray.sort((item1, item2) => item2.id - item1.id);
    }

    if (props.sortValue1 === "Создан" && props.sortValue2 === "По возрастанию") {
        filterArray.sort((item1, item2) => item1.date - item2.date);
    }
    if (props.sortValue1 === "Создан" && props.sortValue2 === "По убыванию") {
        filterArray.sort((item1, item2) => item2.date - item1.date);
    }

    const elemets = filterArray.map((item, index) => {
        return (
            <Document
                name={item.name}
                organization={item.organization}
                id={item.id}
                date={item.date}
                key={index}
            />)
    });

    return (
        <ul className="listDocument">
            {elemets}
        </ul>
    )
}

export default ListDocument;