import React, { useState } from "react";
import "./Sidebar.scss";

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-light bg-light shadow-sm px-3">
        <div className="d-flex align-items-center">
          <button
            className="navbar-toggler border-0 me-2"
            type="button"
            onClick={() => setOpen(!open)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <img
            src="/imges/baac-header-hover 1.png"
            alt="BAAC Logo"
            style={{ height: "30px", width: "auto" }}
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

      {/* Sidebar */}
      <div className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <ul className="list-unstyled m-0">
          <li className="sidebar-item">
            <div
              className="sidebar-link"
              onClick={() => setSubmenuOpen(!submenuOpen)}
            >
              <img src="/icons/Vector12.svg" className="sidebar-icon" />
              จัดการมาสเตอร์
              <i
                className={`bi ms-auto ${
                  submenuOpen ? "bi-chevron-up" : "bi-chevron-down"
                }`}
              ></i>
            </div>
            {submenuOpen && (
              <ul className="submenu list-unstyled">
                <li className="sidebar-item">
                  <a href="#" className="sidebar-link">
                    รายการ 1
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="#" className="sidebar-link">
                    รายการ 2
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <img src="/icons/Vector1.svg" className="sidebar-icon" />
              สัญญาหลักประกัน
            </a>
          </li>

          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <img src="/icons/18.svg" className="sidebar-icon" />
              ตรวจสอบสัญญาหลักประกัน
            </a>
          </li>

          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <img src="/icons/20.svg" className="sidebar-icon" />
              มอบหมายงาน
            </a>
          </li>

          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <img src="/icons/Vector1.svg" className="sidebar-icon" />
              ค้นหาสัญญาหลักประกัน
            </a>
          </li>

          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <img src="/icons/1.svg" className="sidebar-icon" />
              รายงานแดชบอร์ด
            </a>
          </li>

          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <img src="/icons/19.svg" className="sidebar-icon" />
              ประวัติการใช้งาน
            </a>
          </li>
        </ul>
      </div>

    </>
  );
};

export default Sidebar;
