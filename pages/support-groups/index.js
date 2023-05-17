import React, { Fragment } from "react";

import BreadCrumb from "../../components/atoms/Breadcrumb";

// API CALLS
import { fetchSupportGroup } from "../../util/fetchSupportGroup";
import { useState } from "react";
import PdfModal from "../../components/atoms/PdfModal";

const SupportGroups = (props) => {
  const { supportGroup } = props;
  const [showModal, setShowModal] = useState(false);
  const [selectedPdfUrl, setSelectedPdfUrl] = useState("");

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalShow = (pdfUrl) => {
    setSelectedPdfUrl(pdfUrl);
    setShowModal(true);
  };

  console.log(supportGroup);

  return (
    <Fragment>
      {supportGroup?.map((item) => {
        const {
          _id,
          title,
          slug,
          description,
          image,
          bodyText,
          eldoretPdfUrl,
          nairobiPdfUrl,
        } = item;
        const [firstWord, secondWord] = title.split(" ").slice(0, 2);
        const concatenatedWords = `${firstWord} ${secondWord}`;
        return (
          <Fragment key={_id}>
            <BreadCrumb title={title} />
            <section className="support-area">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-12 col-lg-6 col-md-12">
                    <div className="content-box">
                      <h2 className="heading-title">
                        <span className="underline">{concatenatedWords}</span>
                      </h2>
                      {bodyText.map((text, index) => (
                        <p key={index}>{text.text}</p>
                      ))}
                    </div>
                  </div>
                  <div className="col-xl-6 col-12 col-lg-6 col-md-12">
                    <div className="content-box pdf-area">
                      <h3 className="sub-heading">
                        Annual calendars for the Support Groups
                      </h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="view-box">
                            <button
                              className="btn-main"
                              onClick={() => handleModalShow(nairobiPdfUrl)}
                            >
                              View Nairobi Annual Calendar
                            </button>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="view-box">
                            <button
                              className="btn-main"
                              onClick={() => handleModalShow(eldoretPdfUrl)}
                            >
                              View Eldoret Annual Calendar
                            </button>
                          </div>
                        </div>
                      </div>
                      {showModal && (
                        <PdfModal
                          show={showModal}
                          hide={handleModalClose}
                          pdfUrl={selectedPdfUrl}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default SupportGroups;

export const getStaticProps = async () => {
  const supportGroup = await fetchSupportGroup();

  return {
    props: {
      supportGroup,
    },
  };
};
