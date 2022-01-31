import React from "react";
import "./CarPage.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import Footer from "../Footer";

function CarPage() {
  return (
    <>
      <div className="carPage">
        <div className="auction-heading">
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
              class="btn rb btn-share d-none d-md-block">
              Share
            </button>
          </div>
          </div>

          <div class="row auction-photos">
            <div class="col for-hero">
              <div class="gallery-preview">
                <div id="gallery-preview-ref" class="draggable">
                  <div class="preload-wrap main loaded">
                    <img src="https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/da4b9237bacccdf19c0760cab7aec4a8359010b0/photos/3vMM5MAM._VjR9U36L.jpg?t=164271912860" alt="2019 Audi RS3" srcset="https://media.carsandbids.com/cdn-cgi/image/width=1800,quality=70/da4b9237bacccdf19c0760cab7aec4a8359010b0/photos/3vMM5MAM._VjR9U36L.jpg?t=164271912860 1x,https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/da4b9237bacccdf19c0760cab7aec4a8359010b0/photos/3vMM5MAM._VjR9U36L.jpg?t=164271912860 2x" data-section="exterior" data-id="9AnvbegA" />
                  </div>
                  <div class="images">
                    <div class="group exterior">
                      <span class="group-name">Exterior (65)</span>
                      <div class="preload-wrap  loaded">
                        <img src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/37e0d12ee547ba13beecbc1def609de677e2b565/photos/3vMM5MAM.NGv6MzxvK-(edit).jpg?t=164262134754" alt="2019 Audi RS3 - Exterior" data-section="exterior" data-id="9l0VB5WG" />
                      </div>
                      <div class="preload-wrap  loaded">
                        <img src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/37e0d12ee547ba13beecbc1def609de677e2b565/photos/3vMM5MAM.LBuNYWqHH-(edit).jpg?t=164262138256" alt="2019 Audi RS3 - Exterior" data-section="exterior" data-id="3pn65bOW" />
                      </div>
                      <div class="preload-wrap  loaded">
                        <img src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/37e0d12ee547ba13beecbc1def609de677e2b565/photos/3vMM5MAM.DdF2hwMLB-(edit).jpg?t=164262064886" alt="2019 Audi RS3 - Exterior" data-section="exterior" data-id="KZYQVX6N" />
                      </div>
                      <div class="preload-wrap  loaded">
                        <img src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/37e0d12ee547ba13beecbc1def609de677e2b565/photos/3vMM5MAM.C_JBlNMVg-(edit).jpg?t=164262061293" alt="2019 Audi RS3 - Exterior" data-section="exterior" data-id="9Wbymlx1" />
                      </div>
                    </div>
                    <div class="group interior">
                      <span class="group-name">Interior (46)</span>
                      <div class="preload-wrap  loaded">
                        <img src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/37e0d12ee547ba13beecbc1def609de677e2b565/photos/3vMM5MAM.6pMY9tsEl-(edit).jpg?t=164262175012" alt="2019 Audi RS3 - Interior" data-section="interior" data-id="30nvZmdV" />
                      </div><div class="preload-wrap  loaded">
                        <img src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/37e0d12ee547ba13beecbc1def609de677e2b565/photos/3vMM5MAM.AyYLjBfQt-(edit).jpg?t=164262195126" alt="2019 Audi RS3 - Interior" data-section="interior" data-id="9lzqyQjN" />
                      </div><div class="preload-wrap  loaded">
                        <img src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/37e0d12ee547ba13beecbc1def609de677e2b565/photos/3vMM5MAM.qKEcfF_fP-(edit).jpg?t=164262197266" alt="2019 Audi RS3 - Interior" data-section="interior" data-id="rbzpk8Al" />
                      </div><div class="preload-wrap  loaded">
                        <img src="https://media.carsandbids.com/cdn-cgi/image/width=542,quality=70/37e0d12ee547ba13beecbc1def609de677e2b565/photos/3vMM5MAM.rsrgzQAYN-(edit).jpg?t=164263986204" alt="2019 Audi RS3 - Interior" />
                        <div data-section="interior" data-id="all" class="all">
                          All Photos (134)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="pswp__bg">
                </div>
                <div class="gallery-heading">
                  <div class="gallery-sections">
                    <div class="draggable">
                      <button type="button" tabindex="0" aria-pressed="false" aria-label="View all" class="btn btn-link rb all-photos ">All Photos (134)</button>
                      <button type="button" tabindex="0" aria-pressed="true" aria-label="View Exterior" class="btn btn-link rb active">Exterior</button>
                      <button type="button" tabindex="0" aria-pressed="false" aria-label="View Interior" class="btn btn-link rb ">Interior</button>
                      <button type="button" tabindex="0" aria-pressed="false" aria-label="View Mechanical" class="btn btn-link rb ">Mechanical</button>
                      <button type="button" tabindex="0" aria-pressed="false" aria-label="View Docs" class="btn btn-link rb ">Docs</button>
                      <button type="button" tabindex="0" aria-pressed="false" aria-label="View Other" class="btn btn-link rb ">Other</button>
                    </div>
                  </div>
                </div>
                <div class="pswp__scroll-wrap">

                  <div class="pswp__container">
                    <div class="pswp__item">
                    </div>
                    <div class="pswp__item"><div class="pswp__zoom-wrap"><div class="pswp__img pswp__img--placeholder pswp__img--placeholder--blank">

                    </div>
                      <img class="pswp__img" src="https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/da4b9237bacccdf19c0760cab7aec4a8359010b0/photos/3vMM5MAM._VjR9U36L.jpg?t=164271912860" />
                    </div>
                    </div><div class="pswp__item">
                      <div class="pswp__zoom-wrap">
                        <div class="pswp__img pswp__img--placeholder pswp__img--placeholder--blank">

                        </div>
                        <img class="pswp__img" src="https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=80/37e0d12ee547ba13beecbc1def609de677e2b565/photos/3vMM5MAM.NGv6MzxvK-(edit).jpg?t=164262134754" />
                      </div>
                    </div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                      <button type="button" class="pswp__button btn-fs " title="Toggle fullscreen">
                      </button>
                      <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                      <div class="gallery-index ">
                        <span class="gallery-index-current">1</span>
                        <span class="gallery-index-separator">of</span>
                        <span class="gallery-index-total">134</span>
                      </div>
                      <div class="pswp__preloader">
                        <div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div>
                        </div>
                        </div>
                      </div>
                    </div>
                    <button class="btn rb slide_button right" title="Next (arrow right)">
                      <span class="sr-only">View next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="page60">
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
                    &nbsp;&nbsp;<i class="fas fa-hashtag"/> Bids : 24
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
                    <div class="content">
                      <div class="text">
                        <p>
                          <strong>Q: </strong>Is full self driving already
                          purchased on this car?
                        </p>
                      </div>
                    </div>
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
                <li class="empty-question qaLi">
                  <button id="empty-question" class="btn btn-secondary btn-lg">Ask a question</button>
                </li>

              </ul>
              {/* <button class="next">
              <i class="fas fa-angle-right"></i>
            </button> */}
            </div>
          </div>

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
                  <div class="td end-icon"><i class="far fa-calendar-check"/> Tue, Jan 25 12:00am IST</div>
                </li>

                <li>
                  <div class="th">Bids</div>
                  <div class="td bid-icon"><i class="fas fa-hashtag"/> 21</div>
                </li>
                <li>
                  <div class="th">Views</div>
                  <div class="td views-icon"><i class="far fa-eye"/> 8,348</div>
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
      <Footer/>
    </>
  );
}
export default CarPage;