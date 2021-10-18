import img1 from "../datas/images/img1.jpeg"
const Profile = ({item}) => {

    return(
        <>
        <div className="menu-item container-fluid mt-5">
            <div className="row">
                <div className="row my-row">

             {
                 item.map((elem) => {
                     const {id, name, age, height, job, place, image} = elem;
                     return (
                         
                        // <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                        //     <div className="row item-inside">
                        //         <div className="col-12 col-md-12 col-lg-4 img-div">
                        //             <img src={img1} alt="peoples" className="img-fluid" />
                        //         </div>
                            
                        //     <div className="col-12 col-md-12 col-lg-8">
                        //         <div className="main-info pt-4 pb-3">
                        //             <h1>{name}</h1>
                        //             <p>Age: {age}</p>
                        //             <p>Height: {height}</p>
                        //         </div>
                        //         <div className="sub-info">
                        //             <div className="price-book-divide d-flex justify-content-center align-items-center flex-direction-colounm">
                        //                 <h2>Job: {job}</h2>
                        //                 <h2>Place: {place}</h2>
                        //             </div>
                        //         </div>
                        //     </div>

                        //     </div>
                        // </div>
                        <div className="price-book-divide d-flex justify-content-center align-items-center mt-5 mb-5 ">
                        <div class="card" style={{width: 18 + "rem"}}>
                        <img src={img1} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title"> {name}</h5>
                          <p>{age} | {height}</p>
                          <i class="fas fa-suitcase"></i><p>Job: {job}</p>
                          <i class="fas fa-map-marker-alt"></i><p>Place: {place}</p>
                        </div>
                        </div>
                      </div>
                     )
                 })
             }

                </div>
            </div>
        </div>
        </>
    )
    
}

export default Profile;