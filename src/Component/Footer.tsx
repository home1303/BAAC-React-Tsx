import React from "react";
import Icon from "./iconsbutton";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="text-white pt-4">
        <div className="container-fluid px-5">
          <div className="d-flex  justify-content-between align-items-start footer-flex">
            {/* โลโก้ */}
            <div className="text-center me-4">
              <img src="/imges/BAAC_Logo.svg 1.png" alt="BAAC Logo" />
            </div>

            <div className="footer-contact">
              <h6 className="head-footer fw-bold mb-2">ช่องทางการติดต่อ</h6>

              <div className="row">
                <div className="col-md-6">
                  <p className="sub-footer mb-1">
                    ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร (ธ.ก.ส.)
                  </p>
                  <p className="sub-footer mb-1">
                    ที่อยู่ : เลขที่ 2346 ถนนพหลโยธิน แขวงเสนานิคม เขตจตุจักร
                  </p>
                  <p className="sub-footer mb-1">กรุงเทพฯ 10900</p>
                </div>

                <div className="sub-footer-2 col-md-6">
                  <p className="mb-2">โทรศัพท์ : 0-2555-0555</p>
                  <p className="mb-2">โทรสาร : 0-2558-6341</p>
                  <p className="mb-0">E-mail : contact@baac.or.th</p>
                </div>
              </div>
            </div>

            <div className="footer-online text-start">
              <h6 className="text mb-3 text-white">สื่อสังคมออนไลน์</h6>

              <div className="social-buttons">
                <Icon iconName="Facebook" />
                <Icon iconName="line" />
                <Icon iconName="Youtube" />
                <Icon iconName="TikTok" />
                <Icon iconName="Instragram" />
                <Icon iconName="X" />
                <Icon iconName="rss 1" />
              </div>
            </div>
          </div>

          <hr className="border-light my-3" />

          <div className="Right-text text-center pb-3">
            <small>© All Rights Reserved. BAAC Version 1.0.0</small>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
