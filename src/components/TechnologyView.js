import React, { useState } from 'react';
import { Eye, HelpCircle, Code, Lightbulb, Play, BookOpen, CheckCircle2 } from 'lucide-react';
import QuestionsTab from './tabs/QuestionsTab';
import OverviewTab from './tabs/OverviewTab';
import IconLibrary from './icons/IconLibrary';

const TechnologyView = ({ technology }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!technology) {
    return <div className="empty-state">Technology not found</div>;
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'questions', label: 'Interview Questions', icon: HelpCircle },
    { id: 'examples', label: 'Code Examples', icon: Code },
    { id: 'visual', label: 'Visual Learning', icon: Lightbulb },
    { id: 'practice', label: 'Practice', icon: Play },
    { id: 'resources', label: 'Resources', icon: BookOpen }
  ];

  return (
    <div className="technology-view">
      <div className="tech-header card">
        <div className="tech-header-content">
          <div className={`tech-icon-large ${technology.color || 'blue'}`}>
            <IconLibrary iconName={technology.icon} size={48} />
          </div>
          <div>
            <h2>{technology.name}</h2>
            <div className="tech-info">
              <span className={`difficulty ${technology.difficulty.toLowerCase()}`}>
                {technology.difficulty}
              </span>
              <span className="questions-count">{technology.questions} questions</span>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs-container">
        <div className="tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            >
              <tab.icon size={18} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="card tab-content">
          {activeTab === 'overview' && (
            <OverviewTab overview={technology.overview} />
          )}

          {activeTab === 'questions' && (
            <div className="questions-content">
              {technology.questions && technology.questions.length > 0 ? (
                <QuestionsTab questions={technology.questions} />
              ) : (
                <div className="empty-state">
                  <HelpCircle size={48} />
                  <p>Interview questions for {technology.name} are coming soon!</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'examples' && (
            <div className="examples-content">
              <div className="empty-state">
                <Code size={48} />
                <p>Code examples for {technology.name} are coming soon!</p>
              </div>
            </div>
          )}

          {activeTab === 'visual' && (
            <div className="visual-content">
              <div className="empty-state">
                <Lightbulb size={48} />
                <p>Visual learning resources for {technology.name} are coming soon!</p>
              </div>
            </div>
          )}

          {activeTab === 'practice' && (
            <div className="practice-content">
              <div className="empty-state">
                <Play size={48} />
                <p>Practice exercises for {technology.name} are coming soon!</p>
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="resources-content">
              <h3 className="text-xl font-bold mb-4">External References</h3>
              <ul className="list-disc pl-5 space-y-2">
                {technology.resources?.officialDocs && (
                  <li>
                    <a href={technology.resources.officialDocs} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Official Documentation</a>
                  </li>
                )}
                {technology.resources?.tutorials && technology.resources.tutorials.map((url, idx) => (
                  <li key={idx}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{url}</a>
                  </li>
                ))}
                {technology.resources?.books && technology.resources.books.map((book, idx) => (
                  <li key={idx}>{book}</li>
                ))}
                {technology.resources?.practiceLinks && technology.resources.practiceLinks.map((url, idx) => (
                  <li key={idx}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{url}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechnologyView;
