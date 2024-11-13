import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const downloadPDF = (fileName) => {
  const onSaveFileName = fileName ? fileName : "CV-Builder";
  const paperElement = document.querySelector(".paper");

  html2canvas(paperElement, {
    scale: 5,
    useCORS: true,
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png", 1.0);
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "cm",
      format: "a4",
      compression: "NONE",
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const canvasAspectRatio = canvas.width / canvas.height;
    const pdfAspectRatio = pageWidth / pageHeight;

    let imgWidth = pageWidth;
    let imgHeight = pageHeight;

    if (canvasAspectRatio > pdfAspectRatio) {
      imgHeight = imgWidth / canvasAspectRatio;
    } else {
      imgWidth = imgHeight * canvasAspectRatio;
    }

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight, "", "NONE");
    pdf.save(`${onSaveFileName}.pdf`);
  });
};

export { downloadPDF };
