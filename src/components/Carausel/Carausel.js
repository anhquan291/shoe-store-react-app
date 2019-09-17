import React,{Component} from 'react';
import 'antd/dist/antd.css';
import './style.css'
import { Carousel } from 'antd';

class Carausel extends Component {
    
    render() {
        return (
          <Carousel autoplay effect="fade">
            <div>
              <div className="banner1"></div>
            </div>
            <div>
              <div className="banner2"></div>
            </div>
            <div>
              <div className="banner3"></div>
            </div>
            <div>
              <div className="banner4"></div>
            </div>
          </Carousel>
        );
    }
}
export default Carausel;
