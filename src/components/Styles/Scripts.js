import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Scripts = () => {
  return (
    <HelmetProvider>
      <Helmet>
        {/* <!-- Vendor JS Files --> */}
        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="assets/vendor/php-email-form/validate.js"></script>

        {/* <!-- Template Main JS File --> */}
        <script src="assets/js/main.js"></script>
      </Helmet>
    </HelmetProvider>
  )
}

export default Scripts