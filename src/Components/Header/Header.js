import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import Toggle from '../../Components/Toggle/Toggle';
// Icons
import { FaBars } from 'react-icons/fa';

export default class Header extends Component {
   
    state = {
        showMobile: false,
        showPainting: false,
        showWorks: false,
        showGallery: false,
        showHome: false,
        showAbout: false,
        showExhibitions: false,
    }

    handleClickMobile = () => {
        this.setState({showMobile: !this.state.showMobile})
    }

    handleClickMobilePainting = () => {
        this.setState({showMobilePainting: !this.state.showMobilePainting})
    }

    handleOverPainting = () => {
        this.setState({
            showPainting: !this.state.showPainting,
            showWorks: false,
            showGallery: false
        })
    }

    handleOverWorks = () => {
        this.setState({
            showWorks: !this.state.showWorks,
            showPainting: false,
            showGallery: false
        })
    }

    handleOverGallery = () => {
        this.setState({
            showGallery: !this.state.showGallery,
            showPainting: false,
            showWorks: false
        })
    }

    handleClickHome = () => {
        this.setState({
            showAbout: false,
            howPainting: false, 
            showWorks: false,
            showGallery: false,
            showMobile: false
        })
        this.handleLeave()
    }
    
    handleClickAbout = () => {
        this.setState({
            showAbout: !this.state.showAbout,
            showPainting: false,
            showWorks: false,
            showGallery: false,
            showExhibitions: false
        })
    }

    handleClickExhibitions = () => {
        this.setState({
            showExhibitions: !this.state.showExhibitions,
            showPainting: false,
            showWorks: false,
            showGallery: false,
            showAbout: false,
        })
    }

    handleLeave = () => {
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
                                                <li><Link to='/collections/paintings2006' className='link' onClick={this.handleClickMobile}>2006</Link></li>
                                                <li><Link to='/collections/paintings2008' className='link' onClick={this.handleClickMobile}>2008</Link></li>
                                                <li><Link to='/collections/paintings2010' className='link' onClick={this.handleClickMobile}>2010</Link></li>
                                                <li><Link to='/collections/paintings2012' className='link' onClick={this.handleClickMobile}>2012</Link></li>
                                                <li><Link to='/collections/paintings2014' className='link' onClick={this.handleClickMobile}>2014</Link></li>
                                                <li><Link to='/collections/paintings2015' className='link' onClick={this.handleClickMobile}>2015</Link></li>
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
                                               <li><Link to='/collections/works2006' className='link' onClick={this.handleClickMobile}>2006</Link></li>
                                               <li><Link to='/collections/works2009' className='link' onClick={this.handleClickMobile}>2009</Link></li>
                                               <li><Link to='/collections/works2012' className='link' onClick={this.handleClickMobile}>2012</Link></li>
                                               <li><Link to='/collections/works2016' className='link' onClick={this.handleClickMobile}>2016</Link></li>
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
                                                <li><Link to='/collections/installation' className='link' onClick={this.handleClickMobile}>Installations</Link></li>
                                                <li><Link to='/collections/studentwork' className='link' onClick={this.handleClickMobile}>Student Work</Link></li>
                                            </ul>
                                        }
                                    </div>
                                )}
                            </Toggle>
                            <div className='horizontal-line'></div>
                            <Link to='/collections/commissioned'><button className='commissionMobileBtn' onClick={this.handleClickMobile}>Commissioned Work</button></Link>
                            <div className='horizontal-line'></div>
                            <Link to="/about"><button className='aboutMobileBtn' onClick={this.handleClickMobile} >About</button></Link>
                            <div className='horizontal-line'></div>
                            <Link to="/exhibition"><button className='exhibitionsMobileBtn' onClick={this.handleClickMobile}>Exhibitions</button></Link>
                            <div className='horizontal-line'></div>
                        </div>
                    </div>
                </div>
                <nav>
                    <div className='nav-container'>     
                        <button aria-label="Paintings" className='paintingBtn' onMouseOver={this.handleOverPainting} >Paintings</button>
                            <ul className={paintingDropDown} onMouseLeave={this.handleLeave}>
                               <li><Link to='/collections/paintings2006' className='desktop-link'>2006</Link></li>
                               <li><Link to='/collections/paintings2008' className='desktop-link'>2008</Link></li>
                               <li><Link to='/collections/paintings2010' className='desktop-link'>2010</Link></li>
                               <li><Link to='/collections/paintings2012' className='desktop-link'>2012</Link></li>
                               <li><Link to='/collections/paintings2014' className='desktop-link'>2014</Link></li>
                               <li><Link to='/collections/paintings2015' className='desktop-link'>2015</Link></li>
                            </ul>
                       <button aria-label="Works On Paper" className='worksBtn' onMouseOver={this.handleOverWorks}>Works On Paper</button>
                            <ul className={worksDropDown} onMouseLeave={this.handleLeave}>
                                <li><Link to='/collections/works2006' className='desktop-link'>2006</Link></li>
                                <li><Link to='/collections/works2009' className='desktop-link'>2009</Link></li>
                                <li><Link to='/collections/works2012' className='desktop-link'>2012</Link></li>
                                <li><Link to='/collections/works2016' className='desktop-link'>2016</Link></li>
                            </ul>
                        <button aria-label="Photo Gallery" className='galleryBtn' onMouseOver={this.handleOverGallery}>Photo Gallery</button>
                            <ul className={galleryDropDown} onMouseLeave={this.handleLeave}>
                                <li><Link to='/collections/installation' className='desktop-link'>Installation Photos</Link></li>
                                <li><Link to='/collections/studentwork' className='desktop-link'>Student Work</Link></li>
                                </ul>
                        <Link to='/collections/commissioned'><button className='commissionBtn' onClick={this.handleLeave}>Commissioned Work</button></Link>
                        <Link to='/about'> <button className='aboutBtn' onClick={this.handleClickAbout} >About</button></Link>
                        <Link to='/exhibition'><button className='exhibitionsBtn' onClick={this.handleClickExhibitions} >Exhibitions</button></Link>
                    </div>
                </nav>
            </header>
        </div>
        )
    }
}