import styles from './SearchBar.module.css';
import { useState } from 'react'

export default function SearchBar(props) {
   const { onSearch } = props;

   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)

   }
   const handleSearch = (id) => {
      onSearch(id)
      setId('')
   }

   const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
         onSearch(id);
         setId('');
      }
   }

   return (
      <div className={styles.inputGroup}>

         <div className={styles.group}>
            <svg className={styles.icon} onClick={() => handleSearch(id)} aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
            <input 
            placeholder="Insert a number between 1 and 826" 
            type="search" 
            value={id} 
            onChange={handleChange} 
            className={styles.input}
            onKeyPress={handleKeyPress} 
            />
         </div>

      </div>
   );
}

