import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Table, Row, Col } from 'antd'

const columns = [
    {
        title: 'Artwork',
        dataIndex: 'artworkUrl100',
        key: 'artwork',
        render: (artwork, record, index) => (
            <Link to={`/product/${record.trackId}`}>
                <img className="img-responsive" src={artwork} alt="" />
            </Link>
        ),
        width: '10%'
    },
    {
        title: 'Name',
        dataIndex: 'collectionName',
        key: 'collectionName',
        width: '55%',
        render: (text, record, index) => {
            if (record.wrapperType == 'collection') {
                return (
                    <div>
                        <Link to={`/product/${record.collectionId}`}>{record.collectionName}</Link>
                        <br />
                        <span style={{ color: '#999999' }}>{record.artistName}</span>
                    </div>
                )
            }
            if (record.wrapperType == 'track') {
                return (
                    <div>
                        <Link to={`/product/${record.trackId}`}>{record.trackName}</Link>
                        <br />
                        <span style={{ color: '#999999' }}>{record.collectionName}</span>
                        <br />
                        <span style={{ color: '#999999' }}>{record.artistName}</span>
                    </div>
                )
            }
        }
    },
    {
        title: 'Genre',
        dataIndex: 'primaryGenreName',
        key: 'primaryGenreName',
        width: '35%',
    }
];

class Music extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return !this.props.data.length ? '' :
            (
                <Row gutter={10}>
                    <Col span={24}>
                        <h3>Music</h3>
                        <div className="table-wrap">
                            <Table columns={columns} dataSource={this.props.data} pagination={this.props.data.length > 3} />
                        </div>
                    </Col>
                </Row>
            )
    }
}

export default Music