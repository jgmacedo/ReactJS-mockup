import "./testimonials.scss";

const Testimonials = () => {
  const data = [
    {
      id: 0,
      name: "Sarah Macedo",
      title: "CEO da redeUNA",
      img: "assets/fotoSarah.jpeg",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 1,
      name: "Felipe",
      title: "Assessor do Patriota",
      img: "assets/felipe.png",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 2,
      name: "Mirian Hoeschl",
      title: "Proprietária da MH Colposcopia",
      img: "assets/mirian.jpg",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Depoimentos</h1>
      <div className="container">
        {data.map((d) => (
          <div className="card">
            <div className="top">
              <img src="assets/down.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
