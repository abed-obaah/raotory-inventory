import { HashLink } from 'react-router-hash-link';
import RaotoryLogoAndNameWhite from '../assets/raotory-logo-name-white.svg';

const navigation = {
    quickLinks: [
      { name: 'Home', href: '/' },
      { name: 'Pricing', href: '#' },
      { name: 'About us', href: '/about' },
      { name: 'Contact us', href: '/contact' },
    ],
    company: [
      { name: 'Terms of service', href: '#' },
      { name: 'Privacy policy', href: '#' },
      { name: '+234 473 344 3130', href: '#' },
      { name: 'info@raotory.com.ng', href: '#' },
    ],
    termsOfService: [
      { name: 'Privacy policy', href: '#' },
      { name: '+234 473 344 3130', href: '#' },
      { name: 'info@raotory.com.ng', href: '#' },
    ],
    social: [
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/share/1BbFQUJTPT/',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/the.raotory',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: (props) => (
          // <svg fill="currentColor" viewBox="0 0 24 24" {...props} xmlns="http://www.w3.org/2000/svg">
          //   <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          //   <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          //   <g id="SVGRepo_iconCarrier"> 
          //     <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" fill=""></path> 
          //   </g>
          // </svg>
          <svg fill="currentColor" viewBox="0 0 32 32" {...props} version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <title>linkedin</title> 
              <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path> 
            </g>
          </svg>
        ),
      },
      {
        name: 'X',
        href: 'https://x.com/raotoryhq',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
          </svg>
        ),
      },
    ],
  }
  
  export default function Footer() {

    // Auto update year
    const today = new Date();
    const year = today.getFullYear();

    return (
      <footer className="section-mt bg-blue-0e90da">
        {/* Footer wrapper */}
        <div className="section-px max-w-6xl mx-auto pt-10 md:pt-16 pb-6 md:pb-8">
          {/* Footer upper section */}
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            {/* Logo, profile, social icons */}
            <div className="space-y-6 md:space-y-8">
              {/* Company logo */}
              <div>
                <a href="/">
                  <img
                    alt="Raotory logo"
                    src={RaotoryLogoAndNameWhite}
                    className="h-6 md:h-10"
                  />              
                </a>
              </div>
              {/* Company profile */}
              <p className="hidden text-sm/6 text-balance text-gray-300">
                We empower businesses to achieve operational efficiency and growth by providing them with intelligent, easy-to-use inventory management solutions.
              </p>
              {/* Social icons */}
              <div className="flex gap-x-3">
                {navigation.social.map((item) => (
                  <a key={item.name} href={item.href} target='blank' className="text-blue-0e90da bg-white p-2 md:p-2.5 rounded-full hover:bg-gray-300">
                    <span className="sr-only">{item.name}</span>
                    <item.icon aria-hidden="true" className="size-5 md:size-6" />
                  </a>
                ))}
              </div>
            </div>
            {/* Menus */}
            <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 xl:col-span-2 xl:mt-0">
              {/* Quick links */}
              <div>
                <h3 className="text-xl font-semibold text-white">Quick Links</h3>
                <ul role="list" className="mt-4 md:mt-6 space-y-2 md:space-y-4">
                  {navigation.quickLinks.map((item) => (
                    <li key={item.name}>
                      {item.name === 'Pricing' ? (
                        <HashLink smooth to="/#pricing" className="text-base text-white hover:text-gray-300">
                          {item.name}
                        </HashLink>
                      ) : (
                        <a href={item.href} className="text-base text-white hover:text-gray-300">
                          {item.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Company */}
              <div>
                <h3 className="text-xl font-semibold text-white">Company</h3>
                <ul role="list" className="mt-4 md:mt-6 space-y-2 md:space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-white hover:text-gray-300">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Terms of service */}
              <div>
                <h3 className="text-xl font-semibold text-white">Terms of Service</h3>
                <ul role="list" className="mt-4 md:mt-6 space-y-2 md:space-y-4">
                  {navigation.termsOfService.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-white hover:text-gray-300">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Copyright information */}
          <div className="mt-6 md:mt-8 border-t border-gray-d9d9d9 pt-6 md:pt-8">
            <p className="text-sm/6 text-white">&copy; {year} Raotory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  