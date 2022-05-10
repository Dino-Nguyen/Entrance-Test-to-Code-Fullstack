import {useEffect, useState} from 'react'



export const Bai1 = () => {
    const [input1, setInput1] = useState()
    const [maxValue, setMaxValue] = useState()
    const arr1 = []
    const handleChange = () => {
        const arr = input1.split(" ")
        for (let i = 0 ; i <= arr.length ; i++) {
          arr1.push(arr.slice(i , i + 1) * arr.slice(i + 1, i + 2))
          setMaxValue(arr1.reduce((accumulator, element) => {
            return (accumulator > element) ? accumulator : element
        }))
        }
    }

    return <div className='bai1'>
        Bài 1
        <div>Nhập vào 1 dãy số với dạng như sau vd : 1 2 3 </div>
        <input type='text' placeholder='vd : 3 4 5 ...' value={input1} onChange={(e) => {setInput1(e.target.value)}}/>
        <button onClick={handleChange}>Kết quả</button>
        <div>Tích lớn nhất : {maxValue} </div>
    </div>
}