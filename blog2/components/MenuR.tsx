
const MenuR = () => {

  const menuStyle = `fixed w-[100px] top-20
    transition-all -right-20  hover:right-0
  `;
  const manuItemStyle = `p-4 
    inline-block w-full
    rounded-xl bg-[rgb(100,100,100,0.5)] `;

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
  <div className={menuStyle} >
    { menuItemData && menuItemData.map( ({ link, text }, indx) => (
    <a href={link} className={`${manuItemStyle}  `} >{text}</a>
    ))}
  </div>
  )
};
export default MenuR;
