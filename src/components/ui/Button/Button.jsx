import s from './Button.module.scss';

const Button = ({children, onClick, classname}) => {
  return (
      <button className={`${s.btn} ${classname}`} onClick={onClick}>
        {children}
      </button>
  );
};

export default Button;
