import './Sandwich.scss';

export function Sandwich() {
  function tapSandwich() {
    const devNav = document.getElementById('dev_nav');
    if(!devNav) {return;}
    if (getComputedStyle(devNav).display === 'none') {devNav.style.display = 'block'} else {devNav.style.display = 'none'}
  }
  const lines = [];
  for (let i = 0; i < 3; i++) {lines.push(<div key={i} className="b1"></div>)}
  return (
    <div className="sandwich" id="sandwich" onClick={tapSandwich}>
      {lines}
    </div>
  )
}