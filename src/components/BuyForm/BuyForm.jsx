import React from "react";
import "./BuyForm.css";

const BuyForm = ({ submitHandler }) => {
  return (
    <form autoComplete="off" onSubmit={submitHandler}>
      <div className="field">
        <label htmlFor="fullname" className="label">
          Nombre completo
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="fullname"
            id="fullname"
            pattern="^[a-zA-Z]+(?:\s?[a-zA-z]+)+"
            placeholder="Insert your name"
            minLength="3"
            required
          />
          <p className="help is-link">Debe contener mas de 3 caracteres </p>
        </div>
      </div>

      <div className="field">
        <label htmlFor="email" className="label">
         Correo Electronico
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="input"
          placeholder="example@email.com"
          required
        />
      </div>
      
      <div className="field">
        <label htmlFor="address" className="label">
         Direccion
        </label>
        <input
          type="address"
          name="address"
          id="address"
          className="input"
          placeholder="Frecnh 1945 - Tucuman"
          required
        />
      </div>

      <div className="field">
        <label htmlFor="telephone" className="label">
          Celular
        </label>
        <input
          type="tel"
          name="telephone"
          id="telephone"
          className="input"
          pattern="^\d+\s{1}\d{3}-\d{4}$"
          placeholder="123 456-7890"
          required
        />
        <p className="help">
          Debes respetar el formato
        </p>
      </div>

      <div className="field">
        <div className="control">
          <button type="submit" className="button is-success">
            Finalizar pedido
          </button>
        </div>
      </div>
    </form>
  );
};

export default BuyForm;
