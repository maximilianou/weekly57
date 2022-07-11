# weekly57


-------
5. - plain css Paralax, menu, footer

next Export





-------
1. - Styled Components pure - back to styled-components

**ups!, Simplefied not using it.**

-------
3. - Styled components emotion - back to emotion react emotion styled components

**Simplified not using it**

```tsx
$ npx create-next-app blog3 --typescript
Need to install the following packages:
  create-next-app@12.2.1

$ npm install -D @emotion/react @emotion/styled

```


--------
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
