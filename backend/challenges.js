export const allChallengesTestCases = [
  {
    challengeId: "challenge-survey-form",
    testCases: [
      {
        id: "t1",
        description: "You should have an h1 element with an id of title.",
        type: "HTML",
        queries: [{ query: "h1#title", count: 1 }],
      },
      {
        id: "t2",
        description: "Your #title should not be empty.",
        type: "HTML",
        queries: [{ query: "h1#title:not(:empty)", count: 1 }],
      },
      {
        id: "t3",
        description: "You should have a p element with an id of description.",
        type: "HTML",
        queries: [{ query: "p#description", count: 1 }],
      },
      {
        id: "t4",
        description: "Your #description should not be empty.",
        type: "HTML",
        queries: [{ query: "p#description:not(:empty)", count: 1 }],
      },
      {
        id: "t5",
        description: "You should have a form element with an id of survey-form.",
        type: "HTML",
        queries: [{ query: "form#survey-form", count: 1 }],
      },
      {
        id: "t6",
        description: "You should have an input element with an id of name.",
        type: "HTML",
        queries: [{ query: "input#name", count: 1 }],
      },
      {
        id: "t7",
        description: "Your #name should have a type of text.",
        type: "HTML",
        queries: [{ query: "input#name[type='text']", count: 1 }],
      },
      {
        id: "t8",
        description: "Your #name should require input.",
        type: "HTML",
        queries: [{ query: "input#name[required]", count: 1 }],
      },
      {
        id: "t9",
        description: "Your #name should be a descendant of #survey-form.",
        type: "HTML",
        queries: [{ query: "form#survey-form input#name", count: 1 }],
      },
      {
        id: "t10",
        description: "You should have an input element with an id of email.",
        type: "HTML",
        queries: [{ query: "input#email", count: 1 }],
      },
      {
        id: "t11",
        description: "Your #email should have a type of email.",
        type: "HTML",
        queries: [{ query: "input#email[type='email']", count: 1 }],
      },
      {
        id: "t12",
        description: "Your #email should require input.",
        type: "HTML",
        queries: [{ query: "input#email[required]", count: 1 }],
      },
      {
        id: "t13",
        description: "Your #email should be a descendant of #survey-form.",
        type: "HTML",
        queries: [{ query: "form#survey-form input#email", count: 1 }],
      },
      {
        id: "t14",
        description: "You should have an input element with an id of number.",
        type: "HTML",
        queries: [{ query: "input#number", count: 1 }],
      },
      {
        id: "t15",
        description: "Your #number should be a descendant of #survey-form.",
        type: "HTML",
        queries: [{ query: "form#survey-form input#number", count: 1 }],
      },
      {
        id: "t16",
        description: "Your #number should have a type of number.",
        type: "HTML",
        queries: [{ query: "input#number[type='number']", count: 1 }],
      },
      {
        id: "t17",
        description: "Your #number should have a min attribute with a numeric value.",
        type: "HTML",
        queries: [{ query: "input#number[min]", count: 1 }],
      },
      {
        id: "t18",
        description: "Your #number should have a max attribute with a numeric value.",
        type: "HTML",
        queries: [{ query: "input#number[max]", count: 1 }],
      },
      {
        id: "t19",
        description: "You should have a label element with an id of name-label.",
        type: "HTML",
        queries: [{ query: "label#name-label", count: 1 }],
      },
      {
        id: "t20",
        description: "You should have a label element with an id of email-label.",
        type: "HTML",
        queries: [{ query: "label#email-label", count: 1 }],
      },
      {
        id: "t21",
        description: "You should have a label element with an id of number-label.",
        type: "HTML",
        queries: [{ query: "label#number-label", count: 1 }],
      },
      {
        id: "t22",
        description: "Your #name-label should contain text that describes the input.",
        type: "HTML",
        queries: [{ query: "label#name-label:not(:empty)", count: 1 }],
      },
      {
        id: "t23",
        description: "Your #email-label should contain text that describes the input.",
        type: "HTML",
        queries: [{ query: "label#email-label:not(:empty)", count: 1 }],
      },
      {
        id: "t24",
        description: "Your #number-label should contain text that describes the input.",
        type: "HTML",
        queries: [{ query: "label#number-label:not(:empty)", count: 1 }],
      },
      {
        id: "t25",
        description: "Your #name-label should be a descendant of #survey-form.",
        type: "HTML",
        queries: [{ query: "form#survey-form label#name-label", count: 1 }],
      },
      {
        id: "t26",
        description: "Your #email-label should be a descendant of #survey-form.",
        type: "HTML",
        queries: [{ query: "form#survey-form label#email-label", count: 1 }],
      },
      {
        id: "t27",
        description: "Your #number-label should be a descendant of #survey-form.",
        type: "HTML",
        queries: [{ query: "form#survey-form label#number-label", count: 1 }],
      },
      {
        id: "t28",
        description: "Your #name should have a placeholder attribute and value.",
        type: "HTML",
        queries: [{ query: "input#name[placeholder]", count: 1 }],
      },
      {
        id: "t29",
        description: "Your #email should have a placeholder attribute and value.",
        type: "HTML",
        queries: [{ query: "input#email[placeholder]", count: 1 }],
      },
      {
        id: "t30",
        description: "Your #number should have a placeholder attribute and value.",
        type: "HTML",
        queries: [{ query: "input#number[placeholder]", count: 1 }],
      },
      {
        id: "t31",
        description: "You should have a select field with an id of dropdown.",
        type: "HTML",
        queries: [{ query: "select#dropdown", count: 1 }],
      },
      {
        id: "t32",
        description: "Your #dropdown should have at least two selectable (not disabled) option elements.",
        type: "HTML",
        queries: [{ query: "select#dropdown option:not([disabled])", count: 2 }],
      },
      {
        id: "t33",
        description: "Your #dropdown should be a descendant of #survey-form.",
        type: "HTML",
        queries: [{ query: "form#survey-form select#dropdown", count: 1 }],
      },
      {
        id: "t34",
        description: "You should have at least two input elements with a type of radio (radio buttons).",
        type: "HTML",
        queries: [{ query: "input[type='radio']", count: 2 }],
      },
      {
        id: "t35",
        description: "You should have at least two radio buttons that are descendants of #survey-form.",
        type: "HTML",
        queries: [{ query: "form#survey-form input[type='radio']", count: 2 }],
      },
      {
        id: "t36",
        description: "All your radio buttons should have a value attribute and value.",
        type: "HTML",
        queries: [{ query: "input[type='radio'][value]", count: 2 }],
      },
      {
        id: "t37",
        description: "All your radio buttons should have a name attribute and value.",
        type: "HTML",
        queries: [{ query: "input[type='radio'][name]", count: 2 }],
      },
      {
        id: "t38",
        description: "Every radio button group should have at least 2 radio buttons.",
        type: "HTML",
        queries: [{ query: "input[type='radio']", count: 2 }],
      },
      {
        id: "t39",
        description: "You should have at least two input elements with a type of checkbox (checkboxes) that are descendants of #survey-form.",
        type: "HTML",
        queries: [{ query: "form#survey-form input[type='checkbox']", count: 2 }],
      },
      {
        id: "t40",
        description: "All your checkboxes inside #survey-form should have a value attribute and value.",
        type: "HTML",
        queries: [{ query: "input[type='checkbox'][value]", count: 2 }],
      },
      {
        id: "t41",
        description: "You should have at least one textarea element that is a descendant of #survey-form.",
        type: "HTML",
        queries: [{ query: "form#survey-form textarea", count: 1 }],
      },
      {
        id: "t42",
        description: "You should have an button element with an id of submit.",
        type: "HTML",
        queries: [{ query: "button#submit[type='submit']", count: 1 }],
      },
      {
        id: "t43",
        description: "Your #submit should be a descendant of #survey-form.",
        type: "HTML",
        queries: [{ query: "form#survey-form button#submit", count: 1 }],
      },
    ]

  },
  {
    challengeId: "challenge-tribute-page",
    testCases: [
      {
        id: "t1",
        description: "You should have a main element with an id of main.",
        type: "HTML",
        queries: [{ query: "main#main", count: 1 }],
      },
      {
        id: "t2",
        description: "Your #img-div, #image, #img-caption, #tribute-info, and #tribute-link should all be descendants of #main.",
        type: "HTML",
        queries: [
          { query: "main#main #img-div", count: 1 },
          { query: "main#main #image", count: 1 },
          { query: "main#main #img-caption", count: 1 },
          { query: "main#main #tribute-info", count: 1 },
          { query: "main#main #tribute-link", count: 1 }
        ],
      },
      {
        id: "t3",
        description: "You should have an element with an id of title.",
        type: "HTML",
        queries: [{ query: "#title", count: 1 }],
      },
      {
        id: "t4",
        description: "Your #title should not be empty.",
        type: "HTML",
        queries: [{ query: "#title:not(:empty)", count: 1 }],
      },
      {
        id: "t5",
        description: "You should have a figure element with an id of img-div.",
        type: "HTML",
        queries: [{ query: "figure#img-div", count: 1 }],
      },
      {
        id: "t6",
        description: "You should have an img element with an id of image.",
        type: "HTML",
        queries: [{ query: "img#image", count: 1 }],
      },
      {
        id: "t7",
        description: "Your #image should be a descendant of #img-div.",
        type: "HTML",
        queries: [{ query: "#img-div img#image", count: 1 }],
      },
      {
        id: "t8",
        description: "You should have a figcaption with an id of img-caption.",
        type: "HTML",
        queries: [{ query: "figcaption#img-caption", count: 1 }],
      },
      {
        id: "t9",
        description: "Your #img-caption should be a descendant of #img-div.",
        type: "HTML",
        queries: [{ query: "#img-div figcaption#img-caption", count: 1 }],
      },
      {
        id: "t10",
        description: "Your #img-caption should not be empty.",
        type: "HTML",
        queries: [{ query: "#img-caption:not(:empty)", count: 1 }],
      },
      {
        id: "t11",
        description: "You should have an element with an id of tribute-info.",
        type: "HTML",
        queries: [{ query: "#tribute-info", count: 1 }],
      },
      {
        id: "t12",
        description: "Your #tribute-info should not be empty.",
        type: "HTML",
        queries: [{ query: "#tribute-info:not(:empty)", count: 1 }],
      },
      {
        id: "t13",
        description: "You should have an a element with an id of tribute-link.",
        type: "HTML",
        queries: [{ query: "a#tribute-link", count: 1 }],
      },
      {
        id: "t14",
        description: "Your #tribute-link should have an href attribute and value.",
        type: "HTML",
        queries: [{ query: "a#tribute-link[href]", count: 1 }],
      },
      {
        id: "t15",
        description: "Your #tribute-link should have a target attribute set to _blank.",
        type: "HTML",
        queries: [{ query: "a#tribute-link[target='_blank']", count: 1 }],
      },
      {
        id: "t16",
        description: "Your img element should have a display of block.",
        type: "CSS",
        subType: "CSS_PARTICULAR",
        queries: [{ query: "img#image", property: "display", value: "block" }]
      },
      {
        id: "t17",
        description: "Your #image should have a max-width of 100%.",
        type: "CSS",
        subType: "CSS_PARTICULAR",
        queries: [{ query: "img#image", property: "max-width", value: "100%" }]
      },
      {
        id: "t18",
        description: "Your #image should have a height of auto.",
        type: "CSS",
        subType: "CSS_PARTICULAR",
        queries: [{ query: "img#image", property: "height", value: "auto" }]
      },
    ]
  },
  {
    challengeId: "challenge-technical-documentation-page",
    testCases: [
      {
        id: "t1",
        description: "You should have a main element with an id of main-doc.",
        type: "HTML",
        queries: [{ query: "main#main-doc", count: 1 }],
      },
      {
        id: "t2",
        description: "You should have at least five section elements with a class of main-section.",
        type: "HTML",
        queries: [{ query: "section.main-section", count: 5 }],
      },
      {
        id: "t3",
        description: "All of your .main-section elements should be section elements.",
        type: "HTML",
        queries: [{ query: "section.main-section", count: 5 }],
      },
      {
        id: "t4",
        description: "You should have at least five .main-section elements that are descendants of #main-doc.",
        type: "HTML",
        queries: [{ query: "main#main-doc section.main-section", count: 5 }],
      },
      {
        id: "t5",
        description: "The first child of each .main-section should be a header element.",
        type: "HTML",
        queries: [{ query: "section.main-section > header", count: 5 }],
      },
      {
        id: "t6",
        description: "None of your header elements should be empty.",
        type: "HTML",
        queries: [{ query: "section.main-section > header:not(:empty)", count: 5 }],
      },
      {
        id: "t7",
        description: "All of your .main-section elements should have an id.",
        type: "HTML",
        queries: [{ query: "section.main-section[id]", count: 5 }],
      },
      {
        id: "t8",
        description: "You should have at least 10 p elements (total) within your .main-section elements.",
        type: "HTML",
        queries: [{ query: "section.main-section p", count: 10 }],
      },
      {
        id: "t9",
        description: "You should have at least five code elements that are descendants of .main-section elements.",
        type: "HTML",
        queries: [{ query: "section.main-section code", count: 5 }],
      },
      {
        id: "t10",
        description: "You should have at least five li elements that are descendants of .main-section elements",
        type: "HTML",
        queries: [{ query: "section.main-section li", count: 5 }],
      },
      {
        id: "t11",
        description: "You should have a nav element with an id of navbar.",
        type: "HTML",
        queries: [{ query: "nav#navbar", count: 1 }],
      },
      {
        id: "t12",
        description: "Your #navbar should have exactly one header element within it.",
        type: "HTML",
        queries: [{ query: "nav#navbar header", count: 1 }],
      },
      {
        id: "t13",
        description: "You should have at least one a element with a class of nav-link.",
        type: "HTML",
        queries: [{ query: "a.nav-link", count: 1 }],
      },
      {
        id: "t14",
        description: "All of your .nav-link elements should be anchor (a) elements.",
        type: "HTML",
        queries: [{ query: "a.nav-link", count: 1 }],
      },
      {
        id: "t15",
        description: "All of your .nav-link elements should be in the #navbar.",
        type: "HTML",
        queries: [{ query: "nav#navbar a.nav-link", count: 1 }],
      },
      {
        id: "t16",
        description: "The header element in the #navbar should come before any link (a) elements also in the #navbar.",
        type: "HTML",
        queries: [{ query: "nav#navbar header", count: 1 }],
      },
      {
        id: "t17",
        description: "Each .nav-link should have an href attribute that links to its corresponding .main-section (e.g. If you click on a .nav-link element that contains the text 'Hello world', the page navigates to a section element with that id).",
        type: "HTML",
        queries: [{ query: "nav#navbar a.nav-link[href^='#']", count: 1 }],
      },
      {
        id: "t18",
        description: "Your #navbar should always be on the left edge of the window.",
        type: "CSS",
        subType: "CSS_PARTICULAR",
        queries: [{ query: "nav#navbar", property: "left", value: "0px" }, { query: "nav#navbar", property: "position", value: "fixed" }]
      },
      {
        id: "t19",
        description: "Your Technical Documentation project should use at least one media query.",
        type: "CSS",
        subType: "CSS_WHOLE",
        queries: [{ query: "@media", count: 1 }]
      }
    ]
  },
  {
    challengeId: "challenge-product-landing-page",
    testCases: [
      {
        id: "t1",
        description: "You should have a header element with an id of header.",
        type: "HTML",
        queries: [{ query: "header#header", count: 1 }],
      },
      {
        id: "t2",
        description: "You should have an img element with an id of header-img.",
        type: "HTML",
        queries: [{ query: "img#header-img", count: 1 }],
      },
      {
        id: "t3",
        description: "Your #header-img should be a descendant of the #header element.",
        type: "HTML",
        queries: [{ query: "header#header img#header-img", count: 1 }],
      },
      {
        id: "t4",
        description: "Your #header-img should have a src attribute.",
        type: "HTML",
        queries: [{ query: "img#header-img[src]", count: 1 }],
      },
      {
        id: "t5",
        description: "Your #header-img’s src value should be a valid URL (starts with http).",
        type: "HTML",
        queries: [{ query: "img#header-img[src^='http']", count: 1 }],
      },
      {
        id: "t6",
        description: "You should have a nav element with an id of nav-bar.",
        type: "HTML",
        queries: [{ query: "nav#nav-bar", count: 1 }],
      },
      {
        id: "t7",
        description: "Your #nav-bar should be a descendant of the #header element.",
        type: "HTML",
        queries: [{ query: "header#header nav#nav-bar", count: 1 }],
      },
      {
        id: "t8",
        description: "You should have at least 3 .nav-link elements within the #nav-bar.",
        type: "HTML",
        queries: [{ query: "nav#nav-bar .nav-link", count: 3 }],
      },
      {
        id: "t9",
        description: "Each .nav-link element should have an href attribute.",
        type: "HTML",
        queries: [{ query: "nav#nav-bar .nav-link[href]", count: 3 }],
      },
      {
        id: "t10",
        description: "Each .nav-link element should link to a corresponding element on the landing page (e.g. If you have a 'Features' section, your .nav-link should link to '#features').",
        type: "HTML",
        queries: [{ query: "nav#nav-bar .nav-link[href^='#']", count: 3 }],
      },
      {
        id: "t11",
        description: "You should have a iframe element with an id of video.",
        type: "HTML",
        queries: [{ query: "iframe#video", count: 1 }],
      },
      {
        id: "t12",
        description: "Your #video should have a src attribute.",
        type: "HTML",
        queries: [{ query: "iframe#video[src]", count: 1 }],
      },
      {
        id: "t13",
        description: "You should have a form element with an id of form.",
        type: "HTML",
        queries: [{ query: "form#form", count: 1 }],
      },
      {
        id: "t14",
        description: "You should have an input element with an id of email.",
        type: "HTML",
        queries: [{ query: "input#email", count: 1 }],
      },
      {
        id: "t15",
        description: "Your #email should be a descendant of the #form element.",
        type: "HTML",
        queries: [{ query: "form#form input#email", count: 1 }],
      },
      {
        id: "t16",
        description: "Your #email should have the placeholder attribute with placeholder text.",
        type: "HTML",
        queries: [{ query: "input#email[placeholder]", count: 1 }],
      },
      {
        id: "t17",
        description: "Your #email should use HTML5 validation by setting its type to email.",
        type: "HTML",
        queries: [{ query: "input#email[type='email']", count: 1 }],
      },
      {
        id: "t18",
        description: "You should have an input element with an id of submit.",
        type: "HTML",
        queries: [{ query: "input#submit", count: 1 }],
      },
      {
        id: "t19",
        description: "Your #submit should be a descendant of the #form element.",
        type: "HTML",
        queries: [{ query: "form#form input#submit", count: 1 }],
      },
      {
        id: "t20",
        description: "Your #submit should have a type of submit.",
        type: "HTML",
        queries: [{ query: "input#submit[type='submit']", count: 1 }],
      },
      {
        id: "t21",
        description: "Your #form should have an action attribute of https://www.freecodecamp.com/email-submit.",
        type: "HTML",
        queries: [{ query: "form#form[action='https://www.freecodecamp.com/email-submit']", count: 1 }],
      },
      {
        id: "t22",
        description: "Your #email should have a name attribute with a value of email.",
        type: "HTML",
        queries: [{ query: "input#email[name='email']", count: 1 }],
      },
      {
        id: "t23",
        description: "Your #nav-bar should always be at the top of the viewport.",
        type: "CSS",
        subType: "CSS_PARTICULAR",
        queries: [{ query: "#nav-bar", property: "position", value: "fixed" }, { query: "#nav-bar", property: "top", value: "0px" }]
      },
      {
        id: "t24",
        description: "Your Product Landing Page should use at least one media query.",
        type: "CSS",
        subType: "CSS_WHOLE",
        queries: [{ query: "@media", count: 1 }]
      },
      {
        id: "t25",
        description: "Your Product Landing Page should use CSS Flexbox at least once.",
        type: "CSS",
        subType: "CSS_WHOLE",
        queries: [{ query: "display: flex", count: 1 }]
      
      }
    ]
  },
  {
    challengeId: "challenge-personal-portfolio-webpage",
    testCases: [
      {
        id: "t1",
        description: "Your portfolio should have a welcome section with an id of welcome-section",
        type: "HTML",
        queries: [{ query: "section#welcome-section", count: 1 }],
      },
      {
        id: "t2",
        description: "The welcome section should have an h1 element that contains text",
        type: "HTML",
        queries: [{ query: "section#welcome-section h1", count: 1 }],
      },
      {
        id: "t3",
        description: "Your portfolio should have a projects section with an id of projects",
        type: "HTML",
        queries: [{ query: "section#projects", count: 1 }],
      },
      {
        id: "t4",
        description: "The projects section should contain at least one element with a class of project-tile to hold a project",
        type: "HTML",
        queries: [{ query: "section#projects .project-tile", count: 1 }],
      },
      {
        id: "t5",
        description: "The projects section should contain at least one link to a project",
        type: "HTML",
        queries: [{ query: "section#projects a[href^='http']", count: 1 }],
      },
      {
        id: "t6",
        description: "Your portfolio should have a navbar with an id of navbar",
        type: "HTML",
        queries: [{ query: "#navbar", count: 1 }],
      },
      {
        id: "t7",
        description: "The navbar should contain at least one link that you can click on to navigate to different sections of the page",
        type: "HTML",
        queries: [{ query: "#navbar a[href^='#']", count: 1 }],
      },
      {
        id: "t8",
        description: "Your portfolio should have a link with an id of profile-link, which opens your GitHub or freeCodeCamp profile in a new tab",
        type: "HTML",
        queries: [
          { query: "a#profile-link[target='_blank'][href^='https://github.com/'], a#profile-link[target='_blank'][href^='https://www.freecodecamp.org/']", count: 1 },
        ],
      },
      {
        id: "t9",
        description: "Your portfolio should have at least one media query",
        type: "CSS",
        subType: "CSS_WHOLE",
        queries: [{ query: "@media", count: 1 }],
      },
      {
        id: "t10",
        description: "Your #navbar should always be at the top of the viewport",
        type: "CSS",
        subType: "CSS_PARTICULAR",
        queries: [{ query: "#navbar", property: "position", value: "fixed" }, { query: "#navbar", property: "top", value: "0px" }]
      }
    ]
  }
]

export const challenges = [
  {
    id: "challenge-survey-form",
    title: "Build a Survey Form",
    description: "Objective: Build an app that is functionally similar to https://survey-form.freecodecamp.rocks. Do not copy this demo project."
  },
  {
    id: "challenge-tribute-page",
    title: "Build a Tribute Page",
    description: "Objective: Build an app that is functionally similar to https://tribute-page.freecodecamp.rocks. Do not copy this demo project."
  },
  {
    id: "challenge-technical-documentation-page",
    title: "Build a Technical Documentation Page",
    description: "Objective: Build an app that is functionally similar to https://technical-documentation-page.freecodecamp.rocks. Do not copy this demo project."
  },
  {
    id: "challenge-product-landing-page",
    title: "Build a Product Landing Page",
    description: "Objective: Build an app that is functionally similar to https://product-landing-page.freecodecamp.rocks. Do not copy this demo project."
  },
  {
    id: "challenge-personal-portfolio-webpage",
    title: "Build a Personal Portfolio Webpage",
    description: "Objective: Build an app that is functionally similar to https://personal-portfolio.freecodecamp.rocks. Do not copy this demo project."
  }
];