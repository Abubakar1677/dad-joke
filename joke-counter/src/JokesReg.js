
import styles from './style.module.css'
import { useState } from "react"

export default function JokesReg(){
     const [x, setX] = useState({author:'',joke:""})
    const [jokeList,setJokeList] = useState([])
    let zero = 0
    let one = 1
    let [likes,setLikes]= useState(zero)
    let [off,setOff] = useState(zero)
    

    const addTodo= ()=>{
      
        if(x.author && x.joke){
             setJokeList([{...x},...jokeList])
        }
       
      setX({author:'',joke:''})
        
        
    }
     
    const handleLikes =()=>{
      setLikes( likes ? zero : one)
      
    
    }
    const handleOff = () =>{
      setOff(off ? zero : one)
    }
    
    
    
    return(
        <div className={styles.main}>
            <div>
                <h3>New cracks</h3>
                <div className={styles.crackInput}>
                <input 
                style={{height:'30px'}}
                placeholder="author's Name"
                value={x.author}
                onChange={(e)=>setX({...x,author:e.target.value})}
                /><br/><br/>
                <textarea 
                style={{width:'500px',height:'60px',resize:'none'}}
                placeholder="write a precise and short joke ..."
                value={x.joke}
                onChange={(e)=>setX({...x,joke:e.target.value})}/>

                </div>
    
                <button style={{width:'100%',fontSize:'20px',fontWeight:'bolder',color:'whitesmoke',backgroundColor:'darkGreen',height:'30px',border:'2px solid red'}} onClick={addTodo}>Submit Crack</button>
            </div>

            <div className={styles.search}>
                <input className={styles.searchAuthor} placeholder="search for author ...."></input><br/>
            <input className={styles.searchCrack} placeholder="search for a crack...."></input>
            </div>
           
            <div>

               
              {jokeList.map((jokeLists)=>(
                <ol>
                    <li key={jokeList.id}>
                  <div className={styles.jokerecorded}>
                        <span style={{color:'yellow'}}>{jokeLists.joke}<p style={{color:'red'}}>Created by :{jokeLists.author} </p></span>
                        
                        <span className={styles.ratings}>
                          <h4 onClick={handleLikes}>like : {likes}</h4>
                          <h4 onClick={handleOff}> off : {off}</h4>
                          <h4>delete</h4>
                        
                        </span>
                        </div>
                </li>
                </ol>
               
                     
                        
                       
                         
                    
                             
                             

                    ))}
              

            </div>

        </div>
    )
}