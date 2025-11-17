import { Component } from "react";

class ImageComponent extends Component {
    render() {
        return(
            <img src={this.props.imageSrc} alt={this.props.imageDescr} />
        )
    }
}

export default ImageComponent