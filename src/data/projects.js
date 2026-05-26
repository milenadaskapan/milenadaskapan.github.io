import portfolioimage from '../images/portfolioimage.png'
import researchimage from '../images/researchimage.png'
import unimapsimage from '../images/unimapsimage.png'
import shapeimage from '../images/shapeimage.jpeg'
import naivebayesimage from '../images/naivebayesimage.png'
import imageappimage from '../images/imageappimage.png'
import decisiontreeimage from '../images/decisiontreeimage.png'
import fourrowimage from '../images/fourrowimage.png'
import histologyimage from '../images/histologyimage.jpg'

export default [
{
  id: 1,
  title: "HistoncologyGPT",
  categories: ["ai", "software", "featured"],
  description: "Developing an AI-powered web application for cancer detection using deep learning on histopathology images. This project is ongoing and has not been deployed for public use yet.",
  image: histologyimage,
  stack: [
    "Machine Learning",
    "Python",
    "TensorFlow",
    "Keras",
    "CNN",
    "FastAPI",
    "SQLite",
    "AWS",
    "Grad-CAM",
    "Backend",
    "Git"
  ],
  longDesc: "HistoncologyGPT is an AI-driven web application designed to assist in cancer diagnosis by analysing histopathology slide images. The model is trained on the Camelyon16 dataset to detect tumour regions using a convolutional neural network (CNN) built with TensorFlow and Keras. To improve transparency and trust in predictions, Grad-CAM visualisations are implemented to highlight salient regions influencing the model’s decisions. The system is integrated into a full-stack application, with a FastAPI backend handling model inference and data processing, and a SQLite database for storing results.",
  overview: ["Personal Project", "Collaborative", "Agile Development"]
},
{
  id: 2,
  title: "Website Portfolio",
  categories: ["software"],
  description: "Developed and designed an interactive React portfolio website with an icy-wonderland theme to showcase projects in AI, software, and research.",
  image: portfolioimage,
  stack: ["React.js", "Frontend", "JavaScript", "HTML", "CSS", "Git", "VSCode"],
  longDesc: "A responsive web application built to showcase my technical skills, projects, and experience in a structured and engaging way. The site features a custom icy-wonderland theme with interactive UI elements, including a guided navigation experience, animated typing effects, and category-based project filtering. Projects are dynamically rendered from a central data file, allowing for scalable updates and clean code organization. ",
  overview: ["Personal Project", "Individual", "Iterative"]
},
{
  id: 3,
  title: "Normalising Honeycomb-Structured Phylogenetic Networks",
  categories: ["research", "featured"],
  description: "Conducted supervised research in computational biology, developing a formal inductive proof for the normalisation of honeycomb-structured phylogenetic networks.",
  image: researchimage,
  stack: [
    "Computational Biology",
    "Graph Theory",
    "Phylogenetics",
    "Mathematical Proofs",
    "Research",
    "Academic Writing",
    "Inductive Proof",
    "Computational Mathematics"
  ],
  longDesc: "This research project was completed under the supervision of Associate Professor Simone Linz and builds upon the peer-reviewed paper 'Normalising Phylogenetic Networks' by Francis, Huson, and Steel. The work focuses on analysing and extending the theory of phylogenetic network normalisation, specifically within honeycomb-structured networks. A formal mathematical inductive proof was developed to demonstrate the normalisation properties of this structure. The project involved deep engagement with computational biology concepts, graph theory, and rigorous mathematical reasoning. The resulting paper contributes to ongoing research in phylogenetics and is available on my portfolio website.",
  overview: ["Research Project", "Collaborated with Supervisor", "Supervised"],
  link: "https://www.linkedin.com/in/milena-daskapan/overlay/Project/2041899065/treasury/?profileId=ACoAAC2LqZkBrq227iym9e9pxYVQdMH3SgyezgI"
},
{
  id: 4,
  title: "UniMaps",
  categories: ["software", "featured"],
  description: "Developed the frontend of a cross-platform mobile app for interactive campus navigation using React Native and Mapbox.",
  image: unimapsimage,
  stack: [
    "React Native",
    "Frontend",
    "Mobile Development",
    "Mapbox",
    "UI/UX",
    "Agile",
    "Git",
    "Jira"
  ],
  longDesc: "This project involved contributing to the development of a cross-platform mobile application designed to help students, staff, and visitors navigate the University of Auckland campus. My primary responsibility was frontend development using React Native, where I implemented interactive map features and user interface components using Mapbox. I focused on creating a responsive and intuitive user experience for navigation and location-based interaction. The project was developed in an Agile team environment, using Jira for sprint planning and Git for version control and collaboration. This experience strengthened my skills in mobile UI development, working with mapping APIs, and collaborating within an Agile team workflow.",
  overview: ["Academic Project", "Collaborative", "Agile Development"],
  link: "https://github.com/uoa-compsci399-s2-2024/capstone-project-418-i-m-a-teapot"
},
{
  id: 5,
  title: "Naive Bayes Classifier: Implementation & Optimisation",
  categories: ["ai", "featured"],
  description: "Implemented a Naive Bayes classifier from scratch in Python, achieving 98% accuracy and evaluating the impact of data cleaning on model performance.",
  image: naivebayesimage,
  stack: [
    "Machine Learning",
    "Pandas",
    "Numpy",
    "Scikit-learn",
    "Python",
    "Naive Bayes",
    "Data Preprocessing",
    "Cross-Validation",
    "Model Evaluation"
  ],
  longDesc: "This project involved implementing a standard Naive Bayes classifier from scratch implemented in Python leveraging Pandas for data manipulation and NumPy for numerical computation as well as scikit-learn. The model was built without relying on high-level machine learning libraries. The model was trained and evaluated using cross-validation to ensure robust performance assessment. A custom data cleaning function was developed to analyse how preprocessing affects model accuracy, allowing for comparison between raw and cleaned datasets. The final model achieved an accuracy of 98%.",
  overview: ["Academic Project", "Individual", "Iterative"],
  link: "https://github.com/milenadaskapan/Standard-Naive-Bayes-Classifier"
},
{
  id: 6,
  title: "Image Search App",
  categories: ["software", "featured"],
  description: "Built an image search web application using the Pexels API, allowing users to retrieve high-quality images based on search queries. The frontend was built using Vue.js whereas the backend was built using Laravel (PHP).",
  image: imageappimage,
  stack: [
    "JavaScript",
    "Vue.js",
    "Laravel",
    "PHP",
    "API Integration",
    "Backend",
    "Frontend",
    "Full-Stack",
    "HTTP Requests",
    "HTML",
    "API Requests",
    "REST APIs",
    "CSS",
    "Git"
  ],
  longDesc: "This project involved building a responsive image search application that integrates the Pexels API to retrieve high-quality images based on user input. The frontend was developed using Vue.js (JavaScript), where users can enter search queries and dynamically view results in a clean, grid-based layout. The backend was developed using Laravel (PHP). The application handles asynchronous API requests, loading states, and user interactions to provide a smooth search experience as well as optimising the loading time using caching.",
  overview: ["Personal Project", "Individual", "Iterative"],
  link: "https://github.com/milenadaskapan/image-search-app"
},
{
  id: 7,
  title: "Decision Tree Classifier",
  categories: ["ai", "featured"],
  description: "Implemented a decision tree classifier from scratch using entropy and information gain, trained on the UCI Mushroom dataset.",
  image: decisiontreeimage,
  stack: [
    "Python",
    "Pandas",
    "NumPy",
    "Machine Learning",
    "Decision Tree",
    "Information Gain",
    "Entropy",
    "Data Preprocessing",
    "Model Implementation"
  ],
  longDesc: "Implemented a decision tree classifier from scratch in Python using entropy and information gain for recursive splitting. The model was implemented in Python with the use of Pandas and Numpy for data preprocessing. Trained and evaluated on the UCI Mushroom dataset, achieving 100% accuracy at depth level 4.",
  overview: ["Academic Project", "Individual", "Iterative"],
  link: "https://github.com/milenadaskapan/Decision-Tree-Classifier-using-Entropy-Calculations"
},
{
  id: 8,
  title: "Interactive Shape Animator",
  categories: ["software"],
  description: "Developed an interactive GUI application in Java for creating, modifying, and animating shapes.",
  image: shapeimage,
  stack: [
    "Java",
    "Object Oriented Programming",
    "GUI Development",
    "Event Handling"
  ],
  longDesc: "Implemented an interactive shape animator in Java using object-oriented programming principles. The application allows users to create and delete shapes, modify border and fill colours, and define movement behaviour. It supports nested shapes and user-driven animation control through a graphical user interface.",
  overview: ["Academic Project", "Individual", "Iterative"],
  link: "https://github.com/milenadaskapan/Interactive-Shape-Animator-"
},
{
  id: 9,
  title: "Extended Four-in-a-Row Game",
  categories: ["software"],
  description: "Developed a configurable Four-in-a-Row game in Python with an AI opponent and extended scoring system.",
  image: fourrowimage,
  stack: [
    "Python",
    "OOP",
    "Game Development",
    "Algorithms",
    "AI (Heuristic-Based)"
  ],
  longDesc: "Implemented an extended version of the Four-in-a-Row game in Python using object-oriented design. The game supports configurable board sizes (up to 8 columns) and includes a custom scoring system based on multiple directional matches (horizontal, vertical, and diagonal). An AI opponent was developed using a heuristic-based approach, selecting moves that maximise immediate point gain or minimise the opponent’s potential score. The implementation includes game state management, move validation, and dynamic board rendering.",
  overview: ["Personal Project", "Python", "Game Logic"],
  link: "https://github.com/milenadaskapan/Extended-4-In-a-Row-Game"
}
]