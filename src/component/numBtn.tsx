import { useState } from "react"
interface propBtn {
  elem: number,
  setselected8: any,
  deletenum: any,
  selected8: Number[],
  maxnum: number
}

export default function NumBtn(props: propBtn) {
  function handler() {
    if (props.selected8.length < props.maxnum && !checked) {
      setcolor('rgba(255, 210, 5, 1)')
      props.setselected8()
      setchecked(true)
    } else if (checked) {
      props.deletenum()
      setcolor('rgba(255, 255, 255, 1)')
      setchecked(false)
    }
  }
  const [color, setcolor] = useState('rgba(255, 255, 255, 1)')
  const [checked, setchecked] = useState(false)
  return (
    <button style={{ backgroundColor: color }} onClick={handler} className='btnnum'>{props.elem}</button>
  )
}