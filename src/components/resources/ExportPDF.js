import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import '../css/ExportPDF.scss';


class ExportPDF extends React.Component {
    renderPDF = () => {
        const { title, tableHeaders, data } = this.props;
        const unit = "pt";
        const size = "A4" //Use A1, A2, A3 or A4
        const orientation = "portrait";

        const marginLeft = 40; //Based on unit const
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const dataToArray = data.map(el => [el.id, el.name, el.available]);
        // const tableHeaders = [...headers];
        let content = {
            startY: 50,
            head: tableHeaders,
            body: dataToArray
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf");
    }

    render() {
        return (
            <button onClick={() => this.renderPDF()} className="toPDF-Button">PDF</button>
        );
    }
}

export default ExportPDF;