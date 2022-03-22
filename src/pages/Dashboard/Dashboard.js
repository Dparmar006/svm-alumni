import { Card, Col, Row, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {BiUserCheck, BiBuilding, BiBriefcase, BiBookmarkAltPlus, BiCalendar, BiCalendarStar} from "react-icons/bi"
import React from "react";
const { Meta } = Card;
const Dashboard = () => {
  let dashboardCards = [
    {
      title: "Number of Alumni",
      value: 2456,
      icon: <BiUserCheck />
    },
    {
      title: "Number of Industries",
      value: 37,
      icon: <BiBuilding />
    },
    {
      title: "NSTI's vacancies",
      value: 54,
      icon: <BiBriefcase />
    },
    {
      title: "Job Posted",
      value: 559,
      icon: <BiBookmarkAltPlus />
    },
    {
      title: "Ongoing events",
      value: 12,
      icon: <BiCalendar />
    },
    {
      title: "Upcoming events",
      value: 45,
      icon: <BiCalendarStar />
    },
  ];
  return (
    <Row gutter={0}>
      {dashboardCards.map((card) => {
        return (
          <Col xl={8} style={{marginBottom: "44px"}}>
            <Card
              style={{ width: 300 }}
              // actions={[<SettingOutlined key="setting" />]}
            >
              <h2>{card.title}</h2>
              <Meta title={card.value} avatar={<h2> {card.icon} </h2>} />
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default Dashboard;
