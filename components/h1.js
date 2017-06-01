export default ({ children }) => (
  <h1>
    <a href="#"># {children}</a>
    <style jsx>{`
      h1 {
        font: 18px Helvetica Neue, Helvetica,
          Arial, "Lucida Grande", sans-serif;
        font-weight: bold;
      }

      a {
        color: #333;
        text-decoration: none;
      }
    `}</style>
  </h1>
);
