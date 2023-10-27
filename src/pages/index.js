import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"
import Image from "../components/image";
import Download from "../components/downloadpdf";

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  render() {
    return (
        <Layout>
          <SEO title="Nadiia Astakhova"/>
          <section className="page-section  bg-dark" id="about">
            <div className="container">
              <div className="row justify-content-center">
                <h2 className="text-white mt-0">About me</h2>

              </div>
              <hr className="divider my-4"/>
              <div className="row justify-content-center">
                <div className="col-lg-7">

                  <p className="text-white-50 mb-4">Hi! I'm Nadiia and I'm very glad to see you on my CV site.
                    I'm a web developer with {new Date().getFullYear() - 2017} years of commercial experience and more than {new Date().getFullYear() - 2015} years of learning programming.
                    <br/>
                    My career began in Vinnytsia, Ukraine, with creating special web-application for Donetsk National University.
                    After I finished integrating the application into the university system, I decided to try my hand at a foreign company in Warsaw, Poland.
                    <br/>
                    I have experience in different projects from individuals and small-businesses
                    to application for the largest supermarket chain in Poland. Also, I worked for an international car subscription company located at Germany.
                    My principle as a developer is to make complicated things easy and more efficiently.
                    I like to learn new technologies and use it in practice.
                    <br/>
                    Outside of work, I prefer learning languages, playing with my cat, reading books, travelling, watching movies and taking pictures (if you want, you could explore my pictures <a className="special-link" href="https://www.pexels.com/@nadiia-3130737/" target="_blank" >here</a>). &#128516;
                  </p>


                </div>
                <div className="col-lg-4 text-center col-about-image">
                  <div className="div-about-image">

                  </div>
                </div>
              </div>
              <hr className="divider my-4"/>
              <div className="row justify-content-center">
                <div className="col-md-1 text-center">
                  <a href="https://www.linkedin.com/in/nadiia-astakhova-015547b0" target="_blank">
                    <i className="fab fa-linkedin fa-3x mb-3 text-muted"></i></a>
                </div>

                <div className="col-md-1 text-center">
                  <a href="https://github.com/NadineAstakhova" target="_blank">
                    <i className="fab fa-github-square fa-3x mb-3 text-muted"></i></a>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section" id="experience">
            <div className="container">
              <h2 className="text-center mt-0">MY EXPERIENCE</h2>
              <hr className="divider my-4"/>
              <div className="row">
                <div className="col-lg-8 col-md-6 text-left">
                  <div className="mt-5">
                    <h3 className="h4 mb-3">FAAREN</h3>
                    <p className="h5 mb-2">Software Developer</p>
                    <p className="text-muted mb-0">
                      Project: an international car subscription software with <a href="https://faaren.com/" target="_blank">FAAREN marketplace</a>, <a href="https://faaren-group.com/en/" target="_blank">White label solution for car dealers</a>, Payment management.
                      <br/> <br/>
                      Responsibilities:
                      development CRM, Client Side, REST API and mails; integration with the payment processing platform – <a href="https://stripe.com/en-pl" target="_blank">Stripe</a>;
                      working with a cloud-based tool for localization – <a href="https://lokalise.com/" target="_blank">Lokalise</a>; integration with the feature management platform – <a href="https://launchdarkly.com/" target="_blank">LaunchDarkly</a>;
                      optimization requests to API and Database; development microservices with configuration service and communication via webhooks (<a href="https://github.com/spatie" target="_blank">Spatie/Laravel Webhook libraries</a>);
                      working with an international team from Germany, Poland and USA: code review, testings, discoveries of new features.
                      <br/> <br/>
                      My role is a backend developer with the use of: PHP 7.4 - 8.2, Laravel 5.8 - 10.0, Symfony 5.4, MySQL. Also using
                      frontend-end technologies: JavaScript(ECMAScript 6), jQuery, HTML, CSS, Bootstrap, Vue.js.
                      <br/><br/>
                      Version control systems: GIT (GitHub) with GitLab. Project management systems: Jira with integration to Sentry and Slack.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 text-right">
                  <div className="mt-5">
                    <h3 className="h4 mb-2">Jan 2023 - Nov 2023</h3>
                    <p className="mb-2 text-muted">Würzburg, Germany</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 col-md-6 text-left">
                  <div className="mt-5">
                    <h3 className="h4 mb-3">Rockitworks</h3>
                    <p className="h5 mb-2">Software Programmer</p>
                    <p className="text-muted mb-0">
                      Projects: different internal systems and client's applications: CMS and API for mobile application of a large supermarket network - <a href="https://www.biedronka.pl/pl" target="_blank">Biedronka</a>;
                      a data-driven contract management system - <a href="https://pergam.in/en/home/" target="_blank">Pergamin</a>;
                      a microservice project to analyse social media (using Youtube and Facebook APIs) for internal clients in <a href="https://www.dentsu.com/pl/pl" target="_blank">Dentsu Poland</a>;
                      online telecommunications service stores for NextMobile.
                      These are mostly loaded websites consisting of CMS and public page, REST-Api applications.
                      <br/> <br/>
                      Responsibilities: development REST API; integration with social media APIs;
                      integration of online stores with payment systems (PayU, eCard); migration of projects from old versions of Symfony/Laravel to new ones;
                      integration of Push notifications (Firebase) with the Application API; optimization of database queries;
                      integration with AWS, GA, ElasticSearch, SMTP, EmailLabs, SMSApi, specific APIs for mobile operators: Assecco, Docker etc.
                      <br/> <br/>
                      My role is a backend developer with the use of: PHP 5.5 - 8.0, Laravel 5.6 - 8.0, Symfony 3.3 - 5.4, Zend Framework 2, MySQL. In some projects,
                      like a full-stack with frontend-end technologies: JavaScript(ECMAScript 6), jQuery, HTML, CSS, Bootstrap.
                      <br/><br/>
                      Version control systems: GIT (GitLab, GitHub), TortoiseSVN. Project management systems: Jira, Trello, Redmine.
                      <br/><br/>
                      Also I have some experience with Java, ReactJS and Vue.js.
                      I worked on a special the module to editing a photo on the form to order <a href="https://www.wtp.waw.pl/en/warsaw-city-card/" target="_blank">Warsaw City Card</a>.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 text-right">
                  <div className="mt-5">
                    <h3 className="h4 mb-2">Jan 2018 - Dec 2022</h3>
                    <p className="mb-2 text-muted">Warsaw, Poland</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 col-md-6 text-left">
                  <div className="mt-5">
                    <h3 className="h4 mb-3">Donetsk National University</h3>
                    <p className="h-5 mb-2">IT staff at the Computer Technology Department</p>
                    <p className="text-muted mb-0">
                      Responsibilities: development and integration of a remote student lab control system.
                      <br/> <br/>
                      Technologies: PHP 5.4, Yii2, JavaScript, jQuery, Pjax, CSS3, HTML5, Bootstrap 3, MySQL, PHPUnit and GIT.
                      <br/> <br/>
                      This system was my coursework.
                      The management of the department offered to finalize the project and to launch it inside the Faculty.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 text-right">
                  <div className="mt-5">
                    <h3 className="h4 mb-2">Jul 2017 - Dec 2017</h3>
                    <p className="mb-2 text-muted">Vinnytsia, Ukraine</p>
                  </div>
                </div>
              </div>
              <div className="row align-items-center justify-content-center mt-5">
                <div className="col-lg-8 align-self-baseline text-center">
                  <Download/>
                </div>
              </div>
            </div>
          </section>

          <section id="portfolio">
            <div className="container-fluid p-0">
              <div className="row no-gutters">
                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                    <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid}/>
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">
                        Category
                      </div>
                      <div className="project-name">
                        Project Name
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg" onClick={this.handlePortfolioClick.bind(this, 1)}>
                    <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid}/>
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">
                        Category
                      </div>
                      <div className="project-name">
                        Project Name
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="img/portfolio/fullsize/3.jpg" onClick={this.handlePortfolioClick.bind(this, 2)}>
                    <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid}/>
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">
                        Category
                      </div>
                      <div className="project-name">
                        Project Name
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="images/portfolio/fullsize/4.jpg" onClick={this.handlePortfolioClick.bind(this, 3)}>
                    <Img fluid={this.props.data.images.edges[3].node.childImageSharp.fluid}/>
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">
                        Category
                      </div>
                      <div className="project-name">
                        Project Name
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="img/portfolio/fullsize/5.jpg" onClick={this.handlePortfolioClick.bind(this, 4)}>
                    <Img fluid={this.props.data.images.edges[4].node.childImageSharp.fluid}/>
                    <div className="portfolio-box-caption">
                      <div className="project-category text-white-50">
                        Category
                      </div>
                      <div className="project-name">
                        Project Name
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <a className="portfolio-box" href="img/portfolio/fullsize/6.jpg" onClick={this.handlePortfolioClick.bind(this, 5)}>
                    <Img fluid={this.props.data.images.edges[5].node.childImageSharp.fluid}/>
                    <div className="portfolio-box-caption p-3">
                      <div className="project-category text-white-50">
                        Category
                      </div>
                      <div className="project-name">
                        Project Name
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section bg-dark text-white" id="education">
            <div className="container text-center">
              <h2 className="mb-4">MY EDUCATION</h2>
              <hr className="divider my-4"/>
              <div className="row">
                <div className="col-lg-8 col-md-6 text-left">
                  <div className="mt-5">
                    <h3 className="h4 mb-2">Donetsk National University</h3>
                    <p className="text-muted mb-0">Master's degree (with honours) in Computer Science, Intelligent Information Technology</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 text-right">
                  <div className="mt-5">
                    <h3 className="h4 mb-2">2017-2019</h3>
                    <p className="text-muted mb-0">Vinnytsia, Ukraine</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 col-md-6 text-left">
                  <div className="mt-5">
                    <h3 className="h4 mb-2">Donetsk National University</h3>
                    <p className="text-muted mb-0">Bachelor's degree in Compute Science (with honours)</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 text-right">
                  <div className="mt-5">
                    <h3 className="h4 mb-2">2013-2017</h3>
                    <p className="text-muted mb-0">Vinnytsia, Ukraine</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section" id="technologies">
            <div className="container">
              <h2 className="text-center mt-0">MY TECH STACK</h2>
              <hr className="divider my-4"/>
              <div className="row">
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <i className="fab fa-4x fa-php text-primary mb-4"></i>
                    <p className="text-muted mb-0">Yii2, Zend 2</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <i className="fab fa-4x fa-laravel text-primary mb-4"></i>
                    <p className="text-muted mb-0">Laravel v. 5.4 - 10.0</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <i className="fab fa-4x fa-symfony text-primary mb-4"></i>
                    <p className="text-muted mb-0">Symfony v. 3.0 - 5.4</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <i className="fa fa-4x fa-database text-primary mb-4"></i>
                    <p className="text-muted mb-0">MySQL</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <i className="fab fa-4x fa-aws text-primary mb-4"></i>
                    <p className="text-muted mb-0">S3, ECS, ECR, CloudWatch, CodeCommit</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <i className="fab fa-4x fa-js text-primary mb-4"></i>
                    <p className="text-muted mb-0">jQuery</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <i className="fab fa-4x fa-html5 text-primary mb-4"></i>
                    <p className="text-muted mb-0">HTML5, CSS3, Bootstrap</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <i className="fab fa-4x fa-java text-primary mb-4"></i>
                    <p className="text-muted mb-0">Some experience in CORE JAVA, JAVA SE, ANDROID SDK</p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section className="page-section bg-dark text-white" id="other">
            <div className="container text-center">
              <h2 className="mb-4">SPECIAL SKILLS</h2>
              <hr className="divider my-4"/>
              <p className="text-muted mb-0">Language skills:</p>
              <hr className="divider my-4"/>

              <div className="row lang-row">
                <div className="col-lg-2 col-md-6 text-center lang-col">
                  <div className="mt-6">
                    <h3 className="h4 mb-2">Russian</h3>
                    <p className="text-muted mb-0">Native</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 text-center lang-col">
                  <div className="mt-6">
                    <h3 className="h4 mb-2">Ukrainian</h3>
                    <p className="text-muted mb-0">Native</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 text-center lang-col">
                  <div className="mt-6">
                    <h3 className="h4 mb-2">English</h3>
                    <p className="text-muted mb-0">B2</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 text-center lang-col">
                  <div className="mt-6">
                    <h3 className="h4 mb-2">Polish</h3>
                    <p className="text-muted mb-0">B2</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 text-center lang-col">
                  <div className="mt-6">
                    <h3 className="h4 mb-2">French</h3>
                    <p className="text-muted mb-0">A2</p>
                  </div>
                </div>
              </div>

              <hr className="divider my-4"/>
              <p className="text-muted mb-0">Other skills</p>
              <hr className="divider my-4"/>

              <div className="row lang-row">
                <div className="col-lg-2 col-md-6 text-center lang-col">
                  <div className="mt-6">
                    <i className="fab fa-github fa-3x mb-3"></i>
                    <p className="text-muted mb-0">GitHub, GitLab</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 text-center lang-col">
                  <div className="mt-6">
                    <i className="fab fa-docker fa-3x mb-3"></i>
                    <p className="text-muted mb-0">Docker, Heroku, Gitpod</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 text-center lang-col">
                  <div className="mt-6">
                    <i className="fa fa-file-code fa-3x mb-3"></i>
                    <p className="text-muted mb-0">Go, Vue.js, React.js</p>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6 text-center lang-col">
                  <div className="mt-6">
                    <i className="fas fa-camera fa-3x mb-3"></i>
                    <p className="text-muted mb-0">Photography</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 text-center lang-col">
                  <div className="mt-6">
                    <i className="far fa-file-image fa-3x mb-3"></i>
                    <p className="text-muted mb-0">Adobe Photoshop</p>
                  </div>
                </div>


              </div>
            </div>
          </section>

          <section className="page-section" id="contact">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                  <h2 className="mt-0">CONTACT ME</h2>
                  <hr className="divider my-4"/>
                  <p className="text-muted mb-5">If you have question or job offer, send me an
                    email
                    and I will get back to you as soon as possible!</p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 text-center">
                  <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                  <a className="d-block" href="mailto:nadine.astakhova@gmail.com">nadine.astakhova@gmail.com</a>
                </div>

              </div>
            </div>
          </section>
          <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
            <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent}/>
          </PortfolioModal>
        </Layout>
    )
  }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`