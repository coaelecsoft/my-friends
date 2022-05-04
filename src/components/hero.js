import './hero.css'
function Hero(props) {
    
    return (      
        <header className="layout-header anim-start-header">
            <figure>
                <img src={props.bgimg} alt="web dev" />
            </figure>
            <div>
                <h1>{ props.title}</h1>
                <p>{ props.description}</p>
            </div>
        </header>   
        );
   }
export default Hero