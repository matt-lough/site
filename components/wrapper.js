export default ({ children }) => (
  <div className="wrapper">
    {children}
    <style jsx>{`
	.wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 40px 100px 40px;
}

    `}</style>
  </div>
);
