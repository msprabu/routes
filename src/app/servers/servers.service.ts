export class ServersService{
    private servers = [{id: 1, name: "Production Server", status: "online"}, {id: 2, name: "Test Server", status: "offline"}, {id: 3, name: "Dev Server", status: "online"}];

    getServers(){
        return this.servers;
    }

    getServer(id:number){

        const server = this.servers.find(
            (s) => {
              return s.id === id;
            }
          );
          return server;
    }

    updateServer(id:number, serverInfo:{name:string, status:string}){
        this.servers.forEach(element => {
            if(element.id===id){
                element.name=serverInfo.name;
                element.status=serverInfo.status;
            }
        });

    }
}