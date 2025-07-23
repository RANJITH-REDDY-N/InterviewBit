export const javaContent = {
  id: 'java',
  name: 'Java',
  icon: 'Coffee',
  difficulty: 'Intermediate',
  questionCount: 50,

  // Tab 1: Overview
  overview: {
    introduction: {
      title: "What is Java?",
      content: "Java is a high-level, object-oriented, platform-independent programming language developed by Sun Microsystems (now Oracle) in 1995. It follows the principle of 'Write Once, Run Anywhere' (WORA), making it one of the most popular programming languages for enterprise applications, web development, Android apps, and more.",
      keyPoints: [
        "Platform independent through JVM",
        "Object-oriented programming language",
        "Strongly typed and compiled language",
        "Automatic memory management with garbage collection",
        "Rich standard library and ecosystem"
      ]
    },
    importance: {
      title: "Why is Java important?",
      points: [
        {
          icon: "CheckCircle2",
          text: "Widely used in enterprise applications",
          description: "Powers major banking, e-commerce, and enterprise systems"
        },
        {
          icon: "CheckCircle2",
          text: "High demand in the job market",
          description: "Consistently ranks in top 3 most demanded programming languages"
        },
        {
          icon: "CheckCircle2",
          text: "Essential for building scalable applications",
          description: "Excellent performance, threading support, and scalability features"
        },
        {
          icon: "CheckCircle2",
          text: "Android development",
          description: "Primary language for Android app development"
        },
        {
          icon: "CheckCircle2",
          text: "Large community and ecosystem",
          description: "Extensive libraries, frameworks, and community support"
        }
      ]
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Platform Independence",
          description: "Java bytecode runs on any system with JVM installed",
          icon: "Globe"
        },
        {
          title: "Object-Oriented",
          description: "Everything is an object (except primitives), supports OOP principles",
          icon: "Box"
        },
        {
          title: "Robust & Secure",
          description: "Strong type checking, exception handling, and security manager",
          icon: "Shield"
        },
        {
          title: "Multithreaded",
          description: "Built-in support for concurrent programming",
          icon: "Cpu"
        },
        {
          title: "Automatic Memory Management",
          description: "Garbage collection handles memory allocation/deallocation",
          icon: "Database"
        },
        {
          title: "Rich API",
          description: "Comprehensive standard library for common tasks",
          icon: "Package"
        }
      ]
    },
    roadmap: {
      title: "Learning Roadmap",
      stages: [
        {
          stage: "Basics",
          topics: ["Syntax", "Data Types", "Control Flow", "Arrays", "Methods"]
        },
        {
          stage: "OOP",
          topics: ["Classes & Objects", "Inheritance", "Polymorphism", "Abstraction", "Encapsulation"]
        },
        {
          stage: "Advanced",
          topics: ["Collections", "Generics", "Lambda", "Streams", "Concurrency"]
        },
        {
          stage: "Professional",
          topics: ["Design Patterns", "JVM Internals", "Performance", "Best Practices"]
        }
      ]
    }
  },

  // Tab 2: Interview Questions - Top 50
  questions: [
    // Basic Java Questions (1-10)
    {
      id: 1,
      question: "What is the difference between JDK, JRE, and JVM?",
      difficulty: "Beginner",
      topic: "Java Basics",
      technicalAnswer: "JDK (Java Development Kit) is a complete software development kit that includes JRE, development tools (compiler, debugger), documentation, and sample code. JRE (Java Runtime Environment) provides libraries, JVM, and other components to run Java applications but not develop them. JVM (Java Virtual Machine) is an abstract computing machine that provides runtime environment to execute Java bytecode, making Java platform-independent.",
      simpleExplanation: "Think of it like a car factory: JDK is the entire factory with all tools to build cars (write programs). JRE is the road system where cars can run (run programs). JVM is the engine that makes the car actually move (executes your code). You need JDK to build, but only JRE to run.",
      codeExample: `// JDK includes javac compiler\njavac HelloWorld.java  // Compile (needs JDK)\n\n// JRE includes java runtime\njava HelloWorld        // Run (needs JRE)\n\n// JVM executes the bytecode\n// Platform: Windows JVM, Linux JVM, Mac JVM\n// All run the same .class file`,
      visualConcept: "JDK (Development Kit) → contains → JRE (Runtime Environment) → contains → JVM (Virtual Machine)",
      relatedQuestions: [2, 3],
      tags: ["jvm", "jdk", "jre", "basics"]
    },
    {
      id: 2,
      question: "Why is Java platform-independent?",
      difficulty: "Beginner",
      topic: "Java Basics",
      technicalAnswer: "Java achieves platform independence through bytecode and JVM. When Java source code is compiled, it's converted into platform-neutral bytecode (.class files) instead of native machine code. This bytecode is then interpreted or JIT-compiled by the platform-specific JVM. The JVM acts as an abstraction layer between your Java program and the operating system, handling all platform-specific operations.",
      simpleExplanation: "Java is like a universal translator. You write code once, and it gets translated into a special language (bytecode) that any computer with Java installed can understand. Each operating system has its own Java translator (JVM) that converts this universal language into commands that specific computer understands.",
      codeExample: `// HelloWorld.java (source code)\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}\n\n// Compile once: javac HelloWorld.java\n// Creates: HelloWorld.class (bytecode)\n\n// Run anywhere:\n// Windows: java HelloWorld\n// Linux: java HelloWorld  \n// Mac: java HelloWorld\n// Same bytecode runs on all platforms!`,
      visualConcept: "Source Code (.java) → Compiler (javac) → Bytecode (.class) → JVM (platform-specific) → Machine Code",
      relatedQuestions: [1, 3],
      tags: ["platform-independent", "bytecode", "jvm"]
    },
    {
      id: 3,
      question: "What are the main features of Java?",
      difficulty: "Beginner",
      topic: "Java Basics",
      technicalAnswer: "Java's main features include: 1) Simple and familiar syntax, 2) Object-oriented programming, 3) Platform independence, 4) Robust with strong memory management and exception handling, 5) Secure with built-in security features, 6) Multithreaded for concurrent execution, 7) Distributed computing support, 8) Dynamic with runtime class loading, 9) High performance through JIT compilation, 10) Interpreted and compiled language.",
      simpleExplanation: "Java is like a Swiss Army knife for programming. It's easy to learn (simple), organizes code like real-world objects (OOP), works anywhere (platform-independent), handles errors well (robust), is secure by design, can do many things at once (multithreaded), and runs fast thanks to smart optimization.",
      codeExample: `// Simple - Easy to read and write\npublic class Example {\n    // Object-Oriented - Everything is in classes\n    private String name;\n    \n    // Robust - Exception handling\n    public void readFile(String filename) {\n        try {\n            // File operations\n        } catch (IOException e) {\n            // Handle errors gracefully\n        }\n    }\n    \n    // Multithreaded - Concurrent execution\n    public void startThread() {\n        new Thread(() -> {\n            System.out.println("Running in parallel!");\n        }).start();\n    }\n}`,
      visualConcept: "Java Features: Simple → OOP → Platform Independent → Robust → Secure → Multithreaded → High Performance",
      relatedQuestions: [1, 2, 4],
      tags: ["features", "characteristics", "basics"]
    },
    {
      id: 4,
      question: "What is the difference between == and .equals() method?",
      difficulty: "Beginner",
      topic: "Java Basics",
      technicalAnswer: "The == operator compares reference equality (memory addresses) for objects and value equality for primitives. The .equals() method compares logical equality (content) of objects. For primitives, == compares values directly. For objects, == checks if both references point to the same object in memory, while .equals() compares the actual content based on the implementation (default Object.equals() uses ==, but classes like String override it for content comparison).",
      simpleExplanation: "Think of == as asking 'Are these the exact same object?' like comparing if two people are literally the same person. .equals() asks 'Do these have the same content?' like comparing if two different books have the same text. For numbers, == works fine, but for text and objects, you usually want .equals().",
      codeExample: `// Primitive comparison - use ==\nint a = 5;\nint b = 5;\nSystem.out.println(a == b);  // true - values are equal\n\n// Object comparison\nString s1 = new String("Hello");\nString s2 = new String("Hello");\nString s3 = s1;\n\n// Reference comparison\nSystem.out.println(s1 == s2);     // false - different objects\nSystem.out.println(s1 == s3);     // true - same object reference\n\n// Content comparison  \nSystem.out.println(s1.equals(s2)); // true - same content\nSystem.out.println(s1.equals(s3)); // true - same content\n\n// String pool special case\nString s4 = "Hello";\nString s5 = "Hello";\nSystem.out.println(s4 == s5);      // true - string pool optimization`,
      visualConcept: "== → Checks Memory Address | .equals() → Checks Content/Value",
      relatedQuestions: [5, 28],
      tags: ["operators", "comparison", "equals", "basics"]
    },
    {
      id: 5,
      question: "What are the primitive data types in Java?",
      difficulty: "Beginner",
      topic: "Data Types",
      technicalAnswer: "Java has 8 primitive data types: 1) byte (8-bit signed integer, -128 to 127), 2) short (16-bit signed integer, -32,768 to 32,767), 3) int (32-bit signed integer, -2^31 to 2^31-1), 4) long (64-bit signed integer, -2^63 to 2^63-1), 5) float (32-bit floating point), 6) double (64-bit floating point), 7) boolean (true/false), 8) char (16-bit Unicode character). Primitives are stored in stack memory and hold actual values, not references.",
      simpleExplanation: "Java has 8 basic data types like LEGO blocks: 4 for whole numbers (byte→short→int→long, from tiny to huge), 2 for decimals (float for normal precision, double for high precision), 1 for true/false decisions (boolean), and 1 for single letters/symbols (char). These are the building blocks for all data in Java.",
      codeExample: `// Primitive data types examples\nbyte age = 25;                    // -128 to 127\nshort year = 2024;                // -32,768 to 32,767  \nint population = 1000000;         // -2.1 billion to 2.1 billion\nlong worldPopulation = 8000000000L; // Really big numbers (note the 'L')\n\nfloat price = 19.99f;             // Single precision (note the 'f')\ndouble pi = 3.14159265359;        // Double precision (default for decimals)\n\nboolean isActive = true;          // true or false only\nchar grade = 'A';                 // Single character in single quotes\n\n// Memory visualization:\n// Stack: [byte:25][short:2024][int:1000000]...\n// These store actual values, not references!`,
      visualConcept: "Integers: byte(1) → short(2) → int(4) → long(8) bytes | Decimals: float(4) → double(8) | Others: boolean(1), char(2)",
      relatedQuestions: [6, 7],
      tags: ["primitives", "data-types", "basics"]
    },

    // OOP Questions (11-25)
    {
      id: 11,
      question: "What are the four pillars of Object-Oriented Programming?",
      difficulty: "Intermediate",
      topic: "OOP Concepts",
      technicalAnswer: "The four pillars of OOP are: 1) Encapsulation - bundling data and methods that operate on that data within a single unit (class), hiding internal implementation details. 2) Inheritance - mechanism where a new class derives properties and behaviors from an existing class. 3) Polymorphism - ability of objects to take multiple forms, allowing same interface for different underlying data types. 4) Abstraction - hiding complex implementation details and showing only essential features of an object.",
      simpleExplanation: "Think of OOP like building with LEGO: Encapsulation is like a LEGO brick keeping its studs and shape together as one unit. Inheritance is like special bricks that have all features of basic bricks plus extra features. Polymorphism is like how different shaped bricks can still connect the same way. Abstraction is like only seeing the studs to connect, not the complex internal structure.",
      codeExample: `// 1. Encapsulation - Data and methods bundled together\npublic class BankAccount {\n    private double balance;  // Hidden data\n    \n    public void deposit(double amount) {  // Controlled access\n        if (amount > 0) balance += amount;\n    }\n    \n    public double getBalance() { return balance; }\n}\n\n// 2. Inheritance - Child inherits from parent\npublic class SavingsAccount extends BankAccount {\n    private double interestRate;\n    \n    public void addInterest() {\n        deposit(getBalance() * interestRate);\n    }\n}\n\n// 3. Polymorphism - Many forms\nBankAccount account = new SavingsAccount();  // Parent ref to child object\nList<String> list = new ArrayList<>();        // Interface ref to implementation\n\n// 4. Abstraction - Hide complexity\npublic abstract class Shape {\n    abstract double calculateArea();  // What, not how\n}\n\npublic class Circle extends Shape {\n    private double radius;\n    \n    @Override\n    double calculateArea() {\n        return Math.PI * radius * radius;  // Hidden implementation\n    }\n}`,
      visualConcept: "Encapsulation (Data+Methods) + Inheritance (Parent→Child) + Polymorphism (Many Forms) + Abstraction (Hide Details) = OOP",
      relatedQuestions: [12, 13, 14, 15],
      tags: ["oop", "pillars", "concepts", "encapsulation", "inheritance", "polymorphism", "abstraction"]
    },
    {
      id: 12,
      question: "What is inheritance and what are its types in Java?",
      difficulty: "Intermediate",
      topic: "OOP - Inheritance",
      technicalAnswer: "Inheritance is a mechanism where one class acquires properties and behaviors of another class. The class that inherits is called subclass/child, and the class being inherited from is called superclass/parent. Java supports: 1) Single inheritance (one parent), 2) Multilevel inheritance (chain: A→B→C), 3) Hierarchical inheritance (one parent, multiple children). Java doesn't support multiple inheritance with classes (diamond problem) but achieves it through interfaces. Inheritance promotes code reusability and establishes IS-A relationship.",
      simpleExplanation: "Inheritance is like family traits passed from parents to children. A child class gets all the abilities of its parent class and can add its own special features. Just like you might inherit your parent's eye color but also have your own unique talents. In Java, a class can only have one direct parent (like biology!), but can have grandparents, and one parent can have many children.",
      codeExample: `// Single Inheritance\nclass Animal {\n    void eat() { System.out.println("Eating..."); }\n}\n\nclass Dog extends Animal {  // Dog IS-A Animal\n    void bark() { System.out.println("Barking..."); }\n}\n\n// Multilevel Inheritance\nclass Puppy extends Dog {  // Puppy IS-A Dog IS-A Animal\n    void play() { System.out.println("Playing..."); }\n}\n\n// Hierarchical Inheritance\nclass Cat extends Animal {  // Cat IS-A Animal (Dog's sibling)\n    void meow() { System.out.println("Meowing..."); }\n}\n\n// Multiple Inheritance through Interfaces\ninterface Swimmer {\n    void swim();\n}\n\ninterface Runner {\n    void run();\n}\n\nclass Athlete implements Swimmer, Runner {  // Multiple interface inheritance\n    public void swim() { System.out.println("Swimming..."); }\n    public void run() { System.out.println("Running..."); }\n}\n\n// Usage\nPuppy puppy = new Puppy();\npuppy.eat();   // From Animal\npuppy.bark();  // From Dog  \npuppy.play();  // Own method`,
      visualConcept: "Animal (parent) → Dog (child) → Puppy (grandchild) | Animal → Cat (another child) | Class ← Interface1, Interface2",
      relatedQuestions: [11, 13, 14, 21],
      tags: ["inheritance", "oop", "extends", "is-a"]
    },
    {
      id: 13,
      question: "What is polymorphism? Explain with examples.",
      difficulty: "Intermediate",
      topic: "OOP - Polymorphism",
      technicalAnswer: "Polymorphism means 'many forms' - ability of an object to take multiple forms. Java supports two types: 1) Compile-time (Static) Polymorphism through method overloading - same method name with different parameters. 2) Runtime (Dynamic) Polymorphism through method overriding - child class provides specific implementation of parent's method. Runtime polymorphism enables dynamic method dispatch where actual method called is determined at runtime based on object type, not reference type.",
      simpleExplanation: "Polymorphism is like a smartphone that acts differently based on which app you open - same device, different behaviors. Method overloading is like having multiple 'print' buttons that work differently for documents, photos, or emails. Method overriding is like how both cars and motorcycles have 'start' methods, but they start differently even though we call the same method.",
      codeExample: `// Compile-time Polymorphism (Method Overloading)\nclass Calculator {\n    int add(int a, int b) {\n        return a + b;\n    }\n    \n    int add(int a, int b, int c) {  // Different parameters\n        return a + b + c;\n    }\n    \n    double add(double a, double b) {  // Different types\n        return a + b;\n    }\n}\n\n// Runtime Polymorphism (Method Overriding)\nclass Animal {\n    void makeSound() {\n        System.out.println("Animal makes a sound");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void makeSound() {\n        System.out.println("Dog barks");\n    }\n}\n\nclass Cat extends Animal {\n    @Override  \n    void makeSound() {\n        System.out.println("Cat meows");\n    }\n}\n\n// Dynamic Method Dispatch\nAnimal myPet = new Dog();  // Parent reference, child object\nmyPet.makeSound();  // "Dog barks" - determined at runtime\n\nmyPet = new Cat();  // Same reference, different object\nmyPet.makeSound();  // "Cat meows" - behavior changes\n\n// Polymorphic array\nAnimal[] zoo = {new Dog(), new Cat(), new Animal()};\nfor (Animal animal : zoo) {\n    animal.makeSound();  // Each calls its own version\n}`,
      visualConcept: "Static: add(int,int) vs add(int,int,int) | Dynamic: Animal.makeSound() → Dog.makeSound() OR Cat.makeSound()",
      relatedQuestions: [11, 12, 14, 16],
      tags: ["polymorphism", "overloading", "overriding", "oop"]
    },
    {
      id: 14,
      question: "What is encapsulation and how is it achieved in Java?",
      difficulty: "Intermediate",
      topic: "OOP - Encapsulation",
      technicalAnswer: "Encapsulation is the bundling of data (attributes) and methods that operate on that data within a single unit (class), while restricting direct access to some components. In Java, encapsulation is achieved through: 1) Declaring class variables/attributes as private, 2) Providing public getter and setter methods to access and update the value of a private variable, 3) Using access modifiers (private, protected, public, default) to control the visibility. Encapsulation enhances security, prevents unauthorized access, and allows for data validation.",
      simpleExplanation: "Encapsulation is like a pill capsule - the medicine is inside, protected, and you only interact with it through the outer shell. In Java, we make variables private (hidden inside) and create special methods to get or change these variables safely. It's like keeping your money in a bank - you can't directly access the vault, but you can use an ATM to deposit or withdraw funds.",
      codeExample: `// Without encapsulation - unsafe\nclass BankAccountUnsafe {\n    public double balance;  // Directly accessible\n}\n// Problem: anyone can do\n// account.balance = -1000000;  // Invalid state!\n\n// With encapsulation - safe\nclass BankAccount {\n    // Private data - hidden\n    private double balance;\n    private String accountNumber;\n    \n    // Public methods - controlled access\n    public void deposit(double amount) {\n        // Validation\n        if (amount <= 0) {\n            throw new IllegalArgumentException("Deposit amount must be positive");\n        }\n        // Safe operation\n        balance += amount;\n    }\n    \n    public void withdraw(double amount) {\n        // Validation\n        if (amount <= 0) {\n            throw new IllegalArgumentException("Withdraw amount must be positive");\n        }\n        if (amount > balance) {\n            throw new IllegalArgumentException("Insufficient funds");\n        }\n        // Safe operation\n        balance -= amount;\n    }\n    \n    // Getter\n    public double getBalance() {\n        return balance;  // Read-only access\n    }\n    \n    // Setter with validation\n    public void setAccountNumber(String accountNumber) {\n        if (accountNumber == null || !accountNumber.matches("\\d{10}")) {\n            throw new IllegalArgumentException("Invalid account number");\n        }\n        this.accountNumber = accountNumber;\n    }\n}`,
      visualConcept: "Class [Private Data + Public Methods] ← External Access Only Through Methods → Data Protection & Validation",
      relatedQuestions: [11, 12, 13, 15],
      tags: ["encapsulation", "oop", "data-hiding", "getters-setters"]
    }
  ]
};
