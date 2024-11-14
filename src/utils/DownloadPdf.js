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

  // Save original styles
  const originalStyles = {
    paper: {
      width: paperElement.style.width,
      height: paperElement.style.height,
      marginBottom: paperElement.style.marginBottom,
      paddingBottom: paperElement.style.paddingBottom,
    },
    nameAndLinkContainer: {
      paddingBottom: nameAndLinkContainer.style.paddingBottom,
    },
    containers: Array.from(containers).map((container) => ({
      paddingLeft: container.style.paddingLeft,
      paddingRight: container.style.paddingRight,
    })),
  };

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

    paperElement.style.width = originalStyles.paper.width;
    paperElement.style.height = originalStyles.paper.height;
    paperElement.style.paddingBottom = originalStyles.paper.paddingBottom;

    nameAndLinkContainer.style.paddingBottom =
      originalStyles.nameAndLinkContainer.paddingBottom;

    containers.forEach((container, index) => {
      container.style.paddingLeft =
        originalStyles.containers[index].paddingLeft;
      container.style.paddingRight =
        originalStyles.containers[index].paddingRight;
    });
  });
};

export { downloadPDF };
