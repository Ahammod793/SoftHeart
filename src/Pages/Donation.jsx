import React from 'react'

export default function Donation({donation}) {
    const { donarName, donarMail, thumb, donatedAmount, headline, donationSituation } = donation;
    console.log(donation)
  return (
        <div className="three-d-container">
          <div className="three-d-card">
            <img src={thumb} alt="thumbnail" />
            <div className="three-d-content">
              <h2>3D Card Title</h2>
              <p>
                This is a 3D card example with custom CSS for shadow and hover
                effects.
              </p>
              <button>Learn More</button>
            </div> 
           </div>
        </div>
  )
}
