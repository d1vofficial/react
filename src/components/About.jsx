import React from "react";
// import { BiCircle } from 'react-icons/bi';


const About = () => {

    const description = [
      {
        id: 1,
        role: "Data Analyst",
        company: "Australia and New Zealand Banking Group (ANZ)",
        timeline: "March 2024 - Present",
        info: [
          {
              id:11,
              content: "Designed and implemented automated workflows using KNIME to streamline data wrangling tasks, enhancing efficiency and accuracy."
          },
          {
              id:12,
              content: "Leveraged generative AI tools, including ChatGPT to discover and gather relevant data related to the organization, significantly speeding up the data collection process."
          },
          {
              id:13,
              content: "Created and managed a comprehensive knowledge graph in Neo4j, including designing schemas, establishing nodes,relationships, and properties, ensuring accurate and up-to-date data representation."
          },
          {
            id:14,
            content: "Tech Stack : Knime, Neo4J, SQL Server, Jira, Confluence"
          }
        ]

      },
        {
          id: 2,
          role: "Associate Consultant",
          company: "ORACLE FINANCIAL SERVICES SOFTWARE LTD.",
          timeline: "Aug 2022 - March 2024",
          info: [
            {
                id:211,
                content: "Implemented customization in the form of microservices following the requirements for various clients including Bandhan Bank, Aavas Financiers and Capri Global Housing Finance Limited"
            },
            {
                id:212,
                content: "Collaborated and communicated with cross-functional teams to ensure seamless integration"
            },
            {
                id:213,
                content: "Developed, tested, and deployed microservices with minimalrework"
            },
            {
              id:214,
              content: "Tech Stack : SpringBoot, JAVA, Oracle DB"
            }
          ]

        },
        {
            id: 2,
            role: " Product Development Intern",
            company: "CONSULTING HUB",
            timeline: "Mar 2022 - Apr 2022 ",
            info: [
                {
                    id:21,
                    content: "Worked on the project “DubTube (A dubbing platform for Youtube)”"
                },
                {
                    id:22,
                    content: "Designed and developed the UserInterface using VueJs framework"
                },
                {
                    id:23,
                    content: "Created a Chrome Extension for ease of access"
                },
                {
                    id:24,
                    content: "Tech Stack : VueJs, Veutify, NPM"
                }
            ]
  
        },
        {
            id: 3,
            role: "I.T. Intern",
            company: "WONDER CEMENT LIMITED",
            timeline: "Nov 2020 - Jan 2021",
            info: [
              {
                  id:31,
                  content: "Worked on the project “Workflow Approvals on Microsoft Teams”"
              },
              {
                  id:32,
                  content: "Implemented an Approval bot for workflow approvals on MS teams."
              },
              {
                  id:33,
                  content: "Reduced the time for approvals by almost 50%"
              },
              {
                  id:34,
                  content: "Tech Stack : Microsoft Power Automate, Adaptive Cardss"
              }
            ]
  
        },
       
      ];

  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Work Experience
          </p>
        </div>

        {/* <p className="text-xl mt-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
          deserunt illum mollitia officiis qui exercitationem perferendis neque
          quasi a recusandae necessitatibus tempora iusto! Blanditiis error
          iste, totam fugiat recusandae rerum laborum perferendis molestiae
          aperiam asperiores nemo. Magni dolor maxime debitis vitae, eaque hic
          ab mollitia voluptatibus, a nostrum eveniet laborum!
        </p>

        

        <br />

        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          pariatur, vel similique sint, nobis aspernatur ut praesentium
          explicabo ipsam aliquid quasi laboriosam et culpa possimus repudiandae
          quisquam ullam maiores ab unde. Fugiat odio mollitia nemo alias.
          Commodi facilis atque nulla vero voluptatem explicabo. Quibusdam,
          magni quo! Eum cupiditate debitis labore.
        </p> */}

        
        <ol class="border-l border-gray-200 dark:border-gray-700 flex-col">  

            {description.map(({ id, role, company, timeline, info }) => (
                <li key={id} class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{timeline}</time>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{role} - {company} </h3>
                    {/* <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p> */}
                    {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
                    <ul class="list-disc">
                    
                    {info.map(({id,content}) => (
                        <li key={id} class="ml-4 mt-2 text-gray-400">
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{content}</p>
                        </li>
                    

                    ))}
                    </ul>
                </li>
                
            ))} 
        </ol>
        <div className="mb-40"></div>

      </div>
    </div>
  );
};

export default About;