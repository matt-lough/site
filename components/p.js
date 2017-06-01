export default ({ children }) => (
  <p>
    { children }
    <style jsx>{`
      p {
        font-size: 14px;
        line-height: 24px;
        display: inline;
      }
    `}</style>
  </p>
)
