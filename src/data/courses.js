export const courses = [
  {
    id: 'html',
    title: 'HTML',
    tagline: 'Structure the web, one tag at a time.',
    color: '#F5738C',
    level: 'Beginner',
    duration: '8 hrs',
    tag: 'markup',
    description:
      'Learn the building blocks of every website: elements, attributes, forms, and semantic structure.',
    lessons: [
      {
        id: 'intro',
        title: 'What is HTML?',
        content:
          'HTML (HyperText Markup Language) describes the structure of a web page using elements. Elements are represented by tags, written with angle brackets, like <p> or <div>. A browser reads HTML and renders it as a visible page.',
        snippet: `<!DOCTYPE html>
<html>
  <body>
    <h1>Hello, world!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`,
      },
      {
        id: 'elements',
        title: 'Elements & Attributes',
        content:
          'Most elements have an opening and closing tag, with content in between. Attributes live inside the opening tag and provide extra information, such as an image source or a link destination.',
        snippet: `<a href="https://example.com">Visit site</a>
<img src="cat.jpg" alt="A cat" />`,
      },
      {
        id: 'text-headings',
        title: 'Text & Headings',
        content:
          'HTML provides six levels of headings (<h1> to <h6>) for structuring content by importance, and tags like <p>, <strong>, and <em> for paragraphs and emphasis.',
        snippet: `<h1>Main Title</h1>
<h2>Section Title</h2>
<p>Some text with <strong>bold</strong> and <em>italic</em> words.</p>`,
      },
      {
        id: 'links-images',
        title: 'Links & Images',
        content:
          'Links (<a>) connect pages together using the href attribute. Images (<img>) embed pictures using src, and should always include descriptive alt text for accessibility.',
        snippet: `<a href="/about">About us</a>
<img src="logo.png" alt="Company logo" width="120" />`,
      },
      {
        id: 'lists-tables',
        title: 'Lists & Tables',
        content:
          'Ordered lists (<ol>) and unordered lists (<ul>) organize items with <li>. Tables (<table>) organize data into rows (<tr>) and cells (<td>/<th>).',
        snippet: `<ul>
  <li>HTML</li>
  <li>CSS</li>
</ul>

<table>
  <tr><th>Name</th><th>Score</th></tr>
  <tr><td>Ada</td><td>95</td></tr>
</table>`,
      },
      {
        id: 'forms',
        title: 'Forms & Inputs',
        content:
          'Forms collect input from users. The <form> element wraps input controls like text fields, checkboxes, and buttons, and sends the data somewhere when submitted.',
        snippet: `<form>
  <label for="name">Name</label>
  <input id="name" type="text" />
  <button type="submit">Send</button>
</form>`,
      },
      {
        id: 'semantic',
        title: 'Semantic HTML5',
        content:
          'Semantic elements like <header>, <nav>, <main>, <article>, and <footer> describe the meaning of content, not just its appearance — improving accessibility and SEO over generic <div> soup.',
        snippet: `<header>
  <nav>...</nav>
</header>
<main>
  <article>
    <h2>Post title</h2>
  </article>
</main>
<footer>© 2026</footer>`,
      },
      {
        id: 'media-apis',
        title: 'HTML5 Media & Attributes',
        content:
          'HTML5 added native <audio> and <video> tags for embedding media without plugins, plus useful global attributes like data-* for storing custom data on elements.',
        snippet: `<video controls width="300">
  <source src="clip.mp4" type="video/mp4" />
</video>

<button data-user-id="42">Delete</button>`,
      },
    ],
    quiz: [
      {
        q: 'What does HTML stand for?',
        options: [
          'HyperText Markup Language',
          'HighText Machine Language',
          'HyperTransfer Markup Logic',
          'Home Tool Markup Language',
        ],
        answer: 0,
      },
      {
        q: 'Which tag is used for the largest heading?',
        options: ['<h6>', '<heading>', '<h1>', '<head>'],
        answer: 2,
      },
      {
        q: 'Which attribute provides alternate text for an image?',
        options: ['title', 'alt', 'src', 'desc'],
        answer: 1,
      },
      {
        q: 'Which element is used for navigation links?',
        options: ['<nav>', '<link>', '<menu>', '<a-list>'],
        answer: 0,
      },
    ],
  },
  {
    id: 'css',
    title: 'CSS',
    tagline: 'Give your pages a personality.',
    color: '#2DD4BF',
    level: 'Beginner',
    duration: '8 hrs',
    tag: 'styling',
    description:
      'Master selectors, the box model, flexbox and grid to control layout, color, and typography.',
    lessons: [
      {
        id: 'selectors',
        title: 'Selectors',
        content:
          'CSS selectors target HTML elements so you can style them. You can select by tag, class (.name), id (#name), or relationship to other elements.',
        snippet: `p { color: #333; }
.card { padding: 16px; }
#hero { text-align: center; }`,
      },
      {
        id: 'box-model',
        title: 'The Box Model',
        content:
          'Every element is a box made of content, padding, border, and margin. Understanding how these stack is essential for controlling spacing and layout.',
        snippet: `.box {
  width: 200px;
  padding: 12px;
  border: 1px solid #ccc;
  margin: 8px;
}`,
      },
      {
        id: 'colors-typography',
        title: 'Colors & Typography',
        content:
          'CSS controls color using names, hex codes, or rgb()/hsl() values, and typography using font-family, font-size, font-weight, and line-height.',
        snippet: `body {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #1a1a1a;
}`,
      },
      {
        id: 'flexbox',
        title: 'Flexbox',
        content:
          'Flexbox arranges items in a row or column and distributes space between them, making it ideal for navigation bars, cards, and centering content.',
        snippet: `.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`,
      },
      {
        id: 'grid',
        title: 'CSS Grid',
        content:
          'Grid lays items out in two dimensions at once — rows and columns — making it well suited for full page layouts and card galleries.',
        snippet: `.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}`,
      },
      {
        id: 'positioning',
        title: 'Positioning',
        content:
          'The position property (static, relative, absolute, fixed, sticky) controls how an element is placed relative to its normal position, its parent, or the viewport.',
        snippet: `.badge {
  position: absolute;
  top: 8px;
  right: 8px;
}`,
      },
      {
        id: 'responsive',
        title: 'Responsive Design',
        content:
          'Media queries apply different styles depending on screen size, letting the same page adapt from mobile to desktop.',
        snippet: `@media (max-width: 640px) {
  .sidebar {
    display: none;
  }
}`,
      },
      {
        id: 'transitions',
        title: 'Transitions & Animations',
        content:
          'The transition property smoothly animates a property change (like on hover), while @keyframes define more complex multi-step animations.',
        snippet: `.button {
  transition: transform 0.2s ease;
}
.button:hover {
  transform: scale(1.05);
}`,
      },
    ],
    quiz: [
      {
        q: 'Which property changes text color?',
        options: ['font-color', 'text-color', 'color', 'foreground'],
        answer: 2,
      },
      {
        q: 'What does "display: flex" enable?',
        options: [
          'A flexible grid of rows and columns',
          'A one-dimensional flexible layout',
          'Text animation',
          'Responsive images',
        ],
        answer: 1,
      },
      {
        q: 'Which selector targets an element with id "nav"?',
        options: ['.nav', '#nav', '*nav', '@nav'],
        answer: 1,
      },
      {
        q: 'Which at-rule applies styles at specific screen widths?',
        options: ['@font-face', '@media', '@import', '@supports'],
        answer: 1,
      },
    ],
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    tagline: 'Make the page think.',
    color: '#F5A623',
    level: 'Intermediate',
    duration: '8 hrs',
    tag: 'scripting',
    description:
      'Learn variables, functions, DOM manipulation, and events to build interactive experiences.',
    lessons: [
      {
        id: 'variables',
        title: 'Variables & Types',
        content:
          'JavaScript stores data in variables declared with let, const, or var. Values can be numbers, strings, booleans, arrays, or objects.',
        snippet: `let score = 10;
const name = "Ada";
let isActive = true;`,
      },
      {
        id: 'operators-conditionals',
        title: 'Operators & Conditionals',
        content:
          'Operators like +, ===, and && combine or compare values. if/else statements run different code depending on whether a condition is true or false.',
        snippet: `if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Try again");
}`,
      },
      {
        id: 'functions',
        title: 'Functions',
        content:
          'Functions bundle reusable logic. Arrow functions are a compact syntax that also handle "this" differently from regular functions.',
        snippet: `function add(a, b) {
  return a + b;
}

const multiply = (a, b) => a * b;`,
      },
      {
        id: 'arrays',
        title: 'Arrays',
        content:
          'Arrays store ordered lists of values. Methods like map, filter, and forEach let you transform or loop through array data without writing manual loops.',
        snippet: `const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2);
const evens = nums.filter((n) => n % 2 === 0);`,
      },
      {
        id: 'objects',
        title: 'Objects',
        content:
          'Objects group related data as key-value pairs. Dot notation or bracket notation is used to read or update properties.',
        snippet: `const user = { name: "Ada", age: 28 };
console.log(user.name);
user.age = 29;`,
      },
      {
        id: 'loops',
        title: 'Loops',
        content:
          'Loops repeat code. "for" loops are useful when you know how many times to repeat, while "while" loops repeat until a condition becomes false.',
        snippet: `for (let i = 0; i < 3; i++) {
  console.log(i);
}`,
      },
      {
        id: 'dom',
        title: 'DOM & Events',
        content:
          'The DOM is a live tree representation of the page. JavaScript can query elements and attach event listeners to respond to clicks, input, and more.',
        snippet: `const btn = document.querySelector('#go');
btn.addEventListener('click', () => {
  console.log('Clicked!');
});`,
      },
      {
        id: 'async',
        title: 'Async & Fetch',
        content:
          'Promises represent a value that will be available later. async/await makes asynchronous code, like fetching data from a server, read like regular sequential code.',
        snippet: `async function loadUser() {
  const res = await fetch('/api/user');
  const data = await res.json();
  console.log(data);
}`,
      },
    ],
    quiz: [
      {
        q: 'Which keyword declares a constant variable?',
        options: ['var', 'let', 'const', 'static'],
        answer: 2,
      },
      {
        q: 'What does DOM stand for?',
        options: [
          'Document Object Model',
          'Data Object Method',
          'Document Order Map',
          'Dynamic Object Model',
        ],
        answer: 0,
      },
      {
        q: 'Which method attaches an event listener?',
        options: ['addEventListener', 'onEvent', 'listen', 'bindEvent'],
        answer: 0,
      },
      {
        q: 'Which keyword pauses an async function until a promise resolves?',
        options: ['pause', 'await', 'hold', 'yield'],
        answer: 1,
      },
    ],
  },
  {
    id: 'python',
    title: 'Python',
    tagline: 'Readable code, powerful results.',
    color: '#8B96A8',
    level: 'Beginner',
    duration: '8 hrs',
    tag: 'scripting',
    description:
      'Explore Python syntax, data structures, and control flow — a great first language for backend and data work.',
    lessons: [
      {
        id: 'basics',
        title: 'Syntax Basics',
        content:
          'Python uses indentation instead of braces to define code blocks, which keeps code readable and consistent.',
        snippet: `name = "Ada"
if name:
    print(f"Hello, {name}!")`,
      },
      {
        id: 'variables-types',
        title: 'Variables & Data Types',
        content:
          'Python variables do not need a declared type — the type is inferred from the value. Common types are int, float, str, and bool.',
        snippet: `age = 21
price = 19.99
name = "Ada"
is_active = True`,
      },
      {
        id: 'data-structures',
        title: 'Lists & Dictionaries',
        content:
          'Lists store ordered collections, while dictionaries store key-value pairs. Both are core to organizing data in Python.',
        snippet: `nums = [1, 2, 3]
user = {"name": "Ada", "age": 28}`,
      },
      {
        id: 'conditionals',
        title: 'Conditionals',
        content:
          'if, elif, and else let a Python program branch based on conditions, checking things in order until one matches.',
        snippet: `score = 72
if score >= 90:
    grade = "A"
elif score >= 70:
    grade = "B"
else:
    grade = "C"`,
      },
      {
        id: 'loops-py',
        title: 'Loops',
        content:
          'for loops iterate over sequences like lists or ranges, while while loops repeat as long as a condition stays true.',
        snippet: `for n in range(3):
    print(n)

count = 0
while count < 3:
    count += 1`,
      },
      {
        id: 'functions-py',
        title: 'Functions',
        content:
          'Functions are defined with "def" and can take parameters and return values, letting you reuse logic across a program.',
        snippet: `def greet(name):
    return f"Hi, {name}"

print(greet("Ada"))`,
      },
      {
        id: 'modules',
        title: 'Modules & Packages',
        content:
          'Modules let you split code into reusable files. The import statement brings in built-in modules (like math or random) or your own files.',
        snippet: `import math

print(math.sqrt(16))
print(math.pi)`,
      },
      {
        id: 'exceptions',
        title: 'Exception Handling',
        content:
          'try/except blocks catch errors so a program can handle them gracefully instead of crashing.',
        snippet: `try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")`,
      },
    ],
    quiz: [
      {
        q: 'How does Python define code blocks?',
        options: ['Curly braces', 'Indentation', 'Semicolons', 'Parentheses'],
        answer: 1,
      },
      {
        q: 'Which data type stores key-value pairs?',
        options: ['list', 'tuple', 'dict', 'set'],
        answer: 2,
      },
      {
        q: 'How do you define a function in Python?',
        options: ['function', 'func', 'def', 'lambda only'],
        answer: 2,
      },
      {
        q: 'Which block catches errors in Python?',
        options: ['catch/throw', 'try/except', 'try/catch', 'error/handle'],
        answer: 1,
      },
    ],
  },
  {
    id: 'sql',
    title: 'SQL',
    tagline: 'Talk to your data directly.',
    color: '#F5738C',
    level: 'Beginner',
    duration: '8 hrs',
    tag: 'database',
    description:
      'Write queries to select, filter, join, and aggregate data stored in relational databases.',
    lessons: [
      {
        id: 'select',
        title: 'SELECT & WHERE',
        content:
          'SELECT retrieves columns from a table. WHERE filters rows based on a condition.',
        snippet: `SELECT name, email
FROM users
WHERE active = true;`,
      },
      {
        id: 'sorting-filtering',
        title: 'Sorting & Limiting',
        content:
          'ORDER BY sorts results by one or more columns, and LIMIT restricts how many rows come back — useful for pagination or "top N" queries.',
        snippet: `SELECT name, score
FROM students
ORDER BY score DESC
LIMIT 5;`,
      },
      {
        id: 'joins',
        title: 'JOINs',
        content:
          'JOINs combine rows from two or more tables based on a related column, such as matching a user to their orders.',
        snippet: `SELECT u.name, o.total
FROM users u
JOIN orders o ON o.user_id = u.id;`,
      },
      {
        id: 'aggregates',
        title: 'Aggregates & GROUP BY',
        content:
          'Aggregate functions like COUNT, SUM, and AVG summarize data, often combined with GROUP BY to summarize per category.',
        snippet: `SELECT category, COUNT(*) AS total
FROM products
GROUP BY category;`,
      },
      {
        id: 'insert-update-delete',
        title: 'INSERT, UPDATE & DELETE',
        content:
          'INSERT adds new rows, UPDATE modifies existing rows, and DELETE removes rows — always pair UPDATE/DELETE with a WHERE clause to avoid affecting the whole table.',
        snippet: `INSERT INTO users (name, email)
VALUES ('Ada', 'ada@example.com');

UPDATE users SET active = false WHERE id = 3;
DELETE FROM users WHERE id = 7;`,
      },
      {
        id: 'subqueries',
        title: 'Subqueries',
        content:
          'A subquery is a query nested inside another query, often used to filter results based on a computed set of values.',
        snippet: `SELECT name
FROM users
WHERE id IN (
  SELECT user_id FROM orders WHERE total > 100
);`,
      },
      {
        id: 'constraints',
        title: 'Constraints & Keys',
        content:
          'PRIMARY KEY uniquely identifies each row, while FOREIGN KEY enforces a valid relationship to another table, keeping data consistent.',
        snippet: `CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);`,
      },
      {
        id: 'indexes',
        title: 'Indexes & Views',
        content:
          'Indexes speed up lookups on large tables, while views save a query as a reusable virtual table you can query like any other table.',
        snippet: `CREATE INDEX idx_email ON users(email);

CREATE VIEW active_users AS
SELECT * FROM users WHERE active = true;`,
      },
    ],
    quiz: [
      {
        q: 'Which clause filters rows?',
        options: ['GROUP BY', 'WHERE', 'ORDER BY', 'HAVING'],
        answer: 1,
      },
      {
        q: 'Which keyword combines rows from two tables?',
        options: ['MERGE', 'JOIN', 'LINK', 'UNION ALL'],
        answer: 1,
      },
      {
        q: 'Which function counts rows?',
        options: ['SUM()', 'COUNT()', 'TOTAL()', 'LEN()'],
        answer: 1,
      },
      {
        q: 'What does a PRIMARY KEY guarantee?',
        options: [
          'Fast queries only',
          'Uniqueness for each row',
          'Automatic backups',
          'Encrypted storage',
        ],
        answer: 1,
      },
    ],
  },
  {
    id: 'react',
    title: 'React',
    tagline: 'Build interfaces from components.',
    color: '#2DD4BF',
    level: 'Intermediate',
    duration: '8 hrs',
    tag: 'framework',
    description:
      'Learn components, props, state, and hooks to build fast, reusable user interfaces.',
    lessons: [
      {
        id: 'components',
        title: 'Components & Props',
        content:
          'Components are reusable pieces of UI. Props pass data from a parent component into a child component.',
        snippet: `function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}`,
      },
      {
        id: 'state',
        title: 'State with useState',
        content:
          'useState lets a component remember values between renders and update the UI when they change.',
        snippet: `const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  {count}
</button>`,
      },
      {
        id: 'effects',
        title: 'Side Effects with useEffect',
        content:
          'useEffect runs code in response to renders or dependency changes, useful for data fetching or subscriptions.',
        snippet: `useEffect(() => {
  fetchData();
}, [id]);`,
      },
      {
        id: 'conditional-rendering',
        title: 'Conditional Rendering',
        content:
          'Components can render different UI based on a condition, using regular JavaScript like if statements, ternaries, or the && operator inside JSX.',
        snippet: `{isLoggedIn ? (
  <Dashboard />
) : (
  <LoginPrompt />
)}`,
      },
      {
        id: 'lists-keys',
        title: 'Lists & Keys',
        content:
          'Rendering a list of components with .map() requires a unique "key" prop on each item so React can track changes efficiently.',
        snippet: `{courses.map((c) => (
  <CourseCard key={c.id} course={c} />
))}`,
      },
      {
        id: 'forms-react',
        title: 'Forms in React',
        content:
          "Controlled inputs tie a form field's value to state, updating it on every keystroke via onChange — giving full control over form data.",
        snippet: `const [email, setEmail] = useState('');

<input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>`,
      },
      {
        id: 'context',
        title: 'Context API',
        content:
          'Context lets you share data (like the logged-in user) across many components without manually passing props down through every level.',
        snippet: `const AuthContext = createContext(null);

function useAuth() {
  return useContext(AuthContext);
}`,
      },
      {
        id: 'custom-hooks',
        title: 'Custom Hooks',
        content:
          'Custom hooks extract reusable stateful logic into a function starting with "use", keeping components clean and logic shareable.',
        snippet: `function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue((v) => !v);
  return [value, toggle];
}`,
      },
    ],
    quiz: [
      {
        q: 'What hook adds local state to a component?',
        options: ['useEffect', 'useState', 'useRef', 'useMemo'],
        answer: 1,
      },
      {
        q: 'How is data passed to a child component?',
        options: ['Props', 'State', 'Context only', 'Redux only'],
        answer: 0,
      },
      {
        q: 'When does useEffect run by default?',
        options: [
          'Only once ever',
          'After every render',
          'Only on unmount',
          'Never automatically',
        ],
        answer: 1,
      },
      {
        q: 'Why does React need a "key" prop in lists?',
        options: [
          'To style the list',
          'To track items efficiently across renders',
          'To sort the list',
          'It is optional and has no effect',
        ],
        answer: 1,
      },
    ],
  },
  {
    id: 'java',
    title: 'Java',
    tagline: 'Write once, run anywhere.',
    color: '#F5A623',
    level: 'Beginner',
    duration: '8 hrs',
    tag: 'backend',
    description:
      'Learn classes, objects, and core syntax in Java — a strongly-typed language used across enterprise apps, Android, and backend systems.',
    lessons: [
      {
        id: 'intro',
        title: 'What is Java?',
        content:
          'Java is a strongly-typed, object-oriented language. Code is compiled into bytecode that runs on the Java Virtual Machine (JVM), which is why Java code can run on almost any device without changes.',
        snippet: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, world!");
  }
}`,
      },
      {
        id: 'variables',
        title: 'Variables & Types',
        content:
          'Java is statically typed, so every variable must declare its type. Common types include int, double, boolean, and String.',
        snippet: `int age = 21;
double price = 19.99;
boolean isActive = true;
String name = "Ada";`,
      },
      {
        id: 'classes',
        title: 'Classes & Objects',
        content:
          'Java code is organized into classes, which act as blueprints for objects. A class defines fields (data) and methods (behavior); an object is an instance of that class.',
        snippet: `class Dog {
  String name;

  void bark() {
    System.out.println(name + " says woof!");
  }
}

Dog d = new Dog();
d.name = "Rex";
d.bark();`,
      },
      {
        id: 'methods',
        title: 'Methods',
        content:
          'Methods define behavior inside a class. They can take parameters and return a value, and are called using dot notation on an object.',
        snippet: `class Calculator {
  int add(int a, int b) {
    return a + b;
  }
}

Calculator c = new Calculator();
System.out.println(c.add(2, 3));`,
      },
      {
        id: 'conditionals-loops',
        title: 'Conditionals & Loops',
        content:
          "if/else branches based on conditions, and for/while loops repeat code — the same core control flow found in most languages, with Java's curly-brace syntax.",
        snippet: `for (int i = 0; i < 3; i++) {
  if (i == 1) {
    System.out.println("one");
  } else {
    System.out.println(i);
  }
}`,
      },
      {
        id: 'arrays-java',
        title: 'Arrays',
        content:
          'Arrays hold a fixed-size sequence of values of the same type. They are declared with square brackets and accessed by index, starting at 0.',
        snippet: `int[] scores = {90, 85, 77};
System.out.println(scores[0]);
System.out.println(scores.length);`,
      },
      {
        id: 'inheritance',
        title: 'Inheritance',
        content:
          'A class can extend another class to reuse and override its behavior, forming an "is-a" relationship — for example, a Cat is an Animal.',
        snippet: `class Animal {
  void speak() {
    System.out.println("...");
  }
}

class Cat extends Animal {
  void speak() {
    System.out.println("Meow");
  }
}`,
      },
      {
        id: 'exceptions-java',
        title: 'Exception Handling',
        content:
          'try/catch blocks handle runtime errors gracefully, letting a program recover instead of crashing when something unexpected happens.',
        snippet: `try {
  int result = 10 / 0;
} catch (ArithmeticException e) {
  System.out.println("Cannot divide by zero");
}`,
      },
    ],
    quiz: [
      {
        q: 'What does the JVM do?',
        options: [
          'Compiles Java to machine code directly',
          'Runs Java bytecode on any device',
          'Stores Java source files',
          'Formats Java code',
        ],
        answer: 1,
      },
      {
        q: 'Which keyword creates a new object in Java?',
        options: ['new', 'create', 'make', 'object'],
        answer: 0,
      },
      {
        q: 'Which type would you use to store true/false?',
        options: ['int', 'String', 'boolean', 'double'],
        answer: 2,
      },
      {
        q: "Which keyword lets a class reuse another class's behavior?",
        options: ['extends', 'implements only', 'imports', 'uses'],
        answer: 0,
      },
    ],
  },
]

export function getCourse(id) {
  return courses.find((c) => c.id === id)
}
