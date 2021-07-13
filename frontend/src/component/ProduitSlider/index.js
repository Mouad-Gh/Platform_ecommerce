import ScriptTag from 'react-script-tag';

const ProduitSlider= (props)=>{
  const images= props.images;
  
    return(
        <div className="col-sm-7 col-md-7 white no-padding">
            <div className="carousel-product" data-count="4" data-current="1">

              <div className="items">
                <button className="btn btn-control" data-direction="right"> <i className="ion-ios-arrow-right"></i></button>
                <button className="btn btn-control" data-direction="left"> <i className="ion-ios-arrow-left"></i></button>

                
                { 
                  images.map((image,index)=>{
                    //console.log(image.chemin_fichier);
                    if(index===0){
                      return (<div key={image.id} className="item center" data-marker="1">
                    <img src={image.chemin_fichier} alt={props.produit} className="background"/>
                    </div>);
                    }
                    return (<div key={image.id} className="item" data-marker={index+1}>
                    <img src={image.chemin_fichier} alt={props.produit} className="background"/>
                    </div>);
                  }
                  
                ) }
                

                
                <div className="item" data-marker="4">
                  <img src="../assets/img/product/video.jpg" alt="Microsoft Surface Studio" className="background"/>

                    <div className="tiles">
                    <a href="#video" data-gallery="#video" data-source="youtube" data-id="BzMLA8YIgG0">
                        <img src="../assets/img/product/video.jpg" alt="Surface Studio"/>

                      <div className="overlay"></div>
                      <div className="content">
                        <div className="content-outside">
                          <div className="content-inside">
                            <i className="ion-ios-play"></i>
                            <h2 className="white hidden-xs">Introducing Microsoft <br/> Surface Studio</h2>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <ul className="markers">
                
              {
                  images.map((image,index)=>{
                    if(index===0){
                      return <li key={index} data-marker="1" className="active" ></li>
                    }
                    return <li key={index} data-marker={index+1} ></li> ;
                  }
                  )
                }
                <li data-marker="4"></li>
              </ul>
            
            </div>
            <ScriptTag  type="text/javascript" src="/assets/js/carousel-product.js" />
        </div>
    );
}
export default ProduitSlider;