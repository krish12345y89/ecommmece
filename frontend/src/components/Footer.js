import React from 'react';

const Footer = () => {
  return (
    <footer className="py-3 bg-dark text-white mt-4">
      <div className="container text-center">&copy; {new Date().getFullYear()} E-Commerce</div>
    </footer>
  );
};

export default Footer;
