import Document from "../Document/document";
import React from 'react';

const ListDocument = (props) => {

    const filterName = props.data.filter(item => {

        if (props.valueName) {
            return item.name.includes(props.valueName)
        }
        if (props.valueID) {
            return item.id.includes(props.valueID)
        }
        if (props.dateValue1 && props.dateValue2) {

            if (props.dateValue2 < props.dateValue1) {
                return item
            }

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

    const elemets = filterName.map((item, index) => {
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