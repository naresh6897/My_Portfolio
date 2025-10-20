const experienceList = [
  {
    id: 1,
    role: "Assistant System Engineer",
    company: "Tata Consultancy Services",
    duration: "February 2022 – November 2024",
    responsibilities: [
      "Designed and implemented a secure AWS supply chain data lake integrated with Power BI, enabling centralized data visibility and improving proactive decision-making.",
      "Developed automated data ingestion using AWS Glue for cleaning and transformation; improved data accuracy and reduced manual data preparation time by 20%.",
      "Configured AWS Athena and S3 for complex query execution and optimized analytics workflows for authorized users.",
      "Integrated AWS Lambda and Power BI for real-time dashboard updates; reduced stockouts by 15% through dynamic data-driven insights.",
      "Automated multilingual video content creation using Python and AWS Transcribe; decreased content creation time by 10% and expanded audience reach by 20%."
    ],
    shortdescription:
      "Built cloud-based data pipelines and automation using AWS, Glue, Lambda, and Power BI; improved analytics accuracy and efficiency.",
    logo: require('../../assets/tcs.jpeg')
  },
  {
    id: 2,
    role: "Academic Tutor",
    company: "Self-Employed",
    duration: "June 2017 – May 2021",
    responsibilities: [
      "Tutored high school students in math, science, and English, resulting in a 20% average improvement in academic performance.",
      "Created customized learning plans and established a supportive environment that helped 95% of students achieve consistent grade improvements."
    ],
    shortdescription:
      "Provided personalized tutoring across subjects with proven grade improvements and strong student engagement.",
    logo: require('../../assets/tutoring.jpeg')
  }
];

export default experienceList;
