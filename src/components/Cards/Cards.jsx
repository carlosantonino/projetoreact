import React, { Component } from 'react';
import Card from './CardUI';

import img1 from '../assets/dog.jpeg';
import img2 from '../assets/coelho.jpeg';
import img3 from '../assets/gato.jpeg';
import img4 from '../assets/dog-2.jpeg';
import img5 from '../assets/gato2.jpeg';
import img6 from '../assets/passaro.jpeg';

class Cards extends Component {
    render() { 
        return (  
            <div className="container-fluid d-flex justify-content-center">
                <div className='row'>
                    <div className='col-md-4'>
                        <Card imgsrc={img1} />
                    </div>
                    <div className='col-md-4'>
                        <Card imgsrc={img2}/>
                    </div>
                    <div className='col-md-4'>
                        <Card imgsrc={img3}/>
                    </div>
                    <div className='col-md-4'>
                        <Card imgsrc={img4} />
                    </div>
                    <div className='col-md-4'>
                        <Card imgsrc={img5}/>
                    </div>
                    <div className='col-md-4'>
                        <Card imgsrc={img6}/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Cards;