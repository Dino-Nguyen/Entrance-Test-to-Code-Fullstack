import {useEffect, useState} from 'react'


export const Bai3 = () => {
const [inputUrl, setInputUrl] =useState()
const [detail, setDetail] = useState()
    const handleFetchShr = async () => {
       const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputUrl}`)
       const data = await res.json()
       setDetail(data.result.short_link)
    }
    const shrClicked =() => {
        handleFetchShr()    
    }

    const handleFetch9qr = async () => {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputUrl}`)
        const data = await res.json()
        setDetail(data.result.short_link2)
     }
     const qrClicked =() => {
         handleFetch9qr()  
     }

     const handleFetchShiny = async () => {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputUrl}`)
        const data = await res.json()
        setDetail(data.result.short_link3)
     }
     const shinyClicked =() => {
         handleFetchShiny() 
     }
    
    return <div className='bai3'>
      <div>Bài 3</div>
      <div className='title3'>Enter a Link</div>
        <input id='input3' type='text' placeholder='http://abc.vn'value={inputUrl} onChange={(e) =>{ setInputUrl(e.target.value)}}/>
        {/* <button onClick={handleChange} >tim</button> */}
        <div> Short domain:
     <button className='button3' onClick={shrClicked}>shrtco.de</button> 
         <button  className='button3' onClick={qrClicked}>9qr.de</button>
        <button  className='button3' onClick={shinyClicked}>shiny.link</button> 
    </div>
        <div >
                 <div>Link Shortner:<div id='output'>{detail} </div></div>
            </div>
    </div>
}