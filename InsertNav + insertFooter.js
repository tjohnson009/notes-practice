function insertNav() {
    const navHTML = `
          <!-- NAV BAR -->
      <nav class="navbar">
        <div id="logo">
          <a href="homepage.html">
            <img
              src="../img/mountain-black-side-CLEAR.png"
              alt="Johnson Consulting Logo"
          /></a>
        </div>
        <ul>
          <!-- image -->
          <li id="home"><a href="homepage.html">Home</a></li>
          <!-- Home Button -->
          <li id="about"><a href="about.html">About</a></li>
          <!-- About Button -->
          <li id="tools"><a href="tools.html">Tools</a></li>
          <!-- Tools Button -->
          <li id="products-services">
            <a href="products-services.html">Products &amp; Services</a>
          </li>
          <!-- Products & Services  Button -->
          <li id="get-started"><a href="get-started.html">Get Started</a></li>
          <!-- Get Started Button -->
        </ul>
      </nav>`;

      const main = document.querySelector('main'); 
    //   console.log(main); //checks that the proper element was selected
    
      main.insertAdjacentHTML('afterbegin', navHTML); 

};

function insertFooter() {
    const footerHTML = `
    
    <!-- FOOTER  -->

    <footer class="homepage-footer">
      <div class="copyright-info">
        &#169; Copyright Johnson Consulting | Created and designed by Tim
        Johnson
      </div>

      <!-- <div class="contact"></div> -->
      <div class="social-media">
        <a class="twitter" href="https://www.twitter.com/colonialdean"
          ><ion-icon class="social-media-icon" name="logo-twitter"></ion-icon
        ></a>

        <a class="facebook" href="https://www.facebook.com"
          ><ion-icon class="social-media-icon" name="logo-facebook"></ion-icon
        ></a>

        <a class="github" href="https://www.github.com/tjohnson009"
          ><ion-icon class="social-media-icon" name="logo-github"></ion-icon
        ></a>

        <a class="instagram" href="https://www.instagram.com"
          ><ion-icon class="social-media-icon" name="logo-instagram"></ion-icon
        ></a>

        <a
          class="instagram"
          href="https://www.linkedin.com/in/timothy-johnson-ii-49306a92/"
          ><ion-icon class="social-media-icon" name="logo-linkedIn"></ion-icon
        ></a>
      </div>
    </footer>
    `
    const main = document.querySelector('main'); 
    // console.log(main); //checks that proper element is selected
    main.insertAdjacentHTML('afterend', footerHTML); 
    
}; 

