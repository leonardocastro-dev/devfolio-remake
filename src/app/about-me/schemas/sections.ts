const sections = {
  // personal section
  intro: `/**
 * I'm a full stack developer who genuinely enjoys both sides of the stack —
 * from building clean, intuitive interfaces to crafting reliable, well-structured
 * APIs with Node.js.
 *
 * I'm all about turning ideas into real products that work, perform well,
 * and make sense to the people using them. Node.js is my comfort zone on the backend,
 * but I'm equally invested in frontend development when it comes to delivering
 * great user experiences.
 *
 * I enjoy solving real-world problems, keeping things simple when possible,
 * and learning every day — especially about system architecture, cloud infrastructure,
 * and finding better ways to ship high-quality software, faster.
 *
 * If you're into building solid products and enjoy good tech conversations,
 * feel free to reach out.
 */`,
  personality: `/**
 * I'm driven by challenges. I have a natural energy that pushes me
 * to be the best in everything I do.
 * I like to stand out not only for what I deliver,
 * but for how I think, shape the environment, and solve problems.
 *
 * I carry a competitiveness that doesn't depend on external rivalry.
 * My competition is with myself. I'm always trying to surpass my own benchmarks,
 * raise my standards, and through this, inspire those around me.
 *
 * There's a constant thirst for evolution within me — and a genuine passion
 * for being recognized for what I do well. This feeling of seeing my potential
 * acknowledged drives me, challenges me, and makes me want to go even further.
 *
 * Collaboration is part of my way of working. I believe in the power of
 * exchanging ideas, active listening, and building together.
 * Great results are born when talents truly combine.
 *
 * I'm curious, proactive, and determined. When I dive into a project,
 * I give it my all. I'm always learning, evolving, and seeking
 * to surprise — others, and especially, myself.
 *
 * I'm ready to take on significant responsibilities. I have attention to detail
 * and a genuine desire to make an impact wherever I am.
 */`,
  ebac: `/**
 *  EBAC - British School of Creative Arts and Technology
 *  Full Stack Python Developer Course -- 2023/03 - 2024/12
 *
 *  Focused on modern web development, covering everything from
 *  frontend with HTML, CSS, JavaScript, React.js, Vue.js, and Bootstrap,
 *  to backend with Python, Django, FastAPI, and REST API integrations.
 *  Emphasis on hands-on projects that simulate real-world scenarios,
 *  including version control with Git/GitHub, automated testing,
 *  and deployment using Docker.
 *  A program designed to develop technical skills and prepare students
 *  for real industry challenges.
 */`,
  harvard: `/**
 *  Harvard University
 *  CS50 - Introduction to Computer Science -- 2025/03 - Present
 *
 *  An entry-level but rigorous course that provides a comprehensive
 *  foundation in computer science and programming principles.
 *  Topics covered include algorithms, data structures, memory management,
 *  abstraction, software engineering, and security.
 *  Hands-on projects developed using languages like C, Python, SQL,
 *  HTML, CSS, and JavaScript, with a strong focus on problem-solving
 *  and computational thinking.
 *  Designed to strengthen logic, algorithmic thinking, and core
 *  software development fundamentals applicable to any technology stack.
 */`,
  fiap: `/**
 *  FIAP - Paulista School of Informatics and Administration
 *  Bachelor's Degree in Computer Engineering — 2024/08 - Paused
 *
 *  Comprehensive undergraduate program covering core areas of
 *  computer engineering, including hardware, software, networks,
 *  and systems design.
 *  Curriculum includes programming, algorithms, data structures,
 *  digital electronics, embedded systems, computer architecture,
 *  and software engineering.
 *  Emphasis on practical labs, projects, and internships to
 *  prepare students for real-world engineering challenges.
 *  Develops strong analytical, problem-solving, and technical skills
 *  essential for a career in computing and technology innovation.
 */`,
  // professional section
  simpleshub: `/**
 * Atibaia/Brazil -- 2024/10 - 2025/03 // On-site
 * Mid-Level - Full-Stack Engineer
 *
 * Contributed to the development of a software platform designed to support
 * accountants by integrating OpenAI technologies for advanced data processing
 * and workflow automation.
 *
 * Developed user interfaces with Vue 2, Sass, and JavaScript, delivering dynamic,
 * responsive, and intuitive user experiences.
 *
 * Implemented data visualization using libraries like Vue Apex Charts, enhancing
 * the platform's analytical capabilities with real-time and highly customizable charts.
 *
 * Promoted scalability and maintainability by designing modular, reusable components,
 * accelerating future development and reducing technical debt.
 *
 * Worked on-site full-time as an independent contractor, collaborating closely
 * with cross-functional teams to meet deadlines and deliver high-quality solutions.
 */`,
  houzewerks: `/**
 * Rotonda/Florida -- 2024/06 - 2025/10 // Remote
 * Mid-Level - Full-Stack Engineer
 *
 * Developed a website to connect service providers with property owners,
 * similar to GetNinjas, using Payload for the backend and modern technologies
 * for the frontend.
 *
 * On the frontend, implemented React Email for email handling, Next.js for
 * application architecture, and Tailwind CSS for responsive and efficient styling.
 *
 * Used React Hook Form for form management and Zustand for state management,
 * improving the application's usability and performance.
 *
 * Adopted Lucide-React for custom icons and Zod for schema-based data validation,
 * ensuring a robust and intuitive user experience.
 *
 * Worked remotely, collaborating with another Brazilian developer as an independent contractor,
 * with a flexible working hours to accommodate the project's needs
 * and time zone differences.
 */`,
  mks: `/**
 * Barueri/Brazil -- 2024/04 - 2024/06 // On-site
 * Junior - Front-End Engineer
 *
 * Developed user interfaces for online casinos using Vite, later migrating
 * to Next.js to enable a more efficient workflow and better integration
 * with React.
 *
 * Initially worked with styled-components, then transitioned to SCSS Modules
 * to improve code scalability and maintainability.
 *
 * Integrated React Query, Axios, and Redux for optimized API communication,
 * state management, and data fetching, resulting in better performance and
 * frontend data handling.
 *
 * Implemented i18n for multi-language support, delivering a localized
 * and personalized experience for users across different regions.
 *
 * Collaborated on the creation and continuous improvement of a casino template,
 * adapting it to client requirements and updating it based on evolving project needs.
 *
 * Worked in a hybrid model (3 days on-site, 2 days remote) as an independent contractor,
 * following a standard 8-hour workday.
 *
 * Operated under the guidance of the Tech Lead, focusing on efficient task
 * execution and providing ongoing support for project improvements.
 */`,
  freelance: `/**
 * Remote -- 2021/01 - Present
 * Full-Stack Engineer
 *
 * Developed and maintained websites using Angular and React with Next.js,
 * delivering responsive, high-performance interfaces tailored to client needs.
 *
 * Built backend services with NestJS and Prisma ORM, leveraging GraphQL
 * to enable flexible data fetching and optimize API performance.
 *
 * Created and customized WordPress plugins and themes using PHP and Java,
 * enhancing functionality and design based on client specifications.
 *
 * Developed mobile applications — primarily for financial purposes —
 * using React Native, with rich data visualizations powered by Victory Native,
 * a widely adopted charting library in corporate environments.
 *
 * Delivered end-to-end solutions, collaborating directly with clients to gather
 * requirements, design architectures, and deploy scalable, production-ready systems.
 *
 * Adapted to a wide range of projects, from content management platforms
 * to custom web and mobile applications, ensuring high code quality,
 * maintainability, and client satisfaction.
 */`,
  frontend: `/**
 * - React: Component-based JavaScript library for building user interfaces.
 * - Next.js: React framework for server-side rendering (SSR), static site generation (SSG), and full-stack capabilities.
 * - Vue.js: Progressive JavaScript framework for building flexible and reactive UIs.
 * - Nuxt: Vue framework for server-side rendering (SSR), static site generation (SSG), and full-stack capabilities.
 * - Astro: Modern static site builder that delivers fast websites by shipping less JavaScript.
 * - Tailwind CSS: Utility-first CSS framework for rapidly building responsive designs.
 * - SCSS Modules: CSS preprocessor with support for modular, scoped styling.
 * - styled-components: CSS-in-JS library for styling React components within JavaScript files.
 * - i18n: Internationalization libraries used to support multiple languages and locales.
 * - React Query: Data-fetching and caching library for React, handling server state seamlessly.
 * - Axios: Promise-based HTTP client for API requests from the frontend.
 * - ReduxJS: Predictable state container for complex global state management in JavaScript apps.
 * - ZustandJS: Lightweight state management library for React, offering a simpler API than Redux.
 * - Pinia: State management library for Vue with a simpler and more intuitive API than Vuex.
 */`,
  backend: `/**
 * - NestJS: Scalable Node.js framework with modular architecture and TypeScript support.
 * - Express: Minimal and fast web framework for Node.js, widely used for HTTP servers.
 * - PostgreSQL: Robust relational database with strong consistency and support for complex queries.
 * - MongoDB: Flexible NoSQL database for document-oriented data.
 * - Firebase: Backend-as-a-Service offering authentication, databases, storage, and serverless functions.
 * - Redis: In-memory key-value store used for caching, rate limiting, and job queues.
 * - Prisma: Type-safe ORM for Node.js and TypeScript with a modern developer experience.
 * - TypeORM: ORM for SQL databases with TypeScript support and flexible patterns.
 * - BullMQ: Redis-based job queue for handling background tasks like emails and payment processing.
 * - Kafka: Distributed event streaming platform for scalable, event-driven architectures.
 * - GraphQL: API query language that enables flexible data fetching.
 * - REST (OpenAPI): Traditional HTTP APIs with structured contracts and documentation.
 * - Docker: Containerization platform for packaging and deploying applications consistently.
 * - OAuth2, JWT, Paseto: Protocols for authentication and secure API authorization.
 */`,
  // hobbies section
  gaming: `/**
 *  I've been passionate about games since childhood. The gaming universe
 *  is not just a form of entertainment but also a constant source of inspiration,
 *  logical thinking, and creativity.
 *
 *  I have a strong preference for RPGs, hack and slash, and metroidvania games.
 *  Genres that combine exploration, character progression, strategic challenges,
 *  and immersive storytelling have always captivated me.
 *
 *  Through gaming, I've developed skills like decision-making, problem-solving,
 *  and persistence — all of which I also apply to my professional life.
 *
 *  Gaming has been part of my life since the early days of consoles,
 *  remaining one of my main hobbies and lifelong passions.
 */`,
  traveling: `/**
 *  I've always been passionate about traveling and the opportunity to explore
 *  new cultures, places, and people. So far, my travels have been focused on
 *  cities and states within Brazil, which has already provided me with
 *  enriching and transformative experiences.
 *
 *  I believe that traveling is not just about learning a new language,
 *  trying different foods, or experiencing local customs, but about understanding
 *  that each place carries an entire culture that shapes how people think, live,
 *  and see the world — from the way they're born to how they connect,
 *  communicate, and build their lives.
 *
 *  My biggest dream is to live traveling the world, precisely to avoid having
 *  a mindset limited to a single reality. I want to connect with different ways
 *  of living and thinking, expanding my worldview.
 *
 *  I have a special desire to take a cruise to visit various destinations,
 *  and also to explore countries I've always dreamed of, such as Greece, France,
 *  Switzerland, Japan, and many others. The pursuit of new cultural, gastronomic,
 *  and historical experiences makes traveling one of my greatest passions and one
 *  of the main goals in my life.
 */`
}

export default sections
