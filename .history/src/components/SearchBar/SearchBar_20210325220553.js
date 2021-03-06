import React from 'react';
import background from '../../assets/bannerbackground.png';
const SearchBar = () => {
    const searchBg = {
        bgImage: {
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat, repeat',
            width: '100%',
            height: '550px',
            backgroundSize: 'cover'
        },
        submitBtn: {

        },
        searchBar: {
            width: '50%'
        }
    }
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={searchBg.bgImage}
      >
        <div>
          <h1>Best food waiting for your belly</h1>
          <div className="d-flex">
            <input
              style={searchBg.searchBar}
              className="form-control"
              type="text"
              placeholder="Search Your Best Food..."
            />
            <input className='search-btn' type="submit" value="submit" />
          </div>
        </div>
      </div>
    );
};

export default SearchBar;