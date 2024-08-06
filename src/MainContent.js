import React from "react";
import "./styles/MainContent.scss";
import Card from "./Card";
import Chart from "./Chart";
import Table from "./Table";
import Feedback from "./Feedback";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import CircularProgressWithLabel from "./CircularProgressWithLabel";

function MainContent() {
  return (
    <div className="main-content">
      <div className="left-sections">
        <div className="section order-section">
          <Card title="Total Orders" value="75" />
          <Card title="Total Delivered" value="70" />
          <Card title="Total Cancelled" value="05" />
          <Card title="Total Revenue" value="$12k" />
        </div>
        <div className="section">
          <Chart title="Activity" />
        </div>
        <div className="section">
          <Table title="Recent Orders" />
        </div>
      </div>
      <div className="right-sections">
        <div className="profit-section section2">
          <div className="profit-container">
            <div className="data-container">
              <h4>Net Profit</h4>
              <p className="dollor-value">$ 6759.25</p>
              <p className="percent">3%</p>
            </div>
            <CircularProgressWithLabel value={70} />
          </div>
        </div>
        <div className="profit-section">
          <div className="goal-container">
            <div className="img-container">
              <img src={"goal.jpg"} className="dish-pic" />
              <p>Goals</p>
            </div>
            <FontAwesomeIcon icon={faCircleChevronRight} size={"2x"} />
          </div>

          <div className="goal-container">
            <div className="img-container">
              <img src={"dish.png"} className="dish-pic" />
              <p>Popular dishes</p>
            </div>
            <FontAwesomeIcon icon={faCircleChevronRight} size={"2x"} />
          </div>

          <div className="goal-container">
            <div className="img-container">
              <img src={"menu.jpg"} className="dish-pic" />
              <p>Menus</p>
            </div>
            <FontAwesomeIcon icon={faCircleChevronRight} size={"2x"} />
          </div>
        </div>

        <div className="profit-section">
          <Feedback title="Customer's Feedback" />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
