# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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
