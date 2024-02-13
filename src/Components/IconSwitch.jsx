function IconSwitch({ iconName, onSwitch }) {
  return (
    <div className="cards-menu">
      <i className="material-icons large" onMouseDown={onSwitch}>{iconName}</i>
    </div>
  )
}

export default IconSwitch;
