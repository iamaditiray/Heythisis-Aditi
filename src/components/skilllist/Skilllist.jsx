import "./skilllist.scss"

export default function Skilllist({id, title, active, setSelected}) {
  return (
    <li className={active? "skilllist active" :"skilllist"} 
    onClick={() => setSelected(id)}>
      {title}
    </li>
  )
}
