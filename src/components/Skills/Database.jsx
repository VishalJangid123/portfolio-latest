import React from 'react'
import { database_data } from './data'

function Database() {

   
  return (
   <div className="skills__content">
    <h3 className="skills__title">Database </h3>

        <div className="skills__box" >
            <div className="skills__group">
    {
        database_data && database_data.map((data, index) => {
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

export default Database