import { useEffect, useState } from 'react'
import { Card, Row, Col, Divider, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import api from '../../util/api'

const ListIndustries = () => {
  const navigate = useNavigate()
  const [industries, setIndustries] = useState([])
  const [isLoading, setLoading] = useState(true)

  const getData = async () => {
    try {
      const res = await api.get('/industries')
      setIndustries(res.data)
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
      {industries.map(industry => (
        <Col xl={6} key={industry._id}
        onClick={() => {
          navigate(`/industries/${industry.id}`)
        }}
        >
          <Card style={{ marginTop: 16 }} loading={isLoading}>
            <h3>
              {industry.name} {industry.field}
            </h3>
            <Divider />
            <h3>Contact details</h3>
            <p>
              {industry.email} <br />
              {industry.phone}
            </p>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default ListIndustries
