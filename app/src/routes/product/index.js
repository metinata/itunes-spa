import { connect } from 'react-redux'
import Product from './components/product'
import actions from './actions'

const mapStateToProps = (state) => ({
    lookup: state.product.lookup
});

const mapDispatchToProps = {
    doLookup: actions.lookup,
    reset: actions.reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);