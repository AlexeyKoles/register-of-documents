import "./document.css"

const Document = (props) => {
    return (
        <li className="documentListItem">
            <details className="details">
                <summary className="summary">{props.name}</summary>
                <div className="document">

                    <div className="organization">{props.organization}</div>
                    <div className="purpose">{props.name}</div>
                    <div className="date-document">
                        <div>Дата: <u><b>{props.date.toLocaleString()}</b></u></div>
                        <div>Номер документа ID:<u><b> {props.id}</b></u></div>
                    </div>

                    <div className="text-document"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                </div>
            </details>
        </li>
    )
}

export default Document;

