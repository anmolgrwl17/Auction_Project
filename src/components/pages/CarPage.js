import React from 'react'
import './CarPage.css';


function CarPage() {
    return (
        <div className='carPage'>
            <div className='auction-title'>
                <h1>2017 BMW M4 Coupe</h1>
                <button class="toggle-watch  "><span class="sr-only">Watch</span></button>
            </div>
            <div className='carDescription'>
                <p>6-Speed Manual, Texas-Kept, Unmodified</p>
                <button aria-hidden="true" type="button" class="btn rb btn-share d-none d-md-block">Share</button>
            </div>
            
            <div className='row auction-photos'></div>
            <div className='col for-hero'></div>
            <div className='gallery-preview'></div>

            <div className= ''>
                <div className= 'bar-bg'>
                    <div className='bid-bar'>
                        <div className="bid-stats">
                        <div><i class="far fa-clock"> :</i><strong>20 minutes</strong></div>
                        <div>&nbsp;&nbsp;Bid : <i class="fas fa-rupee-sign">17,000</i></div>
                    </div>
                </div>
            </div>
        </div>

        </div>


/* <div className="quick-facts">
    <dl>
        <dt>Make</dt><dd><a href="/search/mclaren">McLaren</a></dd>
        <dt>Model</dt><dd class="subscribeable"><a href="/search/mclaren/600lt">600LT</a>
        <button type="button" title="Notify me of 600LTs" class=" rb subscribe"><span class="sr-only">Save</span></button></dd>
            <dt>Seller</dt><dd>
                <div class="username">
            <div class="photo float-left"><a class="usericon" href="/user/BarrettAutomotiveGroup">
                <img src="https://media.carsandbids.com/cdn-cgi/image/width=60,height=60,quality=70/14c4604d9ac6fb6345918128f71b7e74aa81aa3b/photos/9uh5z_jJE.png" alt="BarrettAutomotiveGroup"></a></div>
                <div class="text"><a class="user" href="/user/BarrettAutomotiveGroup">BarrettAutomotiveGroup</a>
                </div>
                </div>
        </dd>
        <dt>Location</dt><dd>Moorpark, CA 93021</dd>
        <dt>VIN</dt><dd>SBM13RAA0KW008355</dd>
        <dt>Mileage</dt><dd>6,900</dd>
        <dt>Body Style</dt><dd>Coupe</dd>
        </dl>
        <dl>
            <dt>Engine</dt><dd>3.8L Turbocharged V8</dd>
        <dt>Drivetrain</dt><dd>Rear-wheel drive</dd>
        <dt>Transmission</dt><dd>Automatic (7-Speed)</dd>
        <dt>Exterior Color</dt><dd>Ceramic Gray</dd>
        <dt>Interior Color</dt><dd>Carbon Black/Burnt Orange</dd>
        <dt>Title Status</dt><dd>Clean (CA)</dd>
        <dt>Seller Type</dt><dd>Private Party</dd>
        </dl>
        </div> */


        
);
}
export default CarPage;