import './Header.css';
import styles from './Header.module.css';

function Header(){

    const mystyle={
        color:"red" ,
        backgroundColor:"blue"
    }
    return<>
        {/*<h1 style={mystyle}>hello style</h1>*/}
        <h1 className={styles.bigBlue}>hello styles</h1>

    </>
      
    
}

export default Header;