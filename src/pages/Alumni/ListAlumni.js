import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Divider, message } from 'antd'
import api from '../../util/api'
import { useNavigate } from 'react-router-dom'

const ListAlumni = () => {
  const navigate = useNavigate()
  const [alumni, setAlumni] = useState([])
  const [isLoading, setLoading] = useState(true)

  const getData = async () => {
    try {
      const res = await api.get('/alumni')
      setAlumni(res.data)
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
    <Row gutter={16}>
      {alumni.map(person => (
        <Col
          xl={6}
          key={person._id}
          onClick={() => {
            navigate(`/alumni/${person.id}`)
          }}
        >
          <Card style={{ marginTop: 16 }} loading={isLoading}>
            <h3>
              {person.fname} {person.lname} -{' '}
              <small>
                {person.batch} {person.department}
              </small>
            </h3>
            <Divider />
            <h3>Experties</h3>
            <p>{person.techStack?.map(tech => tech.name + ' | ')}</p>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default ListAlumni
