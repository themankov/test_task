import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={500}
    height={600}
    viewBox="0 0 500 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="78" y="8" rx="0" ry="0" width="150" height="200" />
    <rect x="61" y="218" rx="0" ry="0" width="45" height="12" />
    <rect x="61" y="239" rx="0" ry="0" width="240" height="52" />
    <rect x="65" y="310" rx="0" ry="0" width="170" height="24" />
  </ContentLoader>
);

export default Skeleton;
