import "./testimonials.scss";

const Testimonials = () => {
  const data = [
    {
      id: 0,
      name: "Sarah Macedo",
      title: "CEO da redeUNA",
      img: "https://www.instagram.com/p/B25iJx1pGVsV2sNOmcHArfN5rRAEcGlBki5w800/",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 1,
      name: "Felipe",
      title: "Assessor do Patriota",
      img: "https://www.instagram.com/p/BVH0r-dB-70/",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 2,
      name: "Mirian Hoeschl",
      title: "Proprietária da MH Colposcopia",
      img: "https://www.instagram.com/p/B5_a63OHRWIem-7kTkn-1kUQsnN9PNI34G-ssU0/",
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
