import React from 'react'

const NewLetter = () => {
  return (
    <div className='NewLetter'>
        <div className="content">
            <div className="title">
                Sign Up For Newsletters
            </div>
            <div className="details">
                Get E-mail updates about our latest shop and <span>special offers</span>
            </div>
        </div>
        <div className="form">
            <form>
                <input type="text" placeholder="Enter Your Email" />
                <div className='button'>Subscribe</div>
            </form>
        </div>
    </div>
  )
}

export default NewLetter