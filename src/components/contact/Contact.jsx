import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/hello.png" alt="" />
      </div>

      <div className="right">
        <h2>Contato.</h2>
        <form>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Mensagem"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
