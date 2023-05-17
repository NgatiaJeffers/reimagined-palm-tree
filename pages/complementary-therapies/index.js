import React, { Fragment } from 'react'
import BreadCrumb from '../../components/atoms/Breadcrumb'
import Accordion from '../../components/atoms/Accordion';

// API CALLS
import { fetchTherapy } from '../../util/fetchTherapy';

const Therapy = (props) => {
  const { therapies } = props;
  return (
    <Fragment>
      <BreadCrumb title={"Complementary therapies"} />
      <section className="wide-tb-100"></section>
      <section className="wide-tb-100 pt-0 mb-spacer-md therapy-area">
        <div className="container">
          <div className="justiy-content-center">
            <div className="col-md-12">
              <div className="therapy-wrap">
                <div className="bg-overlay blue opacity-80"></div>
                <div className="row">
                  <div className="col-12 col-lg-6 col-md-12">
                    <h1 className="heading-main">Complementary therapies</h1>
                    <p>
                      Faraja offers a wide range of complementary therapies that
                      promote both physical and spiritual well-being of cancer
                      patients and their families.The main aim of these
                      Therapeutic processes is to release the body's
                      recuperative and restorative processes which helps in
                      alleviating pain, preventing ill health and optimizing
                      well-being of patients. These therapies are scientifically
                      proven with in-depth research on their effect on patients
                      recovery process.
                    </p>
                  </div>
                  <div className='col-12 col-lg-6 col-md-12'>
                    <Accordion panels={therapies} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Therapy;

// Backend call for server side data
export const getServerSideProps = async () => {
  const therapies = await fetchTherapy();

  return {
    props: {
      therapies,
    }
  }
}
