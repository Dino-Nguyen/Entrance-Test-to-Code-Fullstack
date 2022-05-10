
import {useEffect, useState} from 'react'

export const Bai2 = () => {
    const [input2, setInput2] = useState()
   
    const [result, setResult] = useState([0,0])
    const handleChange2 = () => {
        const arr = input2.split(" ")
        let arr1 = [] , arr2 = []
        for (let i = 0 ; i < arr.length ; i++) {
            if(i % 2 == 0) {
              arr1.push(arr[i])
            }  
            if(i % 2 != 0) { arr2.push(arr[i])}
    }
    let result1 = 0
    for (const a of arr1) {
        result1 += Number(a);
      }
      let result2 = 0
      for (const a2 of arr2) {
          result2 += Number(a2);
        }
        console.log(arr1)
        console.log(arr2)
  setResult([result1 ,  result2])
   
    }
    
    return <div className='bai2'>
        Bài 2
        <div>Nhập vào 1 dãy số với dạng như sau vd : 1 2 3 </div>
        <input type='text' placeholder='vd : 1 2 3 ...' value={input2} onChange={(e) => {setInput2(e.target.value)}}/>
        <button onClick={handleChange2}>Kết quả</button>
        <div>Array tổng khối lượng : [ dãy 1 , dãy 2 ] = {`[${result}]`} </div>
    </div>
}