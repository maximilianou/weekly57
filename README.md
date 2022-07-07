# weekly57


-------

-------



--------
2. - Menu style react and tailwindcss

```tsx
const Menu = (  ) => {
  const menuStyle = `fixed w-[100px] top-20
    transition-all -left-20  hover:left-0
  `;
  const manuItemStyle = `p-4 
    inline-block w-full
    rounded-xl bg-[rgb(100,100,100,0.5)] `;
  // this list of items and links can came from othe data source kind of blog entries
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
export default Menu;
```

------
1. - 

```
npx create-next-app blog2 --typescript 
cd blog2
npm install -D tailwindcss postcss autoprefixer

```

------
