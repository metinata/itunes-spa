import * as service from '../../../service'
import actionTypes from './types'

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

const search = (term) => (dispatch, state) => new Promise(async (resolve, reject) => {
    const promise = [appSearch(term), musicSearch(term), movieSearch(term), tvSearch(term), bookSearch(term), macSearch(term), podcastSearch(term)];
    const [app, music, movie, tv, book, mac, podcast] = await Promise.all(promise);
    const found = () => {
        return app.data.results.length || music.data.results.length ||
            movie.data.results.length || tv.data.results.length || book.data.results.length ||
            mac.data.results.length || podcast.data.results.length
    };
    const data = {
        app: app.data,
        music: music.data,
        movie: movie.data,
        tv: tv.data,
        book: book.data,
        mac: mac.data,
        podcast: podcast.data,
        found: found() ? true : false
    };
    dispatch({
        type: actionTypes.PUBLIC_SEARCH,
        payload: data
    })
    resolve();
})

const partialSearch = (term, type) => (dispatch, state) => new Promise(async (resolve, reject) => {
    let _state = {
        app: { results: [] },
        music: { results: [] },
        movie: { results: [] },
        tv: { results: [] },
        book: { results: [] },
        mac: { results: [] },
        podcast: { results: [] }
    };

    switch (type) {
        case pageTypes.app:
            await appSearch(term, 10).then(response => {
                _state.app = response.data;
            })
            break;
        case pageTypes.music:
            await musicSearch(term, 100).then(response => {
                _state.music = response.data;
            })
            break;
        case pageTypes.movie:
            await movieSearch(term, 100).then(response => {
                _state.movie = response.data;
            })
            break;
        case pageTypes.tv:
            await tvSearch(term, 100).then(response => {
                _state.tv = response.data;
            })
            break;
        case pageTypes.book:
            await bookSearch(term, 100).then(response => {
                _state.book = response.data;
            })
            break;
        case pageTypes.mac:
            await macSearch(term, 10).then(response => {
                _state.mac = response.data;
            })
            break;
        case pageTypes.podcast:
            await podcastSearch(term, 100).then(response => {
                _state.podcast = response.data;
            })
            break;
        default:
            return search(term)(dispatch, state);
    }
    dispatch({
        type: actionTypes.PARTIAL_SEARCH,
        payload: _state
    })
    resolve();
})

const reset = () => (dispatch, state) => {
    dispatch({
        type: actionTypes.RESET,
        payload: {}
    })
}

const appSearch = (term, limit = 3) => service.search({
    term: term,
    media: 'software',
    entity: 'software,iPadSoftware',
    limit: limit
})
const musicSearch = (term, limit = 3) => service.search({
    term: term,
    entity: 'song,album,musicVideo',
    limit: limit
})
const movieSearch = (term, limit = 3) => service.search({
    term: term,
    media: 'movie',
    entity: 'movie',
    limit: limit
})
const tvSearch = (term, limit = 3) => service.search({
    term: term,
    media: 'tvShow',
    entity: 'tvEpisode,tvSeason,tvShow',
    limit: limit
})
const bookSearch = (term, limit = 3) => service.search({
    term: term,
    entity: 'ebook,audiobook',
    limit: limit
})
const macSearch = (term, limit = 3) => service.search({
    term: term,
    media: 'software',
    entity: 'macSoftware',
    limit: limit
})
const podcastSearch = (term, limit = 3) => service.search({
    term: term,
    media: 'podcast',
    entity: 'podcast',
    limit: limit
})

export default {
    search,
    partialSearch,
    reset
}