import "./testimonials.scss";

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <img src="assets/down.png" className="left" alt="" />
            <img
              className="user"
              src="https://images.pexels.com/photos/5963324/pexels-photo-5963324.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <img className="right" src="assets/twitter.png" alt="" />
          </div>
          <div className="center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
            nisi? Quod doloribus repudiandae modi sequi ab possimus ut?
          </div>
          <div className="bottom">
            <h3>Pessoa</h3>
            <h4>CEO do joao</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
