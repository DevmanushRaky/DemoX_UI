import React, { Fragment } from 'react'
import AddArtistPopup from '../components/AddArtistPopUp';
import {Link} from 'react-router-dom';

class AddMusic extends React.Component{
    constructor() {  
        super();  
        this.state = {  
          showModalPopup: false  
        } 
}
isShowPopup = (status) => {  
    this.setState({ showModalPopup: status });  
  };

// Validation for while submitting form

  state ={
    value:"",
    song_name:""
  };

  getValue = (event) =>{
   const name = event.target.name;
   const value = event.target.value;

    this.setState({ [name]: value});
  }

  handleSubmit = (event) =>{
    event.preventDefault(); 
    const song_name = this.state.song_name;
    const release_date = this.state.release_date;
    const artwork = this.state.artwork;
    const artists = this.state.artists;

    console.log("the song on submit",song_name);
    console.log("the release date on submit",release_date);
    console.log("the artwork on submit",artwork);
    console.log("the artists on submit",artists);
  }

render() {
console.log('State: ',this.state);
   
  return (
    <div className="container my-5">
        <h2> Add Music Here</h2>
        <form action='' method="" name="AddMusicForm" >
        <table>
        <tr>
                <td><label for="song_name"> Song Name </label></td>
            <td><input type="text" id="song_name" name="song_name" autoComplete="off" placeholder="Enter Song Name" onChange = {this.getValue}  /> </td>
        </tr>
        <tr>
               <td> <label for="release_date"> Date of Release </label> </td>
            <td><input type="date" id="release_date" name="release_date" autoComplete="off"/></td>
        </tr>
        <tr>
                <td><label for="artwork"> Artwork </label></td>
            <td><input type="file" id="rtwork" name="artwork" placeholder/> </td>
        </tr>
        <tr>
         <Fragment>
            <td><label for="artists"> Artists</label></td>
            <td>
            <select name="artists" class="form-select form-select-sm" aria-label=".form-select-sm example">
            <option selected>Search Artist</option>
            <option value="1" name="Lewis Cadalpi">Lewis Cadalpi</option>
            <option value="2" name="Post Malone">Post Malone</option>
            <option value="3" name="Justine Bieber">Justine Bieber</option>
            <option value="4" name="Quavo">Quavo</option>
            <option value="5" name="Juice WRLD">Juice WRLD</option>
            </select>
            </td>
            <td>  
            <Fragment>
                <div onClick={() => this.isShowPopup(true)}>
                    <button  type="button" className="btn btn-secondary mx-2">+ Add Artist</button>
                </div>
            </Fragment>
            <AddArtistPopup  showModalPopup={this.state.showModalPopup} onPopupClose={this.isShowPopup}></AddArtistPopup> 
            </td>
        </Fragment>
        </tr>
        <tr>
            <td><Link to="/"><button type="button" className="btn btn-outline-dark">Cancel</button> </Link></td>
            <td><button type="button" className="btn btn-secondary" onClick = {this.handleSubmit }>Save</button></td>
        </tr>
        </table>
        </form>
    </div>
  )
}
}

export default AddMusic