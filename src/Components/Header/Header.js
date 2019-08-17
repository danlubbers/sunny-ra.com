import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import Toggle from '../../Components/Toggle/Toggle';
// Icons
import { FaTimesCircle } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
// import LinkedIn from 'react-icons/lib/fa/linkedin-square'

export default class Header extends Component {
    constructor(props) {
        super(props)
    
            this.state = {
                showMobile: false,
                showPainting: false,
                showWorks: false,
                showGallery: false,
                showHome: false,
                showAbout: false,
                showExhibitions: false
            }
            this.handleClickMobile = this.handleClickMobile.bind(this);
            this.handleClickMobilePainting = this.handleClickMobilePainting.bind(this);
            this.handleOverPainting = this.handleOverPainting.bind(this);
            this.handleOverWorks = this.handleOverWorks.bind(this);
            this.handleOverGallery = this.handleOverGallery.bind(this);
            this.handleClickHome = this.handleClickHome.bind(this);
            this.handleClickAbout = this.handleClickAbout.bind(this);
            this.handleClickExhibitions = this.handleClickExhibitions.bind(this);
            this.handleLeave = this.handleLeave.bind(this);
        }

        handleClickMobile() {
            this.setState({showMobile: !this.state.showMobile})
        }

        handleClickMobilePainting() {
            this.setState({showMobilePainting: !this.state.showMobilePainting})
        }

        handleOverPainting() {
            this.setState({
                showPainting: !this.state.showPainting,
                showWorks: false,
                showGallery: false
            })
        }

        handleOverWorks() {
            this.setState({
                showWorks: !this.state.showWorks,
                showPainting: false,
                showGallery: false
            })
        }

        handleOverGallery() {
            this.setState({
                showGallery: !this.state.showGallery,
                showPainting: false,
                showWorks: false
            })
        }


        handleClickHome() {
            this.setState({
                showAbout: false,
                howPainting: false, 
                showWorks: false,
                showGallery: false,
                showMobile: false
            })
            this.handleLeave()
        }
    
        handleClickAbout() {
            this.setState({
                showAbout: !this.state.showAbout,
                showPainting: false,
                showWorks: false,
                showGallery: false,
                showExhibitions: false
            })
        }

        handleClickExhibitions() {
            this.setState({
                showExhibitions: !this.state.showExhibitions,
                showPainting: false,
                showWorks: false,
                showGallery: false,
                showAbout: false,
            })
        }

        handleLeave() {
            this.setState({
                showPainting: false, 
                showWorks: false,
                showGallery: false,
                showAbout: false,
                showExhibitions: false
            })
        }

    render() {
        let email = 'sunnyra23@gmail.com'
        let {showAbout, showPainting, showWorks, showGallery, showExhibitions, showMobile} = this.state;
        let mobileDropDown = showMobile ? 'slide-mobile slide-mobile-position' : 'slide-mobile';
        let exhibitionsDropdown = showExhibitions ?  'slide-exhibitions slide-exhibitions-position' : 'slide-exhibitions';
        let aboutDropDown = showAbout ? 'slide-about slide-about-position' : 'slide-about';
        let paintingDropDown = showPainting ? 'slide-painting slide-painting-position' : 'slide-painting';
        let worksDropDown = showWorks ? 'slide-works slide-works-position' : 'slide-works';
        let galleryDropDown = showGallery ? 'slide-gallery slide-gallery-position' : 'slide-gallery';

    return(
        <div>
            <header>
                <div className='sunny-logo-container'>
                    <Link to='/' onClick={this.handleClickHome}><img className='sunny-logo' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/sunny-ra-logo.png" alt='Sunny Ra Logo' /></Link>
                </div>
                <div className='hamburger-container'>
                    <button className='hamburgerBtn' onClick={this.handleClickMobile} aria-label='hamburger-menu'><FaBars/></button>
                    <div className={mobileDropDown}>
                        <div className='mobile-content-container'>
                            <div className='horizontal-line'></div>
                            <Toggle>
                                {({on, toggle})=> (
                                    <div>
                                        <ul>
                                        <li className='mobile-text-content' onClick={toggle} >Paintings</li>
                                        </ul>
                                            {on && 
                                            <ul className='mobile-dropdown'>
                                                <Link to='/paintings2006'><li onClick={this.handleClickMobile}>2006</li></Link>
                                                <Link to='/paintings2008'><li onClick={this.handleClickMobile}>2008</li></Link>
                                                <Link to='/paintings2010'><li onClick={this.handleClickMobile}>2010</li></Link>
                                                <Link to='/paintings2012'><li onClick={this.handleClickMobile}>2012</li></Link>
                                                <Link to='/paintings2014'><li onClick={this.handleClickMobile}>2014</li></Link>
                                                <Link to='/paintings2015'><li onClick={this.handleClickMobile}>2015</li></Link>
                                            </ul>
                                            }
                                    </div>
                                )}
                            </Toggle>
                            <div className='horizontal-line'></div>
                            <Toggle>
                                {({on, toggle})=> (
                                    <div>
                                        <ul>
                                        <li className='mobile-text-content' onClick={toggle}>WORKS ON PAPER</li>
                                        </ul>
                                        {on && 
                                            <ul className='mobile-dropdown'>
                                                <Link to='/works2006'><li onClick={this.handleClickMobile}>2006</li></Link>
                                                <Link to='/works2009'><li onClick={this.handleClickMobile}>2009</li></Link>
                                                <Link to='/works2012'><li onClick={this.handleClickMobile}>2012</li></Link>
                                                <Link to='/works2016'><li onClick={this.handleClickMobile}>2016</li></Link>
                                            </ul>
                                        }
                                    </div>
                                )}
                            </Toggle>
                            <div className='horizontal-line'></div>
                            <Toggle>
                                {({on, toggle})=> (
                                    <div>
                                        <ul>
                                        <li className='mobile-text-content' onClick={toggle}>PHOTO GALLERY</li>
                                        </ul>
                                        {on && 
                                            <ul className='mobile-dropdown'>
                                                <Link to='/installation'><li onClick={this.handleClickMobile}>Installations</li></Link>
                                                <Link to='/studentwork'><li onClick={this.handleClickMobile}>Student Work</li></Link>
                                            </ul>
                                        }
                                    </div>
                                )}
                            </Toggle>
                            <div className='horizontal-line'></div>
                            <Link to='/commissioned'><button className='commissionMobileBtn' onClick={this.handleClickMobile}>Commissioned Work</button></Link>
                            <div className='horizontal-line'></div>
                            <Link to="/aboutmobile"><button className='aboutMobileBtn' onClick={this.handleClickMobile} >About</button></Link>
                            <div className='horizontal-line'></div>
                            <Link to="/exhibitionmobile"><button className='exhibitionsMobileBtn' onClick={this.handleClickMobile}>Exhibitions</button></Link>
                            <div className='horizontal-line'></div>
                        </div>
                    </div>
                </div>
                <nav>
                    <ul>     
                        <button aria-label="Paintings" className='paintingBtn' onMouseOver={this.handleOverPainting} >Paintings</button>
                            <div className={paintingDropDown} onMouseLeave={this.handleLeave}>
                                <Link to='/paintings2006'><li>2006</li></Link>
                                <Link to='/paintings2008'><li>2008</li></Link>
                                <Link to='/paintings2010'><li>2010</li></Link>
                                <Link to='/paintings2012'><li>2012</li></Link>
                                <Link to='/paintings2014'><li>2014</li></Link>
                                <Link to='/paintings2015'><li>2015</li></Link>
                            </div>
                       <button aria-label="Works On Paper" className='worksBtn' onMouseOver={this.handleOverWorks}>Works On Paper</button>
                            <div className={worksDropDown} onMouseLeave={this.handleLeave}>
                                <Link to='/works2006'><li>2006</li></Link>
                                <Link to='/works2009'><li>2009</li></Link>
                                <Link to='/works2012'><li>2012</li></Link>
                                <Link to='/works2016'><li>2016</li></Link>
                            </div>
                        <button aria-label="Photo Gallery" className='galleryBtn' onMouseOver={this.handleOverGallery}>Photo Gallery</button>
                            <div className={galleryDropDown} onMouseLeave={this.handleLeave}>
                                <Link to='/installation'><li>Installation Photos</li></Link>
                                <Link to='/studentwork'><li>Student Work</li></Link>
                                </div>
                        <Link to='/commissioned'><button className='commissionBtn' onClick={this.handleLeave}>Commissioned Work</button></Link>
                        <li><button aria-label="About Section" className='aboutBtn' onClick={this.handleClickAbout} >About</button></li>
                        <li><button aria-label="Exhibitions"  className='exhibitionsBtn' onClick={this.handleClickExhibitions} >Exhibitions</button></li>
                    </ul>
                </nav>
                        <div className={aboutDropDown}>
                            <div className='about-container'>
                                <div className='photo-contact-container'>
                                    <img className='sunny-portrait' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/sunny-red-dress.jpg" alt='Sunny Ra'/>
                                   <span className='email-container'> <h3>Email:</h3> <a className='email' href={`mailto:${email}`}>sunnyra23@gmail.com</a></span>
                                </div>
                            <div className='education-container'>
                                <h3>ARTIST / EDUCATOR</h3>
                                <br/>
                                <h3>Education:</h3>
                                <h4>Hunter College, CUNY; Master of Fine Arts</h4>
                                <h4>University of Pennsylvania; Bachelor of Fine Arts, Cum Laude</h4>
                                <h4>Pennsylvania Academy of the Fine Arts; Painting Certificate</h4>
                                <h4>Penn Study Abroad; London, England</h4>
                                <br/>
                                <h3>Other Art Related Experience:</h3>
                                <h4>Vermont Studio Center Residency</h4>
                                <h4>Kentucky's Governor's School for the Arts</h4>
                                <br/>
                                <h3>Artist Bio:</h3>
                                <h4>Sunny Ra most recently received a Professional Development Grant from the Great Meadows Foundation to attend the annual College Art Association Conference in New York City, the largest international conference in Visual Arts. Ra has been in many exhibitions, including Environmental Perspectives at the Pennsylvania Academy of the Fine Arts in Philadelphia. Now on Paper at the Alliance of Young Artists and Writers in New York City and had her first solo show, Nightscapes at PUBLIC Gallery in Louisville, KY in 2014. In 2012, Ra completed a three-week residency at the Vermont Studio Center under a full fellowship. Ra holds an MFA from Hunter College, CUNY in New York City and a BFA from the Univeristy of Pennsylvania and a Painting Certificate from the Pennsylvania Academy of the Fine Arts of Pennsylvania.</h4>
                                <br/>
                                <h3>Artist Statment:</h3>
                                <h4>"The foundation of my work originates from my experience of growing up Korean in Louisville, Kentucky. Since I spoke little Korean and could not read or write Hangul, I was an outsider in the Korean Community. Similarly, I never quite identified myself as American since I was not white, and was living among majority white Americans. I remember people would ask me where I was from or comment on how well I spoke English. I grew up feeling and eventually believing that I did not belong anywhere, perhaps nowhere. I am ethnically Korean, but culturally, I am a combintaion of both Korean and American customs, which I am constantly negotiating and struggling with. It is from this middle ground that my night landscapes emerge and my journey into navigating the obscure begins. By layering images of the American landscape with memories, I attempt to find a space where tensions no longer exist.</h4>
                            </div>
                                <div className='xBtnAbout-container'>
                                    <button aria-label="Close Icon" className='xBtnAbout' onClick={this.handleClickAbout}><FaTimesCircle/></button>
                                </div>
                            </div>
                        </div>
                        <div className={exhibitionsDropdown}>
                        <div className='exhibition-container'>
                            <div className='exhibition-history'>
                            <h3>Exhibition History</h3>
                                <ul>
                                    <li>Solo Exhibition, Quills, Louisville, KY 2017</li>
                                    <li>Pop-Up Art Show, Republic Bank First Friday Gallery Hop, Louisville, KY  2017</li>
                                    <li>Pop-Up Art Show, Frankfort Avenue Trolley Hop, Louisville, KY  2016</li>
                                    <li>Open Studio Weekend Exhibition, Cressman Center for Visual Arts, Louisville, KY  2015</li>
                                    <li>Botanica, Women's Club, Louisville, KY 2014</li>
                                    <li>Nightscapes, Solo Show, Louisville Visual Art, Louisville, KY - 2014</li>
                                    <li>Presence and Place, Louisville Metro Hall, Louisville, KY - 2014</li>
                                    <li>Group Show, Swanson Reed Contemporary, Louisville, KY -  2013</li>
                                    <li>Now on Paper, The Alliance of Young Artists and Writers, New York, NY - 2012</li>
                                    <li>Environmental Perspectives, A Landscape Show, Pennsylvania Academy of Fine Arts, Philadelphia, PA – 2011</li>
                                    <li>Hunter College MFA Thesis Exhibition, Hunter College, New York, NY – 2010 - 2011</li>
                                    <li>Alumni Gallery at PAFA,  Pennsylvania Academy of Fine Arts, Philadelphia, PA – 2010 - 2011</li>
                                    <li>Focus and Meditation, Artist Talk, Hunter College, New York, NY –  2010</li>
                                    <li>Hunter MFA Group Show, Crane Arts, Philadelphia, PA – 2010</li>
                                    <li>Kentucky Girlhood Project 2009, Murray State University, Murray, KY - 2009</li>
                                    <li>Hunter College Open Studios, Hunter College, New York, NY – 2008 thru 2010</li>
                                    <li>MP Law Office, Louisville, KY – 2006 - 2007</li>
                                    <li>Swanson Reed Contemporary Gallery, Louisville, KY – 2006</li>
                                    <li>The 104th Annual Student Exhibition, Pennsylvania Academy of Fine Arts, Philadelphia, PA – 2005</li>
                                    <li>The 103rd Annual Student Exhibition, Pennsylvania Academy of Fine Arts, Philadelphia, PA – 2004</li>
                                    <li>Certificate Student Gallery Showing,  Pennsylvania Academy of Fine Arts, Philadelphia, PA – 2001/2002</li>
                                </ul>
                            </div>  
                            <div className='awards-container'>
                            <h3>Awards/Recognition:</h3>
                                <h4>Great Meadows Foundation Grant</h4>
                                <h4>Corporate Art Program, Zephyr Gallery, Louisville, KY</h4>
                                <h4>City of Louisville, Mayor's Citation Recipient</h4>
                                <h4>Vermont Studio Center Fellowship</h4>
                                <h4>Studio Visit Magazine Springs 2012 Edition, Vol. 17 & 18</h4>
                                <h4>Christie's Magazine Emerging Artist Presentation</h4>
                                <h4>Gates Millennium Scholar</h4>
                            </div>
                            <div className='xBtnExhibitions-container'>
                                <button aria-label="Close Icon" className='xBtnExhibitions' onClick={this.handleClickExhibitions}><FaTimesCircle/></button>
                            </div>
                        </div>
                        </div>
            </header>
        </div>
        )
    }
}