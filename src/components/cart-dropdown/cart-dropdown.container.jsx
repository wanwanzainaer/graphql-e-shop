import React from "react";
import { Query, Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import CartDropdwon from "./cart-dropdown.component";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const CartDropdwonContainer = () => {
  return (
    <Mutation mutation={TOGGLE_CART_HIDDEN}>
      {toggleCartHidden => {
        return (
          <Query query={GET_CART_ITEMS}>
            {({ data: { cartItems } }) => {
              return (
                <CartDropdwon
                  toggleCartHidden={toggleCartHidden}
                  cartItems={cartItems}
                />
              );
            }}
          </Query>
        );
      }}
    </Mutation>
  );
};

export default CartDropdwonContainer;
