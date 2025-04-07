import React, { useState } from 'react';
import '../styles/Tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'goals', label: 'Goals' },
    { id: 'actions', label: 'Actions' },
    { id: 'resources', label: 'Resources' },
  ];

  return (
    <div className="tabs">
      <ul className="tab-list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {activeTab === 'overview' && <div>Overview Content</div>}
        {activeTab === 'goals' && <div>Goals Content</div>}
        {activeTab === 'actions' && <div>Actions Content</div>}
        {activeTab === 'resources' && <div>Resources Content</div>}
      </div>
    </div>
  );
};

export default Tabs;