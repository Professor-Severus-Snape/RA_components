import { Component } from 'react';
import PropTypes from 'prop-types';
import './shopItemClass.css';

class ShopItemClass extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { brand, title, description, descriptionFull, price, currency } = this.props.item;

    return (
      <div className="main-content">
        <h2>{brand}</h2>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <div className="description">{descriptionFull}</div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">
            {currency}
            {price}
          </div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

// валидация пропсов в классовых компонентах:
// избавляет от ошибки -> 'item' is missing in props validation"
ShopItemClass.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ShopItemClass;
