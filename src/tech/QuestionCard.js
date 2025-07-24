import React, { useState } from 'react';
import { 
  ChevronDown, ChevronUp, Copy, Check, Code, Lightbulb,
  AlertCircle, Shield, FileText, Globe, Zap, Package,
  GitBranch, Box, Monitor, Server, ArrowRight, ArrowLeft,
  CheckCircle, Type, Layers, Quote, CheckSquare, Settings,
  RefreshCw, Cpu, FileCode, Layout, Binary, Users, HelpCircle
} from 'lucide-react';
import './QuestionCard.css';

// Icon mapping for dynamic icon rendering
const iconMap = {
  Globe, Shield, Cpu, Users, FileCode, Settings, Binary, Monitor,
  GitBranch, Package, FileText, Zap, Box, Code, Lightbulb,
  AlertCircle, Check, CheckCircle, ArrowRight, ArrowLeft,
  Type, Layers, Quote, CheckSquare, RefreshCw, Layout, Server,
  HelpCircle
};

const IconComponent = ({ name, ...props }) => {
  const Icon = iconMap[name] || AlertCircle;
  return <Icon {...props} />;
};

// Code block component with syntax highlighting
const CodeBlock = ({ code, language = 'java', title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block-wrapper">
      {title && <div className="code-block-title">{title}</div>}
      <div className="code-block">
        <div className="code-header">
          <span className="code-language">{language}</span>
          <button onClick={handleCopy} className="copy-btn">
            {copied ? (
              <>
                <Check size={16} />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        <pre className="code-content">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

// Visual aid components
const FlowDiagram = ({ flow }) => (
  <div className="flow-diagram">
    {flow.map((step, index) => (
      <React.Fragment key={step.step}>
        <div className="flow-step" style={{ backgroundColor: step.color }}>
          <div className="step-icon">
            <IconComponent name={step.icon} size={24} />
          </div>
          <div className="step-content">
            <div className="step-title">{step.title}</div>
            <div className="step-description">{step.description}</div>
          </div>
        </div>
        {index < flow.length - 1 && (
          <div className="flow-arrow">
            <ArrowRight size={20} />
          </div>
        )}
      </React.Fragment>
    ))}
  </div>
);

const ComparisonVisual = ({ leftSide, rightSide }) => (
  <div className="comparison-visual">
    <div className="comparison-side" style={{ borderColor: leftSide.color }}>
      <div className="comparison-header" style={{ backgroundColor: leftSide.color }}>
        <IconComponent name={leftSide.icon} size={24} />
        <h4>{leftSide.title}</h4>
      </div>
      <div className="comparison-content">
        {leftSide.example && (
          <pre className="comparison-example">{leftSide.example}</pre>
        )}
        {leftSide.features && (
          <ul className="comparison-features">
            {leftSide.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
    <div className="comparison-vs">VS</div>
    <div className="comparison-side" style={{ borderColor: rightSide.color }}>
      <div className="comparison-header" style={{ backgroundColor: rightSide.color }}>
        <IconComponent name={rightSide.icon} size={24} />
        <h4>{rightSide.title}</h4>
      </div>
      <div className="comparison-content">
        {rightSide.example && (
          <pre className="comparison-example">{rightSide.example}</pre>
        )}
        {rightSide.features && (
          <ul className="comparison-features">
            {rightSide.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
);

const DataTypeGrid = ({ types }) => (
  <div className="data-type-grid">
    {types.map((type, idx) => (
      <div key={idx} className="data-type-card" style={{ borderColor: type.color }}>
        <div className="type-header">
          <h5>{type.type}</h5>
        </div>
        <div className="type-example">{type.example}</div>
        <div className="type-description">{type.description}</div>
      </div>
    ))}
  </div>
);

const ComparisonTable = ({ title, headers, rows }) => (
  <div className="comparison-table-wrapper">
    {title && <h4 className="table-title">{title}</h4>}
    <table className="comparison-table">
      <thead>
        <tr>
          {headers.map((header, idx) => (
            <th key={idx}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {row.map((cell, cellIdx) => (
              <td key={cellIdx}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const BidirectionalFlow = ({ left, right, leftToRight, rightToLeft }) => (
  <div className="bidirectional-flow">
    <div className="flow-endpoint">
      <div className="endpoint-icon">
        <IconComponent name={left.icon} size={32} />
      </div>
      <h4>{left.title}</h4>
      <div className="endpoint-example">{left.example}</div>
    </div>
    
    <div className="flow-arrows">
      <div className="arrow-container top">
        <div className="arrow-label">{leftToRight.label}</div>
        <ArrowRight size={24} />
      </div>
      <div className="arrow-container bottom">
        <ArrowLeft size={24} />
        <div className="arrow-label">{rightToLeft.label}</div>
      </div>
    </div>
    
    <div className="flow-endpoint">
      <div className="endpoint-icon">
        <IconComponent name={right.icon} size={32} />
      </div>
      <h4>{right.title}</h4>
      <div className="endpoint-example">{right.example}</div>
    </div>
  </div>
);

// Main Question Card Component
const QuestionCard = ({ question, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeView, setActiveView] = useState('simple');

  return (
    <div className="question-card">
      <div 
        className="question-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="question-info">
          <span className="question-number">Q{index + 1}</span>
          <div className="question-meta">
            <h3 className="question-title">{question.question}</h3>
            <div className="question-tags">
              <span className={`difficulty-badge ${question.difficulty.toLowerCase()}`}>
                {question.difficulty}
              </span>
              <span className="topic-badge">{question.topic}</span>
            </div>
          </div>
        </div>
        <button className="expand-btn">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {isExpanded && (
        <div className="question-content">
          {/* Answer type selector */}
          <div className="answer-selector">
            <button
              className={`selector-btn ${activeView === 'simple' ? 'active' : ''}`}
              onClick={() => setActiveView('simple')}
            >
              <Lightbulb size={16} />
              Simple Explanation
            </button>
            <button
              className={`selector-btn ${activeView === 'technical' ? 'active' : ''}`}
              onClick={() => setActiveView('technical')}
            >
              <Code size={16} />
              Technical Answer
            </button>
          </div>

          {/* Answer content */}
          <div className="answer-content">
            {activeView === 'simple' && (
              <div className="simple-answer">
                <p>{question.simpleExplanation}</p>
              </div>
            )}
            {activeView === 'technical' && (
              <div className="technical-answer">
                <p>{question.technicalAnswer}</p>
              </div>
            )}
          </div>

          {/* Visual Aid */}
          {question.visualAid && (
            <div className="visual-aid-section">
              <h4 className="section-title">{question.visualAid.title}</h4>
              {question.visualAid.description && (
                <p className="section-description">{question.visualAid.description}</p>
              )}
              
              {question.visualAid.type === 'comparison-diagram' && question.visualAid.flow && (
                <FlowDiagram flow={question.visualAid.flow} />
              )}
              
              {question.visualAid.type === 'comparison-visual' && (
                <ComparisonVisual 
                  leftSide={question.visualAid.leftSide}
                  rightSide={question.visualAid.rightSide}
                />
              )}
              
              {question.visualAid.type === 'bidirectional-flow' && (
                <BidirectionalFlow {...question.visualAid} />
              )}
              
              {question.visualAid.type === 'validation-flow' && question.visualAid.steps && (
                <FlowDiagram flow={question.visualAid.steps} />
              )}
            </div>
          )}

          {/* Data Types */}
          {question.dataTypes && (
            <div className="data-types-section">
              <h4 className="section-title">{question.dataTypes.title}</h4>
              <DataTypeGrid types={question.dataTypes.types} />
            </div>
          )}

          {/* Code Example */}
          {question.codeExample && (
            <div className="code-example-section">
              <h4 className="section-title">Code Example</h4>
              {question.codeExample.sections ? (
                question.codeExample.sections.map((section, idx) => (
                  <CodeBlock
                    key={idx}
                    title={section.title}
                    code={section.code}
                    language={section.language}
                  />
                ))
              ) : (
                <CodeBlock
                  title={question.codeExample.title}
                  code={question.codeExample.code}
                  language={question.codeExample.language}
                />
              )}
            </div>
          )}

          {/* Comparison Table */}
          {question.comparisonTable && (
            <div className="table-section">
              <ComparisonTable {...question.comparisonTable} />
            </div>
          )}

          {/* Syntax Rules */}
          {question.syntaxRules && (
            <div className="syntax-rules-section">
              <h4 className="section-title">{question.syntaxRules.title}</h4>
              <div className="rules-grid">
                {question.syntaxRules.rules.map((rule, idx) => (
                  <div key={idx} className="rule-card">
                    <div className="rule-header">
                      <IconComponent name={rule.icon} size={20} />
                      <h5>{rule.rule}</h5>
                    </div>
                    <div className="rule-examples">
                      <div className="example valid">
                        <CheckCircle size={16} className="icon-valid" />
                        <code>{rule.valid}</code>
                      </div>
                      <div className="example invalid">
                        <AlertCircle size={16} className="icon-invalid" />
                        <code>{rule.invalid}</code>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Best Practices */}
          {question.bestPractices && (
            <div className="best-practices-section">
              <h4 className="section-title">{question.bestPractices.title}</h4>
              <div className="practices-grid">
                {question.bestPractices.practices.map((practice, idx) => (
                  <div key={idx} className="practice-card">
                    <IconComponent name={practice.icon} size={24} className="practice-icon" />
                    <h5>{practice.title}</h5>
                    <p>{practice.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Common Errors */}
          {question.commonErrors && (
            <div className="common-errors-section">
              <h4 className="section-title">Common Errors</h4>
              <div className="errors-list">
                {question.commonErrors.map((error, idx) => (
                  <div key={idx} className="error-item">
                    <h5>{error.error}</h5>
                    <div className="error-examples">
                      <div className="error-wrong">
                        <span className="label">❌ Wrong:</span>
                        <code>{error.wrong}</code>
                      </div>
                      <div className="error-correct">
                        <span className="label">✅ Correct:</span>
                        <code>{error.correct}</code>
                      </div>
                    </div>
                    {error.note && <p className="error-note">{error.note}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {question.tags && (
            <div className="tags-section">
              {question.tags.map((tag, idx) => (
                <span key={idx} className="tag">#{tag}</span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;