import React, { Fragment, useState } from "react";
import styles from "../../../../src/styles.module.scss";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Form = () => {
  const [formulario, actualizarForm] = useState({
    nombre: "",
    numero: "",
    mensaje: "",
    correo: "",
    seleccion: "",
  });

  const [error, actualizarError] = useState(false);

  //Funcion del usuario escribiendo en el imput

  const handleChange = (e) => {
    actualizarForm({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  //Extraje valores

  const { nombre, numero, mensaje, correo, seleccion } = formulario;

  const submitForm = (e) => {
    e.preventDefault();

    //validacion

    if (
      nombre.trim() === "" ||
      numero.trim() === "" ||
      mensaje.trim() === "" ||
      correo.trim() === "" ||
      seleccion.trim() === ""
    ) {
      actualizarError(true);
      return;
    }
    //Eliminando el mensaje de error
    actualizarError(false);

    //reiniciar formulario

    actualizarForm({
      nombre: "",
      numero: "",
      mensaje: "",
      correo: "",
      seleccion: "",
    });
    Swal.fire({
      title: "Mensaje enviado.",
      footer: "Copyright 2020",
    });
    return;
  };

  return (
    <Fragment>
      <div>
        <div className={styles.container2}>
          {error ? (
            <span className={styles.alertaError}>ALL FIELDS ARE REQUIRED...</span>
          ) : null}
          <form
            action="http://jkorpela.fi/cgi-bin/echo.cgi?"
            onSubmit={submitForm}
            className={styles.form}
          >
            <div className={styles.inputStyle}>
              <label for="name" className={styles.label}>
                FULL NAME
              </label>
              <br />
              <input
                name="nombre"
                className={styles.name}
                placeholder="FULL NAME"
                type="text"
                onChange={handleChange}
                value={nombre}
              />

              <input
                name="numero"
                className={styles.number}
                placeholder="PHONE NUMBER"
                type="tel"
                onChange={handleChange}
                value={numero}
              />
              <textarea
                name="mensaje"
                placeholder="MESSAGE"
                className={styles.message}
                cols="15"
                rows="8"
                type="text"
                onChange={handleChange}
                value={mensaje}
              />
            </div>

            <div className={styles.inputStyle2}>
              <input
                type="email"
                className={styles.email}
                placeholder="E-MAIL ADDRESS"
                name="correo"
                onChange={handleChange}
                value={correo}
              />
              <select
                name="seleccion"
                className={styles.select}
                type="select"
                onChange={handleChange}
                value={seleccion}
              >
                <option value="ss">SELECT A SUBJECT(S) </option>
                <option value="pl">polo lessons </option>
                <option value="ph">polo holidays</option>
                <option value="lv">livery services</option>
                <option value="tm">team management</option>
                <option value="hfs">horses for sale</option>
              </select>
              <button
                type="submit"
                name="formButton"
                className={styles.formButton}
              >
                SEND FORM
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Form;
