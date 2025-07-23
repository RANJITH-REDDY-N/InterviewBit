# Technical Interview Guide – Project Structure & Implementation Plan  

---

## 🎯 1. Project Objective
Build a modular, content-driven web application that helps candidates prepare for technical interviews across a broad set of topics.  
Key requirements:

* Clean, **scalable folder hierarchy** – every technology lives in its own JS file.  
* **Rich content model** – supports overview, Q&A, code, diagrams, practice tasks, resources.  
* **Progress tracking & search** out-of-the-box; future-ready for PWA, AI personalisation, analytics.

---

## 🛠️ 2. Tech Stack

| Layer           | Choice / Version  | Notes                                          |
|-----------------|-------------------|------------------------------------------------|
| Front-end       | React 19.1 + React-DOM 19.1 | Hooks, Suspense for lazy loading.             |
| Styling         | Custom CSS        | Modular CSS with dark/light themes.            |
| Icons           | lucide-react      | Consistent iconography.                        |
| Tooling         | react-scripts 5   | CRA base; will migrate to Vite later if needed |
| Testing         | RTL 16 / Jest DOM | Unit & integration tests.                      |
| Package Mgr     | npm               | Lockfile committed.                            |

---

## 🗂️ 3. Directory Layout (v1)

```
tech-interview-guide/
├── public/
├── src/
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   ├── components/         # Re-usable UI widgets
│   ├── features/           # Feature slices (Search, Progress …)
│   └── tech/               # <── All content lives here
│       ├── languages/
│       │   ├── java.js
│       │   ├── sql.js
│       │   ├── json.js
│       │   └── xml.js
│       ├── frameworks/
│       │   ├── spring-boot.js
│       │   ├── react.js
│       │   └── …
│       ├── cloud/
│       │   ├── aws-s3.js
│       │   ├── aws-ec2.js
│       │   └── …
│       └── index.js        # Barrel export for all tech files
├── package.json
└── PROJECT_PLAN.md         # ← you are here
```

---

## 🧩 4. Content Schema (used by every `*.js` file)

```javascript
export const <techId>Content = {
  id, name, icon, difficulty, questionCount,
  overview: { introduction, importance, features, roadmap },
  questions: [ /* interview Q&As */ ],
  codeExamples: [ /* runnable code */ ],
  visualLearning: [ /* diagrams, charts */ ],
  practiceProblems: [ /* hands-on tasks */ ],
  resources: { officialDocs, tutorials, books, practiceLinks }
};
```

Consistency = effortless rendering & search across technologies.

---

## 🚧 5. Implementation Phases

| Phase | Goal | Key Tasks |
|-------|------|-----------|
| **1** | _Modularisation_ | • Create `src/tech` sub-tree<br>• Move Java questions into `languages/java.js` (done)<br>• Barrel export `tech/index.js` |
| **2** | _Dynamic Data Loading_ | • Replace hard-coded sample data in `App.js`<br>• Lazy-import tech files with `React.lazy` / `Suspense` |
| **3** | _Tab System_ | • `TechnologyView` with 6 tabs (Overview, Q&A, Code, Visuals, Practice, Resources)<br>• Sub-components + CSS styling |
| **4** | _Search & Filters_ | • Full-text index on load<br>• Difficulty/topic filters<br>• Keyboard shortcuts |
| **5** | _Progress & State_ | • Context + localStorage persistence<br>• Question → Topic → Tech roll-ups |
| **6** | _Polish & Testing_ | • RTL tests for tab nav & search<br>• Lighthouse pass ≥ 95 |
| **7** | _Future Roadmap_ | • PWA offline<br>• User auth & cloud sync<br>• AI-driven learning paths |

---

## 📚 6. Java – Top 50 Interview Questions (IDs only – full details live in `languages/java.js`)

| # | Question |
|---|----------|
| 1 | Difference between JDK, JRE, JVM |
| 2 | Why is Java platform-independent? |
| 3 | Main features of Java |
| 4 | `==` vs `.equals()` |
| 5 | Primitive data types |
| 6 | Autoboxing & Unboxing |
| 7 | `String`, `StringBuilder`, `StringBuffer` differences |
| 8 | `final`, `finally`, `finalize()` |
| 9 | Checked vs Unchecked exceptions |
| 10| `static` keyword use-cases |
| 11| Four pillars of OOP |
| 12| Types of inheritance |
| 13| Compile-time vs runtime polymorphism |
| 14| Encapsulation – how to achieve |
| 15| Abstraction vs Interface |
| 16| Abstract class vs Interface |
| 17| Java 8 features overview |
| 18| Functional interfaces & `@FunctionalInterface` |
| 19| Lambda expressions syntax |
| 20| Stream API – intermediate vs terminal ops |
| 21| `HashMap` vs `Hashtable` vs `ConcurrentHashMap` |
| 22| Fail-fast vs fail-safe iterators |
| 23| `Comparable` vs `Comparator` |
| 24| java.util.concurrent package essentials |
| 25| `synchronized` vs `Lock` interface |
| 26| Volatile variable – when to use |
| 27| `Thread` vs `Runnable` |
| 28| Immutable objects – how & why |
| 29| JVM memory model (Heap, Stack, Metaspace…) |
| 30| Garbage collection algorithms |
| 31| Class Loader hierarchy |
| 32| Serialization & `serialVersionUID` |
| 33| Reflection – pros/cons |
| 34| Annotations & custom annotations |
| 35| `try-with-resources` and `AutoCloseable` |
| 36| Design patterns – Singleton implementations |
| 37| `enum` capabilities in Java |
| 38| `Optional` class usage |
| 39| Difference between `==`, `equals`, `compareTo` |
| 40| Big-O of `ArrayList` vs `LinkedList` operations |
| 41| Java Modules (`module-info.java`) |
| 42| `String.intern()` mechanics |
| 43| `WeakReference`, `SoftReference`, `PhantomReference` |
| 44| `CompletableFuture` vs `Future` |
| 45| `@Override`, `@Deprecated`, `@SuppressWarnings` |
| 46| Security manager & sandboxing |
| 47| JIT compilation & HotSpot optimisations |
| 48| `ProcessBuilder` vs `Runtime.exec()` |
| 49| Java-Native Interface (JNI) basics |
| 50| Best practices for high-performance Java apps |

All answers, code samples, visuals, practice tasks, and cross-links are already present (or will be added) in **`src/tech/languages/java.js`**, following the shared schema.

---

## ✅ 7. Done Today

* Added full Java tech file with modular schema.  
* Drafted this **PROJECT_PLAN.md** documenting structure, phases, and question index.

---

## ⏭️ 8. Next Up (Sprint – 2 days)

1. Barrel export (`src/tech/index.js`).  
2. Refactor `App.js` to consume tech content dynamically.  
3. Implement tab components for Overview & Questions.  
4. Begin SQL content file scaffold (10 Qs).

Happy coding! 🚀
