import { useState, useEffect } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';
import {webPortfolio, fotografiaPortfolio, socialmediaPortfolio, designPortfolio, videosPortfolio} from "../../data"

const Portfolio = () => {
    
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])

    const list = [
        {
            id: "web",
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

    useEffect(()=>{

        switch(selected){
            case "fotografia":
                setData(fotografiaPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "design":
                    setData(designPortfolio);
                break;
            case "videos":
                        setData(videosPortfolio);
                break;
            case "socialmedia":
                setData(socialmediaPortfolio);
                break;
                default:
                    setData(socialmediaPortfolio);
        }

    },[selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portifólio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map(d=>(
                <div className="item">
                    <div className="img">
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </div>
                </div>))}
            </div>
        </div>
    );
}

export default Portfolio;
