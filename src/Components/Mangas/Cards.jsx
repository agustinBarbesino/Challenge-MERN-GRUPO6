
function Card({category,name,image,id}){
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
               
                   
    function manga(id){
        window.location.href=`/manga?${id}`
    }
    
    return(<>
     <div className="cardM relative w-[362px] h-[168px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.03)] rounded-[10px] border border-[rgba(0,0,0,0.05)] bg-white">
                <div className="line h-[120px] absolute" style={{backgroundColor:hexColor,top: 24,left: 2,width:5}}></div>
                <div className="textM absolute w-[172px] h-[39px]  top-[60px] left-[18px] gap-1 font-semibold text-black">
                   <p className="leading-[20px]">{name}</p>
                   <p style={{color:hexColor,fontSize:15}} className="type">Type</p>
                </div>
                <button className="readM absolute w-[92px] h-[35px] top-[125px] left-[18px] px-7 py-2 gap-2 rounded-full bg-[#D1FBF0] font-roboto text-[12px] font-bold leading-[11.42px] text-left text-[#00BA88]" onClick={()=>{manga(id)}}>Read</button>
                <img className="imageM absolute" src={image}alt="" />
     </div>
    </>)
}

export {Card}