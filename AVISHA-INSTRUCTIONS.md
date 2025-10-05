# 📱 AVISHA'S TASK GUIDE

Hi Avisha! Welcome to the Java Quiz Website project. Here are your 5 tasks to complete today.

## 🚀 Getting Started

### Option 1: GitHub Mobile Web (EASIEST for Mobile)
1. Open GitHub repository on mobile browser
2. Click on the file you want to edit
3. Click the **pencil icon** (✏️) to edit
4. Make your changes
5. Scroll down → Add commit message → Click "Commit changes"

### Option 2: GitHub Codespaces (RECOMMENDED - VS Code in Browser)
1. Go to repository on mobile browser
2. Press the **period key (.)** on keyboard OR change URL from `github.com` to `github.dev`
3. You get full VS Code in browser!
4. Edit files normally
5. Click Source Control icon → Commit & Push

---

## 📋 YOUR 5 TASKS (In Priority Order)

### ✅ TASK 1: Add Quiz Questions for Modules 3-6 (START HERE!)
**Issue:** #1  
**Time:** 2 hours  
**Priority:** 🔴 HIGHEST

#### What to Do:
Add 10 real questions for each of these modules in `quiz.html`:
- Module 3: JDBC (Client & Server Programming)
- Module 4: JavaScript/Servlets
- Module 5: React
- Module 6: Spring Framework

#### Step-by-Step:
1. Open `quiz.html` file
2. Press `Ctrl+F` (or Cmd+F) and search for: `quizQuestions`
3. Scroll to around line 300
4. You'll see modules 0, 1, 2 have questions
5. Modules 3-6 have placeholder questions - REPLACE THEM

#### Question Format (Copy This Exactly):
```javascript
{
3: [
    {
        question: "What does JDBC stand for?",
        options: ["Java Database Connectivity", "Java Data Connection", "Java Direct Communication", "Java Database Connection"],
        correct: 0,
        difficulty: "easy"
    },
    {
        question: "Which package contains JDBC classes?",
        options: ["java.jdbc", "java.sql", "java.database", "java.db"],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "Which JDBC driver type is pure Java driver?",
        options: ["Type 1", "Type 2", "Type 3", "Type 4"],
        correct: 3,
        difficulty: "medium"
    },
    {
        question: "Which method is used to execute SQL SELECT query?",
        options: ["execute()", "executeQuery()", "executeUpdate()", "executeSql()"],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is PreparedStatement used for?",
        options: ["Precompiled SQL", "Dynamic queries", "Batch processing", "All of these"],
        correct: 3,
        difficulty: "medium"
    },
    {
        question: "Which method commits a transaction in JDBC?",
        options: ["commit()", "save()", "execute()", "finish()"],
        correct: 0,
        difficulty: "easy"
    },
    {
        question: "What is ResultSet in JDBC?",
        options: ["Table data", "Query result", "Database cursor", "All of these"],
        correct: 3,
        difficulty: "hard"
    },
    {
        question: "Which JDBC driver connects Java to database via ODBC?",
        options: ["Type 1", "Type 2", "Type 3", "Type 4"],
        correct: 0,
        difficulty: "hard"
    },
    {
        question: "What does executeUpdate() method return?",
        options: ["ResultSet", "Boolean", "Number of rows affected", "Connection"],
        correct: 2,
        difficulty: "medium"
    },
    {
        question: "Which method is used to close database connection?",
        options: ["close()", "end()", "disconnect()", "terminate()"],
        correct: 0,
        difficulty: "easy"
    }
],
4: [
    {
        question: "What is a Servlet in Java?",
        options: ["Server-side component", "Client-side script", "Database driver", "HTML template"],
        correct: 0,
        difficulty: "easy"
    },
    {
        question: "Which method handles GET requests in Servlet?",
        options: ["doGet()", "handleGet()", "processGet()", "serviceGet()"],
        correct: 0,
        difficulty: "easy"
    },
    {
        question: "What does JSP stand for?",
        options: ["Java Server Pages", "JavaScript Pages", "Java Standard Pages", "Java Servlet Pages"],
        correct: 0,
        difficulty: "easy"
    },
    {
        question: "Which object represents HTTP request in Servlet?",
        options: ["HttpServletRequest", "ServletRequest", "RequestObject", "HTTPRequest"],
        correct: 0,
        difficulty: "medium"
    },
    {
        question: "What is the DOM in JavaScript?",
        options: ["Data Object Model", "Document Object Model", "Dynamic Object Model", "Display Object Model"],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "Which method is used to get form data in Servlet?",
        options: ["getParameter()", "getData()", "getForm()", "retrieveData()"],
        correct: 0,
        difficulty: "medium"
    },
    {
        question: "What is session tracking in Servlets?",
        options: ["Tracking user sessions", "Database tracking", "Error tracking", "Performance tracking"],
        correct: 0,
        difficulty: "medium"
    },
    {
        question: "Which HTTP method is used to submit form data?",
        options: ["GET", "POST", "PUT", "Both GET and POST"],
        correct: 3,
        difficulty: "hard"
    },
    {
        question: "What is servlet lifecycle?",
        options: ["init(), service(), destroy()", "start(), run(), stop()", "create(), execute(), end()", "begin(), process(), finish()"],
        correct: 0,
        difficulty: "hard"
    },
    {
        question: "Which JavaScript method adds HTML content to element?",
        options: ["innerHTML", "addHTML", "setContent", "insertHTML"],
        correct: 0,
        difficulty: "medium"
    }
],
5: [
    {
        question: "What is React?",
        options: ["JavaScript library", "Programming language", "Database", "Framework"],
        correct: 0,
        difficulty: "easy"
    },
    {
        question: "What are components in React?",
        options: ["Reusable UI pieces", "Database tables", "CSS files", "HTML tags"],
        correct: 0,
        difficulty: "easy"
    },
    {
        question: "What is JSX in React?",
        options: ["JavaScript XML", "Java Syntax Extension", "JSON Extended", "JavaScript Export"],
        correct: 0,
        difficulty: "easy"
    },
    {
        question: "What are props in React?",
        options: ["Properties passed to components", "CSS properties", "HTML attributes", "State variables"],
        correct: 0,
        difficulty: "medium"
    },
    {
        question: "What is state in React?",
        options: ["Component's data", "CSS styling", "HTML structure", "Props values"],
        correct: 0,
        difficulty: "medium"
    },
    {
        question: "Which hook is used to manage state in functional components?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        correct: 0,
        difficulty: "medium"
    },
    {
        question: "What is conditional rendering in React?",
        options: ["Render based on condition", "Render all components", "CSS rendering", "HTML rendering"],
        correct: 0,
        difficulty: "easy"
    },
    {
        question: "What is React Router used for?",
        options: ["Navigation between pages", "State management", "API calls", "Styling"],
        correct: 0,
        difficulty: "hard"
    },
    {
        question: "What is the Virtual DOM in React?",
        options: ["Lightweight copy of DOM", "Real DOM", "Database", "CSS model"],
        correct: 0,
        difficulty: "hard"
    },
    {
        question: "Which method is called when component mounts?",
        options: ["componentDidMount", "componentStart", "componentInit", "componentRender"],
        correct: 0,
        difficulty: "medium"
    }
],
6: [
    {
        question: "What is Spring Framework?",
        options: ["Java application framework", "Database", "Web server", "Programming language"],
        correct: 0,
        difficulty: "easy"
    },
    {
        question: "What is Dependency Injection in Spring?",
        options: ["Design pattern for loose coupling", "Database injection", "Code injection", "SQL injection"],
        correct: 0,
        difficulty: "easy"
    },
    {
        question: "What does IoC stand for in Spring?",
        options: ["Inversion of Control", "Input Output Control", "Internal Object Control", "Interface of Control"],
        correct: 0,
        difficulty: "easy"
    },
    {
        question: "What is AOP in Spring?",
        options: ["Aspect Oriented Programming", "Application Object Programming", "Advanced Object Processing", "Automated Object Protocol"],
        correct: 0,
        difficulty: "medium"
    },
    {
        question: "What is Spring MVC?",
        options: ["Model View Controller framework", "Most Valuable Component", "Model Variable Control", "Main View Component"],
        correct: 0,
        difficulty: "medium"
    },
    {
        question: "Which annotation is used to mark a class as Spring controller?",
        options: ["@Controller", "@Component", "@Service", "@Bean"],
        correct: 0,
        difficulty: "medium"
    },
    {
        question: "What is Spring Boot?",
        options: ["Framework to simplify Spring", "Database tool", "Testing framework", "Web server"],
        correct: 0,
        difficulty: "easy"
    },
    {
        question: "What are RESTful web services in Spring?",
        options: ["Architectural style for APIs", "Database services", "File services", "Email services"],
        correct: 0,
        difficulty: "hard"
    },
    {
        question: "Which annotation is used for dependency injection?",
        options: ["@Autowired", "@Inject", "@Resource", "All of these"],
        correct: 3,
        difficulty: "hard"
    },
    {
        question: "What is @RequestMapping used for?",
        options: ["Map HTTP requests to methods", "Map database tables", "Map variables", "Map objects"],
        correct: 0,
        difficulty: "medium"
    }
]
