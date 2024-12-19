// Helper function to generate inline styles
export const generateInlineStyles = (styles) => {
    return Object.entries(styles)
      .map(([key, value]) => `${key}: ${value};`)
      .join(" ");
  };
  
  // Recursive function to generate source code from state
  export const generateSourceCode = (items) => {
    return items
      .map((item) => {
        const { name, children = [], styles = {} } = item;
  
        // Generate inline styles
        const inlineStyles = generateInlineStyles(styles);
  
        // Base case for individual widgets
        let html = "";
        switch (name) {
          case "Text":
            html = `
              <div className=\"relative\">
                <input
                  type=\"text\"
                  className=\"border p-2 rounded w-full\"
                  placeholder=\"Text Field\"
                  style=\"${inlineStyles}\"
                />
              </div>
            `;
            break;
          case "Button":
            html = `
              <div className=\"flex justify-center w-full\">
                <div className=\"relative w-full h-[50px] border-dashed border-2 border-gray-300 flex items-center justify-center\">
                  <button 
                    style=\"${inlineStyles}\"
                    className=\"relative bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 text-center\"
                  >Button</button>
                </div>
              </div>
            `;
            break;
          case "Image":
            html = `
              <img 
                src=\"https://via.placeholder.com/300\" 
                alt=\"Placeholder\" 
                style=\"${inlineStyles}\" 
              />
            `;
            break;
          case "TextArea":
            html = `
              <textarea 
                style=\"${inlineStyles}\"
                className=\"border p-2 rounded w-full\"
              ></textarea>
            `;
            break;
          case "1-column":
            html = `
              <div style=\"${inlineStyles}\">
                ${generateSourceCode(children)}
              </div>
            `;
            break;
          case "2-columns":
            html = `
              <div 
                style=\"display: grid; grid-template-columns: repeat(2, 1fr); ${inlineStyles}\"
              >
                ${generateSourceCode(children)}
              </div>
            `;
            break;
          case "3-columns":
            html = `
              <div 
                style=\"display: grid; grid-template-columns: repeat(3, 1fr); ${inlineStyles}\"
              >
                ${generateSourceCode(children)}
              </div>
            `;
            break;
          default:
            html = `<div style=\"${inlineStyles}\">Unknown Widget</div>`;
            break;
        }
  
        // Avoid rendering children separately within the parent
        console.log("html: ",html);
        return html;
      })
      .join("");
  };
  
  // Example usage
  const state = [
    {
      id: 1734614585725,
      name: "1-column",
      type: "column",
      children: [
        { id: 1734614587310, name: "TextArea", type: "widget", children: [] },
        { id: 1734614589622, name: "Image", type: "widget", children: [] },
      ],
      styles: {},
    },
  ];
  
  console.log(generateSourceCode(state));
  