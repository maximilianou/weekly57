
const MenuR = () => {
  return (
  <div >
    <a href="#" className={` 
    fixed top-20 w-[100px] 
    transition-opacity p-4  
    rounded-md -right-20  hover:right-0 
    bg-[rgb(100,100,100,0.5)]
    `} >About</a>
    <a href="#" className={`
    fixed top-40 w-[100px]
    transition-duration-[0.3s] p-4  
    rounded-md -right-20  hover:right-0
    bg-[rgb(100,100,100,0.5)]
    `}>Blog</a>
    <a href="#" className={`
    fixed top-60 w-[100px]
    transition-duration-[0.3s] p-4  
    rounded-md -right-20  hover:right-0
    bg-[rgb(100,100,100,0.5)]    
    `}>Projects</a>
    <a href="#" className={`
    fixed top-80 w-[100px]
    transition-duration-[0.3s] p-4  
    rounded-md -right-20  hover:right-0
    bg-[rgb(100,100,100,0.5)]
    `}>Contact</a>
  </div>
  )
};
export default MenuR;
