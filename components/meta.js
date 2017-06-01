export default () => (
  <div>
    {/* global styles */}
    <style jsx global>{`
      * {
        margin: 0;
        box-sizing: border-box;
      }

      body {
        font: 13px Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
      }

            body {
                font-family: Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif;
                color: #444;
                -webkit-font-smoothing: antialiased;
                text-rendering: optimizeLegibility;
                line-height: 1.2em;
              }
              html, body { height: 100%; }
                h1, h2, h3, h4, h5, h6, pre {
                  margin-bottom: 20px;
                  margin-top: 30px;
              }
    `}</style>
  </div>
);
