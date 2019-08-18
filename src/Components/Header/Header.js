import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import Toggle from '../../Components/Toggle/Toggle';
// Icons
import { FaBars } from 'react-icons/fa';

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
        let {showPainting, showWorks, showGallery, showMobile} = this.state;
        let mobileDropDown = showMobile ? 'slide-mobile slide-mobile-position' : 'slide-mobile';
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
                            <Link to="/about"><button className='aboutMobileBtn' onClick={this.handleClickMobile} >About</button></Link>
                            <div className='horizontal-line'></div>
                            <Link to="/exhibition"><button className='exhibitionsMobileBtn' onClick={this.handleClickMobile}>Exhibitions</button></Link>
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
                        <Link to='/about' className='aboutBtn' onClick={this.handleClickAbout} >About</Link>
                        <Link to='/exhibition' className='exhibitionsBtn' onClick={this.handleClickExhibitions} >Exhibitions</Link>
                    </ul>
                </nav>
            </header>
        </div>
        )
    }
}