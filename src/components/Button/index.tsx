import style from './Button.module.scss';
interface IButton {
  disabled: boolean;
}
const Button: React.FC<IButton> = ({ disabled }) => {
  return (
    <div className={style.button}>
      {disabled ? <h1>Loading</h1> : <h1>Load More</h1>}
    </div>
  );
};
export default Button;
