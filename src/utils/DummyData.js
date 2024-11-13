const jakeRyan = {
  personal: {
    name: "Jake Ryan",
    number: "555 555 555",
    email: "jakeryan@gmail.com",
    linkedin: "linkedin.com/in/jake",
    github: "github.com/Jake",
  },
  education: [
    {
      school: "Southwestern University",
      degree: "Bachelor of Arts in Computer Science, Minor in Business",
      eduCity: "Georgetown",
      eduCountry: "TX",
      eduStartDate: "2014-08-01",
      eduEndDate: "2021-05-01",
    },
    {
      school: "Blinn College",
      degree: "Associate’s in Liberal Arts",
      eduCity: "Bryan",
      eduCountry: "TX",
      eduStartDate: "2014-08-01",
      eduEndDate: "2018-05-01",
    },
  ],
  experience: [
    {
      position: "Undergraduate Research Assistant",
      company: "Texas A&M University",
      experienceDetails: [
        "Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems",
        "Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data",
        "Explored ways to visualize GitHub collaboration in a classroom setting",
      ],
      experienceStartDate: "2020-06-01",
      experienceEndDate: "2024-11-13",
      companyCountry: "College Station",
      companyCity: "TX",
    },
    {
      position: "Information Technology Support Specialist",
      company: "Southwestern University",
      experienceDetails: [
        "Communicate with managers to set up campus computers used on campus",
        "Assess and troubleshoot computer problems brought by students, faculty and staff",
        "Maintain upkeep of computers, classroom equipment, and 200 printers across campus",
      ],
      experienceStartDate: "2018-06-01",
      experienceEndDate: "2024-11-13",
      companyCountry: "Georgetown",
      companyCity: "TX",
    },
    {
      position: "Artificial Intelligence Research Assistant",
      company: "Southwestern University",
      experienceDetails: [
        "Explored methods to generate video game dungeons based off of The Legend of Zelda",
        "ADeveloped a game in Java to test the generated dungeons",
        "Contributed 50K+ lines of code to an established codebase via Git",
        "Conducted a human subject study to determine which video game dungeon generation technique is enjoyable",
        "Wrote an 8-page paper and gave multiple presentations on-campus",
        "Presented virtually to the World Conference on Computational Intelligence",
      ],
      experienceStartDate: "2019-06-01",
      experienceEndDate: "2024-11-13",
      companyCountry: "Georgetown",
      companyCity: "TX",
    },
  ],
  projects: [
    {
      projectName: "Gitlytics",
      projectStack: "Python, Flask, React, PostgreSQL, Docker",
      projectDetails: [
        "Developed a full-stack web application using with Flask serving a REST API with React as the frontend",
        "Implemented GitHub OAuth to get data from user’s repositories",
        "Visualized GitHub data to show collaboration",
        "Used Celery and Redis for asynchronous tasks",
      ],
      projectStartDate: "2020-06-01",
      projectEndDate: "2024-07-01",
    },
    {
      projectName: "Simple Paintball",
      projectStack: "Spigot API, Java, Maven, TravisCI, Git",
      projectDetails: [
        "Developed a Minecraft server plugin to entertain kids during free time for a previous job",
        "Published plugin to websites gaining 2K+ downloads and an average 4.5/5-star review",
        "Implemented continuous delivery using TravisCI to build the plugin upon new a release",
        "Collaborated with Minecraft server administrators to suggest features and get feedback about the plugin",
      ],
      projectStartDate: "2018-05-01",
      projectEndDate: "2020-05-01",
    },
  ],
  skills: [
    {
      skillName: "Languages",
      skillDetails:
        "Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R",
    },
    {
      skillName: "Frameworks",
      skillDetails:
        "React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI",
    },
    {
      skillName: "Developer Tools",
      skillDetails:
        "Git, Docker, TravisCI, Google Cloud Platform, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse",
    },
    {
      skillName: "Libraries",
      skillDetails: "pandas, NumPy, Matplotlib",
    },
  ],
};

const emilyClarke = {
  personal: {
    name: "Emily Clarke",
    number: "123 456 789",
    email: "emilyclarke@example.com",
    linkedin: "linkedin.com/in/emilyclarke",
    github: "github.com/EmilyC",
  },
  education: [
    {
      school: "Stanford University",
      degree: "Bachelor of Science in Computer Engineering",
      eduCity: "Stanford",
      eduCountry: "CA",
      eduStartDate: "2015-09-01",
      eduEndDate: "2019-06-01",
    },
    {
      school: "City College of San Francisco",
      degree: "Associate's in Computer Science",
      eduCity: "San Francisco",
      eduCountry: "CA",
      eduStartDate: "2013-08-01",
      eduEndDate: "2015-05-01",
    },
  ],
  experience: [
    {
      position: "Software Engineer",
      company: "Tech Innovations Inc.",
      experienceDetails: [
        "Developed backend services using Node.js and MongoDB for cloud applications",
        "Collaborated with frontend developers to integrate REST APIs into a user-friendly interface",
        "Designed and implemented an automated testing suite to improve quality assurance",
      ],
      experienceStartDate: "2019-07-01",
      experienceEndDate: "2024-11-13",
      companyCountry: "San Francisco",
      companyCity: "CA",
    },
    {
      position: "Junior Web Developer",
      company: "Web Solutions LLC",
      experienceDetails: [
        "Built responsive websites using HTML, CSS, and JavaScript frameworks",
        "Collaborated on projects using Git for version control and GitHub for project management",
        "Optimized website performance and SEO for client websites",
      ],
      experienceStartDate: "2017-05-01",
      experienceEndDate: "2019-06-01",
      companyCountry: "San Francisco",
      companyCity: "CA",
    },
  ],
  projects: [
    {
      projectName: "WeatherApp",
      projectStack: "React, Node.js, OpenWeatherMap API",
      projectDetails: [
        "Created a weather forecasting app using React and OpenWeatherMap API to fetch real-time data",
        "Implemented state management with Redux to handle user preferences",
        "Deployed the app to Heroku for global access",
      ],
      projectStartDate: "2020-02-01",
      projectEndDate: "2020-12-01",
    },
    {
      projectName: "Portfolio Website",
      projectStack: "HTML, CSS, JavaScript, React",
      projectDetails: [
        "Designed and developed a personal portfolio website to showcase projects and skills",
        "Implemented a contact form using JavaScript and integrated email notifications",
        "Optimized site for mobile-first design using responsive web techniques",
      ],
      projectStartDate: "2018-05-01",
      projectEndDate: "2018-08-01",
    },
  ],
  skills: [
    {
      skillName: "Languages",
      skillDetails:
        "JavaScript, Python, Java, SQL (MySQL), HTML/CSS, TypeScript",
    },
    {
      skillName: "Frameworks",
      skillDetails: "React, Express, Node.js, Angular, Django",
    },
    {
      skillName: "Developer Tools",
      skillDetails: "Git, Docker, GitHub, VS Code, Jenkins, Firebase",
    },
    {
      skillName: "Libraries",
      skillDetails: "jQuery, Bootstrap, Lodash",
    },
  ],
};

export { emilyClarke, jakeRyan };
