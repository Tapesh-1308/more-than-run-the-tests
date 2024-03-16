import { JSDOM } from 'jsdom';

export const validateHtmlCssJs = (htmlCode, cssCode, jsCode, testCases) => {
  const dom = new JSDOM(htmlCode);
  const { document } = dom.window;

  const style = document.createElement('style');
  style.textContent = cssCode;
  document.head.appendChild(style);

  const result = testCases.map(testCase => {
    switch (testCase.type) {
      case "HTML":
        return validateHtml(document, testCase);
      case "CSS":
        return validateCSS(document, testCase, cssCode, dom.window);
      case "JS":
        return validateJS();
      default:
        return "failed";
    }
  });

  return result;
}

const validateHtml = (document, testCase) => {
  const { queries } = testCase;

  const allQueryPassed = queries.every(({ query, count }) =>
    document.querySelector(query) !== null &&
    document.querySelectorAll(query).length >= count
  );

  return allQueryPassed ? "passed" : "failed";
}

const validateCSS = (document, testCase, cssCode, window) => {
  const { queries } = testCase;
  

  if (testCase.subType === "CSS_PARTICULAR") {
    const allQueryPassed = queries.every(({ query, property, value }) => {
      const selectedElement = document.querySelector(query);
      if (!selectedElement) {
        console.error(`No element found for query: ${query}`);
        return false;
      }
      const computedStyle = window.getComputedStyle(selectedElement);
      console.log(computedStyle);
      const computedValue = computedStyle.getPropertyValue(property);
      return computedValue === value;
    });

    return allQueryPassed ? "passed" : "failed";
  } else if (testCase.subType === "CSS_WHOLE") {

    const allQueryPassed = queries.every(({ query, count }) => {
      const regexPattern = new RegExp(`${query}`, "g");
      return (cssCode.match(regexPattern) || []).length >= count;
    });

    return allQueryPassed ? "passed" : "failed";
  }
}

const validateJS = () => {
  // TODO: Implement this function
}