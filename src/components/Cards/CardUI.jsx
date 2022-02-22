import React from 'react';
import './card-style.css';

const Card = props => {
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="image 1" className='card-img-top' />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Card Title</h4>
                <p className="card-text text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam quis quibusdam, quasi optio recusandae eligendi provident neque quisquam voluptas.
                    <a href="#" className='btn btn-outline-success'>Go Anywhere</a>
                </p>
            </div>
        </div>
        
    )
}

export default Card;

