import React from 'react'
import './CarPage.css';


function CarPage() {
    return (
        <>
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

            <div class="detail-section detail-highlights">
                <div className= 'barCarPage'>
                    <div className='bidBarCarPage'>
                        <div className="bid-stats">
                        <div><i class="far fa-clock"> :</i><strong>20 minutes</strong></div>
                        <div>&nbsp;<i class="fas fa-arrow-up"></i> &nbsp;High Bid : <i class="fas fa-rupee-sign"> 17,00,000</i></div>
                        <div>&nbsp;&nbsp;<i class="fas fa-hashtag"></i> Bids : 24</div>
                        <div>&nbsp;<i class="far fa-comments"></i>&nbsp;Comments : 20</div>
                    </div>
                    </div>
                <button className="placeBidBtn">Place Bid</button>
            </div>

            <h4>Highlights</h4>
            <div class="detail-body">
                <p>THIS... is a 2021 Tesla Model S Long Range, finished in black with a black interior. </p>
                <ul>
                    <li>The odometer currently indicates less than 25 miles. </li>
                    <li>The attached Carfax history report indicates no damage or accidents.</li>
                    <li>An included window sticker shows this Model S carried a sticker price of $97,690 and came equipped with 19-inch Tempest wheels, adaptive suspension damping, a panoramic glass roof, leatherette upholstery, a yoke steering wheel, heated and cooled front seats, 3-zone climate control system, a 22-speaker audio system, autopilot, and more as detailed below. </li>
                    <li>This Model S Long Range has an EPA-estimated driving range of 405 miles. </li>
                    <li>A 2016 refresh for the Model S saw the front end design updated along with the air filtration system, an improved charger with higher amps, LED headlights and fog lights, body-colored side sill plates, a black-colored rear diffuser, and a revised front trunk area.</li>
                    <li>Power comes from a pair of electric motors (one per axle) and a lithium-ion battery pack, rated at approximately 670 total horsepower.</li>
                    </ul>
                    </div>
                    </div>

                    <div class="detail-section detail-equipment">
                        <h4>Equipment</h4><div class="detail-body">
                            <p>A window sticker is provided in the photo gallery, and a partial list of notable equipment is shown below:</p>
                            <ul>
                                <li>19-inch Tempest wheels</li>
                                <li>Adaptive suspension damping</li>
                                <li>Panoramic glass roof</li>
                                <li>Leatherette upholstery</li>
                                <li>Wood interior trim</li>
                                <li>Heated yoke steering wheel</li>
                                <li>Heated and cooled front seats</li>
                                <li>Heated rear seats</li>
                                <li>17-inch touchscreen </li>
                                <li>3-zone climate control system</li>
                                <li>Onboard maps and navigation</li>
                                <li>22-speaker audio system</li>
                                <li>Autopilot</li>
                                </ul>
                                </div>
                                </div>
                                <div class="detail-section detail-other_items"><h4>Other Items Included in Sale</h4><div class="detail-body"><ul><li>2 key fobs, 2 key cards</li><li>Owner's manual and supplements</li><li>Charging cable</li></ul></div></div>
                                <div class="detail-section detail-ownership_history"><h4>Ownership History</h4><div class="detail-body"><p>The selling dealer purchased this car new in December 2021.</p></div></div>
                                </div>
                    </>
);
}
export default CarPage;

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