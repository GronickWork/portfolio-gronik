import './Sandwich.scss';

export function Sandwich() {
  const lines = [];
  for (let i = 0; i < 3; i++) {lines.push(<div key={i} className="b1"></div>)}
  return (
    <div className="sandwich" id="sandwich">
      {lines}
    </div>
  )
}