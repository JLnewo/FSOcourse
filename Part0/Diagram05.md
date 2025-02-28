sequenceDiagram
    participant Navegador (Browser) 
    participant Servidor (Server) 
	

    Navegador (Browser)->>Servidor (Server): GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate Servidor (Server)
    Servidor (Server)->>Navegador (Browser): HTML doc
    deactivate Servidor (Server)
    Navegador (Browser)->>Servidor (Server): GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate Servidor (Server)
    Servidor (Server)->>Navegador (Browser): Css file
    deactivate Servidor (Server)
    Navegador (Browser)->>Servidor (Server): GET https://studies.cs.helsinki.fi/exampleapp/spa.js 
    activate Servidor (Server)
    Servidor (Server)->>Navegador (Browser): Js file
    deactivate Servidor (Server)
    Navegador (Browser)->>Servidor (Server): GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate Servidor (Server)
    Servidor (Server)->>Navegador (Browser): data
    deactivate Servidor (Server)
   