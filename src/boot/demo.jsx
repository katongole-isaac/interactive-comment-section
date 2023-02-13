import Avatar from "../instructions/images/avatars/image-amyrobson.png";
function Demo() {
  return (
    <>
      {/* <nav className="nav nav-tabs mb-4 bg-light justify-content-center flex-column flex-sm-row ">
        <a href="#" className="nav-link text-dark nav-item">
          Home
        </a>

        <a href="#" className="nav-link text-dark nav-item">
          Contact
        </a>

        <a href="#" className="nav-link text-dark nav-item">
          Service
        </a>

        <a href="#" className="nav-link text-dark nav-item">
          About
        </a>
      </nav> */}

      <nav className="navbar bg-dark navbar-dark navbar-expand-sm">
        <div className="container">
          <div className="logo m-0 d-none d-sm-inline-block">
            <a href="#" className="navbar-brand font-weight-bold">
              ISAAC
            </a>
          </div>
          <div className="navbar-nav  w-100 justify-content-end">
            <a className="nav-item nav-link active" href="#">
              Home
            </a>
            <a className="nav-item nav-link" href="#">
              Service
            </a>
            <div className="dropdown">
              <a
                className="nav-item nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                id="drop"
              >
                About
              </a>

              <div className="dropdown-menu" aria-labelledby="drop">
                <a className="dropdown-item" href="#">
                  Home
                </a>
                <a className="dropdown-item" href="#">
                  Projec 1
                </a>
                <a className="dropdown-item" href="#">
                  Proej
                </a>
                <a className="dropdown-item" href="#">
                  jhsdfjh
                </a>
              </div>
            </div>
            <a className="nav-item nav-link" href="#">
              Me
            </a>
            <a className="nav-item nav-link" href="#">
              Projects
            </a>
          </div>
        </div>
      </nav>

      <div className="container d-md-flex">
        <div className="row">
          <div className="col-md">
            <div className="row">
              <div className="col">
                <p className="text-sm-right lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat nisi, blanditiis ex necessitatibus enim assumenda
                  temporibus
                </p>
              </div>
              <div className="col-sm-4 align-self-center">
                <span className="font-weight-bold ">
                  voluptatem deserunt omnis voluptas. Facere nobis harum
                  pariatur hic
                </span>
              </div>
              <div className="col-sm-4">
                <p>impedit voluptatum omnis a officiis quod recusandae?</p>
              </div>
            </div>
          </div>
          <div className="col-md">
            <p className="text-md-center">
              Necessitatibus hic perspiciatis alias dolor eius dicta cumque
              laboriosam aliquam
              <span className="font-italic">
                similique itaque eaque saepe, natus ipsum ipsa
              </span>
              facilis. Soluta
              <em>rerum ea in</em>
              exercitationem. Voluptatem beatae magni eum
              <del> dolorum. Amet </del>
            </p>
          </div>
          <div className="col-md">
            <p>
              sit molestias, at quo accusantium voluptatem sapiente officia
              corrupti dolor necessitatibus illo magnam numquam? Rerum
              <span className="text-md-justify">
                exercitationem odit voluptatum vitae consequatur aspernatur
                neque
              </span>
              reiciendis officiis, officia repellendus labore necessitatibus!
              Ab,
              <span className="text-capitalize">
                voluptate porro similique est incidunt itaque quam ad placeat.
              </span>
            </p>
          </div>
          {/* Lists */}
          <ul className="list-inline bg-primary text-white  text-sm-center">
            <li className="list-inline-item">item 1</li>
            <li className="list-inline-item">item 2</li>
            <li className="list-inline-item">item 3</li>
          </ul>

          {/* blockquotes */}
          <blockquote className="blockquote  text-right">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            sit iste suscipit facere dolor commodi distinctio et eveniet odit!
            <div className="blockquote-footer">Jane</div>
          </blockquote>

          {/* Images */}

          <div className="col-md">
            <figure className="figure">
              <img
                className="img-fluid figure-img"
                src={Avatar}
                alt="image"
                width={"40px"}
              />
              <div className="figure-caption">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum itaque quibusdam ducimus dolore adipisci debitis ipsa
                culpa excepturi minus aperiam.
              </div>
            </figure>
          </div>
        </div>
        {/* row  */}
      </div>
    </>
  );
}

export default Demo;
