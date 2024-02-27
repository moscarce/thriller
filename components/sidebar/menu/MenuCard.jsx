const MenuCard = (props) => {
  const borderStyles = {
    color: props.isActive && '#4b816b',
    backgroundColor: props.isActive ? '#cbeaed' : '',
    borderTopLeftRadius: '9999px',
    borderBottomLeftRadius : '9999px',
    borderRadius: 
      props.isPrevious ? '0 0 30px 0' : 
      (props.isNext ? '0 30px 0 0' : 
      (props.isActive ? '50px 0 0 50px' : '0')),
    transition: '0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)'
  };

  return (
    <div className='text-white cursor-pointer p-3' 
      style={borderStyles}
      onClick={props.handleClick}
    >
      <h2>{props.icon} {props.text}</h2>
    </div>
  );
}

export default MenuCard;
