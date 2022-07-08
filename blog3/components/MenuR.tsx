import styles from '../styles/MenuR.module.css'
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
  <div className={styles.menuRStyle} >
    { menuItemData && menuItemData.map( ({ link, text }, indx) => (
    <a href={link} className={styles.menuRItemStyle} >{text}</a>
    ))}
  </div>
  )
};
export default Menu;
