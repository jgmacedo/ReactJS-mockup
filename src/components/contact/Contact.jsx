import { useState } from "react";
import "./contact.scss";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/hands.svg" alt="" />
      </div>

      <div className="right">
        <h2>Contato.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Mensagem"></textarea>
          <button type="submit">Enviar</button>
          {message && <span>Obrigado, responderei assim que possível :]</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
