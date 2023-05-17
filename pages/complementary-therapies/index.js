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
export const getStaticProps = async () => {
  const therapies = await fetchTherapy();

  return {
    props: {
      therapies,
    }
  }
}

const panels = [
    {
      label: "Zumba",
      content: "Zumba is a dance fitness program that involves exercise with dance and aerobics. It is a fun way to tone up, relieve stress, improve mood and to boost your metabolism which allows the body to better fight cancer cells. The choreography incorporates hip-hop, soca, samba, salsa, merengue, and mambo. Squats and lunges are also included."    },
    {
      label: "Nutritional Therapy",
      content: "Cultivating a healthy mind, body and spirit requires nourishment from wholesome foods and removing or reducing harmful foods. Food is 'fuel' for the cell, and with the wrong types of fuels, the body cannot function at its best. As well as healthy food habits, nutritional therapy at Faraja also teaches effective breathing and positive thinking, two other essential forms of 'food' needed to fight any disease. Good nutrition boosts energy and builds immunity to disease by increasing the alkalinity of the body (remember, cancer flourishes in acidic environments) and cleansing the body. Eating the right foods before, during and after treatment can help the patient stay strong and heal quicker. Unfortunately for many patients, the side-effects of cancer and treatment, such as nausea, constipation, mouth sores and anxiety, make eating anything at all a challenge."
    },
    {
      label: "Breathwork",
      content:
        'This is based on meditation practices, which uses breathing techniques to achieve mental clarity and a heightened state of mind, allowing the expulsion of negative energies. These negative energies are often thought to contribute significantly to chronic and degenerative illnesses such as cancer. Cancer cells flourish in deoxygenated environments. Breathwork, therefore, teaches various breathing techniques to expand and exploit lung capacity to its full potential and fill the body\'s cells with oxygen. A typical session at Faraja last forty-five minutes.'
    },
    {
      label: "Movement",
      content:
        'Movement classes at Faraja are largely based on yoga practice. Yoga refers to the union between mind, body and spirit. In a non-religious context, it is used as a form of meditation, low impact exercise and complementary therapy. It is thought to stimulate the flow of life energy through the adoption of specific poses, synchronized with breathing. This stimulates the endocrine glands and enhances immunity, flexibility, balance and grace. Yoga aims to promote feelings of physical, emotional and spiritual wellness, assisting individuals, not least cancer patients, to redirect their lives and encourage healing. This often helps patients counter the negative side effects of cancer treatment. At Faraja, movement classes aim to help the patient achieve and maintain physical fitness, as well as gain peace and relaxation. Classes are offered three times a week by three different instructors.',
    },
    {
      label: "Lymphatic Drainage",
      content:
        "Lymphatic drainage uses massage to move fluids and maintain flows throughout the lymphatic system - a complex network of vessels and ducts that runs through the body. This helps to move toxins away from healthy cells and carry germ-fighting materials to sick cells. It removes negative emotions and pain-inducing chemicals and hormones that collect in problem areas of the body. It is particularly useful in dealing with conditions such as acute swelling around an injury site and chronic edema, particularly common with breast cancer patients who have had their lymph nodes removed. The functioning of the immune system, which is intimately associated with the lymphatic system, is also improved. The Veltheim Method of Lymphatic Drainage combines Body Talk practice with lymphatic drainage. Body Talk is a holistic therapy that balances the body's energy system by reconnecting lines of communication between each system, cell and atom of the body. This helps the internal mechanisms to function optimally, preventing and healing diseases and restoring emotional and mental well-being. Through asking the body a series of yes/no questions, the body guides the practitioner to where the imbalances are. At Faraja, patients are encouraged to repeat the lymphatic drainage until they see significant positive effects. A typical session last about an hour. Lymphatic drainage is offered for free twice a week",
    },
    {
        label: "Reiki",
        content:"Reiki is a simple, natural Japanese technique for stress reduction, relaxation and healing. Through the practitioner laying hands on or just above the recipient's body, energy blockages (caused by poor diet, negative thoughts etc.) in the body's energy channels are removed and energy balance and harmony are restored or maintained. Reiki is not a belief system and does not have basis in a particular religion. It has been effective in helping virtually every known illness, from a common cold, to depression, to cancer. \n For cancer patients, it works alongside other medical or therapeutic techniques to relieve side effects of the disease and treatment and promote recovery. At the very least, Reiki is an effective stress-buster; this provides significant knock-on effects given that an overwhelming number of our problems are stress-related. At Faraja, Reiki is usually performed in group healing sessions, in which two to five practitioners perform the therapy on a client. Sessions last between 20 to 45 minutes (depending on how many practitioners are working together). Therapists advise patients on how many sessions would be beneficial, depending on their needs." 
    },
    {
        label: "Counselling ",
        content: "Cancer is a journey, the trajectory of which usually involves anxiety, hopelessness, anger and feelings of loneliness. Patients and their loved ones struggle with the loss of normalcy, financial strain, physical vulnerability and fears of death. The conventional medical sector is mostly focused on treating the disease; often the psychological concerns are not adequately addressed. Friends and family of patients are usually willing to help but unable to understand the fears faced by the patient and therefore unable to provide the appropriate support and guidance. Counselling aims to help the patient and/or their carers make practical, emotional and spiritual adjustments to improve their quality of life. The counsellor gently encourages the patient or carer to talk about their emotions and concerns and offers professional emotional and practical support and direction to the client. At Faraja, qualified counsellors see patients either one-on-one or with their careers. Sessions usually last for forty-five minutes upwards and are followed up with further sessions with the same counsellor the following week if needed."
    },
    {
        label: "Diversional Therapy",
        content:"Knitting and crotcheting helps to relieve stress and boredom, promote emotional and physical health build social connections and discover new passions"
    },
    {
        label: "Scar Tissue & Emmett Technique",
        content:"The EMMETT Technique is a unique form of body relaxation therapy, involving the application of light finger pressure at specific points. It is used to ease pain and discomfort, increase movement and improve quality of life. It can relieve Neck and shoulder restriction and referred discomfort, migraines, cluster headaches, abdominal cramps and bowel discomfort, persistent heel and foot pain, headaches, sinus congestion, lymphatic congestion and breathing, back and hip discomfort, knee and ankle restriction, fluid retention etc. \n The Scar Tissue release technique is a gentle and natural way to help scar tissue rapidly return to a more normal state. It uses gentle pressure moves with fingertips to gently free the restrictions in the scar tissue. Examples of scars that may hold emotional trauma: C-Section (emergency or planned), hysterectomy, mastectomy, amputations, knife/bullet wounds, burns, scars from self-harm etc. Mostly 3 sessions are enough to notice the change. In some cases more sessions may be needed. The scar has to be more than 5 months old and completed your treatment 3 months ago"
    },
    {
        label: "Neuro-Linguistic Programming (NLP)",
        content: "is a psychological approach that aims to help individuals improve their communication, behavior, and personal development. NLP involves the study of the relationship between language, behavior, and the mind. It proposes that the way individuals use language reflects their internal thought processes and that by understanding these patterns, individuals can change their thoughts, behaviors, and beliefs to achieve their desired outcomes. NLP techniques include modelling successful behaviors and thought patterns, reframing negative experiences, anchoring positive emotions to specific triggers, and using language patterns to influence others' thoughts and behavior. "
    },
  ];