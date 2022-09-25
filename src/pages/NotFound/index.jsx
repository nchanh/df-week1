import React from 'react';

function NotFound({ className }) {
  return (
    <div className={className}>
      <img
        src="https://cdn.tgdd.vn/hoi-dap/580732/loi-404-not-found-la-gi-9-cach-khac-phuc-loi-404-not-1-800x450.jpg"
        alt="404-not-found"
      />
    </div>
  );
}

NotFound.propTypes = {};

export default NotFound;
