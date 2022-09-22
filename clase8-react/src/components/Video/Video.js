import React, { Component } from "react";
import './Video.css';

export default class Video extends Component {
    render(){
              
        return (
            <video className="Video">
                "<iframe width="640" height="480" src="https://www.youtube.com/embed/pomQOHIKIb0" title="Les Luthiers · Todo Por Que Rías · Show Completo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </video>
        );        
    }
}
