import React, {Component} from 'react';
import './media.css'
import PropTypes from 'prop-types';
class Media extends Component{
    //method ecs6
    //constructor(props) {
    //    super(props)
    //    this.state={
    //        author:props.author
    //    }
    //    this.handleClick = this.handleClick.bind(this);
    //}
    //method ecs7
    state ={
        author: 'Danny Rivadeneira'
    }
    handleClick=(event)=>{
        console.log(this.props.image)
        this.setState({
            author: 'Josue Cruz'
        })
    }
    render(){
        const styles={
            container:{
                fontSize: 14,
                backgroundColor: 'white',
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red' 

            }
        }
        return(
            //this is jsx
            <div className='Media' onClick={this.handleClick}>
                <div className='Media-cover'>
                    <img
                    src={this.props.image}
                    alt=""
                    width={260}
                    height={160}
                    className='Media-image'
                    />
                    <h3 className='Media-title'>{this.props.title}</h3>
                    <p className='Media-author'>{this.state.author}</p>
                </div>
            </div>
        )
    }
}
Media.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video','audio']).isRequired,
}
export default Media;