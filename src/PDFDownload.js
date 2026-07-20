import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";


const PDFDownload = ({ userData }) => {

    console.log(userData)
    const generatePDF = () => {
        const doc  = new jsPDF("p", "pt", "a4");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.setTextColor(40, 116, 240);
        doc.text("Approval Form", 40, 60);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(100);
        doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 40, 80);
        

        const tableRows = [
            ["Description", "Value"],
            ["Full Name", userData.fullName],
            ["Phone Number", userData.phoneNumber],
            ["Approval ID", userData.userID]
        ];

        autoTable(doc, {
            startY : 120,
            head : [tableRows[0]],
            body : tableRows.slice(1),
            theme : 'striped',
            headStyles : { fillColor : [40, 116, 240]},
            styles : {font : "helvetica", fontsize : 11}
        });

        const finalY = doc.lastAutoTable.finalY || 400;
        doc.setFontSize(10);
        doc.text('Pls come along with this document when bringing your vehicle', 40, finalY + 40);

        doc.save(`Approval_${userData.fullName}.pdf`)
    }
    return (
        <div>
            <button 
                    onClick={generatePDF}
                    style={{
                        padding:'10px 20px',
                        backgroundColor: '#2874f0',
                        color: '#fff',
                        border: 'none',
                        borderRadius:'4px',
                        cursor: 'pointer',
                        fontWeight: 'bold'}}>
                        Download Approval Form
            </button>
        </div>
    )
}

export default PDFDownload