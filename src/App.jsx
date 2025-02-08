import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {

  return (
    <>
      <div className="my-container vw-100 d-flex justify-content-center">
        <div className="my-bg-primary my-auto p-4 rounded-3">
          <div className="text-center">
            <img className="rounded-circle pb-3" style={{ width: '100px' }} src="./images/avatar-jessica.jpeg" alt="logo" />
            <h2 className="my-text-primary myFontFamily">Jessica Randall</h2>
            <p className="my-text-secondary myFontFamily">London, United Kingdom</p>
            <p className="text-secondary myFontFamily py-2">"Front-end developer and avid reader."</p>

            <a href="#">
              <div className="my-bg-secondary text-center p-2 rounded-4 button_container mb-3">
                <p className="my-text-primary myFontFamily mb-0">Github</p>
              </div>
            </a>

            <a href="#">
              <div className="my-bg-secondary text-center p-2 rounded-4 button_container mb-3">
                <p className="my-text-primary myFontFamily mb-0">Frontend Mentor</p>
              </div>
            </a>

            <a href="#">
              <div className="my-bg-secondary text-center p-2 rounded-4 button_container mb-3">
                <p className="my-text-primary myFontFamily mb-0">Linkedin</p>
              </div>
            </a>

            <a href="#">
              <div className="my-bg-secondary text-center p-2 rounded-4 button_container mb-3">
                <p className="my-text-primary myFontFamily mb-0">Twitter</p>
              </div>
            </a>

            <a href="#">
              <div className="my-bg-secondary text-center p-2 rounded-4 button_container mb-3">
                <p className="my-text-primary myFontFamily mb-0">Instagram</p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </>
  )
}

export default App