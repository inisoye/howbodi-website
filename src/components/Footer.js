import React, { useContext } from 'react';
import { CompleteDataContext } from '../Context';

import FooterLink from '../smallComponents/FooterLink';

const Footer = () => {
  const completeData = useContext(CompleteDataContext);
  // obtain getRelevantArray function from context
  const { getRelevantArray } = completeData;
  // extract the relevant array from context
  const brandMaterialsDataArray = getRelevantArray(
    completeData,
    'brandMaterials'
  );

  // destructure array
  const [brandMaterials] = brandMaterialsDataArray;

  let MonoLogoIconAndText;
  // try/catch block to prevent cannot read property of undefined error (before api is ready)
  try {
    MonoLogoIconAndText =
      brandMaterials.howbodiMonoLogoIconAndText.fields.file.url;
  } catch (error) {}

  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div className='footer-logo-container'>
          <img className='footer-logo-image' src={MonoLogoIconAndText} alt='' />
        </div>

        <div className='all-footer-links '>
          <div className='footer-links-container first'>
            <h4 className='footer-heading'>Company</h4>
            <ul className='footer-link-list list-reset'>
              <FooterLink linkText='Home' url='/' />
              <FooterLink linkText='About' url='/about' />
              <FooterLink linkText='Tests' url='/tests' />
              <FooterLink linkText='Contact' url='/contact-us' />
            </ul>
          </div>

          <div className='footer-links-container second'>
            <h4 className='footer-heading'>Legal</h4>
            <ul className='footer-links-list list-reset'>
              <FooterLink
                linkText='Terms & Conditions'
                url='/terms-and-conditions'
              />
              <FooterLink linkText='Privacy Policy' url='/privacy-policy' />
              <FooterLink linkText='Cookie Policy' url='/cookie-policy' />
            </ul>
          </div>

          <div className='footer-links-container third'>
            <h4 className='footer-heading'>Contacts</h4>
            <address>
              <ul className='footer-links-list list-reset'>
                <li className='footer-links-list-item'>
                  27B Olabanji Olajide Street, Lekki Phase 1, Lagos NG.
                </li>
                <li className='footer-links-list-item'>
                  <a className='footer-link' href='tel:+2348033043863'>
                    (+234) 803 304 3863
                  </a>
                </li>
                <li className='footer-links-list-item'>
                  <a className='footer-link' href='mailto:hello@howbodi.com'>
                    hello@howbodi.com
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>
      </div>
      <div className='footest'>
        <p className='footest-text'>
          &copy; {new Date().getFullYear()} How Bodi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
