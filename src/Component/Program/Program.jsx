import "./Program.css";
import user1 from './../../assets/image/user/program_1.jpeg';
import user2 from './../../assets/image/user/program_2.jpeg';
import user3 from './../../assets/image/user/program_3.jpeg';
import program_icon from './../../assets/image/program-icon/program-icon_1.png';



function Program() {
  const images = [
    { id: 1, src: user1 , caption : program_icon , captionDesc : "Graduation Degree"},
    { id: 2, src: user2 , caption : program_icon , captionDesc : "Master Degree"},
    { id: 3, src: user3 , caption : program_icon , captionDesc : "Post Degree"},
  ];

  const imageList = images.map((image) => {
    return ( 
        <div className="program-image my-3 mx-4" key={image.id} >
          <img className="img-fluid" src={image.src} />
          <div className="caption d-flex justify-content-center align-items-center ">
            <img src={image.caption} />
            <p className="caption-desc">{image.captionDesc}</p>
          </div>
          
        </div>
        

    );
  });
  return (
    <>
      {/* PROGRAM SECTION */}
      <section className="program-section" >
          <div className="col-lg-12">
            <div className="mt-4 width-90 d-lg-flex align-items-center programs container">
                {imageList}
            </div>
          </div>
      </section>
      {/*== END == */}
    </>
  );
}

export default Program;
