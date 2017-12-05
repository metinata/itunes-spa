import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Card, Col, Row } from 'antd'

class Apps extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return !this.props.data.length ? '' :
            (
                <Row gutter={10}>
                    <Col span={24}>
                        <h3>App</h3>
                    </Col>
                    {
                        this.props.data.map((item, index) => {
                            return (
                                <Col span={8} key={index}>
                                    <Card title={item.trackName} bordered={false}>
                                        <Carousel autoplay>
                                            {
                                                item.screenshotUrls.map((screen, i) => {
                                                    return (
                                                        <div style={{ width: '100%', overflow: 'hidden' }} key={i}>
                                                            <Link to={`/product/${item.trackId}`}>
                                                                <img className="img-responsive" src={screen} alt="" />
                                                            </Link>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Carousel>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            )
    }
}

export default Apps