import {
  Col,
  Row,
  message,
  Divider,
  List,
  Rate,
  Timeline,
  Space,
  Card,
} from "antd";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../util/api";

const IndustriesDetails = () => {
  const [IndustryData, setIndustryData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  const getData = async () => {
    try {
      const res = await api.get(`/industries/${id}`);
      setIndustryData(res.data);
    } catch (err) {
      message.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <Row>
        <Col xl={24}>
          <Card>
            <h2>{IndustryData.name}</h2>
            <Divider />
            <h3>Sector -  {IndustryData.sector} </h3>
            {/* {IndustryData.sector}<br /> */}
            <h5>Contact</h5>
            {IndustryData.email} | {IndustryData.phone}
          </Card>
        </Col>
      </Row>
      <Row gutter={24}>
        <Divider />
        <Col xl={12}>
      <Card>
            <Space>
              <h2>About Us</h2>
            </Space>
            <p>{IndustryData.aboutUs}</p>
           
          </Card>
          </Col>
          <Col xl={12}>
          <Card>
            <Space>
              <h2>Vacancies</h2>
            </Space>
            <List
              itemLayout='vertical'
              dataSource={IndustryData.vacanciesOpen}
              renderItem={vacancies => (
                <List.Item>  
                <p><strong> Job Title </strong>:  {vacancies.jobTitle}</p>
                <p><strong> Position </strong>: {vacancies.position}</p>
                <p><strong> Number of vacancies availabe  </strong>: {vacancies.numberOfPositions}</p>
                <p><strong> About this Job  </strong>: {vacancies.description}</p>
                </List.Item>
              )}
            />
          </Card>
          </Col>
          </Row>
    </React.Fragment>
  );
};

export default IndustriesDetails;
