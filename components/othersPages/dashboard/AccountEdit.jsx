"use client";
import React from "react";

export default function AccountEdit() {
  return (
    <div className="my-account-content account-edit">
      <div className="">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=""
          id="form-password-change"
          action="#"
        >
          <div className="tf-field style-1 mb_15">
            <input
              className="tf-field-input tf-input"
              placeholder=" "
              type="text"
              id="property1"
              required
              name="first name"
            />
            <label
              className="tf-field-label fw-4 text_black-2"
              htmlFor="property1"
            >
              Nome
            </label>
          </div>

          <div className="tf-field style-1 mb_15">
            <input
              className="tf-field-input tf-input"
              placeholder=" "
              type="email"
              autoComplete="abc@xyz.com"
              required
              id="property3"
              name="email"
            />
            <label
              className="tf-field-label fw-4 text_black-2"
              htmlFor="property3"
            >
              Email
            </label>
          </div>
          <h6 className="mb_20">Trocar senha</h6>
          <div className="tf-field style-1 mb_30">
            <input
              className="tf-field-input tf-input"
              placeholder=" "
              type="password"
              required
              autoComplete="current-password"
              id="property4"
              name="password"
            />
            <label
              className="tf-field-label fw-4 text_black-2"
              htmlFor="property4"
            >
              Sua Senha
            </label>
          </div>
          <div className="tf-field style-1 mb_30">
            <input
              className="tf-field-input tf-input"
              placeholder=" "
              type="password"
              id="property5"
              required
              autoComplete="current-password"
              name="password"
            />
            <label
              className="tf-field-label fw-4 text_black-2"
              htmlFor="property5"
            >
              Nova Senha
            </label>
          </div>
          <div className="tf-field style-1 mb_30">
            <input
              className="tf-field-input tf-input"
              placeholder=" "
              type="password"
              id="property6"
              required
              autoComplete="current-password"
              name="password"
            />
            <label
              className="tf-field-label fw-4 text_black-2"
              htmlFor="property6"
            >
              Confirmar Senha
            </label>
          </div>
          <div className="mb_20">
            <button
              type="submit"
              className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center"
            >
              Salvar Mudanças
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
