 
import Image from '../assets/Images/22.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <footer className="text-white bg-black section is-footer">
      <div className="container-large">
        <div className="margin-bottom-64">
          <div className="wrap_flex is-align-top">
            <div className="max-width-250">
              <div className="margin-bottom-8">
                <img src={Image} alt="India in One Book Logo" className='lg:w-[140px]' />
              </div>
              <p className="text-size-medium">
                Uniting India & the Arab world, one story at a time.
              </p>
            </div>
            <ul role="list" className="footer_links">
              <li className="footer_link-item">
                <div className="footer_link w-inline-block">
                  <div className="z-index-2">
                    <Link to={'/userinfo'}>
                      <div className='font-semibold text-white'>
                        Download “India in One Book”
                      </div>
                    </Link>
                  </div>
                  <div className="link_line" />
                </div>
              </li>
              {/* Add more navigation links if needed */}
            </ul>
          </div>
        </div>

        <div className="footer_copyright">
          <div className="opacity-60">
            <div className="footer_copyright-inner">
              <p className="text-size-regular">
                © 2025 indiainonebook.com. Crafted by Muhammed Rafih.  
                Your Arabic gateway to a true Indian experience.
              </p>
            </div>
          </div>
          <ul role="list" className="social-links">
            <li className="social-links_item">
              <a href="#" className="social-link w-inline-block">
                <img
                  src="https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/670579c6d6302f0c7476d8aa_x-icon.svg"
                  loading="lazy"
                  alt="X / Twitter"
                  className="icon-24"
                />
                <div className="link-box" />
              </a>
            </li>
            <li className="social-links_item">
              <a href="#" className="social-link w-inline-block">
                <img
                  src="https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/670579c6c9f6ee644ca816ad_yt-icon.svg"
                  loading="lazy"
                  alt="YouTube"
                  className="icon-24"
                />
                <div className="link-box" />
              </a>
            </li>
            <li className="social-links_item">
              <a href="#" className="social-link w-inline-block">
                <img
                  src="https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/670579c659a21d0666b60f80_fb-icon.svg"
                  loading="lazy"
                  alt="Facebook"
                  className="icon-24"
                />
                <div className="link-box" />
              </a>
            </li>
            <li className="social-links_item">
              <a href="#" className="social-link w-inline-block">
                <img
                  src="https://cdn.prod.website-files.com/67041c2a6a806901e0c7ed1b/670579c6dcbfeadee27d5e70_ig-icon.svg"
                  loading="lazy"
                  alt="Instagram"
                  className="icon-24"
                />
                <div className="link-box" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer> 
    </>
  )
}

export default Footer
