import "./Work.scss";
const Work = () => {
  return (
    <div className="work-component">
      <h1 className="work-main-heading">How it works</h1>

      <div className="work-section-contents">
        {/* Left box */}
        <div className="work-box">
          <div className="work-box-item">
            <h2>1. Search property type</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              saepe accusamus deserunt quos voluptates quis mollitia modi, nihil
              cupiditate incidunt.
            </p>
          </div>
          <div className="work-box-item">
            <h2>2. Select best choice</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              omnis itaque et laborum blanditiis nihil?
            </p>
          </div>
        </div>

        {/* Center image box */}
        <div className="work-image-box">
          <img src="/mikail-mcverry-GSL3IuuwJv8-unsplash.jpg" />
        </div>

        {/* Right box */}
        <div className="work-box">
          <div className="work-box-item">
            <h2>3. Select your price</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              aliquam beatae velit repudiandae tenetur quibusdam. Placeat
              dignissimos veritatis, recusandae illum tempore doloribus.
            </p>
          </div>
          <div className="work-box-item">
            <h2>4. Make secure payment</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem tempora quo, illo harum facilis enim?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
