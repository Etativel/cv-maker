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

const alexSmith = {
  personal: {
    name: "Alex Smith",
    number: "123 456 789",
    email: "alexsmith@gmail.com",
    linkedin: "linkedin.com/in/alex",
    github: "github.com/alexsmith",
  },
  education: [
    {
      school: "University of California",
      degree: "Bachelor of Science in Software Engineering",
      eduCity: "Los Angeles",
      eduCountry: "CA",
      eduStartDate: "2015-09-01",
      eduEndDate: "2019-06-01",
      eduDetails: [
        "Focus on full-stack web development with emphasis on JavaScript frameworks like React and Node.js.",
        "Completed a capstone project that developed a fully functioning e-commerce platform using MERN stack (MongoDB, Express.js, React, Node.js).",
        "Studied software engineering methodologies, including Agile and Scrum frameworks, used for collaborative and iterative development processes.",
        "Engaged in hands-on coding bootcamps that contributed to rapid project delivery and high-quality code under tight deadlines.",
      ],
    },
    {
      school: "City College of San Francisco",
      degree: "Associate’s in Computer Science",
      eduCity: "San Francisco",
      eduCountry: "CA",
      eduStartDate: "2013-09-01",
      eduEndDate: "2015-06-01",
      eduDetails: [
        "Fundamentals of computer science with a focus on problem-solving using algorithms and data structures.",
        "Learned basic web development with HTML, CSS, and JavaScript, alongside introductory courses on databases and backend technologies.",
        "Engaged in several group projects, gaining exposure to collaborative software development practices, such as version control with Git.",
      ],
    },
  ],
  experience: [
    {
      position: "Software Developer",
      company: "Tech Solutions Inc.",
      experienceDetails: [
        "Designed and built a cloud-based inventory management system using Node.js, MongoDB, and Express.js, significantly improving operational efficiency.",
        "Collaborated with cross-functional teams to define system requirements and implement new features that increased user engagement by 30%.",
        "Developed a RESTful API and integrated it with third-party services such as payment gateways and email notification systems.",
        "Optimized backend performance, reducing query response time by 20% through better indexing and caching strategies.",
      ],
      experienceStartDate: "2019-07-01",
      experienceEndDate: "2024-11-13",
      companyCountry: "San Francisco",
      companyCity: "CA",
    },
    {
      position: "Junior Web Developer",
      company: "Creative Agency",
      experienceDetails: [
        "Built and maintained dynamic websites using WordPress and custom themes, ensuring they met clients’ needs and followed best SEO practices.",
        "Worked closely with clients to define their vision, translating requirements into responsive and accessible web solutions.",
        "Optimized websites for mobile use, ensuring that they provided a smooth experience across devices and screen sizes.",
        "Implemented best practices for website performance, reducing page load times by 40% using lazy loading, image compression, and code splitting.",
      ],
      experienceStartDate: "2017-06-01",
      experienceEndDate: "2019-06-30",
      companyCountry: "San Francisco",
      companyCity: "CA",
    },
  ],
  projects: [
    {
      projectName: "Task Tracker",
      projectStack: "React, Node.js, Express, MongoDB",
      projectDetails: [
        "Developed a task management app that tracks team progress and deadlines, enabling teams to collaborate efficiently.",
        "Implemented secure user authentication using JWT tokens, allowing users to safely log in and access their tasks.",
        "Used React for the front-end and Express with MongoDB for the backend, creating a seamless user experience with real-time updates.",
        "Implemented full CRUD functionality to manage tasks, enabling users to create, edit, delete, and mark tasks as completed.",
      ],
      projectStartDate: "2020-01-01",
      projectEndDate: "2021-12-01",
    },
    {
      projectName: "Weather App",
      projectStack: "JavaScript, HTML, CSS, OpenWeatherMap API",
      projectDetails: [
        "Built a simple weather app that allows users to check the weather forecast for any city worldwide.",
        "Integrated OpenWeatherMap API to fetch real-time weather data, including temperature, humidity, and wind speed.",
        "Implemented error handling and validation for user input, including city names and incorrect API keys, to ensure a smooth user experience.",
        "Created a responsive UI using CSS, ensuring the app worked seamlessly across desktop and mobile devices.",
      ],
      projectStartDate: "2018-06-01",
      projectEndDate: "2018-09-01",
    },
  ],
  skills: [
    {
      skillName: "Languages",
      skillDetails:
        "JavaScript, Python, C#, SQL (MySQL, MongoDB), TypeScript, HTML/CSS",
    },
    {
      skillName: "Frameworks",
      skillDetails:
        "React, Express, Node.js, Angular, .NET Core, Flask, Django",
    },
    {
      skillName: "Developer Tools",
      skillDetails:
        "Git, Docker, Jenkins, VS Code, IntelliJ IDEA, Postman, AWS",
    },
    {
      skillName: "Libraries",
      skillDetails: "jQuery, Axios, Bootstrap, Material-UI",
    },
  ],
};

export { jakeRyan, alexSmith };
