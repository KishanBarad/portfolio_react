
import './App.css';

function App() {
  return (
    <>
       <div class="header">
        <div class="container">
            <div class="row head">
                <div class=" logo col-lg-8 col-sm-12">kishan's portfolio</div>
                <div class="navbars col-lg-4 col-sm-12">
                    <ul>
                        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa-solid fa-envelope"></i></a></li>
                        <li><a href="#"><i class="fa-solid fa-phone"></i>91+ 6356029050</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    
    <section class="project">
        <h1>PROJECT</h1>
        <div class="container">
            <div class="row dflex">
                <div class="col-lg-4 box">
                    <div class="card">
                        <img class="card-img-top" src="./img/flipkart.png" alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Flipkart</h5>
                            <p class="card-text">Mad With Html, Css, Javascript, Jquery, Redux, Reactjs</p>
                            <div class="card_button">
                                <a href="https://flipkart-clone-one-iota.vercel.app/" class="fbut">VISIT</a>
                                <a href="https://github.com/KishanBarad/flipkart_clone" class="sbut">CODE</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 box">
                    <div class="card">
                        <img class="card-img-top" src="./img/Screenshot 2024-01-09 120803.png" alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">E-Commerce</h5>
                            <p class="card-text">Mad With Html, Css, Javascript, Jquery, Redux, Reactjs</p>
                            <div class="card_button">
                                <a href="https://shopping-site-mauve.vercel.app/" class="fbut">VISIT</a>
                                <a href="https://github.com/KishanBarad/shopping-site" class="sbut">CODE</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 box">
                    <div class="card">
                        <img class="card-img-top" src="./img/Screenshot 2024-01-11 120012.png" alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">E-Commerce footwear</h5>
                            <p class="card-text">Mad With Html, Css, Javascript, Jquery, Reactjs</p>
                            <div class="card_button">
                                <a href="https://shoewear.vercel.app/" class="fbut">VISIT</a>
                                <a href="https://github.com/KishanBarad/shoewear" class="sbut">CODE</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 box">
                    <div class="card">
                        <img class="card-img-top" src="./img/furniture.png" alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">furniture</h5>
                            <p class="card-text">Mad With Html, Css, Javascript, Jquery, Reactjs</p>
                            <div class="card_button">
                                <a href="https://furniture-xi-snowy.vercel.app/" class="fbut">VISIT</a>
                                <a href="https://github.com/KishanBarad/furniture" class="sbut">CODE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <div class="about aboutsec">
        <h1>ABOUT</h1>
        <div class="container">
            <div class="row aboutdet">
                <div class="col-lg-4">
                    <h4>FAST</h4>
                    <p>Fast load times and lag free interaction, my highest priority.</p>
                </div>
                <div class="col-lg-4">
                    <h4>Responsive</h4>
                    <p>My layouts will work on any device, big or small.</p>
                </div>
                <div class="col-lg-4">
                    <h4>Dynamic</h4>
                    <p>Websites don't have to be static, I love making pages come to life.</p>
                </div>
            </div>
        </div>
    </div>

    <section class="skills">
        <h1>skills</h1>
        <div class="container">
            <div class="row row-cols-lg-3 skilldel">
                <div class="d-flex">
                    <div class="data">
                        <img src="./img/html.png" />
                        <h3>HTML</h3>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="data">
                        <img src="./img/css2.png" />
                        <h3>CSS</h3>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="data">
                        <img src="./img/bootstrap-logo.png" />
                        <h3>bootstrap</h3>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="data">
                        <img src="./img/jquery.png" />
                        <h3>Jquery</h3>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="data">
                        <img src="./img/js.png" />
                        <h3>Javascript</h3>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="data">
                        <img src="./img/redux.png" />
                        <h3>REDUX</h3>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="data">
                        <img src="./img/react.png" />
                        <h3>Reactjs</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="futter">
        <div></div>
    </section>
    </>
  );
}

export default App;
