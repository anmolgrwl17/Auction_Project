import React from "react";
import "./CarPage.css";
import Card from 'react-bootstrap/Card';

function CarPage() {
  return (
    <>
      <div className="carPage">
        <div className="page60">
        <div className="auction-title">
          <h1>2017 BMW M4 Coupe</h1>
          <button class="toggle-watch">
            <span class="sr-only">Watch</span>
          </button>
        </div>
        <div className="carDescription">
          <p>6-Speed Manual, Texas-Kept, Unmodified</p>
          <button
            aria-hidden="true"
            type="button"
            class="btn rb btn-share d-none d-md-block"
          >
            Share
          </button>
        </div>

        <div className="row auction-photos"></div>
        <div className="col for-hero"></div>
        <div className="gallery-preview"></div>

        <div class="detail-section detail-highlights">
          <div className="barCarPage">
            <div className="bidBarCarPage">
              <div className="bid-stats">
                <div>
                  <i class="far fa-clock"> :</i>
                  <strong>20 minutes</strong>
                </div>
                <div>
                  &nbsp;<i class="fas fa-arrow-up"></i> &nbsp;High Bid :{" "}
                  <i class="fas fa-rupee-sign"> 17,00,000</i>
                </div>
                <div>
                  &nbsp;&nbsp;<i class="fas fa-hashtag"></i> Bids : 24
                </div>
                <div>
                  &nbsp;<i class="far fa-comments"></i>&nbsp;Comments : 20
                </div>
              </div>
            </div>
            <button className="placeBidBtn">Place Bid</button>
          </div>

          <div className="quick-facts">
            <dl>
              <dt>Make</dt>
              <dd>
                <a href="/search/bmw">BMW</a>
              </dd>
              <dt>Model</dt>
              <dd className="subscribeable">
                <a href="#">530i</a><i class="far fa-star"></i>
                <button
                  type="button"
                  title="Notify me of 530is"
                  className=" rb subscribe"
                >
                  <span className="sr-only">Save</span>
                </button>
              </dd>
              <dt>Seller</dt>
              <dd className="seller">
                <div className="username">
                  <div className="photo float-left">
                    <a title="" alt="Guchon"></a>
                  </div>
                  <div className="text">
                    <a title="Guchon" className="user" href="/user/Guchon">
                      Guchon
                    </a>
                  </div>
                </div>
                <button
                  title="Contact seller"
                  className="btn btn-link btn-contact"
                >
                  Contact
                </button>
              </dd>
              <dt>Location</dt>
              <dd>Salt Lake City, UT 84115</dd>
              <dt>VIN</dt>
              <dd>WBADT63433CK30075</dd>
              <dt>Mileage</dt>
              <dd>41,600</dd>
              <dt>Body Style</dt>
              <dd>Sedan</dd>
            </dl>
            <dl>
              <dt>Engine</dt>
              <dd>3.0L I6</dd>
              <dt>Drivetrain</dt>
              <dd>Rear-wheel drive</dd>
              <dt>Transmission</dt>
              <dd>Automatic (5-Speed)</dd>
              <dt>Exterior Color</dt>
              <dd>Black</dd>
              <dt>Interior Color</dt>
              <dd>Black</dd>
              <dt>Title Status</dt>
              <dd>Clean (CA)</dd>
              <dt>Seller Type</dt>
              <dd>Dealer</dd>
            </dl>
          </div>

          <h4>Highlights</h4>
          <div class="detail-body">
            <p>
              THIS.. is a 2021 Tesla Model S Long Range, finished in black with
              a black interior.
            </p>
            <ul>
              <li>The odometer currently indicates less than 25 miles. </li>
              <li>
                The attached Carfax history report indicates no damage or
                accidents.
              </li>
              <li>
                An included window sticker shows this Model S carried a sticker
                price of $97,690 and came equipped with 19-inch Tempest wheels,
                adaptive suspension damping, a panoramic glass roof, leatherette
                upholstery, a yoke steering wheel, heated and cooled front
                seats, 3-zone climate control system, a 22-speaker audio system,
                autopilot, and more as detailed below.{" "}
              </li>
              <li>
                This Model S Long Range has an EPA-estimated driving range of
                405 miles.
              </li>
              <li>
                A 2016 refresh for the Model S saw the front end design updated
                along with the air filtration system, an improved charger with
                higher amps, LED headlights and fog lights, body-colored side
                sill plates, a black-colored rear diffuser, and a revised front
                trunk area.
              </li>
              <li>
                Power comes from a pair of electric motors (one per axle) and a
                lithium-ion battery pack, rated at approximately 670 total
                horsepower.
              </li>
            </ul>
          </div>
        </div>

        <div class="detail-section detail-equipment">
          <h4>Equipment</h4>
          <div class="detail-body">
            <p>
              A window sticker is provided in the photo gallery, and a partial
              list of notable equipment is shown below:
            </p>
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
        <div class="detail-section detail-other_items">
          <h4>Other Items Included in Sale</h4>
          <div class="detail-body">
            <ul>
              <li>2 key fobs, 2 key cards</li>
              <li>Owner's manual and supplements</li>
              <li>Charging cable</li>
            </ul>
          </div>
        </div>
        <div class="detail-section detail-ownership_history">
          <h4>Ownership History</h4>
          <div class="detail-body">
            <p>The selling dealer purchased this car new in December 2021.</p>
          </div>
        </div>
        <div class="detail-section detail-videos">
          <h4>Video</h4>
          <div class="videos">
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/BHHtunIY434"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/BHHtunIY434"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/BHHtunIY434"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="sellerQAHeading">
          <h3>
            Seller Q&amp;A <span class="q-count">(3)</span>
          </h3>
          <div class="qaButton">
            <button class="btn btn-link ask-question">Ask a question</button>
            <button class="btn btn-link ml-auto view-all">View all</button>
          </div>
        </div>
        {/* Comment Section */}

        <div className="questions">
          {/* <button class="prev" disabled="">
            <i class="fas fa-angle-left"></i>
          </button> */}
          <div class="qaCards" id="qcontainer-cards">
            <ul class="qaUl">
              <li data-id="9WkbAQlQ" class="qanda unanswered qaLi">
                <div class="question">
                  <div class="username">
                    <div class="photo float-left">
                      <a title="Freemarket" class="usericon" href="#"></a>
                    </div>
                    <div class="text">
                      <a
                        title="Freemarket"
                        class="user"
                        href="/user/Freemarket"
                      >
                        Freemarket
                      </a>
                      <i class="fas fa-user-check"></i>
                      <i class="fas fa-star-of-life"></i>
                      <span class="rep">
                        <i class="fas fa-arrow-up"></i>
                        43
                      </span>
                    </div>
                  </div>
                  <Card>
                  <div class="content">
                    <div class="text">
                      <Card.Text>
                        <strong>Q: </strong>Is full self driving already
                        purchased on this car?
                        </Card.Text>
                    </div>
                  </div>
                  </Card>
                </div>
                <div class="interact">
                  <button class="btn btn-sm btn-outline-secondary btn-upvote ">
                    <i class="fas fa-arrow-up"></i>0
                  </button>
                  <p class="unanswered">Not yet answered</p>
                </div>
              </li>
              <li data-id="9eAv2VAq" class="qanda answered qaLi">
                <div class="question">
                  <div class="username">
                    <div class="photo float-left">
                      <a
                        title="ColoradoHyperion"
                        class="usericon"
                        href="/user/ColoradoHyperion"
                      >
                        IMG
                      </a>
                    </div>
                    <div class="text">
                      <a
                        title="ColoradoHyperion"
                        class="user"
                        href="/user/ColoradoHyperion"
                      >
                        ColoradoHyperion
                      </a>
                      <i class="fas fa-user-check"></i>
                      <span class="rep">
                        <i class="far fa-thumbs-up"></i>
                        101
                      </span>
                      <span class="bidder">Bidder</span>
                    </div>
                  </div>
                  <div class="content">
                    <div class="text">
                      <p>
                        <strong>Q: </strong>Apologies, I may have missed it, but
                        what are the details of Factory Warranty that comes with
                        this Model S?
                      </p>
                    </div>
                  </div>
                </div>
                <div class="answer">
                  <div class="username">
                    <div class="photo float-left">
                      <a
                        title="Specialtyauto"
                        class="usericon"
                        href="/user/Specialtyauto"
                      >
                        IMG
                      </a>
                    </div>
                    <div class="text">
                      <a
                        title="Specialtyauto"
                        class="user"
                        href="/user/Specialtyauto"
                      >
                        Specialtyauto
                      </a>
                      <span class="rep">
                        <i class="fas fa-user-check"></i>
                        85
                      </span>
                      <span class="seller">Seller</span>
                    </div>
                  </div>
                  <div class="content">
                    <div class="text">
                      <p>
                        <strong>A: </strong>Hello it comes with the full factory
                        warranty of 4 yr/50,000 mi basic, 8 yr/unlimited mi
                        powertrain
                      </p>
                    </div>
                  </div>
                </div>
                <div class="interact">
                  <button class="btn btn-sm btn-outline-secondary btn-upvote ">
                    <i class="fas fa-arrow-up"></i>0
                  </button>
                  <button class="btn btn-link ml-auto rb">View answer</button>
                </div>
              </li>
              <li class="qanda empty-question qaLi">
                <button class="btn btn-secondary btn-lg">Ask a question</button>
              </li>
              <li class="qanda empty-question qaLi">
                <button class="btn btn-secondary btn-lg">Ask a question</button>
              </li>
              <li class="qanda empty-question qaLi">
                <button class="btn btn-secondary btn-lg">Ask a question</button>
              </li>
              <li class="qanda empty-question qaLi">
                <button class="btn btn-secondary btn-lg">Ask a question</button>
              </li>
              <li class="qanda empty-question qaLi">
                <button class="btn btn-secondary btn-lg">Ask a question</button>
              </li>

              <li class="qanda empty-question qaLi">
                <button class="btn btn-secondary btn-lg">Ask a question</button>
              </li>
              <li class="qanda empty-question qaLi">
                <button class="btn btn-secondary btn-lg">Ask a question</button>
              </li>
              <li class="qanda empty-question qaLi">
                <button class="btn btn-secondary btn-lg">Ask a question</button>
              </li>
              <li class="qanda empty-question qaLi">
                <button class="btn btn-secondary btn-lg">Ask a question</button>
              </li>
              <li class="qanda empty-question qaLi">
                <button class="btn btn-secondary btn-lg">Ask a question</button>
              </li>
              <li class="qanda empty-question qaLi">
                <button class="btn btn-secondary btn-lg">Ask a question</button>
              </li>
              <li class="qanda empty-question qaLi">
                <button class="btn btn-secondary btn-lg">Ask a question</button>
              </li>
              
            </ul>
            {/* <button class="next">
              <i class="fas fa-angle-right"></i>
            </button> */}
          </div>
        </div>

        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

        <div id="auction-jump" className="auction-subheading ">
          <h2>
            2016 Nissan GT-R Premium ·{" "}
            <span title="Reserve auctions have a hidden minimum price and will be sold only if that price is met or exceeded.">
              Reserve
            </span>
          </h2>
        </div>

        <div class="detail-section auction-stats-meta ">
          <div class="d-flex flex-column flex-md-row">
            <div class="current-bid d-flex flex-column flex-shrink-1 ">
              <div class="d-flex bidder">
                <h4>Current Bid</h4>
                <div class="username">
                  <div class="photo float-left">
                    <a
                      title="Weiserheiser"
                      class="usericon"
                      href="/user/Weiserheiser"
                    >
                      <img
                        src="https://media.carsandbids.com/cdn-cgi/image/width=60,height=60,quality=70/431f9228a74c40c1fbdff9c6b9e2a838dbb559b8/photos/3oOnEQdv-S85HJbujfgQ.jpg"
                        alt="Weiserheiser"
                      />
                    </a>
                  </div>
                  <div class="text">
                    <a
                      title="Weiserheiser"
                      class="user"
                      href="/user/Weiserheiser"
                    >
                      Weiserheiser
                    </a>
                  </div>
                </div>
              </div>
              <div class="bid-value">
                <span>₹</span>17,00,567
              </div>
              <p class="financing-cta">
                As low as <strong>$989 per month</strong>*
                <button type="button" class="btn btn-link rb">
                  See Rates
                </button>
              </p>
            </div>
            <ul className="stats">
              <li>
                <div className="th">Seller</div>
                <div className="td">
                  <div className="username">
                    <div className="photo float-left">
                      <a title="AZ911" className="usericon" href="/user/AZ911">
                        <img
                          src="https://media.carsandbids.com/cdn-cgi/image/width=60,height=60,quality=70/c63218fbb9e0207c258104213b635f9d6fda7aca/photos/RDyhfTI_f.jpg"
                          alt="AZ911"
                        />
                      </a>
                    </div>
                    <div className="text">
                      <a title="AZ911" className="user" href="/user/AZ911">
                        AZ911
                      </a>
                      <span className="user-extra">
                        <button title="Contact seller" className="btn btn-link">
                          Contact
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div class="th">Ending</div>
                <div class="td end-icon">Tue, Jan 25 12:00am IST</div>
              </li>

              <li>
                <div class="th">Bids</div>
                <div class="td bid-icon">21</div>
              </li>
              <li>
                <div class="th">Views</div>
                <div class="td views-icon">8,348</div>
              </li>
            </ul>
          </div>

          <div class="auction-stats-actions d-none d-md-flex">
            <button
              title="Place bid"
              class="btn btn-light btn-lg btnPlaceBid dropbtn"
            >
              Place Bid
            </button>
            <div class="sub-actions">
              <button
                title="How buying works"
                class="btn btn-icon btn-hw"
                target="_blank"
                href="/what-is/?section=how-it-works"
              >
                Guide to Buy
              </button>
              <button title="Watch this auction" class="btn btn-icon btn-w ">
                Watch this auction
              </button>
              <button
                type="button"
                title="Notify me"
                class="btn btn-icon btn-n rb subscribe"
              >
                Notify me
              </button>
            </div>
          </div>
        </div>
      </div>
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
