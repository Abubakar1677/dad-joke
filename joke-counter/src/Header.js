import styles from './style.module.css'
export default function Header(){
    return (
        <div> 
            <div  className={styles.header}>
                <p style={{color:'brown'}}> crack of the year</p>
                <h3 style={{color:"red",fontFamily:'cursive',fontStretch:'ultra-expanded',fontSize:'30px',textTransform:'capitalize'}}>who's the most cracker of the year </h3>
                
            </div>

        </div>
    )
}