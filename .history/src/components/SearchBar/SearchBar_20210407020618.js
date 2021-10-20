import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import background from '../../assets/bannerbackground.png';
import './SearchBar.css';


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
      <div style={searchBg.bgImage}>
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={6}>
              <h1>Best food waiting for your belly</h1>
              <div className="d-flex mt-5">
                <input
                  className="form-control searchBar"
                  type="text"
                  placeholder="Search Your Best Food..."
                />
                <input className="search-btn" type="submit" value="Search" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default SearchBar;