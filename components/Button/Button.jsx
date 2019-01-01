import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, primary, ...otherProps }) => {
  // language=CSS
  const button = (
    <button {...otherProps}>
      {children}
      <style jsx>{`
        button {
          font-family: "Microsoft Sans Serif", sans-serif;

          min-width: 76px;
          height: ${primary ? 22 : 24}px;
          padding: 2px;

          background: rgb(192, 192, 192);
          outline: none;

          box-sizing: border-box;
          border: 1px solid white;
          border-right: 2px ridge #666;
          border-bottom: 2px ridge #666;
        }

        button:active {
          border: 2px solid black;
        }

        button:active::after {
          content: "";
          display: block;
          height: 100%;
          position: relative;
          bottom: 13px;
          border: 1px dotted black;
        }

        button:disabled {
          color: gray;
        }
      `}</style>
    </button>
  );

  return primary ? (
    <span>
      <style jsx>{`
        span {
          border: 1px solid black;
          border-right-width: 2px;
          box-sizing: border-box;
          background-color: black;
          display: inline-block;
          height: 24px;
        }
      `}</style>
      {button}
    </span>
  ) : (
    button
  );
};

Button.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.bool,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  children: undefined,
  primary: false,
  disabled: false
};

export default Button;
