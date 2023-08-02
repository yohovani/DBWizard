import {createContext} from 'react'
import {useState, useEffect} from 'react'
import {tasks as data} from '../data/task'

export const TaskContext = createContext()

export function DbContextProvider(props) {
    const [dbData, setDbData] = useState({})
    const [tables, setTables] = useState([])    
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
      <DbContextProvider.Provider value={{
        dbData: dbData,
        createDataBase: createDataBase,
        addTable: addTable
      }}>
          {props.children}
      </DbContextProvider.Provider>
      
    )
  }