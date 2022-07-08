import styles from '../styles/Menu.module.css'
const Menu = (  ) => {
  const menuItemData: { link:string , text:string }[] = [
    {
      link: `#`,
      text: `About`,
    },
    {
      link: `#`,
      text: `Blog`,
    },
    {
      link: `#`,
      text: `Projects`,
    },
    {
      link: `#`,
      text: `Contact`,
    },
  ]
  return (
  <div className={styles.menuStyle} >
    { menuItemData && menuItemData.map( ({ link, text }, indx) => (
    <a key={indx}  href={link} className={styles.manuItemStyle} >{text}</a>
    ))}
  </div>
  )
};
export default Menu;
