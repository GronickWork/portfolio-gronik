//import Foto from '../../../assets/images/svg/logo_file.svg';
/*перенес все картинки в public - т.к. Файлы в этой папке не обрабатываются сборщиком. Они просто копируются в итоговую сборку (в папку build)
 и доступны по прямому URL.
 иначе вылетает ошибка: Module build failed (from ./node_modules/@svgr/webpack/lib/index.js):
SyntaxError: unknown file: Namespace tags are not supported by default. React's JSX doesn't support namespace tags. 
You can set `throwIfNamespace: false` to bypass this warning.
*/
import './logo.scss';

export default function Logo() {
  const imgLogo = 'images/svg/logo_file.svg';
  return (
    <div className="logo">
      <img src={imgLogo} alt="Логотип"/>
      <h1>Олег Гречишников</h1>
    </div>
  )
}