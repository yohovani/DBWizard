import {createContext} from 'react'
import {useState, useEffect} from 'react'

export const DbContext = createContext()

export function DbContextProvider(props) {
    const [dbData, setDbData] = useState({})
    const [tables, setTables] = useState([])
    const [dbName, setDbName] = useState("")
    
    function setNameDB(name){
      setDbName(name)
      console.log(name)
    }
    
    function createDataBase(name){
        newDb = {
                "db name":name,
                "tables":tables
        }
        setDbData(newDb)
    }

    function addTable(table) {
        setTables([...tables, table])
    }

  
    return (
      <DbContext.Provider value={{
        dbData: dbData,
        createDataBase: createDataBase,
        addTable: addTable,
        setNameDB: setNameDB
      }}>
          {props.children}
      </DbContext.Provider>
      
    )
  }