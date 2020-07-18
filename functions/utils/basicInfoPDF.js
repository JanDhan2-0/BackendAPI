const fs = require("fs");
const PDFDocument = require("pdfkit");

var createInvoice =  function createInvoice(invoice,path) {
  console.log("hi");
  let doc = new PDFDocument({ size: "A4", margin: 50 });
  generateHeader(doc);
  generateInvoiceTable(doc, invoice);
  generateFooter(doc);
  doc.end();
  doc.pipe(fs.createWriteStream(path));
  
}

var generateHeader = function generateHeader(doc) {
  console.log("hii")
  doc
    .image("./assets/images/Logo.jpeg", 50, 45, { width: 200 })
    .fillColor("#444444")
    .fontSize(20)
    .text("Govt Of India.", 110, 57)
    .fontSize(10)
    .text("Ministry Of Finance", 200, 50, { align: "right" })
    .text("Rajpath Marg, Central Secratariet", 200, 65, { align: "right" })
    .text("New Delhi, IN, 110001", 200, 80, { align: "right" })
    .moveDown();
 
}

var generateInvoiceTable = function generateInvoiceTable(doc, invoice) {
    doc
    .fillColor("#444444")
    .fontSize(20)
    .text("Account Holder Details", 50, 160);

  generateHr(doc, 185);

  let i;
  const invoiceTableTop = 200;
  doc.font("Helvetica-Bold");
  generateTableRow(
    doc,
    invoiceTableTop,
    "Property",
    "Value"
  );
  generateHr(doc, invoiceTableTop + 20);
  doc.font("Helvetica");
  var k = 1;
  for (const [key, value] of Object.entries(invoice)) {
    console.log(key, value);
    const position = invoiceTableTop + 60*k;
   
    if(key !== "panUrl" && key !== "aadharUrl" && key !== "signatureUrl"){
        k = k + 1;
        generateTableRow(
            doc,
            position,
            key,
            value,
          );
        generateHr(doc, position + 20);
      }
    }
   
  generateFooter(doc);
}
 
var generateFooter = function generateFooter(doc) {
  doc
    .fontSize(10)
    .text(
      "Ministry of finance, Government Of India.",
      50,
      780,
      { align: "center", width: 500 }
    );
}

var generateTableRow = function generateTableRow(
  doc,
  y,
  key,
  value
) {
  doc
    .fontSize(10)
    .text(key, 50, y)
    .text(value, 280, y, { width: 90, align: "right" })
}

var generateHr = function generateHr(doc, y) {
  doc
    .strokeColor("#aaaaaa")
    .lineWidth(1)
    .moveTo(50, y)
    .lineTo(550, y)
    .stroke();
}

// createInvoice(invoice,"1.pdf")
module.exports.createInvoice = createInvoice;