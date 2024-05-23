import "./Title.css"

function Title({title , sub_title , id}) {
  return (
   <>
        <div className="row w-100 title-section" id={id} >
            <div className="col-lg-12">
                <div className="program-text">
                    <h2 className="program-title">{title}</h2>
                    <h1 className="program-sub-title">{sub_title}</h1>
                </div>
            </div>
        </div>
   </>
  )
}

export default Title
