import React from "react";

const Footer:React.FC = () => {
return (
    <>
    <footer className="text-center text-lg-start bg-light text-muted">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      <a href="#" className="me-4 text-reset">Facebook</a>
      <a href="#" className="me-4 text-reset">Twitter</a>
      <a href="#" className="me-4 text-reset">Instagram</a>
    </div>
  </section>

  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Company name</h6>
          <p>Here you can use rows and columns to organize your footer content.</p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Products</h6>
          <p><a href="#!" className="text-reset">Product 1</a></p>
          <p><a href="#!" className="text-reset">Product 2</a></p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
          <p><a href="#!" className="text-reset">Link 1</a></p>
          <p><a href="#!" className="text-reset">Link 2</a></p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> Address</p>
          <p><i className="fas fa-envelope me-3"></i> email@example.com</p>
        </div>
      </div>
    </div>
  </section>

  <div className="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2025 Company, Inc.
  </div>
</footer>

    </>
)
}
export default Footer;