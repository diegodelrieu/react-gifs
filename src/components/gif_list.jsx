import React, { Component } from "react";
import Gif from "./gif.jsx";

class GifList extends Component {
    
    render(){
        debugger
        return this.props.gifs.map(gif => {
            return (<Gif id={gif.id} key={gif.id}/>)
        })
    }
}

export default GifList;