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
    
    function createDataBase(){
        newDb = {
                "db name":dbName,
                "tables":tables
        }
        setDbData(newDb)
    }

    function addTable(table) {
      if(tables.length < 1){
        tables.push(table)
        setTables(tables)
      }else{
        if(Object.keys(tables[tables.length - 1]).length != 0){
          tables.push(table)
          setTables(tables)
        }
      }
      console.log(tables)
    }

    function addColumn(idTable, column){
      tables[idTable].columns.push(column) 
    }

  
    return (
      <DbContext.Provider value={{
        dbData: dbData,
        createDataBase: createDataBase,
        addTable: addTable,
        setNameDB: setNameDB,
        tables:tables,
        addColumn:addColumn
      }}>
          {props.children}
      </DbContext.Provider>
      
    )
  }