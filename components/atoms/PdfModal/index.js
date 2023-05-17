import React from "react";
import { Page, Document, PDFViewer } from "@react-pdf/renderer";

const PdfModal = ({ show, hide, pdfUrl }) => {
  if (!show) {
    return null;
  }

  const handleCloseModal = () => {
    hide();
  };
  return (
    <div className="modal" style={{ display: show ? "block" : "none" }}>
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleCloseModal}
            ></button>
            <h4 className="modal-title">PDF Preview</h4>
          </div>
          <div className="modal-body">
            <PDFViewer style={{ width: "100%", height: "500px" }}>
              <Document file={pdfUrl}>
                <Page size="A4" style={{ background: "#fff" }} />
              </Document>
            </PDFViewer>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfModal;
