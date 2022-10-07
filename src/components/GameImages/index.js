import './index.css'

const GameImages = props => {
  const {each, onclickButtonImg} = props
  const {id, imageUrl} = each

  const onclickButton = () => {
    onclickButtonImg(id)
  }
  return (
    <li className="li">
      <button type="button" className="button" onClick={onclickButton}>
        <img src={imageUrl} alt={id} className="img" />
      </button>
    </li>
  )
}
export default GameImages
