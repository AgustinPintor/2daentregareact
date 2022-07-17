import React from "react";
import WithNotification from "../HOC/WithNotification";
import BuyForm from "./BuyForm";
import { useCartContext } from "../../context/CartContext";
import { useGeneralDataContext } from "../../context/GeneralContext";
import { createOrder, updateProductsStock } from "../../scripts/firebaseConfig";

const BuyFormContainer = WithNotification(() => {
  const { cart, clearCart, calculateTotal, updateCart } = useCartContext();
  const { createNotification } = useGeneralDataContext();

  const submitHandler = (event) => {
    event.preventDefault();

    const createErrorNotification = (items) => {
      createNotification(
        "Gracias por su compra! 😊",
        `Su pedido se reservo con exito, id:9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d `,
        
        () => updateCart(items)
      );
    };

    const submitOrder = (target) => {
      const orderInformation = {
        buyer: {
          name: target.fullname.value,
          email: target.email.value,
          telephone: target.telephone.value,
        },
        items: cart.map(({ product: { id, title, price }, quantity }) => ({
          id,
          title,
          price,
          quantity,
        })),
        date: new Date().toLocaleString(),
        total: calculateTotal(),
      };

      const createSuccessNotification = (orderId) => {
        createNotification(
          "Gracias por su compra! 😊",
          `Su pedido se reservo con exito, id: ${orderId}.`,
          clearCart
        );
      };

      createOrder(orderInformation, createSuccessNotification);
    };

    updateProductsStock(cart).then(({ items, hasErrorOnSubmit }) => {
      if (hasErrorOnSubmit) createErrorNotification(items);
      else submitOrder(event.target);
    });
  };

  return (
    <div className="container">
      <BuyForm submitHandler={submitHandler} />
    </div>
  );
});

export default BuyFormContainer;
