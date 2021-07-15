import * as React from "react"

const Footer = () => (
  <footer>
    <div className="footer__social">
      <h2 id="contact">Contact</h2>
      <ul>
        <li>
          <a href="#">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.94654e-07 3.34182C4.94654e-07 2.45552 0.352084 1.60551 0.978796 0.9788C1.60551 0.352088 2.45551 4.45512e-06 3.34182 4.45512e-06H36.6545C37.0938 -0.000712911 37.5288 0.0852097 37.9348 0.252853C38.3408 0.420496 38.7097 0.666568 39.0205 0.976979C39.3312 1.28739 39.5777 1.65605 39.7458 2.06184C39.9138 2.46763 40.0002 2.9026 40 3.34182V36.6545C40.0005 37.0939 39.9143 37.529 39.7465 37.9349C39.5786 38.3409 39.3324 38.7098 39.0218 39.0206C38.7113 39.3313 38.3425 39.5777 37.9366 39.7458C37.5307 39.9139 37.0957 40.0002 36.6564 40H3.34182C2.90281 40 2.46811 39.9135 2.06254 39.7454C1.65697 39.5774 1.28849 39.3311 0.978153 39.0206C0.667813 38.7101 0.421694 38.3414 0.253859 37.9358C0.0860241 37.5301 -0.000238356 37.0954 4.94654e-07 36.6564V3.34182ZM15.8327 15.2509H21.2491V17.9709C22.0309 16.4073 24.0309 15 27.0364 15C32.7982 15 34.1636 18.1146 34.1636 23.8291V34.4145H28.3327V25.1309C28.3327 21.8764 27.5509 20.04 25.5655 20.04C22.8109 20.04 21.6655 22.02 21.6655 25.1309V34.4145H15.8327V15.2509ZM5.83273 34.1655H11.6655V15H5.83273V34.1636V34.1655ZM12.5 8.74909C12.511 9.2485 12.4221 9.74507 12.2386 10.2097C12.0551 10.6743 11.7806 11.0975 11.4313 11.4546C11.082 11.8117 10.6649 12.0954 10.2045 12.2891C9.74402 12.4828 9.24953 12.5826 8.75 12.5826C8.25047 12.5826 7.75598 12.4828 7.29554 12.2891C6.83509 12.0954 6.41798 11.8117 6.06867 11.4546C5.71936 11.0975 5.4449 10.6743 5.26138 10.2097C5.07787 9.74507 4.989 9.2485 5 8.74909C5.02159 7.76883 5.42615 6.83599 6.12706 6.15034C6.82797 5.4647 7.7695 5.08076 8.75 5.08076C9.7305 5.08076 10.672 5.4647 11.3729 6.15034C12.0738 6.83599 12.4784 7.76883 12.5 8.74909V8.74909Z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <path d="M16.6518 23.3036C16.6518 25.0268 15.4018 25.5714 13.8661 25.5714H9.83929V20.8482H13.9464C15.6071 20.8571 16.6518 21.5446 16.6518 23.3036V23.3036ZM15.9643 15.9554C15.9643 14.375 14.7411 14 13.3839 14H9.84822V18H13.6607C15.0089 18 15.9643 17.4107 15.9643 15.9554V15.9554ZM27.7768 18.0268C26.1429 18.0268 25.0536 19.0446 24.9464 20.6786H30.5C30.3482 19.0268 29.4911 18.0268 27.7768 18.0268ZM40 4.28571V35.7143C40 38.0804 38.0804 40 35.7143 40H4.28571C1.91964 40 0 38.0804 0 35.7143V4.28571C0 1.91964 1.91964 0 4.28571 0H35.7143C38.0804 0 40 1.91964 40 4.28571ZM24.2589 13.6607H31.2054V11.9732H24.2589V13.6607ZM20.4196 23.5089C20.4196 21.3571 19.4018 19.5 17.2946 18.9018C18.8304 18.1696 19.6339 17.3214 19.6339 15.5982C19.6339 12.1875 17.0893 11.3571 14.1518 11.3571H6.07143V28.5H14.3839C17.5 28.4821 20.4196 26.9911 20.4196 23.5089V23.5089ZM33.9286 22.1875C33.9286 18.5179 31.7768 15.4554 27.8929 15.4554C24.1071 15.4554 21.5446 18.2946 21.5446 22.0268C21.5446 25.8929 23.9821 28.5446 27.8929 28.5446C30.8571 28.5446 32.7768 27.2143 33.7054 24.3661H30.6964C30.3661 25.4286 29.0357 25.9821 28 25.9821C26 25.9821 24.9554 24.8125 24.9554 22.8304H33.9018C33.9107 22.625 33.9286 22.4018 33.9286 22.1875Z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <svg width="48" height="40" viewBox="0 0 48 40">
              <path d="M48 10.3785V32.3077C48 34.3478 47.2098 36.3044 45.8033 37.747C44.3968 39.1896 42.4891 40 40.5 40H7.5C5.51088 40 3.60322 39.1896 2.1967 37.747C0.790176 36.3044 0 34.3478 0 32.3077V10.3785L23.238 24.4031C23.4689 24.5427 23.732 24.6164 24 24.6164C24.268 24.6164 24.5311 24.5427 24.762 24.4031L48 10.3785ZM40.5 9.5239e-08C42.3454 -0.000297588 44.1262 0.697251 45.5016 1.9592C46.877 3.22115 47.7505 4.9589 47.955 6.84L24 21.2923L0.0450003 6.84C0.249475 4.9589 1.12297 3.22115 2.49838 1.9592C3.8738 0.697251 5.65456 -0.000297588 7.5 9.5239e-08H40.5Z" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
    <p>© {new Date().getFullYear()} Ariel Korsten</p>
  </footer>
)

export default Footer
