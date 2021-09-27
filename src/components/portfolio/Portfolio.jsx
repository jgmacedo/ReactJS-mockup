import { useState, useEffect } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';

const Portfolio = () => {
    
    const [selected, setSelected] = useState("featured")

    const list = [
        {
            id: "aplicativosweb",
            title: "Aplicativos Web"

        },
        {
            id: "design",
            title: "Design"

        }, {
            id: "videos",
            title: "Vídeos"

        }, {
            id: "fotografia",
            title: "Fotografia"

        }, {
            id: "socialmedia",
            title: "Social Media"

        }
    ]

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portifólio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <div className="img">
                        <img src="https://i.ytimg.com/vi/HghA2Kh-TBc/maxresdefault.jpg" alt="" />
                        <h3>Banking app</h3>
                    </div>
                </div>
            
            
                <div className="item">
                    <div className="img">
                        <img src="https://i.ytimg.com/vi/HghA2Kh-TBc/maxresdefault.jpg" alt="" />
                        <h3>Banking app</h3>
                    </div>
                </div>
            
                <div className="item">
                    <div className="img">
                        <img src="https://i.ytimg.com/vi/HghA2Kh-TBc/maxresdefault.jpg" alt="" />
                        <h3>Banking app</h3>
                    </div>
                </div>
            
                <div className="item">
                    <div className="img">
                        <img src="https://i.ytimg.com/vi/HghA2Kh-TBc/maxresdefault.jpg" alt="" />
                        <h3>Banking app</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
