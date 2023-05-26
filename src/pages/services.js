import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Services = () => {
  return (
    <div>
      <Head>
        <title>Services</title>
      </Head>
      <Navbar />
      <section>
        <div className="container">
          <h3>Subscribe To Our Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter email..." required="" />
            <button className="btt">Subscribe</button>
          </form>
        </div>
      </section>

      <section>
        <div className="container">
          <article className="serve">
            <h2>Services</h2>
            <div className="wow">
              <h3>Website Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                at, vulputate id lorem. Nulla facilisi.
              </p>
              <p>Pricing: $1,000 - $3,000</p>
            </div>
            <div className="wow">
              <h3>Website Maintenance</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                at, vulputate id lorem. Nulla facilisi.
              </p>
              <p>Pricing: $250 per month</p>
            </div>
            <div className="wow wo">
              <h3>Website Hosting</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                at, vulputate id lorem. Nulla facilisi.
              </p>
              <p>Pricing: $25 per month</p>
            </div>
          </article>
          <aside>
            <div id="form">
              <h3>Get A Quote</h3>
              <form>
                <label>Name</label>
                <br />
                <input type="text" placeholder="Name" required="" />
                <br />
                <label>Email</label>
                <br />
                <input type="email" placeholder="Enter Email" required="" />
                <br />
                <label>Message</label>
                <br />
                <textarea placeholder="Message" defaultValue={''} />
                <br />
                <button>Send</button>
              </form>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
