import React, { Component, Fragment } from 'react';  
import { Modal } from 'react-bootstrap';  
  
class AddArtistPopUp extends Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            showModal: false  
        };  
    }  
  
    isShowModal = (status) => {  
        this.handleClose();  
        this.setState({ showModal: status });  
    }  
  
    handleClose = () => {  
        this.props.onPopupClose(false);  
    }  
  
  
    render() {  
        return (  
            <Fragment>  
                <Modal show={this.props.showModalPopup} onHide={this.handleClose}  
                    size="lg"  
                    aria-labelledby="contained-modal-title-vcenter"  
                    centered  
                >  
                    <Modal.Header closeButton>  
                        <Modal.Title id="sign-in-title">  
                          <h2> Add New Artist </h2> 
                         </Modal.Title>  
                    </Modal.Header>  
                    <Modal.Body>  
                        <div>
                            <form>
                                <table>
                                    <tr>
                                        <td><label for="artist_NAME"> Artist Name </label></td>
                                        <td><input type="text" id='artist_name' name='artist_name' placeholder='Enter Artist Name' autoComplete="off"/></td>
                                    </tr>
                                    <tr>
                                        <td><label for='artist_DOB'>Date Of Birth</label></td>
                                        <td><input type="date" id="artist_DOB" name="artist_DOB"/></td>
                                    </tr>
                                    <tr>
                                        <td><label for="artist_BIO">Bio </label></td>
                                        <td> <textarea rows="4" cols="50" name="Description"></textarea></td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                        <div className="signUp">   
                            <button type="button" className="btn btn-outline-dark" onClick={() => this.isShowModal(true)}> Close </button> 
                            <button type="button" className="btn btn-secondary mx-5" onClick={() => this.isShowModal(true)}> Save </button> 
                        </div>  
                    </Modal.Body>  
  
                </Modal >  
            </Fragment >  
  
        );  
    }  
}  
  
export default (AddArtistPopUp); 