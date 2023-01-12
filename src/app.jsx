import { Component } from "react";
import defaultimg from "./assets/image1.jpg";

class App extends Component{

    constructor(props){
        super(props);

        this.state = {imagesrc: defaultimg}

        this.shuffle = this.shuffle.bind(this);
    }
    
    async shuffle(){
        const response = await fetch(
            "https://random.imagecdn.app/400/400",
        );
        const url = response.url
        this.setState({imagesrc: url})
    }


    render(){
        return(
            <>
            <div className="image__container">
            <img src={this.state.imagesrc} />
            </div>

            <div className="btn__container">
                <button className="shuffle" onClick={this.shuffle}>
                    <i className="fa-solid fa-shuffle"></i>
                    <span>Change</span>
                </button>

                <div className="like">
                    <i className="fa-solid fa-heart"></i>
                </div>
            </div>
        </>
        )
    }
}

export default App
