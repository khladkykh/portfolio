import image1 from "../image1.jpg"

function About(){

    return(
        <div className="about">

            <div className="main-header">
                <h1>About</h1>
                <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                <button>Read more</button>
            </div>

            <div className="about-cards">
                <div className="about-card">
                    <div className="about-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 10h7l-9 13v-9H4l9-13z" fill="rgba(255,255,255,1)"/></svg>
                    </div>
                    <h2>Lorem ipsum</h2>
                    <p>Non ut occaecat aliqua non dolor duis exercitation aute consequat nostrud ullamco sint</p>
                </div>
                <div className="about-card">
                    <div className="about-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M9.973 18H11v-5h2v5h1.027c.132-1.202.745-2.194 1.74-3.277.113-.122.832-.867.917-.973a6 6 0 1 0-9.37-.002c.086.107.807.853.918.974.996 1.084 1.609 2.076 1.741 3.278zM10 20v1h4v-1h-4zm-4.246-5a8 8 0 1 1 12.49.002C17.624 15.774 16 17 16 18.5V21a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.5C8 17 6.375 15.774 5.754 15z" fill="rgba(255,255,255,1)"/></svg>
                    </div>
                    <h2>Lorem ipsum</h2>
                    <p>Non ut occaecat aliqua non dolor duis exercitation aute consequat nostrud ullamco sint</p>
                </div>
                <div className="about-card">
                    <div className="about-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5zm5 6H4v8h16v-8z" fill="rgba(255,255,255,1)"/></svg>
                    </div>
                    <h2>Lorem ipsum</h2>
                    <p>Non ut occaecat aliqua non dolor duis exercitation aute consequat nostrud ullamco sint</p>
                </div>
                <div className="about-card">
                    <div className="about-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M6.116 20.087A9.986 9.986 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.986 9.986 0 0 1-4.116 8.087l-1.015-1.739a8 8 0 1 0-9.738 0l-1.015 1.739zm2.034-3.485a6 6 0 1 1 7.7 0l-1.03-1.766a4 4 0 1 0-5.64 0l-1.03 1.766zM11 13h2v9h-2v-9z" fill="rgba(255,255,255,1)"/></svg>
                    </div>
                    <h2>Lorem ipsum</h2>
                    <p>Non ut occaecat aliqua non dolor duis exercitation aute consequat nostrud ullamco sint</p>
                </div>
            </div>

            <div className="about-info">
                <div>
                    <img src={image1} width="300px"/>   
                </div>
                <div className="about-info-description">
                    <h2 className="colored-h">Lorem ipsum dolor sit amet</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
                    <p>Recusandae est praesentium consequatur eos voluptatem. Vitae dolores aliquam itaque odio nihil. Neque ut neque ut quae voluptas. Maxime corporis aut ut ipsum consequatur. Repudiandae sunt sequi minus qui et. Doloribus molestiae officiis. Soluta eligendi fugiat omnis enim. Numquam alias sint possimus eveniet ad. Ratione in earum eum magni totam.</p>
                </div>
            </div>
        </div>
    )
}

export default About;