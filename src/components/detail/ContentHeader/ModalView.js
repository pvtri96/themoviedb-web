import React, {Component} from 'react';
import FontAwesome      from 'react-fontawesome';
import {
  Modal , Input, option
} from 'reactstrap';
import Services from '../../../service';

class ModalView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posterId: 0
    }
    this.setPosterId = this.setPosterId.bind(this);
  }



  setPosterId(temp, max, min = 0) {
    if(temp) {
      if(this.state.posterId == max-1) {
        this.setState({
          posterId: 0
        });
      }
      else {
        this.setState({
          posterId: this.state.posterId + 1
        });
      }
    }
    else {
      if(this.state.posterId == min) {
        this.setState({
          posterId: max-1
        });
      }
      else {
        this.setState({
          posterId: this.state.posterId - 1
        });
      }
    }
  }

  render() {
    let posters = this.props.posters;
    let poster = Services.getElementWithIndex(posters, this.state.posterId);

    return (
      <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
        <div className="d-flex">
          <div>
            <img width="359" height="538" src={process.env.MOVIE_IMG_URL + 'w640' +
            poster.file_path}
            crossOrigin="anonymous"/>
          </div> {/* left modal */}

          {/* content-modal */}
          <div className="content-modal">
            <div className="header-modal">
              <div style={{textAlign: 'right'}} onClick={this.props.toggle}>
                <FontAwesome
                  className="icon"
                  name="times"
                />
              </div>

              <br/>

              <div className="d-flex justify-content-between">
                <div className="title">Info</div>

                <FontAwesome
                  className="icon"
                  name="lock"
                />
              </div>

              <hr/>
            </div> {/* header modal */}

            <div className="info-img">
              <div className="title">Primary ?</div>
              <div>
                <FontAwesome
                  name="times-circle"
                />
              </div>
              <br/>

              <div className="title">Added by</div>
              <div> Tran Van Thuc</div>
              <br/>

              <div className="title">Size</div>
              <div>
                {poster.width}x{poster.height} {' '}
                <FontAwesome
                  name="check-circle"
                />
              </div>
              <br/>

              <div className="title">Language</div>
              <div style={{marginTop: '5px'}}>
                <Input type="select" disabled name="select" id="exampleSelect">
                  <option>English</option>

                </Input>
              </div>

              <br/>
            </div>

            <hr/>
            <br/>
            <div className="d-flex justify-content-between info-footer">
              <div onClick={() => this.setPosterId(false,posters.length)}>
                <FontAwesome className="icon" name="arrow-circle-left"
                  style={{ fontSize: '25px'}}
                />
              </div>
              <div onClick={() => this.setPosterId(true,posters.length)}>
                <FontAwesome className="icon" name="arrow-circle-right"
                  style={{ fontSize: '25px'}}
                />
              </div>
            </div>

          </div> {/* right modal */}
        </div> {/* d-flex */}
      </Modal>
    );
  }
}


export default ModalView;
