import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'


export default function Home() {
  return (
    <div>
      <Head>
        <title>First Clone</title>        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <section id="showcase">
        <div className="container">
          <h1>Affordable Professional Web Design</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu luctus ipsum, rhoncus semper magna. Nulla nec magna sit amet sem interdum condimentum.</p>
        </div>
      </section>

      <section id="newsletter">
        <div className="container">
          <h1>Subscribe To Our Newsletter</h1>
          <form>
            <input type="email" placeholder="Enter Email..." required />
            <button type="submit" className="button_1">Subscribe</button>
          </form>
        </div>
      </section>

      <section id="boxes">
        <div className="container">
          <div className="box">
            <Image
              src="/img/html.png"
              alt="html image"
              width={100}
              height={100}
            />
            <h3>HTML5 Markup</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
          </div>
          <div className="box">
            <Image
              src="/img/css.png"
              alt="css image"
              width={100}
              height={100}
            />
            <h3>CSS3 Styling</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
          </div>
          <div className="box">
            <h3>Graphic Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
          </div>
          <div className="box">
            <Image
              src="/img/brush.png"
              alt="brush image"
              width={100}
              height={100}
            />
            <h3>Graphic Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

