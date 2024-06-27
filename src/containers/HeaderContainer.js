import { connect } from 'react-redux';
import { addToCart } from '../services/actions/actions';
import Header from '../components/shared/Header';
const mapStateToProps = (state) => ({
    cardData:state
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Header);
