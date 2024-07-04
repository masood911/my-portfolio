import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <p>Copyright © {currentYear} All rights reserved.
          Designed by <a title="React Website" rel="sponsored" href="" target="_blank">Mr FREELANCER</a></p>
        </div>
      </div>
    </div>
  </footer>
  )
}
