import React from 'react'
import { Link } from 'react-router-dom';

export default function Donation({donation}) {

    const { campID,donarName, donarMail, thumb, amount, title, situation ,donationDate } = donation;
  return (
        <div className="three-d-card-container">
          <div className="three-d-card">
            <img src={thumb} alt="thumbnail" className='image'/>
            <div className='flex flex-row justify-end text-end'>
                <p className='text-end p-1 border rounded-lg mx-3'>{situation}</p>
            </div>
            <div className="three-d-card-content">
              <h2 className='title' title={title}>{title.slice(0,30)}...</h2>
              <h4>
                Donat on : {(new Date(donationDate).toISOString().split("T")[0])}
              </h4>
              <p> amount is : {amount}</p>
            <div className='items-center justify-center flex mt-4'><Link to={`/campaign/${campID}`} className='border px-2 py-2 rounded-lg hover:shadow-lg hover:bg-slate-300 bg-slate-400'>See Camp</Link></div>
            </div> 
           </div>
        </div>
  )
}
