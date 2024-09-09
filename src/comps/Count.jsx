import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as countActions from '../store/actions/count.action';
function Count({ count, increment, decrement }) {
  console.log(count);
  return (
    <div>
      <button onClick={() => increment(5)}>+</button>
      <span>{count}</span>
      <button onClick={() => decrement(5)}>-</button>
    </div>
  );
}
const mapStateToProps = (state) => ({
  count: state.count,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(countActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Count);
