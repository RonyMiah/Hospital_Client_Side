import React from 'react';

const MiddleComponent = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-6 ">
                    <h1 className="fs-1 mt-5">
                      Payments and Billing <br /> Assistance
                      <hr className='w-50 mt-4' />
                    </h1>
                    <ul>
                        <li className='mt-4 fs-6'>Estimate Your Bill: Create an online estimate for the hospital fee portion of your care.</li>
                    </ul>
                    <ul>
                        <li className='mt-4 fs-6'>Pay Your Bill: Pay your bill online or by phone. Contact us with questions.</li>
                    </ul>
                    <ul>
                        <li className='mt-4 fs-6'>Financial Assistance: Explore ways to get help paying your medical bills. Learn about payment plans.</li>
                    </ul>
                    <ul>
                        <li className='mt-4 fs-6'>No Surprises Act: Learn about a new right you have as a patient.</li>
                    </ul>
                </div>
                <div className="col-md-6 mt-5">
                    <img className='w-100 mt-5' src="https://www.hopkinsmedicine.org/_includes/_images/billing-hero.jpg" alt="" />
                </div>
                <div className="col-md-12 w-100 mt-5">
                <iframe width="100%" height="515" src="https://www.youtube.com/embed/zcplCd6v08o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </div>
        </div>
    );
};

export default MiddleComponent;