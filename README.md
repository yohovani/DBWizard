# DBWizard
Web Page developed with React.JS to create SQL scripts  

Documentation:
The files structure to generate the scripst is a JSON that follow the below structure:



```
{
	"db name":"string",
	"tables":[
		"table 1":[
			"name":"string",
			"attribute 1":[
				"properties":[
                                      "Column Name": "string",
                                      "Data Type": "string",
                                      "Length": "int",
                                      "Precision and Scale": int,
                                      "Default Value": "string",
                                      "Nullability (NULL/NOT NULL)": boolean
                                      "Primary Key": "string",
                                      "Foreign Key "string",
                                      "Autoincrement (AUTO_INCREMENT)": boolean,
                                      "Comments": "string"
				]
			]
		]
		.....
		"tabla n":[]	
	]
}


```
