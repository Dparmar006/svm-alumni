import {
  Col,
  Row,
  message,
  Divider,
  List,
  Rate,
  Timeline,
  Space,
  Card
} from 'antd'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../util/api'

const AlumniDetails = () => {
  const [alumniData, setAlumniData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const { id } = useParams()
  const getData = async () => {
    try {
      const res = await api.get(`/alumni/${id}`)
      setAlumniData(res.data)
      console.log(res.data)
    } catch (err) {
      message.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <React.Fragment>
      <Row>
        <Col xl={24}>
          <Card>
            <h2>{alumniData.fname + ' ' + alumniData.lname}</h2>
            <Divider />
            {alumniData.department} - {alumniData.batch} <br />
            <h5>Contact</h5>
            {alumniData.phone} | {alumniData.email}
          </Card>
        </Col>
      </Row>
      <Row gutter={24}>
        <Divider />
        <Col xl={12}>
          <Card>
            <h2>Technologies</h2>
            <List
              itemLayout='horizontal'
              dataSource={alumniData.techStack}
              renderItem={tech => (
                <>
                  <List.Item>
                    <List.Item.Meta
                      title={tech.name}
                      description={tech.description || ''}
                    />

                    <Rate value={tech.levelOfExperties} disabled />
                  </List.Item>
                </>
              )}
            />
          </Card>
        </Col>
        <Col xl={12}>
          <Card>
            <Space>
              <h2>Experience</h2>
            </Space>
            <Timeline>
              {alumniData.workingExperience?.map(exp => {
                return (
                  <Timeline.Item color='green'>
                    {exp.industry} as <i>{exp?.designation}</i>
                  </Timeline.Item>
                )
              })}
            </Timeline>
          </Card>
          <Card style={{ marginTop: '2rem' }}>
            <Space>
              <h2>Certificates</h2>
            </Space>
            <List
              itemLayout='horizontal'
              dataSource={alumniData.certificates}
              renderItem={certificate => (
                <List.Item>
                  <List.Item.Meta
                    title={certificate.title}
                    description={certificate.description || ''}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default AlumniDetails
