import { useDispatch } from 'react-redux'
import { deleteManga } from '../../store/actions/editActions'
import '../Mangas/mangaPages.css'
function Card({category,name,image,id,autor}){
    let hexColor
                   switch(category){
                       case "Shonen":
                           hexColor="#F472B6"
                           break
                       case "Seinen":
                           hexColor="#F97316"
                           break
                       case "Shojo":
                           hexColor="#00BA88"
                           break
                       case "Kodomo":
                           hexColor="#8883F0"
                           break   
                   }
               
    const dispatch=useDispatch()
                   
    function manga(){
        window.location.href=`/editManga/${name}`
    }
    const handleDelete = (title) => {
        dispatch(deleteManga({title}))
    }
    return(<>
     <div className="cardM relative w-[362px] h-[168px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.03)] rounded-[10px] border border-[rgba(0,0,0,0.05)] bg-white">
                <div className='iconos'>
                    <button >
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 100 100">
                    
                    <line x1="50" y1="25" x2="50" y2="75" stroke="#222222" stroke-width="10" stroke-linecap="round"/>
                    <line x1="25" y1="50" x2="75" y2="50" stroke="#222222" stroke-width="10" stroke-linecap="round"/>
                  </svg>
                  
                    </button>
                    <button onClick={manga}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#222222" viewBox="0 0 24 24" width="8px" height="8px">
                        
                       <path d="M15.5 5.64L18.36 8.5c.293.293.293.768 0 1.061L6.967 20.953c-.098.098-.222.166-.357.197l-3.7.84C2.85 22 2.8 22.01 2.74 22.01c-.19 0-.38-.08-.53-.22-.18-.19-.25-.45-.2-.7l.839-3.696C2.88 17.256 2.95 17.13 3.05 17.03L14.44 5.64C14.733 5.347 15.207 5.347 15.5 5.64zM21.99 5.52c.03.24-.05.47-.22.63l-1.29 1.29c-.293.293-.768.293-1.061 0L16.56 4.58c-.293-.293-.293-.768 0-1.061l1.29-1.29c.16-.17.4-.25.62-.22.14.02 1.33.2 2.32 1.2C21.79 4.2 21.97 5.39 21.99 5.52z"/>
                       </svg>
                    </button>
                  




                </div>
                <div className="line h-[120px] absolute" style={{backgroundColor:hexColor,top: 24,left: 2,width:5}}></div>
                <div className="textM absolute w-[172px] h-[39px]  top-[60px] left-[18px] gap-1 font-semibold text-black">
                   <p className="leading-[20px]">{name}</p>
                   <p style={{color:hexColor,fontSize:15}} className="type">Type</p>
                </div>
                <button className="editM absolute" onClick={manga}>EDIT</button>
                <button className="deleteM absolute" onClick={()=>handleDelete(name)}>DELETE</button>
                <img className="imageM absolute" src={image}alt="" />
     </div>
    </>)
}

export {Card}