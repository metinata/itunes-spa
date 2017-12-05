import React, { Component } from 'react'
import { Menu, Row, Col } from 'antd'
import { Link } from 'react-router-dom'

class CategoryMenu extends Component {
    constructor(props) {
        super(props)
        const type = this.props.match.params.type;
        this.state = { current: type ? type : 'all' }
    }
    componentWillReceiveProps(nextProps) {
        const type = nextProps.match.params.type;
        this.setState({ current: type ? type : 'all' })
    }
    render() {
        return (
            <Row gutter={10}>
                <Col span={24}>
                    <Menu selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key="all">
                            <Link to={`/all?term=${this.props.term}`}>All</Link>
                        </Menu.Item>
                        {
                            this.props.search.app.results.length ?
                                (
                                    <Menu.Item key="app">
                                        <Link to={`/app?term=${this.props.term}`}>App</Link>
                                    </Menu.Item>
                                ) : ''
                        }
                        {
                            this.props.search.music.results.length ?
                                (
                                    <Menu.Item key="music">
                                        <Link to={`/music?term=${this.props.term}`}>Music</Link>
                                    </Menu.Item>
                                ) : ''
                        }
                        {
                            this.props.search.movie.results.length ?
                                (
                                    <Menu.Item key="movie">
                                        <Link to={`/movie?term=${this.props.term}`}>Movie</Link>
                                    </Menu.Item>
                                ) : ''
                        }
                        {
                            this.props.search.tv.results.length ?
                                (
                                    <Menu.Item key="tv">
                                        <Link to={`/tv?term=${this.props.term}`}>TV</Link>
                                    </Menu.Item>
                                ) : ''
                        }
                        {
                            this.props.search.book.results.length ?
                                (
                                    <Menu.Item key="book">
                                        <Link to={`/book?term=${this.props.term}`}>Book</Link>
                                    </Menu.Item>
                                ) : ''
                        }
                        {
                            this.props.search.mac.results.length ?
                                (
                                    <Menu.Item key="mac">
                                        <Link to={`/mac?term=${this.props.term}`}>Mac</Link>
                                    </Menu.Item>
                                ) : ''
                        }
                        {
                            this.props.search.podcast.results.length ?
                                (
                                    <Menu.Item key="podcast">
                                        <Link to={`/podcast?term=${this.props.term}`}>Podcast</Link>
                                    </Menu.Item>
                                ) : ''
                        }
                    </Menu>
                </Col>
            </Row>
        )
    }
}

export default CategoryMenu