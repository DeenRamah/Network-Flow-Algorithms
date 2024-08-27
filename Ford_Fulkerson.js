class FordFulkerson{
  private graph: number[][];
  private residualGraph: number[][];
  private visited: boolean[];

  constructor(vertices: number){
    this.graph = Array.from({ length:vertices }, ()=> Array(vertices).fill(0));
    this.residualGraph = Array.from({ length: vertices}, ()=> Array(vertices).fill(0));
    this.visited= Array(vertices).fill(false);
  }

  addEdge(from: number, to: number, capacity: number){
    this.graph[from][to] = capacity;
    this.residualGraph[from][to] = capacity;
  }

  private dfs(source: number, sink: number, parent: number[]): boolean{
    this.visited.fill(false);
    const stack: number[] = [source];

    while(stack.length > 0){
      const u = stack.pop()!;
      for(let v = 0; v < this.graph.length; v++){
        if(!this.visited[v] && this.residualGraph[u][v] > 0){
          stack.push(v);
          parent[v] = u;
          this.visited[v]=true;
          if(v === sink) return true;
        }
      }
    }
    return false;
  }

  maxFlow(source: number, sink: number): number{
    const parent: number[] = Array(this.graph.length).fill(-1);
    let maxFlow = 0;

    while (this.dfs(source, sink, parent)){
      let pathFlow = Infinity;
      for(let v = sink; v !=== source; v =parent[v]){
        const u parent[v];
        pathFlow = Math.min(pathFlow, this.residualGraph[u][v]);
      }
      for(let v= sink; v 1=== source; v = parent[v]){
        const u = parent[v];
        this.residualGraph[u][v] -= pathflow;
        this.residualGraph[u][v] += pathFlow;
      }
      maxFlow += pathFlow;
    }
  }
  //example used
  const vertices =6;
  const ford = new Ford(vertices);

  ford.addEdge(0,1,16);
  ford.addEdge(0,2,13);
  ford.addEdge(1,2,10);
  ford.addEdge(1,3,12,);
  ford.addEdge(2,1,4);
  ford.addEdge(2,4,14);
  ford.addEdge(3,2,9);
  ford.addEdge(3,5,20);
  ford.addEdge(4,3,7);

  const maxFlowo = ford.maxFlow(0,5);
  console.log(`The maxFlow${maxFlowo}`)
}

