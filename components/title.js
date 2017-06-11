export default ({ children }) => (
  <h1>
    <a href="#">{ children }</a>
    <style jsx>{`
      h1 {
        font: 20px Helvetica Neue, Helvetica,
          Arial, "Lucida Grande", sans-serif;
        font-weight: 500;
        margin-bottom: 22px;
        text-align: center;
      }

      a {
        color: #0366d6;
        text-decoration: none;
      }

      a:hover {
        background-color: #0366d6;
        color: #fff;
      }
    `}</style>
  </h1>
)
