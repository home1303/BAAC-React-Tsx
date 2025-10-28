import React from "react";
import Rounded from "../Component/Rounded";
import "../css/first-page.css";

const Homepage: React.FC = () => {
  return (
    <div className="container-header">
      <h2 className="text">จัดการมาสเตอร์</h2>
      <hr className="section-divider" />
      <div className="row1">
        <Rounded textInput="จัดการบทบาทและสิทธิ์การใช้งาน" />
        <Rounded textInput="จัดการจำนวนการรับงาน" />
      </div>

      <div className="header-2">
        <h2 className="text">สัญญาหลักประกันทางธุรกิจ</h2>
        <hr className="section-divider" />
        <div className="row1">
          <Rounded textInput="สัญญาหลักประกัน" />
          <Rounded textInput="ตรวจสอบสัญญาหลักประกัน" />
          <Rounded textInput="มอบหมายงาน" />
          <Rounded textInput="ค้นหาสัญญาหลักประกัน" />
          <Rounded textInput="รายงานแดชบอร์ด" />
          <Rounded textInput="ประวัติการใช้งาน" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;