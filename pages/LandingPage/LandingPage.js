import { FaExchangeAlt,
      FaHome,
      FaUser,
      FaLock,
      FaCalendarCheck,
      FaHeadphones,
      FaUserLock
     }
     from 'react-icons/fa'
import Footer from '../UI/Footer'
import Navbar from '../../components/Navbar'
import Image1 from '../../assets/image1.png'
import Image2 from '../../assets/image2.png'
import ZuesEarn from '../UI/CryptoMining/ZuesEarn'
import './LandingPage.css'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Map from '../../assets/map.png'
import CryptoWidget from '../cryptoChart/CryptoWidget'
import Testimonies from '../../components/Testimonies/Testimonies'
import { motion } from 'framer-motion'
// Gsap

export default function LandingPage() {

  return (
    <div className="ld-page">
      <Navbar/>
       <div className="intro">
        <div className='intro-con'>
         <motion.div className="intro-text" 
         initial={{ x:'-100vw' }}
          animate={{ x:0, transition:{ type: 'tween', duration:1 } }}
         >
            <h2>Trade, sell, buy and manage crypto currencies with <span>Zeus exchange</span> </h2>
            <p>Zeus exchange gives you the perfect conditions to sell, buy and trade crypto currencies and gift cards as well as other useful services. Sign up and get started</p>
            <div className='signup'>
              <input type='email' 
               placeholder='Example@gmail.com'/>
               <button>
               <Link to='/sign_up' className='link'>
                 Get Started
                </Link>
               </button>
            </div>
         </motion.div>
         <motion.div className='intro-image'
           initial={{ opacity:0 }}
           animate={{ opacity:1, transition:{ duration:1.5, delay:0.4 } }}
         >
           <img src={Image1} alt='intro image'/>
         </motion.div>
       </div>
        </div>
        <div className='abt'>
          <div className='abt-con'>
             <div className='abt-dt'>
              <span>$109B</span>
              <p>Quarterly volume traded</p>
             </div>
             <div className='abt-dt'>
              <span>69</span>
              <p>Countries supported</p>
             </div>
             <div className='abt-dt'>
              <span>54M+</span>
              <p>Verified Users</p>
             </div>
          </div>
        </div>
        <div className='crypto-chart'>
          <div className='crypto-con'>
           <h2>Trending Coins</h2>
           <CryptoWidget/>
          </div>
        </div>
        <div className='strt'>
           <div className='strt-con'>
             <div className='strt-text'>
              <h2> Get started in few minutes</h2>
             </div>
             <div className='strt-boxs'>
                <div className='strt-box stb1'>
                  <FaUser className='icn'/>
                  <span>Create an account</span>
                </div>
                <div className='strt-box'>
                  <FaHome className='icn stb2'/>
                  <span>Link your bank account</span>
                </div>
                <div className='strt-box stb3'>
                  <FaExchangeAlt className='icn'/>
                  <span>Start buying & selling</span>
                </div>
             </div>
           </div>
         </div>
        <div className='portfolio'> 
           <div className='pf-text'>
             <h2> Create your cryptocurrency portfolio today</h2>
             <p>Zues exchange offers a variety of features that makes trading very easy to start</p>
           </div>
           <div className='pff'>
            <div className='pf-image'>
              <img src={Image2} alt='zeus mobile portfolio'/>
            </div>
              <div className='pf-stps'>
                <div className='stps-con'>
                  <div className='stps'>
                    <FaUserLock className='icons'/> 
                    <div className='stps-text'>
                      <h3>Vault protection</h3>
                      <p>Be rest assured that all your data are safe with us</p>
                    </div>
                  </div>
                  <div className='stps'>
                    <FaCalendarCheck className='icons'/> 
                    <div className='stps-text'>
                      <h3>Instant withdrawal</h3>
                      <p>Be rest assured that all your data are safe with us</p>
                    </div>
                  </div>
                  <div className='stps'>
                    <FaLock className='icons'/> 
                    <div className='stps-text'>
                      <h3>Secured Storage</h3>
                      <p>We store majority of the digital assets in secured offline storage</p>
                    </div>
                  </div>
                  <div className='stps'>
                    <FaHeadphones className='icons'/> 
                    <div className='stps-text'>
                      <h3>24/7 Customer Service</h3>
                      <p>Be rest assured that all your data are safe with us</p>
                    </div>
                  </div>
                </div>
              </div>
           </div>
         </div>
         <div className='explore'>
          <div className='expl-con'>
           <h2>Explore endless possibilities with Zeus Exchange</h2>
           <div className='expl-boxs'>
             <div className='expl-box'>
                <h4>Dive into the world of NFTs</h4>
                <p>Open rare Mystery Boxes, explore IGOs, Fan Token, and more with Binance NFT.</p>
                <a href='##'>Learn more</a>
             </div>
             <div className='expl-box'>
                <h4>Zeus Bussiness</h4>
                <p>Reach more customers as you pay and get paid in crypto using zeus pay & marketplace.</p>
                <a href='##'>Learn more</a>
             </div>
             <div className='expl-box'>
                <h4>Zeus Coin</h4>
                <p>Earn the Zues coin for every complete transaction.</p>
                <a href='##'>Learn more</a>
             </div>
           </div>
          </div>
         </div>
         <div className='locations'>
          <div className='loc-con'>
            <div className='loc-txt'>
              <h2>
                Paternering with the world
              </h2>
              <p>We can be found all over the world</p>
            </div>
            <div className='map-image'>
              <img className='map-img' src={Map}/>
            </div>
          </div>
         </div>
         <div className='faq'>
             <div className='faq-con'>
              <h2>FAQ</h2>
              <div className='faq-box'>
                <div className='faq-boxs'>
                   <h3>What is Bitcoin?</h3>
                   <p>Bitcoin is a decentralized digitral currency that lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-peer network without the need for intermediaries</p>
                </div>
                <div className='faq-boxs'>
                   <h3>Is Zeus excahange safe?</h3>
                   <p>Bitcoin is a decentralized digitral currency that lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-peer network without the need for intermediaries</p>
                </div>
                <div className='faq-boxs'>
                   <h3>can i start trading with just $10?</h3>
                   <p>Bitcoin is a decentralized digitral currency that lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-peer network without the need for intermediaries</p>
                </div>
                <div className='faq-boxs'>
                   <h3>Is there an exchange linit between fiat and crypto?</h3>
                   <p>Bitcoin is a decentralized digitral currency that lacks a central bank or single administrator. Bitcoin can be sent from user to user through the peer-peer network without the need for intermediaries</p>
                </div>
              </div>
             </div>
         </div>
         <div className='zues-mining'>
          <div className='mining-con'>
            <div className='mining-txt'>
              <h2>Zues Coin Mining</h2>
              <p>Simple and Secured, Search popular coins and start mining</p>
            </div>
            <div className='main-mining-con'>
              <ZuesEarn/>
            </div>
          </div>
         </div>
         <div className='testimonies-con'>
          <h2>What our Customers Says!</h2>
          <p>
            Don't take our word for it here's what some of our clients have to say about use
          </p>

          <Testimonies/>
         </div>
         <div className='get-started'>
           <div className='get-started-container'>
                  <div className='gt-text'>
                    <h3>Get started Today</h3>
                  </div>
                  <div>
                    <Link to='/sign_up' className='link'>
                      <button className='btn'>Get started</button>
                    </Link>
                  </div>
           </div>
         </div>
         {/* <CryptoChart/> */}
         <footer className='Ft'>
          <div className='ft-con'>
            <div className='m-ft'>
              <Footer/>
            </div>
          <div className='ft'>
            created for the love and cruise by
            <a href='https://github.com/WISDOM-WOKE22' target='_blank'>Wisdom woke</a>
            </div>
          </div>
         </footer>
    </div>
  )
}
