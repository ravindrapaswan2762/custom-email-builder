// Helper function to generate inline styles
export const generateInlineStyles = (styles) => {
    const defaultStyles = {
      color: "#000",
      backgroundColor: "#fff",
      paddingTop: "0px",
      paddingLeft: "0px",
      paddingBottom: "0px",
      paddingRight: "0px",
      fontFamily: "Arial, sans-serif",
      fontSize: "14px",
    };
  
    // Combine default styles and user-defined styles
    const combinedStyles = { ...defaultStyles, ...styles };
    return Object.entries(combinedStyles)
      .map(([key, value]) => `${key}: ${value};`)
      .join(" ");
  };
  
  // Recursive function to generate source code from state
  export const generateSourceCode = (items) => {
    return items
      .map((item) => {
        const { name, children, styles = {} } = item;
  
        // Generate inline styles
        const inlineStyles = generateInlineStyles(styles);
  
        // Base case for individual widgets
        let html = "";
        switch (name) {
          case "Text":
            html = `
                <div style={{ position: "relative", ...currentStyles }}>
                      <input
                        onClick={onclickHandle}
                        onChange={onChangeHandle}
                        type="text"
                        className="border p-2 rounded w-full"
                        placeholder="Text Field"
                        value={val}
                        style={inlineStyles} // Apply dynamic styles
                      />
                </div>
            `;
            break;
          case "Button":
            html = `<button style="${inlineStyles}">Button</button>`;
            break;
          case "Image":
            html = `<img src="https://via.placeholder.com/300" alt="Placeholder" style="${inlineStyles}" />`;
            break;
          case "TextArea":
            html = `<textarea style="${inlineStyles}"></textarea>`;
            break;
          case "1-column":
            html = `<div style="${inlineStyles}">${generateSourceCode(children)}</div>`;
            break;
          case "2-columns":
            html = `<div style="display: grid; grid-template-columns: repeat(2, 1fr); ${inlineStyles}">${generateSourceCode(
              children
            )}</div>`;
            break;
          case "3-columns":
            html = `<div style="display: grid; grid-template-columns: repeat(3, 1fr); ${inlineStyles}">${generateSourceCode(
              children
            )}</div>`;
            break;
          default:
            html = `<div style="${inlineStyles}">Unknown Widget</div>`;
            break;
        }
  
        // Wrap in parent container if children exist
        if (children && children.length > 0) {
          html = `<div>${html}${generateSourceCode(children)}</div>`;
        }
  
        return html;
      })
      .join("");
  };
  