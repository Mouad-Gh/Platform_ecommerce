

const ProduitReaction= ()=>{


    return (
        <div className="col-sm-5 no-padding-xs">
            <div className="talk white">
              <h2 className="h3">Avez-vous des questions?</h2>
              <p className="">Envoyer un message maintenant au vendeur</p>
              <hr className="offset-md"/>

              <a href="tel:+80005554465" className="btn btn-primary btn-sm"> <i className="ion-social-whatsapp"></i> 0671869955 </a>
              <hr className="offset-md visible-xs"/>
            </div>
            <hr className="offset-sm hidden-xs"/>

            <div className="comments white">
              <h2 className="h3">What do you think? (#3)</h2>
              <br/>


              <div className="wrapper">
                <div className="content">
                  <h3>Anne Hathaway</h3>
                  <label>2 years ago</label>
                  <p>
                    Apple Music brings iTunes music streaming to the UK. But is it worth paying for? In our Apple Music review, we examine the service's features, UK pricing, audio quality and music library
                  </p>


                  <h3>Chris Hemsworth</h3>
                  <label>Today</label>
                  <p>
                    Samsung's Galaxy S7 smartphone is getting serious hype. Here's what it does better than Apple's iPhone 6s.
                  </p>


                  <h3>Anne Hathaway</h3>
                  <label>2 years ago</label>
                  <p>
                    Apple Music brings iTunes music streaming to the UK. But is it worth paying for? In our Apple Music review, we examine the service's features, UK pricing, audio quality and music library
                  </p>
                </div>
              </div>
              <hr className="offset-lg"/>
              <hr className="offset-md"/>

              <button className="btn btn-primary btn-sm" data-toggle="modal" data-target="#Modal-Comment"> <i className="ion-chatbox-working"></i> Add comment </button>
              <hr className="offset-md visible-xs"/>
            </div>            
          </div>
    );
}
export default ProduitReaction;