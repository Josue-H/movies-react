import styles from "./Search.module.css";
import {FiSearch} from "react-icons/fi";
import {useNavigate } from "react-router";
import { useQuery } from "../hooks/useQuery";

export function Search() {
    const query = useQuery();
    const search = query.get("search");

    const history = useNavigate(" ");


    const handleSubmit  = (e)=>{
        e.preventDefault();
    }
    return (

        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input 
                    className={styles.searchInput} 
                    type="text" 
                    value={search ?? ""} 
                    placeholder = "Title"
                    aria-label="Search Movies"
                    onChange={(e) => {
                        const value = e.target.value;
                        history("/?search=" + value);
                      }}
                />
                <FiSearch size={20} color="black" className={styles.searchButton} />     
            </div>
       </form> 
       
    );
}
