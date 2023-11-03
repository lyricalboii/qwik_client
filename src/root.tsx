import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="twitter:site" content="@themetags" />
        <meta name="twitter:creator" content="@themetags" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hostim - Hosting Service Provider HTML Template" />
        <meta name="twitter:description" content="Hosting Services HTML Template, software technology, agency & business Bootstrap 5 Html template. It is best and famous hosting services company website template." />
        <meta name="twitter:image" content="#" />

        <meta property="og:url" content="#" />
        <meta name="twitter:title" content="Hostim - Hosting Service Provider HTML Template" />
        <meta property="og:description" content="Hostim Services HTML Template, software technology, agency & business Bootstrap 5 Html template. It is best and famous hosting services company website template." />
        <meta property="og:image" content="#" />
        <meta property="og:image:secure_url" content="#" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />

        <meta name="description" content="Hostim - Hosting Services HTML Template, software technology, agency & business Bootstrap 5 Html template. It is best and famous hosting services company website template." />
        <meta name="author" content="ThemeTags" />

        <link rel="icon" href="assets/img/favicon.png" type="image/png" sizes="16x16" />

        <title>Hostim - HTML Template</title>

        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&amp;family=Urbanist:wght@600;700&amp;display=swap" rel="stylesheet" />

        <link rel="stylesheet" href="assets/css/main.css" />

        <link rel="stylesheet" href="assets/css/custom.css" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
        <script src="assets/js/vendors/jquery.min.js"></script>
        <script src="assets/js/vendors/popper.min.js"></script>
        <script src="assets/js/vendors/bootstrap.min.js"></script>
        <script src="assets/js/vendors/easing.min.js"></script>
        <script src="assets/js/vendors/swiper.min.js"></script>
        <script src="assets/js/vendors/massonry.min.js"></script>
        <script src="assets/js/vendors/bootstrap-slider.js"></script>
        <script src="assets/js/vendors/magnific-popup.js"></script>
        <script src="assets/js/vendors/waypoints.js"></script>
        <script src="assets/js/vendors/counterup.js"></script>
        <script src="assets/js/vendors/isotop.pkgd.min.js"></script>
        <script src="assets/js/vendors/countdown.min.js"></script>
        <script src="assets/js/app.js"></script>
      </body>
    </QwikCityProvider>
  );
});
