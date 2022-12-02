import React from 'react'
import { softwarepackage_data } from './data'

function SoftwarePackage() {
  return (
   <div className="skills__content">
    <h3 className="skills__title">Software Packages </h3>

        <div className="skills__box" >
            <div className="skills__group">
    {
        softwarepackage_data && softwarepackage_data.map((data, index) => {
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

export default SoftwarePackage