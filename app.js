(function () {
    // Navigation Controls
    [...document.querySelectorAll(".control")].forEach(button => {
      button.addEventListener("click", function () {
        document.querySelector(".active-btn").classList.remove("active-btn");
        this.classList.add("active-btn");
        document.querySelector(".active").classList.remove("active");
        document.getElementById(button.dataset.id).classList.add("active");
      });
    });
  
    // Theme Toggler
    document.querySelector(".theme-btn").addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  
    /***** Language Changer Functionality *****/
  
    // Set the default language to English (the page’s original text)
    let currentLanguage = "en"; 
    const languageBtn = document.querySelector('.language-btn');
  
    // Object containing the translations for English and French.
    const translations = {
      en: {
        headerName: "Hi, I'm <span>Younes AZZOUZ</span><br>A Web Developer.",
        headerParagraph: "I'm a Web Developer, I love to create beautiful and functional websites. I specialize in crafting visually stunning and highly functional websites. With a passion for clean design and seamless user experiences, I turn ideas into reality through modern web technologies.",
        aboutTitle: "About <span>me</span><span class=\"bg-text\">my stats</span>",
        aboutInfoTitle: "Information About me",
        aboutInfoText: "I’m a passionate web developer dedicated to creating innovative and user-friendly websites. With a keen eye for design and functionality, I bring ideas to life through clean code and modern technologies. I thrive on solving problems, learning new skills, and staying ahead in the ever-evolving world of web development. Whether it’s front-end aesthetics or back-end efficiency, I aim to craft seamless digital experiences.",
        skillsTitle: "My Skills",
        timelineTitle: "My Timeline",
        portfolioTitle: "My <span>Portfolio</span><span class=\"bg-text\">My Work</span>",
        portfolioText: "Here is some of my work that I've done in various programming languages.",
        contactTitle: "Contact <span>Me</span><span class=\"bg-text\">Contact</span>",
        contactInfoTitle: "Contact me here",
        contactInfoText: "I am available for any inquiries or collaborations. Feel free to reach out using the details below."
      },
      fr: {
        headerName: "Salut, je suis <span>Younes AZZOUZ</span><br>Un Développeur Web.",
        headerParagraph: "Je suis un Développeur Web, j'aime créer des sites web beaux et fonctionnels. Je me spécialise dans la création de sites visuellement impressionnants et hautement fonctionnels. Avec une passion pour un design épuré et des expériences utilisateur sans faille, je transforme les idées en réalité grâce aux technologies web modernes.",
        aboutTitle: "À propos de <span>moi</span><span class=\"bg-text\">mes stats</span>",
        aboutInfoTitle: "Informations à propos de moi",
        aboutInfoText: "Je suis un développeur web passionné, dédié à la création de sites web innovants et conviviaux. Avec un sens aigu du design et de la fonctionnalité, je donne vie aux idées grâce à un code propre et des technologies modernes. Je suis motivé par la résolution de problèmes, l'apprentissage de nouvelles compétences et la veille dans le monde en constante évolution du développement web. Qu'il s'agisse d'esthétique front-end ou d'efficacité back-end, je vise à créer des expériences numériques fluides.",
        skillsTitle: "Mes Compétences",
        timelineTitle: "Ma Chronologie",
        portfolioTitle: "Mon <span>Portfolio</span><span class=\"bg-text\">Mon Travail</span>",
        portfolioText: "Voici quelques-uns de mes travaux réalisés dans divers langages de programmation.",
        contactTitle: "Contactez <span>Moi</span><span class=\"bg-text\">Contact</span>",
        contactInfoTitle: "Contactez-moi ici",
        contactInfoText: "Je suis disponible pour toute demande ou collaboration. N'hésitez pas à me contacter en utilisant les informations ci-dessous."
      }
    };
  
    // Function to update the text on the page based on the selected language.
    function changeLanguage(lang) {
      // Update Header
      document.querySelector('.right-header .name').innerHTML = translations[lang].headerName;
      document.querySelector('.right-header p').textContent = translations[lang].headerParagraph;
  
      // Update About Section
      document.querySelector('#about .main-title h2').innerHTML = translations[lang].aboutTitle;
      document.querySelector('#about .left-about h4').textContent = translations[lang].aboutInfoTitle;
      document.querySelector('#about .left-about p').textContent = translations[lang].aboutInfoText;
      // Update the Skills title (first stat-title)
      const statTitles = document.querySelectorAll('#about .stat-title');
      if(statTitles.length > 0) {
        statTitles[0].textContent = translations[lang].skillsTitle;
      }
      // Update Timeline title (assumed to be the second stat-title)
      if(statTitles.length > 1) {
        statTitles[1].textContent = translations[lang].timelineTitle;
      }
  
      // Update Portfolio Section
      document.querySelector('#portfolio .main-title h2').innerHTML = translations[lang].portfolioTitle;
      document.querySelector('#portfolio .port-text').textContent = translations[lang].portfolioText;
  
      // Update Contact Section
      document.querySelector('#contact .main-title h2').innerHTML = translations[lang].contactTitle;
      document.querySelector('#contact .left-contact h4').textContent = translations[lang].contactInfoTitle;
      document.querySelector('#contact .left-contact p').textContent = translations[lang].contactInfoText;
    }
  
    // Attach event listener to the language button.
    languageBtn.addEventListener("click", function () {
      if (currentLanguage === "en") {
        changeLanguage("fr");
        currentLanguage = "fr";
        languageBtn.textContent = "EN"; // Show the alternative language code
      } else {
        changeLanguage("en");
        currentLanguage = "en";
        languageBtn.textContent = "FR"; // Show the alternative language code
      }
    });
  })();
  