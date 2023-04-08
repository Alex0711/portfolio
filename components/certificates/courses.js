const COURSES = {
  frontend: [
    {
      title: "Next professional course",
      id: "1NsleLQ_4lHzq4WLAcd6mxwrryLF-Y_sM",
      repo: "https://github.com/Alex0711/Next-Tailwind",
      description:
        "Built e-commerce product dashboard in Next.js during course",
    },
    {
      title: "Next course",
      id: "1Zk-66JG8cQD5F1yZxvsqp-R9xD4Uyy1g",
      repo: "https://github.com/Alex0711/NextShop",
      description:
        "Migrated React codebase to Next.js for improved performance and SEO capabilities",
    },
    {
      title: "Transformations and Transitions Course",
      id: "1Nb3cROI9l9rMOe6hEgVnXYUrd7OfjX-c",
      repo: "",
      description:
        "Completed course on Transformations and Transitions in CSS: I learned to create dynamic animations and visual effects on my website using CSS.",
    },
    {
      title: "WebPack course",
      id: "1FntCiNOrJsF6IWdjwgtzuDfzux4wSr_W",
      repo: "https://github.com/Alex0711/LearningWebpack",
      description:
        "Learned to customize and utilize Webpack functions for web development purposes.",
    },
    {
      title: "Basic JavaScript Course",
      id: "1yzOM2Jz66t_XW3LqLdEjgVdJ48Qr_QsA",
      repo: "",
      description: "",
    },
    {
      title: "Practical Frontend Developer Course",
      id: "1AvPtOwzYrSuOLnHhQdKMMMS83_u1rlF1",
      repo: "",
      description: "",
    },
    {
      title: "Frontend Developer Course",
      id: "1ytv5gpenDOsR1fNw4Yh_X8gkrx9bFP71",
      repo: "",
      description: "",
    },
    {
      title: "Definitive HTML and CSS Course",
      id: "1sjwGbhZnUWQqA6Tiyy9yMX2kazN99Yyc",
      repo: "",
      description: "",
    },
    {
      title: "Practical JavaScript Course",
      id: "1Z2yQ3M1bEtaKLU4ZWSkpHfIq67J2duXG",
      repo: "",
      description: "",
    },
    {
      title: "Practical JavaScript Workshop: Create Your First Video Game",
      id: "10eWkgedYgLSj2AIhi4Id8wb68KHJQVrh",
      repo: "https://github.com/Alex0711/taller-pr-ctico-canvas-",
      description:
        "In the JavaScript practical, I learned the importance of using relative measures to ensure a consistent user experience across different devices and resolutions, as well as how to create interactive video games using the Canvas element.",
    },
    {
      title: "Practical JavaScript Course",
      id: "1m4zs2pfH9J7TGYDelty2uNTJYhfp37OU",
      repo: "",
      description: "",
    },
    {
      title: "Practical React.js Course",
      id: "1Bhcm9SU2sxohrth-SJe9F8LxRVG357qh",
      repo: "https://github.com/Alex0711/ReactShop",
      description:
        "We created a product catalog and a functional shopping cart for an online store",
    },
  ],
  backend: [
    {
      title: "Algorithmic Complexity Course with Python",
      id: "1rws-EEGefze2_8OzJIIGd4RrFhODVi_B",
      repo: "",
      description:
        "Python course aimed at improving the efficiency and scalability of algorithms through advanced techniques and algorithmic complexity theory.",
    },
    {
      title: "Node.js Backend Course: PostgreSQL Database",
      id: "1MSswAaKYqHfE-wJtsHmLuiQkrtowJyPD",
      repo: "https://github.com/Alex0711/Store.express.js",
      description:
        "I learned how to build a scalable web application using Express.js and how to implement a relational database within Docker, including creating tables, queries, and table relationships using Sequelize.",
    },
    {
      title: "Backend Course with Node.js: REST API with Express.js",
      id: "1jW52h-aeuWIN3CzSYbMFmAIRNg6BJhp-",
      repo: "https://github.com/Alex0711/Store.express.js",
      description:
        "I learned how to design and implement RESTful APIs, handle HTTP requests and responses, implement CRUD operations, and use middleware for error handling.",
    },
    {
      title:
        "Backend Course with Node.js: Authentication with passport.js and JWT",
      id: "19JZNAjfPlNFZBqkAhkt_oVkzxT03q3L6",
      repo: "https://github.com/Alex0711/Store.express.js",
      description:
        "I learned how to implement authentication and authorization in a Node.js application using Passport.js and JSON Web Tokens (JWT), how to handle user registration, how to hash passwords in the database, and how to implement login functionality.",
    },
    {
      title: "Foundations of Databases Course",
      id: "1HTn9Uuci9NUzwFcBfIOU9PYKAL2WzKhf",
      repo: "",
      description:
        "I learned the basic concepts of databases, such as data structure, normalization, relationships between tables, data types, basic queries, and data security. I also learned how to design and create databases using SQL.",
    },
    {
      title:
        "Intermediate Django Course: Testing, Static Files, and Django Admin",
      id: "1jJf8qeCvXBFC9BQHh55IwBEOuxdalsmY",
      repo: "https://github.com/Alex0711/Store-Django",
      description:
        "I learned how to write automated tests to ensure the proper functioning of my Django application, how to handle and serve static files, and how to customize and manage the Django admin panel for my web application. I also learned best practices for web development and how to apply them in my Django project.",
    },
    {
      title: "Basic Django Course",
      id: "1TSA0k-76t8qTlyEWbIwZwHkSKbTjArJW",
      repo: "",
      description:
        "I learned how to work with data models, the interactive console, Django's admin panel, views, forms, and generic views.",
    },
    {
      title: "Linear Data Structures Course with Python",
      id: "15Wj87DxlkNKpparfcw0RZkvLl0GFUTtx",
      repo: "",
      description:
        "I learned how to implement and work with data structures such as lists, stacks, queues, and trees, using object-oriented programming techniques and search and sorting algorithms.",
    },
    {
      title: "FastAPI Course: Modularity, Advanced Data, and Errors",
      id: "1xuOnz93-hMnvLd5ZlySSidyzr5ZmGEwI",
      repo: "",
      description:
        "I learned how to use the FastAPI framework to create a scalable and modularized web API in Python, how to work with advanced data, and how to handle and customize errors for a better user experience.",
    },
    {
      title: "FastAPI Course: Fundamentals, Path Operations, and Validations",
      id: "1o1Zkd7lbskC1nP9Pe1CLj18O1XEV6Hca",
      repo: "",
      description:
        "I learned how to use FastAPI framework to create scalable and modularized web APIs in Python, and how to handle path operations and data validations.",
    },
    {
      title: "Foundations of Node.js Course",
      id: "1rvx0Z1ogjxKW1Qcyw93d3xFx2RKNkq54",
      repo: "",
      description:
        "I learned the basics of Node.js, such as its event-driven and non-blocking I/O model, how to create and use modules in Node.js, work with the file system, make HTTP requests, and use Node.js's process API. I also learned how to use the npm package manager.",
    },
    {
      title: "Introduction to Selenium with Python Course",
      id: "1To3NvO8SnT7NYtAk1CIeqisFNhNUOyWh",
      repo: "",
      description:
        "I learned to automate web navigation tests using Selenium WebDriver in Python, how to interact with elements of a web page, handle pop-up windows, and take screenshots and generate automated reports.",
    },
    {
      title: "JavaScript Closures and Scope Course",
      id: "1ivH2qnp2g62mEd2KP_sX_vydHeiipA0a",
      repo: "",
      description:
        "I learned the concepts of closures and scope in JavaScript, how they work, and how they can be used to create private variables and protect code. I also learned about lexical scope and the difference between var, let, and const.",
    },
    {
      title: "Intermediate Object-Oriented Programming Course with JavaScript",
      id: "1XM9aTCOHBY46TvK02l0GUh3rKASIxJ76",
      repo: "",
      description:
        "I learned how to create classes, instantiate objects, and use inheritance, polymorphism, and encapsulation in JavaScript. I also learned about using static methods and properties.",
    },
    {
      title: "Basic Object-Oriented Programming Course with JavaScript",
      id: "1Nwc4S2KTpthHwzApi6_pTp8qoxc9Vine",
      repo: "",
      description:
        "Learned about objects, classes, and prototypes, as well as the four pillars of OOP: abstraction, encapsulation, inheritance, and polymorphism.",
    },
    {
      title: "Object-Oriented Programming Course",
      id: "12AbJqZF1gYtFVpvPjetkNyk9dGb8d_YL",
      repo: "",
      description:
        "I learned about the fundamentals of Object-Oriented Programming and this new paradigm in programming.",
    },
    {
      title: "Basic Python Course",
      id: "1ChPFxJAhUsHoPNkmKXOh_iTByrq31Mfl",
      repo: "",
      description:
        "I learned the basics of Python programming language including variables, data types, control structures, functions, file I/O, and modules.",
    },
    {
      title: "Practical Python Course: Creating a CRUD",
      id: "1dJOl93-XSUaWCI0jg5Yqt2_N8k9SPCv8",
      repo: "",
      description:
        "I learned about the use of strings and loops, data structures, and how to work with objects and modules.",
    },
  ],
  others: [
    {
      title: "Introduction to Terminal and Command Line Course",
      id: "1f_lsCyxaNHCkbIxkKjLpMucbeccJq7iZ",
      repo: "",
      description: "",
    },
    {
      title: "Professional Git and GitHub Course",
      id: "1lhzdYDO2WfFpo7-DzJroAk2bIjhDL2Gu",
      repo: "",
      description: "",
    },
    {
      title: "Modern Development Workflow Course with CodeStream",
      id: "1oqYSYTxwpSVRAlT-Rb_upiCFUMl84cju",
      repo: "",
      description: "",
    },
  ],
};

export { COURSES };
