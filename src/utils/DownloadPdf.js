import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const downloadPDF = (fileName) => {
  const onSaveFileName = fileName ? fileName : "CV-Builder";
  const paperElement = document.querySelector(".paper");
  const nameAndLinkContainer = document.querySelector(
    ".name-and-link-container"
  );
  const containers = document.querySelectorAll(
    ".skill-container, .projects-container, .experience-container, .education-container"
  );

  const originalWidth = paperElement.style.width;
  const originalHeight = paperElement.style.height;
  const originalPaddingBottom = paperElement.style.paddingBottom;
  const originalPaddingLeftContainer = [];
  const originalPaddingRightContainer = [];
  const originalPaddingBottomNameLink =
    nameAndLinkContainer.style.paddingBottom;

  containers.forEach((container) => {
    originalPaddingLeftContainer.push(container.style.paddingLeft);
    originalPaddingRightContainer.push(container.style.paddingRight);
  });

  paperElement.style.width = "22cm";
  paperElement.style.height = "29.7cm";
  paperElement.style.marginBottom = "24px";
  paperElement.style.paddingBottom = "1200px";

  nameAndLinkContainer.style.paddingBottom = "24px";

  containers.forEach((container) => {
    container.style.paddingLeft = "50px";
    container.style.paddingRight = "50px";
  });

  html2canvas(paperElement, {
    scale: 2,
    useCORS: true,
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png", 0.9);
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "cm",
      format: "a4",
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

    paperElement.style.width = originalWidth;
    paperElement.style.height = originalHeight;
    paperElement.style.paddingBottom = originalPaddingBottom;

    nameAndLinkContainer.style.paddingBottom = originalPaddingBottomNameLink;

    containers.forEach((container, index) => {
      container.style.paddingLeft = originalPaddingLeftContainer[index];
      container.style.paddingRight = originalPaddingRightContainer[index];
    });
  });
};

export { downloadPDF };
