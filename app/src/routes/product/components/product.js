import React, { Component } from 'react'
import { Card, Tabs, Rate, Carousel, Table, Form, Row, Col, Input, Button, Icon } from 'antd'
const TabPane = Tabs.TabPane;

const gridStyle = {
    w100: {
        width: '100%',
    },
    w90: {
        width: '90%'
    },
    w80: {
        width: '80%'
    },
    w75: {
        width: '75%'
    },
    w50: {
        width: '50%'
    },
    w25: {
        width: '25%'
    },
    w20: {
        width: '20%'
    },
    w10: {
        width: '10%'
    }
};

class Product extends Component {
    constructor(props) {
        super(props)
        this.goBack = this.goBack.bind(this);
    }
    goBack() {
        this.props.history.goBack();
    }
    componentDidMount() {
        this.props.doLookup({ id: this.props.match.params.id });
    }
    componentWillUnmount() {
        this.props.reset();
    }
    render() {
        const props = this.props.lookup.results.length ? this.props.lookup.results[0] : null;
        return this.props.lookup.results.length ? (
            <div>
                <Row gutter={10}>
                    <Col md={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 6 }} style={{ textAlign: 'right' }}>
                        <Button type="primary" size="default" onClick={this.goBack}>
                            <Icon type="left" />Go back
                        </Button>
                    </Col>
                </Row>
                <Row gutter={10}>
                    <Col md={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 6 }}>
                        <Card title={props.trackName || props.collectionName} noHovering extra={
                            <div>
                                <Rate disabled defaultValue={props.averageUserRating} />
                                {props.userRatingCount && <span className="ant-rate-text">{props.userRatingCount} stars</span>}
                            </div>
                        }>
                            <Card.Grid className="no-hover" style={gridStyle.w100}>
                                <Row gutter={20}>
                                    <Col span={3}>
                                        <img className="img-responsive" src={props.artworkUrl100} alt="" />
                                    </Col>
                                    <Col span={21}>
                                        <p>{props.artistName}</p>
                                        {props.collectionName ? (<p>{props.collectionName}</p>) : ''}
                                        <p>{props.primaryGenreName}</p>
                                    </Col>
                                </Row>
                            </Card.Grid>

                            <Card.Grid className="no-hover" style={gridStyle.w100}>
                                <h3>Description</h3>
                                <div dangerouslySetInnerHTML={{ __html: props.description || props.longDescription || props.shortDescription }}></div>
                            </Card.Grid>
                            {
                                (props.screenshotUrls && props.screenshotUrls.length) || (props.ipadScreenshotUrls && props.ipadScreenshotUrls.length) ? (
                                    <Card.Grid className="no-hover" style={gridStyle.w100}>
                                        <Tabs defaultActiveKey="1">
                                            {
                                                props.screenshotUrls && props.screenshotUrls.length ? (
                                                    <TabPane tab="Screenshots" key="1">
                                                        <Carousel autoplay>
                                                            {
                                                                props.screenshotUrls.map((screen, index) => {
                                                                    return (
                                                                        <div key={index} className="carousel-center">
                                                                            <img src={screen} alt="" className="responsive-img" />
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </Carousel>
                                                    </TabPane>
                                                ) : ''
                                            }
                                            {
                                                props.ipadScreenshotUrls && props.ipadScreenshotUrls.length ? (
                                                    <TabPane tab="iPad Screenshots" key="2">
                                                        <Carousel autoplay>
                                                            {
                                                                props.ipadScreenshotUrls.map((screen, index) => {
                                                                    return (
                                                                        <div key={index} className="carousel-center">
                                                                            <img src={screen} alt="" />
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </Carousel>
                                                    </TabPane>
                                                ) : ''
                                            }
                                        </Tabs>
                                    </Card.Grid>
                                ) : ''
                            }
                        </Card>
                    </Col>
                </Row>
            </div >
        ) : ''
    }
}

export default Product