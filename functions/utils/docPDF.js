PDFDocument = require('pdfkit');
const request = require('request'),
fs = require('fs');

function createInvoice(url,path,data){
    let doc = new PDFDocument({ size: "A4", margin: 50 });

request({
    url: url,
    encoding: null // Prevents Request from converting response to string
}, function(err, response, body) {
    if (err) throw err;

    // Inject image
    doc.image(body,{
        fit: [500, 400],
        align: 'center',
        valign: 'center'
     });
     doc
     .fillColor("#444444")
     .fontSize(20)
     .text(data, 10,30);
     doc
     .fillColor("#444444")
     .fontSize(20)
     .text("Signature", 80,740);
     doc
     .fontSize(10)
     .text(
       "Ministry of finance, Government Of India.",
       50,
       780,
       { align: "center", width: 500 },

     )

    doc.pipe(fs.createWriteStream(path));
    doc.end();
});
}
module.exports.createInvoice = createInvoice;