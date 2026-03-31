import Foto from '../../../assets/images/svg/logo.svg';

export default function Logo() {
  return (
    <div className="logo">
      <img src={Foto} alt="Фото автора"/>
      <h1>Олег Гречишников</h1>
    </div>
  )
}