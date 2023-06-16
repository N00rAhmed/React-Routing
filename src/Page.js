import React from 'react';
import { useLocation } from 'react-router-dom';

function Page() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pageId = searchParams.get('id');

  return (
    <div>
      <h1>Page</h1>
      <p>Page ID: {pageId}</p>
    </div>
  );
}

export default Page;
