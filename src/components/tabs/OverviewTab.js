import React from 'react';

const OverviewTab = ({ overview }) => {
  if (!overview) {
    return <div>No overview content available</div>;
  }
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Brief Overview</h2>
      <p className="text-gray-700 dark:text-gray-300">
        {overview.introduction || 'No overview available.'}
      </p>
    </div>
  );
};

export default OverviewTab;
