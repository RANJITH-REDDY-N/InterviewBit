export const xmlContent = {
    id: 'xml',
    name: 'XML',
    icon: 'Code',
    difficulty: 'Beginner',
    questionCount: 2,
    color: 'green',
  
    // Tab 1: Overview
    overview: {
      introduction: "XML (eXtensible Markup Language) is a markup language designed to store and transport data. Unlike HTML which focuses on displaying data, XML focuses on describing data. It's both human-readable and machine-readable, making it ideal for configuration files, data exchange, and document storage.",
      
      keyFeatures: [
        {
          icon: "FileText",
          title: "Self-Descriptive",
          description: "Tags describe the data they contain"
        },
        {
          icon: "GitBranch",
          title: "Hierarchical Structure",
          description: "Tree-like structure with parent-child relationships"
        },
        {
          icon: "Check",
          title: "Validation Support",
          description: "DTD and XSD for structure validation"
        },
        {
          icon: "Globe",
          title: "Platform Independent",
          description: "Works across all systems and languages"
        }
      ],
  
      structure: {
        title: "XML Document Structure",
        components: [
          {
            name: "XML Declaration",
            example: '<?xml version="1.0" encoding="UTF-8"?>',
            description: "Optional but recommended",
            order: 1
          },
          {
            name: "Root Element",
            example: '<root>...</root>',
            description: "Single root element contains all others",
            order: 2
          },
          {
            name: "Elements",
            example: '<element>content</element>',
            description: "Basic building blocks",
            order: 3
          },
          {
            name: "Attributes",
            example: '<element attr="value">',
            description: "Additional element information",
            order: 4
          }
        ]
      }
    },
  
    // Tab 2: Interview Questions
    questions: [
      {
        id: 1,
        question: "What is XML and how does it differ from HTML?",
        difficulty: "Beginner",
        topic: "XML Basics",
        
        technicalAnswer: "XML (eXtensible Markup Language) is a markup language designed for storing and transporting data. Unlike HTML, which is predefined and focuses on displaying data, XML is extensible (you define your own tags) and focuses on describing data. XML is strict about syntax rules, while HTML is more forgiving.",
        
        simpleExplanation: "Think of HTML as a painter who knows how to make things look pretty, while XML is like a librarian who organizes and describes information. HTML has fixed tags like <h1> for headings, but in XML you create your own tags like <book> or <author> to describe your data.",
        
        visualAid: {
          type: "comparison-visual",
          title: "XML vs HTML",
          leftSide: {
            title: "XML - Describes Data",
            icon: "FileCode",
            color: "#2ecc71",
            example: `<book>
    <title>Learn XML</title>
    <author>John Doe</author>
    <price>29.99</price>
  </book>`,
            features: [
              "Custom tags",
              "Strict syntax",
              "Data transport",
              "Case sensitive"
            ]
          },
          rightSide: {
            title: "HTML - Displays Data",
            icon: "Layout",
            color: "#3498db",
            example: `<h1>Learn XML</h1>
  <p>By John Doe</p>
  <span>$29.99</span>`,
            features: [
              "Predefined tags",
              "Forgiving syntax",
              "Web display",
              "Case insensitive"
            ]
          }
        },
  
        codeExample: {
          title: "Complete XML Example",
          language: "xml",
          code: `<?xml version="1.0" encoding="UTF-8"?>
  <!-- This is a comment -->
  <library>
    <book id="001" category="programming">
      <title lang="en">XML Fundamentals</title>
      <author>
        <firstName>John</firstName>
        <lastName>Smith</lastName>
      </author>
      <publishYear>2024</publishYear>
      <price currency="USD">49.99</price>
      <topics>
        <topic>XML Basics</topic>
        <topic>DTD and Schema</topic>
        <topic>XSLT Transformation</topic>
      </topics>
      <available>true</available>
    </book>
    
    <book id="002" category="web">
      <title lang="en">Web Services with XML</title>
      <author>
        <firstName>Jane</firstName>
        <lastName>Doe</lastName>
      </author>
      <publishYear>2023</publishYear>
      <price currency="EUR">39.99</price>
      <available>false</available>
    </book>
  </library>`
        },
  
        syntaxRules: {
          title: "XML Syntax Rules",
          rules: [
            {
              rule: "Must have a root element",
              icon: "GitBranch",
              valid: "<root><child/></root>",
              invalid: "<child1/><child2/>"
            },
            {
              rule: "Tags are case sensitive",
              icon: "Type",
              valid: "<Name>...</Name>",
              invalid: "<Name>...</name>"
            },
            {
              rule: "Elements must be properly nested",
              icon: "Layers",
              valid: "<a><b>text</b></a>",
              invalid: "<a><b>text</a></b>"
            },
            {
              rule: "Attribute values must be quoted",
              icon: "Quote",
              valid: '<elem attr="value">',
              invalid: "<elem attr=value>"
            },
            {
              rule: "Tags must be closed",
              icon: "CheckSquare",
              valid: "<tag>text</tag> or <tag/>",
              invalid: "<tag>text"
            }
          ]
        },
  
        useCases: {
          title: "Common XML Use Cases",
          cases: [
            {
              name: "Configuration Files",
              examples: ["web.xml", "pom.xml", "app.config"],
              icon: "Settings"
            },
            {
              name: "Data Exchange",
              examples: ["SOAP", "RSS", "Sitemaps"],
              icon: "RefreshCw"
            },
            {
              name: "Document Storage",
              examples: ["DOCX", "SVG", "MathML"],
              icon: "FileText"
            }
          ]
        },
  
        tags: ["xml", "markup", "data-format", "structure"]
      },
      {
        id: 2,
        question: "How do you validate XML documents?",
        difficulty: "Beginner",
        topic: "XML Validation",
        
        technicalAnswer: "XML documents can be validated using DTD (Document Type Definition) or XSD (XML Schema Definition). DTD is older and simpler but less powerful, while XSD is more complex but provides better data type support and is itself written in XML. Validation ensures the XML document follows defined structure and data type rules.",
        
        simpleExplanation: "XML validation is like having a blueprint for a building. Just as blueprints ensure all rooms and doors are in the right place, DTD or XSD ensures your XML has the right structure with all required elements in the correct format.",
        
        visualAid: {
          type: "validation-flow",
          title: "XML Validation Process",
          steps: [
            {
              title: "XML Document",
              icon: "FileCode",
              description: "Your data file",
              color: "#3498db"
            },
            {
              title: "Validator",
              icon: "Shield",
              description: "Checks against rules",
              color: "#e74c3c"
            },
            {
              title: "DTD/XSD Schema",
              icon: "FileText",
              description: "Defines structure",
              color: "#f39c12"
            },
            {
              title: "Result",
              icon: "CheckCircle",
              description: "Valid or Invalid",
              color: "#2ecc71"
            }
          ]
        },
  
        codeExample: {
          title: "XML Validation Examples",
          sections: [
            {
              title: "DTD (Document Type Definition)",
              language: "xml",
              code: `<!-- books.dtd -->
  <!ELEMENT library (book+)>
  <!ELEMENT book (title, author, year, price)>
  <!ATTLIST book id ID #REQUIRED>
  <!ATTLIST book category CDATA #IMPLIED>
  <!ELEMENT title (#PCDATA)>
  <!ELEMENT author (#PCDATA)>
  <!ELEMENT year (#PCDATA)>
  <!ELEMENT price (#PCDATA)>
  
  <!-- XML with DTD reference -->
  <?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE library SYSTEM "books.dtd">
  <library>
    <book id="b001" category="fiction">
      <title>The Great Adventure</title>
      <author>John Smith</author>
      <year>2024</year>
      <price>19.99</price>
    </book>
  </library>`
            },
            {
              title: "XSD (XML Schema)",
              language: "xml",
              code: `<!-- books.xsd -->
  <?xml version="1.0" encoding="UTF-8"?>
  <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    
    <xs:element name="library">
      <xs:complexType>
        <xs:sequence>
          <xs:element name="book" maxOccurs="unbounded">
            <xs:complexType>
              <xs:sequence>
                <xs:element name="title" type="xs:string"/>
                <xs:element name="author" type="xs:string"/>
                <xs:element name="year" type="xs:integer"/>
                <xs:element name="price" type="xs:decimal"/>
              </xs:sequence>
              <xs:attribute name="id" type="xs:ID" use="required"/>
              <xs:attribute name="category" type="xs:string"/>
            </xs:complexType>
          </xs:element>
        </xs:sequence>
      </xs:complexType>
    </xs:element>
    
  </xs:schema>
  
  <!-- XML with XSD reference -->
  <?xml version="1.0" encoding="UTF-8"?>
  <library xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xsi:noNamespaceSchemaLocation="books.xsd">
    <book id="b001" category="fiction">
      <title>The Great Adventure</title>
      <author>John Smith</author>
      <year>2024</year>
      <price>19.99</price>
    </book>
  </library>`
            },
            {
              title: "Validation in Java",
              language: "java",
              code: `import javax.xml.parsers.*;
  import javax.xml.validation.*;
  import org.xml.sax.SAXException;
  
  // Validate with XSD
  public void validateXML(String xmlFile, String xsdFile) {
      try {
          // Create schema factory
          SchemaFactory factory = SchemaFactory
              .newInstance(XMLConstants.W3C_XML_SCHEMA_NS_URI);
          
          // Load schema
          Schema schema = factory.newSchema(new File(xsdFile));
          
          // Create validator
          Validator validator = schema.newValidator();
          
          // Validate XML
          validator.validate(new StreamSource(new File(xmlFile)));
          
          System.out.println("XML is valid!");
          
      } catch (SAXException e) {
          System.out.println("XML is invalid: " + e.getMessage());
      } catch (Exception e) {
          e.printStackTrace();
      }
  }`
            }
          ]
        },
  
        comparisonTable: {
          title: "DTD vs XSD",
          headers: ["Feature", "DTD", "XSD"],
          rows: [
            ["Syntax", "Non-XML syntax", "XML syntax"],
            ["Data Types", "Limited (text only)", "Rich (44+ types)"],
            ["Namespaces", "No support", "Full support"],
            ["Constraints", "Basic", "Advanced"],
            ["Reusability", "Limited", "High"],
            ["Learning Curve", "Simple", "Complex"],
            ["Industry Usage", "Legacy systems", "Modern standard"]
          ]
        },
  
        validationBenefits: [
          {
            benefit: "Data Integrity",
            description: "Ensures data follows expected format",
            icon: "Shield"
          },
          {
            benefit: "Error Prevention",
            description: "Catches issues before processing",
            icon: "AlertCircle"
          },
          {
            benefit: "Documentation",
            description: "Schema serves as data contract",
            icon: "FileText"
          },
          {
            benefit: "Automation",
            description: "Tools can generate code from schema",
            icon: "Cpu"
          }
        ],
  
        tags: ["xml", "validation", "dtd", "xsd", "schema"]
      }
    ],
  
    // Tab 3: Resources
    resources: {
      officialDocs: "https://www.w3.org/XML/",
      tools: [
        {
          name: "XML Validator",
          url: "https://www.xmlvalidation.com/",
          description: "Online XML validation tool"
        },
        {
          name: "XSD Generator",
          url: "https://www.freeformatter.com/xsd-generator.html",
          description: "Generate XSD from XML"
        }
      ],
      tutorials: [
        "https://www.w3schools.com/xml/",
        "https://developer.mozilla.org/en-US/docs/Web/XML"
      ],
      books: [
        "Learning XML by Erik T. Ray",
        "XML in a Nutshell by Elliotte Rusty Harold"
      ]
    }
  };