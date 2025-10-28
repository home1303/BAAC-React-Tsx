import React from "react";
import "./Sidebar.scss"


const Sidebar: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light shadow-sm px-3">
        <div className="d-flex align-items-center">
          <button
            className="navbar-toggler border-0 me-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarExample"
            aria-controls="sidebarExample"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <img
            src="/imges/baac-header-hover 1.png"
            alt="BAAC Logo"
            style={{
              height: "30px",
              width: "auto",
            }}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/icons/Container.svg"
            alt="check"
            style={{ width: 60, height: 70, marginRight: 8 }}
          />
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start bg-white"
        tabIndex={-1}
        id="sidebarExample"
        aria-labelledby="sidebarExampleLabel"
        style={{ width: "270px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
      >
        
        <div className="offcanvas-body p-0">
          <ul className="list-unstyled m-0">
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <img
                  src="/icons/key.svg"
                  alt="จัดการมาสเตอร์"
                  className="sidebar-icon"
                />
                จัดการมาสเตอร์
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <img
                  src="/icons/doc.svg"
                  alt="สัญญาหลักประกัน"
                  className="sidebar-icon"
                />
                สัญญาหลักประกัน
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <img
                  src="/icons/check.svg"
                  alt="ตรวจสอบสัญญา"
                  className="sidebar-icon"
                />
                ตรวจสอบสัญญาหลักประกัน
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <img
                  src="/icons/user.svg"
                  alt="มอบหมายงาน"
                  className="sidebar-icon"
                />
                มอบหมายงาน
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <img
                  src="/icons/search.svg"
                  alt="ค้นหาสัญญา"
                  className="sidebar-icon"
                />
                ค้นหาสัญญาหลักประกัน
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <img
                  src="/icons/chart.svg"
                  alt="รายงาน"
                  className="sidebar-icon"
                />
                รายงานแดชบอร์ด
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <img
                  src="/icons/history.svg"
                  alt="ประวัติ"
                  className="sidebar-icon"
                />
                ประวัติการใช้งาน
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
