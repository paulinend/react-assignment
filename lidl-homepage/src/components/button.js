
const Button = ({title, handleClick}) => {
  return (
    <div className="button">
      <button className="btn-add" onClick={event => handleClick(event, 1)}>{title}</button>
    </div>
  )
}

export default Button;