import { connect } from 'react-redux';
import ProductList from '../components/home/ProductList';
import { addToCart, RemoveToCart } from '../services/actions/actions';

const mapStateToProps = (state) => ({
    cardData:state
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  RemoveToCartHandler: (data) => dispatch(RemoveToCart(data)),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
