# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Documentation:
The files structure to generate the scripst is a JSON that follow the below structure:



```
{
	"sb name":"string",
	"tables":[
		{
			"name": "table 1",
			"columns": [
				{
					"name": "id",
					"properties": {
						"Type": "INTEGER",
						"Length": "3",
						"Precision": 0,
						"Default Value": "",
						"Nullability": false,
						"Primary Key": true,
						"Foreign Key": false,
						"Autoincrement": true,
						"Comments": ""
					}
				},
				{
					"name": "name",
					"properties": {
						"Type": "VARCHAR",
						"Length": "100",
						"Precision": 0,
						"Default Value": "",
						"Nullability": false,
						"Primary Key": false,
						"Foreign Key": false,
						"Autoincrement": false,
						"Comments": ""
					}
				}
			]
		},
				{
			"name": "table 2",
			"columns": [
				{
					"name": "id",
					"properties": {
						"Type": "INTEGER",
						"Length": "3",
						"Precision": 0,
						"Default Value": "",
						"Nullability": false,
						"Primary Key": true,
						"Foreign Key": false,
						"Autoincrement": true,
						"Comments": ""
					}
				},
				{
					"name": "name",
					"properties": {
						"Type": "VARCHAR",
						"Length": "100",
						"Precision": 0,
						"Default Value": "",
						"Nullability": false,
						"Primary Key": false,
						"Foreign Key": false,
						"Autoincrement": false,
						"Comments": ""
					}
				}
			]
		}
	]
}

```
