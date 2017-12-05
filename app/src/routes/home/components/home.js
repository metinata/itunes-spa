import React, { Component, PureComponent } from 'react'
import { Table, Form, Row, Col, Input, Button, Icon } from 'antd'
import queryString from 'query-string'
import { CategoryMenu, App, Music, Movie, TV, Book, Mac, Podcast } from '../../../components'

const pageTypes = {
    all: 'all',
    app: 'app',
    music: 'music',
    movie: 'movie',
    tv: 'tv',
    book: 'book',
    mac: 'mac',
    podcast: 'podcast'
}

class Home extends Component {
    constructor(props) {
        super(props)
        this.handleSearch = this.handleSearch.bind(this)

        const type = this.props.match.params.type,
            query = queryString.parse(this.props.location.search);

        this.state = { pageType: type ? type : pageTypes.all }
        this.term = query.term ? query.term : "";
    }

    componentDidMount() {
        const type = this.props.match.params.type,
            query = queryString.parse(this.props.location.search);
        if (type && query.term) {
            this.term = query.term;
            this.props.doSearch(this.term).then(() => {
                this.props.doPartialSearch(this.term, type);
            });
        }
    }

    componentWillUnmount() {
        this.props.reset();
    }

    componentWillReceiveProps(nextProps) {
        const type = nextProps.match.params.type,
            query = queryString.parse(this.props.location.search),
            nextQuery = queryString.parse(nextProps.location.search);

        if (this.props.location.pathname != nextProps.location.pathname || query.term != nextQuery.term) {
            this.setState({ pageType: type }, () => {
                nextProps.doPartialSearch(this.term, type);
            });
        }
    }

    select(e) {
        e.target.select();
    }

    handleSearch(value) {
        this.term = value;
        this.props.history.push(`/all?term=${this.term}`);
    }

    render() {
        return (
            <Form className="ant-advanced-search-form">
                <Row gutter={10}>
                    <Col md={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 6 }}>
                        <Input.Search placeholder="Please enter a movie, music or app name e.g. dark knight" onFocus={this.select} size="large" defaultValue={this.term} onSearch={this.handleSearch} style={{ height: '40px' }} />
                    </Col>
                </Row>
                <Row gutter={10}>
                    <Col md={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 6 }}>
                        {
                            this.props.all.found ? <CategoryMenu term={this.term} match={this.props.match} search={this.props.all} /> : ''
                        }
                        {
                            (() => {
                                switch (this.state.pageType) {
                                    case pageTypes.app:
                                        return (
                                            <App data={this.props.search.app.results} />
                                        )
                                    case pageTypes.music:
                                        return (
                                            <Music data={this.props.search.music.results} />
                                        )
                                    case pageTypes.movie:
                                        return (
                                            <Movie data={this.props.search.movie.results} />
                                        )
                                    case pageTypes.tv:
                                        return (
                                            <TV data={this.props.search.tv.results} />
                                        )
                                    case pageTypes.book:
                                        return (
                                            <Book data={this.props.search.book.results} />
                                        )
                                    case pageTypes.mac:
                                        return (
                                            <Mac data={this.props.search.mac.results} />
                                        )
                                    case pageTypes.podcast:
                                        return (
                                            <Podcast data={this.props.search.podcast.results} />
                                        )
                                    default:
                                        return this.props.all.found ? (
                                            <div>
                                                <App data={this.props.all.app.results} />
                                                <Music data={this.props.all.music.results} />
                                                <Movie data={this.props.all.movie.results} />
                                                <TV data={this.props.all.tv.results} />
                                                <Book data={this.props.all.book.results} />
                                                <Mac data={this.props.all.mac.results} />
                                                <Podcast data={this.props.all.podcast.results} />
                                            </div>
                                        ) : ''
                                }
                            })()
                        }
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default Form.create()(Home);