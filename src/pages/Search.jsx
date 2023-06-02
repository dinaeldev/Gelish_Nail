import styles from './css/search.module.css';
import { UilSearch } from '@iconscout/react-unicons';
import { useEffect, useState } from 'react';
import json from './database.json';
const Search = () => {
    const [data, setData] = useState(null);
    const [search, setSearch] = useState('');
    const [resultados, setResultados] = useState(null);
    let res = [];
    useEffect(() => {
        setData(json);
    }, [])

    useEffect(() => {
        if (data) {
            searchControl();
        }
        if(res){
            setResultados(res);
        }
    }, [search]);

    const searchControl = () => {
        data.filter(datos => {
            if (datos?.description?.toLowerCase().includes(search?.toLowerCase())) {
                res.push(datos)
            }
        }
        )
    }

    return (
        <>
            <div className={styles.search}>
                <div className={styles.searchBar}>
                    <input
                        type="text"
                        placeholder="Realiza una busqueda"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button><UilSearch /></button>
                </div>
                <div className={`container ${styles.searchArea}`}>
                    {resultados?.map(result =>(
                        <div className={styles.item}>
                            <p dangerouslySetInnerHTML={{__html:result.name}}></p>
                            <p>{result.link}</p>
                            <p dangerouslySetInnerHTML={{__html: result.description}}></p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Search
