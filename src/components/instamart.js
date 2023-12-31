import { useState } from "react";

const Section = ({title, Description,isVisible , setIsVisible})=>{
    // const [isVisible,setIsVisible] = useState(false);
    return(
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            
            {
                isVisible == true ? (<button className="bg-amber-500" onClick={()=>{
                        setIsVisible(false);
                    }}>Hide</button> 
                ): (  <button className="bg-amber-500" onClick={()=>{
                        setIsVisible(true);
                    }}>show</button>
                )
            }

            
            
            {isVisible && <p>{Description}</p>} {/* // it renders only when is visible is true */}
        </div>
    );
}
const Instamart=()=>{
    const [visibleSection,setvisibleSection]= useState("about");
    return(
        <div>
            <h1>This is Instamart</h1>
            <h1 className="text-3xl p-2 m-2 font-bold"> Instamart</h1>
            <Section 
                isVisible={visibleSection == "about"} 
                title={"About Instamart"}  
                Description={"This is the about section of Instamart"}
                setIsVisible={()=>setvisibleSection("about")}>
            </Section>

            <Section 
                isVisible={visibleSection == "team"} 
                title={"Instamart Team"}  
                Description={"Meet Instamart team"}
                setIsVisible={()=>setvisibleSection("team")}>
            </Section>

            <Section 
                isVisible={visibleSection == "members"} 
                title={"Instamart members"}  
                Description={"Meet Instamart members"}
                setIsVisible={()=>setvisibleSection("members")}>
            </Section>
       
        </div>
    );
}

export default Instamart;