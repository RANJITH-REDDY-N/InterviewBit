export const jsonContent = {
    id: 'json',
    name: 'JSON',
    icon: 'FileJson',
    difficulty: 'Beginner',
    questionCount: 2,
    color: 'blue',
  
    // Tab 1: Overview
    overview: {
      introduction: "JSON (JavaScript Object Notation) is a lightweight, text-based data interchange format that's easy for humans to read and write, and easy for machines to parse and generate. Despite its name suggesting a connection to JavaScript, JSON is language-independent and is used across virtually all modern programming languages.",
      
      keyFeatures: [
        {
          icon: "FileText",
          title: "Human Readable",
          description: "Simple syntax that's easy to understand"
        },
        {
          icon: "Zap",
          title: "Lightweight",
          description: "Minimal data overhead compared to XML"
        },
        {
          icon: "Globe",
          title: "Language Independent",
          description: "Supported by virtually all programming languages"
        },
        {
          icon: "Package",
          title: "Self-Documenting",
          description: "Structure describes the data"
        }
      ],
  
      structure: {
        title: "JSON Structure",
        description: "JSON is built on two structures:",
        components: [
          {
            name: "Object",
            description: "An unordered set of name/value pairs",
            syntax: "{ \"key\": \"value\" }",
            icon: "Braces"
          },
          {
            name: "Array",
            description: "An ordered collection of values",
            syntax: "[ \"value1\", \"value2\" ]",
            icon: "Brackets"
          }
        ]
      }
    },
  
    // Tab 2: Interview Questions
    questions: [
      {
        id: 1,
        question: "What is JSON and why is it popular for data exchange?",
        difficulty: "Beginner",
        topic: "JSON Basics",
        
        technicalAnswer: "JSON (JavaScript Object Notation) is a lightweight, text-based data interchange format. It's popular because it's human-readable, language-independent, and has a simple structure based on key-value pairs and arrays. JSON has become the de facto standard for REST APIs and web services due to its simplicity and broad support.",
        
        simpleExplanation: "Think of JSON as a universal language for sharing data between different systems. It's like a standardized form that any computer program can read and understand, making it perfect for APIs and web services.",
        
        visualAid: {
          type: "comparison-diagram",
          title: "JSON Data Flow",
          description: "How JSON facilitates data exchange",
          flow: [
            {
              step: 1,
              title: "Client Application",
              description: "Requests data",
              icon: "Monitor",
              color: "#3498db"
            },
            {
              step: 2,
              title: "API Server",
              description: "Processes request",
              icon: "Server",
              color: "#e74c3c"
            },
            {
              step: 3,
              title: "JSON Response",
              description: "Structured data",
              icon: "FileJson",
              color: "#2ecc71"
            },
            {
              step: 4,
              title: "Client Parses",
              description: "Uses the data",
              icon: "Code",
              color: "#9b59b6"
            }
          ]
        },
  
        codeExample: {
          title: "JSON Structure Example",
          language: "json",
          code: `{
    "user": {
      "id": 12345,
      "name": "John Doe",
      "email": "john@example.com",
      "isActive": true,
      "roles": ["admin", "user"],
      "profile": {
        "age": 30,
        "location": "New York",
        "interests": ["coding", "music", "travel"]
      },
      "lastLogin": "2024-01-15T10:30:00Z",
      "settings": null
    }
  }`
        },
  
        dataTypes: {
          title: "JSON Data Types",
          types: [
            {
              type: "String",
              example: '"Hello World"',
              description: "Text in double quotes",
              color: "#e74c3c"
            },
            {
              type: "Number",
              example: '42, 3.14, -10',
              description: "Integer or floating point",
              color: "#3498db"
            },
            {
              type: "Boolean",
              example: 'true, false',
              description: "Logical values",
              color: "#2ecc71"
            },
            {
              type: "Null",
              example: 'null',
              description: "Empty value",
              color: "#95a5a6"
            },
            {
              type: "Object",
              example: '{ "key": "value" }',
              description: "Nested structure",
              color: "#9b59b6"
            },
            {
              type: "Array",
              example: '[1, 2, 3]',
              description: "Ordered list",
              color: "#f39c12"
            }
          ]
        },
  
        comparisonTable: {
          title: "JSON vs Other Formats",
          headers: ["Feature", "JSON", "XML", "CSV"],
          rows: [
            ["Human Readable", "✓ Very Easy", "✓ Moderate", "✓ Easy"],
            ["Data Types", "6 types", "Text-based", "Text only"],
            ["Hierarchical", "✓ Yes", "✓ Yes", "✗ No"],
            ["Schema Support", "JSON Schema", "XSD/DTD", "✗ No"],
            ["File Size", "Small", "Large", "Smallest"],
            ["Parse Speed", "Fast", "Slow", "Fastest"],
            ["Metadata", "Limited", "Extensive", "None"]
          ]
        },
  
        commonUses: [
          "REST API responses",
          "Configuration files",
          "Data storage in NoSQL databases",
          "Web application state management",
          "Mobile app data exchange"
        ],
  
        tags: ["json", "data-format", "api", "rest"]
      },
      {
        id: 2,
        question: "How do you parse and stringify JSON in different languages?",
        difficulty: "Beginner",
        topic: "JSON Operations",
        
        technicalAnswer: "JSON parsing converts a JSON string into native data structures, while stringification converts native objects into JSON format. Most languages provide built-in methods or libraries for these operations.",
        
        simpleExplanation: "Parsing is like translating JSON text into objects your program can use. Stringifying is the reverse - converting your program's objects back into JSON text.",
        
        visualAid: {
          type: "bidirectional-flow",
          title: "Parse ↔ Stringify",
          left: {
            title: "JSON String",
            icon: "FileText",
            example: '{"name": "John", "age": 30}'
          },
          right: {
            title: "Native Object",
            icon: "Box",
            example: "Object { name: 'John', age: 30 }"
          },
          leftToRight: {
            label: "Parse",
            icon: "ArrowRight"
          },
          rightToLeft: {
            label: "Stringify",
            icon: "ArrowLeft"
          }
        },
  
        codeExample: {
          title: "JSON Operations in Multiple Languages",
          sections: [
            {
              language: "javascript",
              title: "JavaScript",
              code: `// Parse JSON string to object
  const jsonString = '{"name": "John", "age": 30, "city": "NYC"}';
  const obj = JSON.parse(jsonString);
  console.log(obj.name); // "John"
  
  // Stringify object to JSON
  const person = {
    name: "Jane",
    age: 25,
    hobbies: ["reading", "coding"]
  };
  const json = JSON.stringify(person);
  console.log(json); // '{"name":"Jane","age":25,"hobbies":["reading","coding"]}'
  
  // Pretty print with indentation
  const prettyJson = JSON.stringify(person, null, 2);
  
  // Handle parsing errors
  try {
    const data = JSON.parse('invalid json');
  } catch (error) {
    console.error('Invalid JSON:', error.message);
  }`
            },
            {
              language: "java",
              title: "Java (using Jackson)",
              code: `import com.fasterxml.jackson.databind.ObjectMapper;
  
  // Create ObjectMapper instance
  ObjectMapper mapper = new ObjectMapper();
  
  // Parse JSON to Java object
  String jsonString = "{\"name\":\"John\",\"age\":30}";
  Person person = mapper.readValue(jsonString, Person.class);
  System.out.println(person.getName()); // "John"
  
  // Convert Java object to JSON
  Person newPerson = new Person("Jane", 25);
  String json = mapper.writeValueAsString(newPerson);
  
  // Pretty print
  String prettyJson = mapper.writerWithDefaultPrettyPrinter()
                            .writeValueAsString(newPerson);
  
  // Parse to generic Map
  Map<String, Object> map = mapper.readValue(jsonString, 
      new TypeReference<Map<String, Object>>() {});`
            },
            {
              language: "python",
              title: "Python",
              code: `import json
  
  # Parse JSON string to dictionary
  json_string = '{"name": "John", "age": 30, "city": "NYC"}'
  data = json.loads(json_string)
  print(data['name'])  # "John"
  
  # Convert dictionary to JSON
  person = {
      "name": "Jane",
      "age": 25,
      "hobbies": ["reading", "coding"]
  }
  json_str = json.dumps(person)
  
  # Pretty print with indentation
  pretty_json = json.dumps(person, indent=2)
  
  # Read from file
  with open('data.json', 'r') as file:
      data = json.load(file)
  
  # Write to file
  with open('output.json', 'w') as file:
      json.dump(person, file, indent=2)
  
  # Handle errors
  try:
      data = json.loads('invalid json')
  except json.JSONDecodeError as e:
      print(f"Invalid JSON: {e}")`
            }
          ]
        },
  
        bestPractices: {
          title: "JSON Best Practices",
          practices: [
            {
              title: "Always validate JSON",
              description: "Use try-catch blocks when parsing",
              icon: "Shield"
            },
            {
              title: "Use consistent naming",
              description: "camelCase or snake_case, pick one",
              icon: "FileText"
            },
            {
              title: "Avoid circular references",
              description: "They can't be stringified",
              icon: "RefreshCw"
            },
            {
              title: "Consider size for large data",
              description: "JSON can be verbose for big datasets",
              icon: "HardDrive"
            }
          ]
        },
  
        commonErrors: [
          {
            error: "Trailing commas",
            wrong: '{ "name": "John", "age": 30, }',
            correct: '{ "name": "John", "age": 30 }',
            note: "No comma after last item"
          },
          {
            error: "Single quotes",
            wrong: "{ 'name': 'John' }",
            correct: '{ "name": "John" }',
            note: "JSON requires double quotes"
          },
          {
            error: "Undefined values",
            wrong: '{ "value": undefined }',
            correct: '{ "value": null }',
            note: "Use null, not undefined"
          }
        ],
  
        tags: ["json", "parsing", "stringify", "data-conversion"]
      }
    ],
  
    // Tab 3: Resources
    resources: {
      officialDocs: "https://www.json.org/",
      tools: [
        {
          name: "JSONLint",
          url: "https://jsonlint.com/",
          description: "Validate and format JSON"
        },
        {
          name: "JSON Schema",
          url: "https://json-schema.org/",
          description: "Define structure and validation rules"
        }
      ],
      tutorials: [
        "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON",
        "https://www.w3schools.com/js/js_json_intro.asp"
      ],
      books: [
        "JSON at Work by Tom Marrs",
        "JavaScript and JSON Essentials by Sai Srinivas Sriparasa"
      ]
    }
  };