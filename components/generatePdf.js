import { jsPDF } from "jspdf";

export const generatePdf = (values) => {
  const doc = new jsPDF();
  let split = doc.splitTextToSize(
    document.getElementById("text").innerText,
    100
  );
  let image = "/images/chair logon updated.png";
  doc.setFont(undefined, "bold");
  doc.setFontSize(20);
  doc.text(document.querySelector(".content > h1").innerHTML, 55, 22);
  // doc.setTextColor(0, 255, 0);
  // doc.addImage(image, 70, 7, 60, 60);
  doc.addImage(image, "png", 5, 15, 40, 15);
  doc.setFont(undefined, "normal");
  doc.setFontSize(16);
  doc.text(split, 5, 55);
  doc.output("dataurlnewwindow");
};
