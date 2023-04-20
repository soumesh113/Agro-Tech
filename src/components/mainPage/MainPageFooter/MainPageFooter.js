import React from 'react';
import classes from './MainPageFooter.module.css';

function MainPageFooter() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footercontainer}>
        <div className={classes.footercolumn}>
          <h3>Contact Us</h3>
          <p>123 Main St.</p>
          <p>Anytown, USA 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@company.com</p>
        </div>
        <div className={classes.footercolumn}>
          <h3>Products</h3>
          <ul>
            <li><a href="/products/product1">Product 1</a></li>
            <li><a href="/products/product2">Product 2</a></li>
            <li><a href="/products/product3">Product 3</a></li>
            <li><a href="/products/product4">Product 4</a></li>
          </ul>
        </div>
        <div className={classes.footercolumn}>
          <h3>Company Details</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
      </div>
      <div className={classes.footercopy}>
        <p>&copy; 2023 Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default MainPageFooter;
