sequenceDiagram
    participant Usuario (User)
    participant Navegador (Browser) 
    participant Servidor (Server) 
	
    Usuario (User)->>Navegador (Browser): Escribe una nota en el campo de texto / Type a note on text fields
    Usuario (User)->>Navegador (Browser): Hace clic en el botón "Save" / Do click to "Save" botton
    Navegador (Browser)->>Servidor (Server): Envía una solicitud POST con la nueva nota / Send POST method with the new note
    Servidor (Server)->>Navegador (Browser): Responde con un código de estado 302 / Respond with status code 302
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
    Navegador (Browser)->>Usuario (User): Muestra la pagina actualizada/ Shows updated web
   