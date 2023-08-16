import {createContext} from 'react'
import {useState, useEffect} from 'react'

export const DbContext = createContext()

export function DbContextProvider(props) {
    const [dbData, setDbData] = useState({})
    const [tables, setTables] = useState([])
    const [dbName, setDbName] = useState("")

  
    function createTable(){
        setTables(...tables,{
            "name":"string",
            "properties":{
                "Data Type": "string",
                "Length": "int",
                "Precision and Scale": 0,
                "Default Value": "string",
                "Nullability (NULL/NOT NULL)": true,
                "Primary Key": "string",
                "Foreign Key ":"string",
                "Autoincrement (AUTO_INCREMENT)": true,
                "Comments": "string"
            
            }
        })
    }
  
    
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
        setNameDB: setNameDB,
        createTable:createTable,
        tables:tables
      }}>
          {props.children}
      </DbContext.Provider>
      
    )
  }