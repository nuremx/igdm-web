import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './styles.pcss'

class App extends Component {
  static propTypes = {}

  state = {}

  render() {
    return (
      <div className="app">
        <div>
          <a
            className="forkus"
            href="https://github.com/nuremx/igdm-web"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="static/img/github-fork-us.svg" alt="Fork us on GitHub" />
          </a>
          <div className="promoBanner active">
            <div className="backgroundSkew" />
            <nav className="navbar navbar-expand-md container transparent navbar-dark">
              <a className="navbar-brand" href="/">
                <img
                  className="d-inline-block align-top"
                  src="static/img/icon.png"
                  width="32"
                  height="32"
                  alt="PrismarineJS"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/changelog">
                      Changelog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/blog">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://github.com/nuremx/igdm-web"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="container promo pb-5 pt-2 mb-5 text-center">
              <h1 className="text-center display-1 col-md-auto">Instagram Direct</h1>
              <h3 className="text-center col-12 col-md-8 m-auto">
                Continue your Instagram direct messages from your phone to your desktop.
              </h3>
              <div className="download col-md-auto mt-5">
                <h5>Start now using your Instagram Credentials</h5>
                <div className="mt-2 btn-group" role="group" aria-label="Download buttons">
                  <a
                    className="btn btn-outline-light"
                    role="button"
                    href="http://localhost:8080/login"
                  >
                    <i className="mdi mdi-instagram" />
                    <span className="ml-2">Login</span>
                  </a>
                </div>
              </div>
              <p className="downloadCount mt-3 d-block" target="_blank" rel="noopener noreferrer">
                It is completely free!
              </p>
            </div>
          </div>
          <div className="container">
            <section className="features mt-5">
              <h1 className="text-center">Features</h1>
              <div className="screenshots row mt-5 text-center">
                <a className="col-md-6 mb-4" href="static/img/startchat.gif" target="_blank">
                  Search for users and start a conversation<img
                    className="mt-3 img-fluid"
                    src="static/img/startchat.gif"
                    alt=""
                  />
                </a>
                <a className="col-md-6 mb-4" href="static/img/unfollowers.gif" target="_blank">
                  View a list of users not following you back<img
                    className="mt-3 img-fluid"
                    src="static/img/unfollowers.gif"
                    alt=""
                  />
                </a>
                <a className="col-md-6 mb-4" href="static/img/quotemessage.gif" target="_blank">
                  Quote a chat message<img
                    className="mt-3 img-fluid"
                    src="static/img/quotemessage.gif"
                    alt=""
                  />
                </a>
                <a className="col-md-6" href="static/img/viewimage.gif" target="_blank">
                  View chat images<img
                    className="mt-3 img-fluid"
                    src="static/img/viewimage.gif"
                    alt=""
                  />
                </a>
              </div>
            </section>
            <section className="issues mt-5 text-center">
              <h2>Issues running Instagram Direct?</h2>
              <span>
                Feel free to check common issues and fixes on{' '}
                <a
                  href="https://github.com/nuremx/igdm-web/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub{' '}
                </a>for your specific problem.
              </span>
            </section>
            <section className="donations mt-5 text-center">
              <h2>Donations</h2>Instagram Direct is an open source project that can be used for free
              by anyone, donations and incentives are wholeheartedly welcome.
              <p>
                <a
                  className="btn btn-link btn-outline-light"
                  role="button"
                  href="http://paypal.me/SolomonOmojola"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate via PayPal
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {}

export default App
