/* Route Components */
import homeView from './home'
import productView from './product'


/* Reducers */
import home from './home/reducers'
import product from './product/reducers'


export const routes = {
    homeView,
    productView
}

export const reducers = {
    home,
    product
}
