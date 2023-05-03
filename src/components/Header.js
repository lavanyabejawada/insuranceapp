import React from 'react';
import './Header.css';

const Header = () => {

    //logic

    return (
        <div className="navbar shadowBottom row bg-primary">
            <div className='col-1' >
                <h1 className='left text-light' id='brand'>
                    <span>.</span>
                    Ins
                    <span>.</span>
                </h1>
            </div>

            <div className='col-3'>
                <h2 className='left text-light' id='brandName'>Agent's Portal</h2>
            </div>


            <div className='col-6 searchSpace left'>
                <span className='form-input'>
                    <i className="fa fa-search" ></i>  &nbsp; &nbsp;
                    <input type="text" className='searchHeader' placeholder="Search Keyword" />
                </span>
            </div>
            <div className='col-2 right'>
                <div className='rightN'>

                    <button className='noBorder'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" className=" svg1 bi bi-bell" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                        </svg>
                        <span className="position-sticky top-10 start-100 translate-middle badge rounded-pill bg-danger">
                            9+
                        </span>
                    </button>

                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className=" svg bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Header
