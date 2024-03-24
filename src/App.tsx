import React from 'react';
import { useState } from 'react';
import './App.css';
import NumBtn from './component/numBtn';
import { resultCheck } from './FnS/functions';
import { uniqnumbers } from './FnS/functions';
import { randomNumber } from './FnS/functions';
function App() {
  const [status, setstatus] = useState([false, false])
  const [nums8,] = useState(Array.from({ length: 19 }, () => Math.floor(randomNumber(1, 99))))
  const [nums2,] = useState(Array.from({ length: 3 }, () => Math.floor(randomNumber(1, 99))))
  const [selected8, setselected8] = useState([])
  const [selected2, setselected2] = useState([])
  const [result,] = useState([Array.from({ length: 1 }, () => uniqnumbers(nums8)), Array.from({ length: 1 }, () => nums2[Math.floor(Math.random() * nums2.length)])])

  if (!status[0]) {
    return (
      <div className="container">
        <header className="App-header">
          <div className='numsDiv'>
            <h2 className='bilH2'>Билет 1</h2>
            <div className='centreDiv8'>
              <p className='descrP' style={{ color: 'black' }}>Поле 1</p>
              {nums8.map((elem) => {
                return (
                  <NumBtn deletenum={() => setselected8((arr: any): any => arr.filter((el: number) => el !== elem))} maxnum={8} selected8={selected8} setselected8={() => setselected8((arr: any): any => [...arr, elem])} elem={elem} />
                )
              })}
            </div>
            <div className='centreDiv2'>
              <p className='descrP' style={{ color: 'black' }}>Поле 2</p>
              {nums2.map((elem) => {
                return (
                  <NumBtn deletenum={() => setselected2((arr: any): any => arr.filter((el: number) => el !== elem))} maxnum={1} selected8={selected2} setselected8={() => setselected2((arr: any): any => [...arr, elem])} elem={elem} />
                )
              })}
            </div>
            <button onClick={(e) => resultCheck(result, [selected8, selected2], () => setstatus([true, true]), () => setstatus([true, false]))} className='btnResult'>Показать результат</button>
          </div>



        </header>
      </div>
    );
  } else {
    return (
      <div className="container">
        <header className="App-header">
          <div className='numsDiv'>
            <h2 className='bilH2'>Билет 1</h2>
            <p className='descrStatus' style={{ color: 'black' }}>{status[1] ? 'Ого, вы выиграли! Поздравляем!' : 'К сожалению, вы проиграли. Попробуйте еще раз'}</p>
          </div>



        </header>
      </div>
    )
  }

}

export default App;
