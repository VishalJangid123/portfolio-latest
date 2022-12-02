import React from 'react'
import { lang_data } from './data'

function Language() {

    console.log(lang_data)
  return (
   <div className="skills__content">
    <h3 className="skills__title">Language/ Frameworks </h3>

        <div className="skills__box" >
            <div className="skills__group">
    {
        lang_data && lang_data.map((data, index) => {
return(
                <div className="skills__data" key={index}>
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name"> {data.name}</h3>
                        <span className="skills__level">{data.level}</span>
                    </div>
                </div>
)
})
}

        
</div>
</div>
    
   
   </div>
  )
}

export default Language