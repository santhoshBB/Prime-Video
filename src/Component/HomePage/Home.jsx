import React, { Component, Fragment } from "react";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="one">
          <div className="content">
            <h1 className="text text-light p-3 my-4">Welcome to Prime Video</h1>
            <p className="text text-light p-3 my-4">
              Join Prime to watch the latest movies, TV shows and award-winning
              Amazon Originals
            </p>
            <button className="btn btn-primary btn-md mb-4 ml-3">
              Start your 30-day free trial
            </button>
          </div>
        </div>
        <div className="two">
          <div className="content">
            <h1 className="text text-light p-3 my-4">Gulabo Sitabo</h1>
            <p className="text text-light p-3 my-4">
              Welcome to the World of Gulabo Sitabo - a quirky slice of life
              movie, where Mirza (Amitabh Bachchan), a landlord of an old
              depleted mansion and Baankey (Ayushmann Khurrana), his tenant are
              like Tom and Jerry - unique and unmatched, friend and foe, naughty
              and smart, little and large!
            </p>
            <button className="btn btn-primary btn-md mb-4 ml-3">
              Click here to know more
            </button>
          </div>
        </div>
        <div className="three">
          <div className="flex">
            <div className="content">
              <h1 className="text text-light p-3 my-4">Great Entertainment</h1>
              <p className="text text-light p-3 my-4">
                With your Prime membership, you have access to exclusive Amazon
                Originals, blockbuster Bollywood movies, regional movies and
                more.
              </p>
              <button className="btn btn-primary btn-md mb-4 ml-3">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="four">
          <div className="content">
            <h1 className="text text-light p-3 my-4">
              One membership, many benefits
            </h1>
            <p className="text text-light p-3 my-4">
              Your Prime membership now also includes ad-free music along with
              unlimited free, fast delivery on eligible items, exclusive access
              to deals & more.
            </p>
            <button className="btn btn-primary btn-md mb-4 ml-3">
              Get Started
            </button>
          </div>
        </div>
        <div className="five">
          <div className="flex">
            <div className="content">
              <h1 className="text text-light p-3 my-4">
                Even better with Fire TV Stick
              </h1>
              <p className="text text-light p-3 my-4">
                The biggest movies and TV shows are always better on a big
                screen. Simply plug in your Amazon Fire TV Stick and stream on
                any HDTV. Press the voice button on the remote and say the name
                of the title you want to watch to find it in seconds.
              </p>
              <button className="btn btn-primary btn-md mb-4 ml-3">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="grid">
          <div>
            <img src="images/one.png" alt="img" />
            <h1 className="text text-dark text-center my-4">Watch anywhere</h1>
            <p className="text text-dark text-center my-4">
              Enjoy from the web or with the Prime Video app on your phone,
              tablet, or select Smart TVs — on up to 3 devices at once.
            </p>
          </div>
          <div>
            <img src="images/two.jpg" alt="img" />
            <h1 className="text text-dark text-center my-4 ">
              Download and go
            </h1>
            <p className="text text-dark text-center my-4">
              Watch offline on the Prime Video app when you download titles to
              your iPhone, iPad, Tablet, or Android device.
            </p>
          </div>
          <div>
            <img src="images/three.png" alt="img" />
            <h1 className="text text-dark text-center my-4">Data Saver</h1>
            <p className="text text-dark text-center my-4 ">
              Control data usage while downloading and watching videos on select
              phones or tablets.
            </p>
          </div>
        </div>
        <div className="six">
          <div className="content">
            <h1 className="text text-light p-3 my-4">Family Friendly</h1>
            <p className="text text-light p-3 my-4">
              With easy to use Parental Controls and a dedicated kids page,
              enjoy secure, ad-free kids entertainment. Kids can enjoy popular
              TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem. Get
              started
            </p>
            <button className="btn btn-primary btn-md mb-4 ml-3">
              Get Started
            </button>
          </div>
        </div>
        <div className="foot">
          <img src="images/foot.png" alt="img" />
          <p className="text text-light p-3">
            <a href="#">Terms and Privacy Notice Send us feedback Help </a>©
            1996-2020, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </Fragment>
    );
  }
}
export default Home;
