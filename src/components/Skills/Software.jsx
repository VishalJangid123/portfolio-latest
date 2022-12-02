import React from 'react'
import { software_data } from './data'

function Software() {
  return (
   <div className="skills__content">
    <h3 className="skills__title">Software (IDE)</h3>

        <div className="skills__box" >
            <div className="skills__group">
    {
        software_data && software_data.map((data, index) => {
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

export default Software