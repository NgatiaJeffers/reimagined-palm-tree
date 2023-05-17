export const MENU_LIST = [
    { 
      title: "Home", 
      url: "/" 
    },
    { 
      title: "Our Story", 
      subMenu:  [
        {
          name: "About",
          subItems: [
            {
              title: "Our Mission",
              url: "/about",
              description: "Our mission is to make the world a better place for everyone."
            },
            {
              title: "Our Vision",
              url: "/about",
              description: "A safe haven accessible to anyone affected by cancer."
            },
            {
              title: "Meet The Team",
              url: "/about",
              description: "Get a glimpse of our able team and staff."
            },
            {
              title: "Annual Reports",
              url: "/about/annual-reports",
              description: "Our annual reports show how, with your support, we have achieved our strategic objectives of giving hope."
            }
          ],
        },
        {
          name: "Our Services",
          subItems: [
            {
              title: "Complementary Therapies",
              url: "/complementary-therapies",
              description: "Complementary therapies are used to help cancer patients manage symptoms, reduce side effects and restore a sense of control and vitality."
            },
            {
              title: "Support Groups",
              url: "/support-groups",
              description: "We conduct hybrid support groups for patients and caregivers to share experiences, peer learning, and also the benefit of information on such issues"
            },
            {
              title: "Crafts for Cure",
              url: "/crafts-for-cure",
              description: "This is an outreach therapy program of art, crafts and music therapy that we carry out at Kenyatta National Hospital (KNH) and at the Moi Teaching and Referral Hospital (MTRH) at the Children’s Oncology Wards"
            },
            {
              title: "Faraja Medical Support Fund",
              url: "/faraja-medical-support-fund",
              description: "At inception, Faraja’s main mandate was to provide information and complementary therapies to support patients as they went through their chemotherapy and radiotherapy treatments."
            }
          ],
        },
      ]
    },
    {
      title: "Events",
      url: "/events",
    },
    {
      title: "What's Happening",
      url: "/whats-happening",
    },
    {
      title: "Support Us",
      url: "/support-us",
    },
    {
      title: "Contact Us",
      url: "/contact-us",
    }
  ]
