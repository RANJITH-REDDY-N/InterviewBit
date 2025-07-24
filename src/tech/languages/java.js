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
        "Rich standard library and ecosystem",
        "Multi-threaded programming support",
        "Robust security features"
      ]
    },
    importance: {
      title: "Why is Java important?",
      points: [
        {
          text: "Widely used in enterprise applications",
          description: "Powers major banking, e-commerce, and enterprise systems worldwide"
        },
        {
          text: "High demand in the job market",
          description: "Consistently ranks in top 3 most demanded programming languages"
        },
        {
          text: "Android development",
          description: "Primary language for Android app development with billions of devices"
        },
        {
          text: "Large ecosystem",
          description: "Extensive libraries, frameworks (Spring, Hibernate), and community support"
        },
        {
          text: "Scalability and Performance",
          description: "Excellent for building large-scale, high-performance applications"
        }
      ]
    }
  },

  // Tab 2: Interview Questions
  questions: [
    {
      id: 1,
      question: "What is the difference between JDK, JRE, and JVM?",
      answer: "JDK (Java Development Kit) is a complete software development kit that includes JRE, development tools (compiler, debugger), documentation, and sample code. JRE (Java Runtime Environment) provides libraries, JVM, and other components to run Java applications but not develop them. JVM (Java Virtual Machine) is an abstract computing machine that provides runtime environment to execute Java bytecode.",
      keyPoints: [
        "JDK = JRE + Development Tools (javac, javadoc, jar, etc.)",
        "JRE = JVM + Library Classes",
        "JVM = Runtime environment for executing bytecode",
        "JDK is needed for development, JRE for running applications",
        "JVM makes Java platform-independent"
      ],
      example: `// Development process:
// 1. Write code (needs text editor)
// 2. Compile: javac HelloWorld.java (needs JDK)
// 3. Run: java HelloWorld (needs JRE)
// 4. JVM executes the bytecode

JDK
├── JRE
│   ├── JVM
│   └── Library Classes
└── Development Tools`,
      difficulty: "Basic"
    },
    {
      id: 2,
      question: "Why is Java platform-independent?",
      answer: "Java achieves platform independence through bytecode and JVM. When Java source code is compiled, it's converted into platform-neutral bytecode (.class files) instead of native machine code. This bytecode is then interpreted or JIT-compiled by the platform-specific JVM, which acts as an abstraction layer between your Java program and the operating system.",
      keyPoints: [
        "Source code compiles to bytecode, not machine code",
        "Bytecode is platform-neutral intermediate code",
        "Each platform has its own JVM implementation",
        "JVM handles all platform-specific operations",
        "Write Once, Run Anywhere (WORA) principle"
      ],
      example: `HelloWorld.java → javac → HelloWorld.class (bytecode)
                     ↓
Windows JVM ← HelloWorld.class → Linux JVM
     ↓                              ↓
Windows OS                      Linux OS`,
      difficulty: "Basic"
    },
    {
      id: 3,
      question: "What are the main features of Java?",
      answer: "Java has several key features that make it popular: Object-Oriented (everything is an object), Platform Independent (WORA), Simple (easy syntax, no pointers), Secure (SecurityManager, no pointer arithmetic), Robust (strong memory management, exception handling), Multithreaded (concurrent programming support), High Performance (JIT compilation), Distributed (RMI, networking), and Dynamic (runtime class loading).",
      keyPoints: [
        "Object-Oriented Programming",
        "Platform Independence",
        "Automatic Memory Management",
        "Built-in Security",
        "Multithreading Support",
        "Rich Standard Library",
        "Strong Type Checking"
      ],
      difficulty: "Basic"
    },
    {
      id: 4,
      question: "What is the difference between == and .equals() method?",
      answer: "The == operator compares reference equality (memory addresses) for objects and value equality for primitives. The .equals() method compares logical equality (content) of objects. For primitives, == compares values directly. For objects, == checks if both references point to the same object in memory, while .equals() compares the actual content based on the implementation.",
      keyPoints: [
        "== compares references for objects, values for primitives",
        ".equals() compares object content",
        "String class overrides .equals() for content comparison",
        "Default Object.equals() uses == comparison",
        "Always use .equals() for object content comparison"
      ],
      example: `String s1 = new String("Hello");
String s2 = new String("Hello");
String s3 = s1;

s1 == s2      // false (different objects)
s1 == s3      // true (same reference)
s1.equals(s2) // true (same content)

// String pool exception
String s4 = "Hello";
String s5 = "Hello";
s4 == s5      // true (string pool)`,
      difficulty: "Basic"
    },
    {
      id: 5,
      question: "What are the primitive data types in Java?",
      answer: "Java has 8 primitive data types: byte (8-bit), short (16-bit), int (32-bit), long (64-bit) for integers; float (32-bit) and double (64-bit) for floating-point numbers; boolean for true/false values; and char (16-bit Unicode) for characters. Primitives are stored in stack memory and hold actual values, not references.",
      keyPoints: [
        "byte: -128 to 127",
        "short: -32,768 to 32,767",
        "int: -2^31 to 2^31-1 (default for integers)",
        "long: -2^63 to 2^63-1 (suffix L)",
        "float: single precision (suffix f)",
        "double: double precision (default for decimals)",
        "boolean: true or false",
        "char: single 16-bit Unicode character"
      ],
      example: `byte b = 100;
short s = 10000;
int i = 100000;
long l = 100000L;
float f = 10.5f;
double d = 10.5;
boolean bool = true;
char c = 'A';`,
      difficulty: "Basic"
    },
    {
      id: 6,
      question: "What is autoboxing and unboxing in Java?",
      answer: "Autoboxing is the automatic conversion of primitive types to their corresponding wrapper class objects (e.g., int to Integer). Unboxing is the reverse process - automatic conversion of wrapper objects to primitives. This feature was introduced in Java 5 to reduce boilerplate code when working with collections that only accept objects.",
      keyPoints: [
        "Autoboxing: primitive → wrapper (int → Integer)",
        "Unboxing: wrapper → primitive (Integer → int)",
        "Happens automatically when needed",
        "Can cause NullPointerException if wrapper is null",
        "Performance overhead due to object creation"
      ],
      example: `// Autoboxing
Integer num = 100; // int to Integer
List<Integer> list = new ArrayList<>();
list.add(50); // autoboxing

// Unboxing
Integer wrapper = 200;
int primitive = wrapper; // unboxing

// Be careful with null
Integer nullInt = null;
int bad = nullInt; // NullPointerException!`,
      difficulty: "Basic"
    },
    {
      id: 7,
      question: "What is the difference between String, StringBuilder, and StringBuffer?",
      answer: "String is immutable - once created, it cannot be changed. Any modification creates a new String object. StringBuilder is mutable and designed for single-threaded use, offering better performance. StringBuffer is also mutable but thread-safe (synchronized), making it slower than StringBuilder. Use String for unchanging text, StringBuilder for string manipulation in single-threaded environments, and StringBuffer when thread safety is required.",
      keyPoints: [
        "String: Immutable, thread-safe, stored in string pool",
        "StringBuilder: Mutable, not thread-safe, faster",
        "StringBuffer: Mutable, thread-safe, slower",
        "String creates new objects on modification",
        "StringBuilder/Buffer modify existing object"
      ],
      example: `// String - creates multiple objects
String str = "Hello";
str = str + " World"; // New object created

// StringBuilder - modifies same object
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World"); // Same object modified

// Performance: StringBuilder > StringBuffer > String`,
      difficulty: "Intermediate"
    },
    {
      id: 8,
      question: "What is the difference between final, finally, and finalize()?",
      answer: "These are three completely different concepts: 'final' is a keyword used to make variables constant, methods non-overridable, and classes non-inheritable. 'finally' is a block used with try-catch for code that must execute regardless of exceptions. 'finalize()' is a deprecated method called by garbage collector before object destruction.",
      keyPoints: [
        "final: keyword for constants/restrictions",
        "finally: exception handling block",
        "finalize(): deprecated cleanup method",
        "final prevents modification/inheritance",
        "finally always executes (except System.exit)",
        "finalize() is unreliable, use try-with-resources instead"
      ],
      example: `// final
final int CONSTANT = 100;
final class FinalClass { }
final void finalMethod() { }

// finally
try {
    // risky code
} catch (Exception e) {
    // handle error
} finally {
    // always executes
}

// finalize() - deprecated
@Deprecated
protected void finalize() { }`,
      difficulty: "Intermediate"
    },
    {
      id: 9,
      question: "What is the difference between checked and unchecked exceptions?",
      answer: "Checked exceptions are compile-time exceptions that must be either caught or declared in the method signature using 'throws'. They extend Exception but not RuntimeException (e.g., IOException, SQLException). Unchecked exceptions are runtime exceptions that don't need explicit handling. They extend RuntimeException (e.g., NullPointerException, ArrayIndexOutOfBoundsException).",
      keyPoints: [
        "Checked: Must handle or declare with throws",
        "Unchecked: Optional handling",
        "Checked: Compile-time checking",
        "Unchecked: Runtime checking",
        "Checked: IOException, SQLException, ClassNotFoundException",
        "Unchecked: NullPointerException, IllegalArgumentException"
      ],
      example: `// Checked exception - must handle
public void readFile(String filename) throws IOException {
    FileReader file = new FileReader(filename);
}

// Or catch it
try {
    FileReader file = new FileReader(filename);
} catch (IOException e) {
    e.printStackTrace();
}

// Unchecked exception - optional
public void divide(int a, int b) {
    int result = a / b; // May throw ArithmeticException
}`,
      difficulty: "Intermediate"
    },
    {
      id: 10,
      question: "What is the static keyword used for in Java?",
      answer: "The static keyword in Java is used to create class-level members that belong to the class rather than instances. It can be applied to variables (shared among all instances), methods (can be called without creating an object), blocks (executed when class is first loaded), and nested classes (can be accessed without outer class instance).",
      keyPoints: [
        "Static variables: Shared among all instances",
        "Static methods: Called on class, not instance",
        "Static blocks: Run once when class loads",
        "Static nested classes: Don't need outer instance",
        "Cannot access instance members from static context",
        "Memory efficient for shared data"
      ],
      example: `public class Counter {
    private static int count = 0; // Shared
    private String name; // Instance-specific
    
    static { // Static block
        System.out.println("Class loaded");
    }
    
    public static int getCount() { // Static method
        return count;
    }
}

// Usage
Counter.getCount(); // No object needed`,
      difficulty: "Basic"
    },
    {
      id: 11,
      question: "What are the four pillars of Object-Oriented Programming?",
      answer: "The four pillars of OOP are: Encapsulation (bundling data and methods, hiding implementation), Inheritance (acquiring properties from parent class), Polymorphism (multiple forms - method overloading/overriding), and Abstraction (hiding complexity, showing only essential features). These principles help create modular, reusable, and maintainable code.",
      keyPoints: [
        "Encapsulation: Data hiding with private fields and public methods",
        "Inheritance: Code reuse through parent-child relationships",
        "Polymorphism: One interface, multiple implementations",
        "Abstraction: Hide complex implementation details",
        "Work together to create robust designs"
      ],
      example: `// Encapsulation
class Account {
    private double balance; // Hidden
    public void deposit(double amt) { } // Controlled access
}

// Inheritance
class SavingsAccount extends Account { }

// Polymorphism
Account acc = new SavingsAccount(); // Parent ref to child

// Abstraction
abstract class Shape {
    abstract double area(); // What, not how
}`,
      difficulty: "Intermediate"
    },
    {
      id: 12,
      question: "What is method overloading and method overriding?",
      answer: "Method overloading is having multiple methods with the same name but different parameters in the same class (compile-time polymorphism). Method overriding is when a subclass provides a specific implementation for a method already defined in its parent class (runtime polymorphism). Overloading is resolved at compile time, overriding at runtime.",
      keyPoints: [
        "Overloading: Same name, different parameters",
        "Overriding: Same signature in parent and child",
        "Overloading: Compile-time polymorphism",
        "Overriding: Runtime polymorphism",
        "Overriding needs @Override annotation",
        "Can't override static or final methods"
      ],
      example: `// Overloading
class Calculator {
    int add(int a, int b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
    double add(double a, double b) { return a + b; }
}

// Overriding
class Animal {
    void sound() { System.out.println("Animal sound"); }
}
class Dog extends Animal {
    @Override
    void sound() { System.out.println("Bark"); }
}`,
      difficulty: "Intermediate"
    },
    {
      id: 13,
      question: "What is the difference between abstract class and interface?",
      answer: "Abstract classes are partially implemented classes that cannot be instantiated, can have constructors, instance variables, and concrete methods. Interfaces (before Java 8) could only have abstract methods. From Java 8, interfaces can have default and static methods. A class can extend only one abstract class but implement multiple interfaces.",
      keyPoints: [
        "Abstract class: Can have constructors, instance variables",
        "Interface: All variables are public static final",
        "Single inheritance for abstract classes",
        "Multiple inheritance for interfaces",
        "Abstract class: IS-A relationship",
        "Interface: CAN-DO relationship",
        "Java 8+: Interfaces can have default/static methods"
      ],
      example: `// Abstract class
abstract class Vehicle {
    protected int speed;
    
    public Vehicle(int speed) {
        this.speed = speed;
    }
    
    abstract void move();
    
    void stop() { // Concrete method
        speed = 0;
    }
}

// Interface
interface Flyable {
    int MAX_HEIGHT = 10000; // public static final
    
    void fly(); // abstract
    
    default void glide() { // Java 8+
        System.out.println("Gliding");
    }
}

// Multiple interfaces
class Bird extends Vehicle implements Flyable, Runnable { }`,
      difficulty: "Intermediate"
    },
    {
      id: 14,
      question: "What is the difference between ArrayList and LinkedList?",
      answer: "ArrayList uses a dynamic array to store elements, providing O(1) access time but O(n) for insertion/deletion in the middle. LinkedList uses a doubly-linked list, providing O(n) access time but O(1) for insertion/deletion if you have the node reference. ArrayList is better for frequent access, LinkedList for frequent insertion/deletion.",
      keyPoints: [
        "ArrayList: Dynamic array, fast random access",
        "LinkedList: Doubly-linked list, fast insertion/deletion",
        "ArrayList: Better for get/set operations",
        "LinkedList: Better for add/remove operations",
        "ArrayList: Less memory per element",
        "LinkedList: More memory (stores pointers)"
      ],
      example: `// ArrayList - fast access
ArrayList<String> arrayList = new ArrayList<>();
String item = arrayList.get(0); // O(1)

// LinkedList - fast insertion
LinkedList<String> linkedList = new LinkedList<>();
linkedList.addFirst("item"); // O(1)
linkedList.removeFirst(); // O(1)

// Performance comparison:
// Access: ArrayList O(1) vs LinkedList O(n)
// Insert at beginning: ArrayList O(n) vs LinkedList O(1)
// Insert at end: Both O(1)`,
      difficulty: "Intermediate"
    },
    {
      id: 15,
      question: "What is the difference between HashMap and HashTable?",
      answer: "HashMap is non-synchronized, allows one null key and multiple null values, and is generally faster. HashTable is synchronized (thread-safe), doesn't allow null keys or values, and is considered legacy. HashMap is part of the Collections framework, while HashTable predates it. For thread-safety, use ConcurrentHashMap instead of HashTable.",
      keyPoints: [
        "HashMap: Not synchronized, faster",
        "HashTable: Synchronized, thread-safe, slower",
        "HashMap: Allows null key and values",
        "HashTable: No null keys or values",
        "HashMap: Fail-fast iterator",
        "HashTable: Enumerator (not fail-fast)",
        "Use ConcurrentHashMap for thread-safety"
      ],
      example: `// HashMap
HashMap<String, Integer> map = new HashMap<>();
map.put(null, 1); // Allowed
map.put("key", null); // Allowed

// HashTable
Hashtable<String, Integer> table = new Hashtable<>();
// table.put(null, 1); // NullPointerException
// table.put("key", null); // NullPointerException

// Thread-safe alternative
ConcurrentHashMap<String, Integer> concurrent = new ConcurrentHashMap<>();`,
      difficulty: "Intermediate"
    },
    {
      id: 16,
      question: "What is garbage collection in Java?",
      answer: "Garbage collection is Java's automatic memory management process that identifies and removes objects that are no longer reachable from the program. It runs in the background, freeing developers from manual memory management. The JVM uses different GC algorithms (Serial, Parallel, G1GC, ZGC) based on application needs.",
      keyPoints: [
        "Automatic memory management",
        "Removes unreachable objects",
        "Prevents memory leaks",
        "Different GC algorithms available",
        "Can be tuned for performance",
        "System.gc() suggests but doesn't force GC"
      ],
      note: "Objects become eligible for GC when no live thread can access them.",
      difficulty: "Intermediate"
    },
    {
      id: 17,
      question: "What are Java 8 features?",
      answer: "Java 8 introduced functional programming features: Lambda expressions for concise code, Stream API for bulk data operations, Functional interfaces, Method references, Default and static methods in interfaces, Optional class for null handling, new Date/Time API, and more. These features modernized Java for functional programming paradigm.",
      keyPoints: [
        "Lambda expressions: (x, y) -> x + y",
        "Stream API: collection.stream().filter().map()",
        "Functional interfaces: @FunctionalInterface",
        "Method references: String::length",
        "Default methods in interfaces",
        "Optional<T> for null safety",
        "New Date/Time API (java.time)",
        "CompletableFuture for async programming"
      ],
      example: `// Lambda
list.forEach(item -> System.out.println(item));

// Stream
List<Integer> evens = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());

// Optional
Optional<String> optional = Optional.ofNullable(getString());
optional.ifPresent(System.out::println);`,
      difficulty: "Intermediate"
    },
    {
      id: 18,
      question: "What is multithreading in Java?",
      answer: "Multithreading is Java's capability to execute multiple threads concurrently, allowing parallel execution of tasks. Threads can be created by extending Thread class or implementing Runnable interface. Java provides synchronization mechanisms (synchronized keyword, locks) to handle concurrent access to shared resources.",
      keyPoints: [
        "Thread creation: extends Thread or implements Runnable",
        "Thread states: NEW, RUNNABLE, BLOCKED, WAITING, TERMINATED",
        "Synchronization prevents race conditions",
        "volatile keyword for visibility",
        "Thread pools for efficient management",
        "Concurrent collections for thread-safety"
      ],
      example: `// Method 1: Extending Thread
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running");
    }
}

// Method 2: Implementing Runnable
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Runnable running");
    }
}

// Usage
MyThread t1 = new MyThread();
t1.start();

Thread t2 = new Thread(new MyRunnable());
t2.start();`,
      difficulty: "Advanced"
    },
    {
      id: 19,
      question: "What is the volatile keyword in Java?",
      answer: "The volatile keyword ensures that a variable's value is always read from and written to main memory, not from thread's local cache. It guarantees visibility of changes across threads but doesn't provide atomicity. Used for flags and state variables that are accessed by multiple threads without requiring full synchronization.",
      keyPoints: [
        "Ensures visibility across threads",
        "Prevents caching in thread-local memory",
        "Doesn't provide atomicity",
        "Lighter than synchronization",
        "Good for boolean flags",
        "Not sufficient for compound operations"
      ],
      example: `class SharedFlag {
    private volatile boolean flag = false;
    
    public void setFlag() {
        flag = true; // Visible to all threads immediately
    }
    
    public boolean checkFlag() {
        return flag; // Always reads from main memory
    }
}

// Not atomic - still needs synchronization
volatile int counter = 0;
counter++; // Not thread-safe!`,
      difficulty: "Advanced"
    },
    {
      id: 20,
      question: "What is the difference between throw and throws?",
      answer: "'throw' is used to explicitly throw an exception from a method or block of code. 'throws' is used in method declaration to indicate that the method might throw certain exceptions, which must be handled by the calling method. 'throw' is followed by an exception instance, 'throws' by exception class names.",
      keyPoints: [
        "throw: Actually throws an exception",
        "throws: Declares possible exceptions",
        "throw: Used in method body",
        "throws: Used in method signature",
        "throw: Followed by exception instance",
        "throws: Followed by exception classes"
      ],
      example: `// throws - declaration
public void readFile(String name) throws IOException {
    if (name == null) {
        throw new IOException("File name is null"); // throw
    }
    // code that might throw IOException
}

// Calling method must handle
try {
    readFile("test.txt");
} catch (IOException e) {
    e.printStackTrace();
}`,
      difficulty: "Basic"
    },
    {
      id: 21,
      question: "What is the Singleton design pattern?",
      answer: "Singleton pattern ensures a class has only one instance and provides global access to it. It's implemented by making constructor private, creating a static instance, and providing a static method to get that instance. Common uses include database connections, logging, caching, and thread pools.",
      keyPoints: [
        "Only one instance per JVM",
        "Private constructor",
        "Static instance variable",
        "Static getInstance() method",
        "Thread-safety considerations",
        "Lazy vs eager initialization"
      ],
      example: `// Thread-safe Singleton
public class Singleton {
    private static volatile Singleton instance;
    
    private Singleton() {} // Private constructor
    
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}`,
      difficulty: "Advanced"
    },
    {
      id: 22,
      question: "What is dependency injection?",
      answer: "Dependency Injection (DI) is a design pattern where objects receive their dependencies from external sources rather than creating them internally. It promotes loose coupling, testability, and follows the Inversion of Control principle. Dependencies can be injected through constructor, setter methods, or field injection.",
      keyPoints: [
        "Reduces coupling between classes",
        "Improves testability",
        "Constructor injection (recommended)",
        "Setter injection",
        "Field injection",
        "Popular in Spring Framework"
      ],
      example: `// Without DI - tight coupling
class Car {
    private Engine engine = new Engine(); // Creates dependency
}

// With DI - loose coupling
class Car {
    private Engine engine;
    
    // Constructor injection
    public Car(Engine engine) {
        this.engine = engine;
    }
}

// Usage
Engine engine = new DieselEngine();
Car car = new Car(engine); // Inject dependency`,
      difficulty: "Advanced"
    },
    {
      id: 23,
      question: "What is the difference between deep copy and shallow copy?",
      answer: "Shallow copy creates a new object but copies only the references to nested objects, so changes to nested objects affect both copies. Deep copy creates new instances of all nested objects, making the copies completely independent. Java's Object.clone() performs shallow copy by default.",
      keyPoints: [
        "Shallow: Copies object references",
        "Deep: Copies actual objects",
        "Shallow: Faster, less memory",
        "Deep: Slower, more memory",
        "Changes in nested objects affect shallow copies",
        "Deep copies are completely independent"
      ],
      example: `class Address {
    String city;
}

class Person implements Cloneable {
    String name;
    Address address;
    
    // Shallow copy
    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
    
    // Deep copy
    public Person deepClone() {
        Person cloned = new Person();
        cloned.name = this.name;
        cloned.address = new Address();
        cloned.address.city = this.address.city;
        return cloned;
    }
}`,
      difficulty: "Advanced"
    },
    {
      id: 24,
      question: "What is the Java Memory Model?",
      answer: "The Java Memory Model (JMM) defines how threads interact through memory and what behaviors are allowed in concurrent execution. It specifies rules for visibility, ordering, and atomicity of variables shared between threads. Key areas include heap (objects), stack (local variables), and method area (class data).",
      keyPoints: [
        "Heap: Objects and arrays (shared)",
        "Stack: Local variables, method calls (thread-specific)",
        "Method Area: Class metadata, constants",
        "PC Register: Current instruction pointer",
        "Native Method Stack: Native method execution",
        "Young and Old generation in heap"
      ],
      note: "Understanding JMM is crucial for writing correct concurrent programs.",
      difficulty: "Advanced"
    },
    {
      id: 25,
      question: "What is the difference between fail-fast and fail-safe iterators?",
      answer: "Fail-fast iterators throw ConcurrentModificationException if the collection is modified while iterating (except through iterator's own methods). Fail-safe iterators work on a copy of the collection, so they don't throw exceptions but may not reflect the latest state. ArrayList uses fail-fast, CopyOnWriteArrayList uses fail-safe.",
      keyPoints: [
        "Fail-fast: Detects concurrent modification",
        "Fail-safe: Allows concurrent modification",
        "Fail-fast: Works on original collection",
        "Fail-safe: Works on copy",
        "Fail-fast: Better performance",
        "Fail-safe: More memory overhead"
      ],
      example: `// Fail-fast
List<String> list = new ArrayList<>();
Iterator<String> it = list.iterator();
list.add("item"); // Structural modification
it.next(); // ConcurrentModificationException

// Fail-safe
List<String> safeList = new CopyOnWriteArrayList<>();
Iterator<String> safeIt = safeList.iterator();
safeList.add("item"); // No exception
safeIt.next(); // Works fine`,
      difficulty: "Advanced"
    },
    {
      id: 26,
      question: "What is reflection in Java?",
      answer: "Reflection is a feature that allows runtime inspection and manipulation of classes, methods, fields, and constructors. It enables dynamic loading, instantiation, and invocation of classes and methods. While powerful, it should be used cautiously due to performance overhead and security implications.",
      keyPoints: [
        "Runtime class inspection",
        "Dynamic object creation",
        "Access private members",
        "Method invocation at runtime",
        "Used by frameworks (Spring, Hibernate)",
        "Performance overhead",
        "Can break encapsulation"
      ],
      example: `// Get class object
Class<?> clazz = Class.forName("java.lang.String");

// Create instance
Object obj = clazz.newInstance();

// Get method
Method method = clazz.getMethod("length");

// Invoke method
int length = (int) method.invoke("Hello");

// Access private field
Field field = clazz.getDeclaredField("value");
field.setAccessible(true);`,
      difficulty: "Advanced"
    }
  ]
};