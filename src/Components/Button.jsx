import '../styles/Button.scss'

const Button = ({color, changeBg}) => {
    const styles ={
        backgroundColor: color,
        color: 'white'
    }

  return (
    <div>
        <button
        className='btn'
        style={styles}
        onClick={() => changeBg(color)}
        >
            {color}
        </button>
        
    </div>
  )
}

export default Button