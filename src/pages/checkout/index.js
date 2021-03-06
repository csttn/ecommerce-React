import React from "react";

import StripeCheckoutButton from "../../components/stripe-button/index";

import { connect } from "react-redux";
import {
  selectCartTotal,
  selectCartItems,
  selectCartHidden,
} from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/index";

import "./styles.scss";

function Checkout({ cartItems, total }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Produtos</span>
        </div>
        <div className="header-block">
          <span>Descrição</span>
        </div>
        <div className="header-block">
          <span>Quantidade</span>
        </div>
        <div className="header-block">
          <span>Preço</span>
        </div>
        <div className="header-block">
          <span>Remover</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <div className="total">TOTAL: R$ {total}</div>

      <div className="test-warning">
        *Por favor, use este cartão de crédito para pagamentos
        <br />
        4242 4242 4242 4242 - Exp:01/22 cod:123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({});

const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
  cartItems: selectCartItems,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
