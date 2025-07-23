import React from 'react';
import * as LucideIcons from 'lucide-react';

const IconLibrary = ({ iconName, className = '', size = 20, ...props }) => {
  // Get the requested icon component from lucide-react
  const IconComponent = LucideIcons[iconName];

  // If icon doesn't exist, show a placeholder or fallback
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in lucide-react library`);
    return <span className={`icon-placeholder ${className}`} {...props}>□</span>;
  }

  // Render the icon with given props
  return <IconComponent size={size} className={className} {...props} />;
};

export default IconLibrary;
