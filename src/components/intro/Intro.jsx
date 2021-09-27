import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro(){

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed:60,
            strings: ['Webdesigner', 'Fotógrafo','Designer','Editor de vídeo', 'muito mais'],
        });
    },[])

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/eu.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Olá, eu sou</h2>
                    <h1>João Gabriel Abreu Macedo</h1>
                    <h3>e sou <span ref={textRef}></span></h3>

                </div>
                <a href="#portfolio"><img src="assets/down.png" alt="" /></a>
            </div>
        </div>
    );
}
 

