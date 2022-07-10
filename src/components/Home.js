import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'

function Home () {
  const [rating, setRating] = useState(0) // initial rating value
  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)
    alert("Your Love this song "+ rate + "% out of 100%");
  }
  return (
    <> 
    {/* Song Section */}
      <div className="row song_section ">
        <div className="col-lg-6">
           <h2>Top 10 Song</h2>
       </div>        
        <div className="col-lg-6">
         <Link to="/AddMusicHere">
           <button  type="button" class="btn btn-secondary mx-2"> + Add Song </button>
          </Link>
        </div>        
      </div>

       {/* Song list */}
    <table className="table content_list">
      <th>Artwork</th>
      <th>Song</th>
      <th>Date of Release</th>
      <th>Artist</th>
      <th>Rate</th>
      <tr>
        <td><img className="artwork" src=".." alt="Artwork"/></td>
        <td>Dhoom Dhoom</td>
        <td>20-08-2014</td>
        <td>Ustad Anwar Darbari</td>
        <td>
        <Rating onClick={handleRating} ratingValue={rating} showTooltip
  tooltipArray={['Terrible', 'Bad', 'Average', 'Great', 'Prefect']} allowHalfIcon/* Available Props */ />
        </td>
      </tr>
    </table>
{/* Artists Section */}
      <div className="row artist_section mt-5">
        <div className="col-lg-6">
        <h2>Top Artists</h2>
          </div>
      </div>
  
    {/* Artists list */}
    <table className="table content_list">
      <th>Artist</th>
      <th>Date of Birth</th>
      <th>Song</th>
      
      <tr>
        <td>Lewis Capaldi</td>
        <td>July 21, 2019</td>
        <td>Someone You Loved, Before You Go, Bruises, Hold me while You Wait </td>
      </tr>
      <tr>
        <td>Post Malone</td>
        <td>September 27, 2019</td>
        <td>Circles,Rockstar , Sunflower, Psycho, Wow, Better Now </td>
      </tr>
      <tr>
        <td>Justin Bieber, Quavo</td>
        <td>January 02, 2020</td>
        <td>Intentions, Let me Love you, Despacito, Yummy, I don't care </td>
      </tr>
    </table>
  
    </>
  )
}

export default Home;