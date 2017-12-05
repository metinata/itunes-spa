import { connect } from 'react-redux'
import Home from './components/home'
import actions from './actions'

const mapStateToProps = (state) => ({
    all: state.home.all,
    search: state.home.search
});

const mapDispatchToProps = {
    doSearch: actions.search,
    doLookup: actions.lookup,
    doPartialSearch: actions.partialSearch,
    reset: actions.reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);