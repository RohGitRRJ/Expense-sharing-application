
export const simplify=(net:any)=>{const c:any[]=[],d:any[]=[];for(const u in net){if(net[u]>0)c.push([u,net[u]]);else if(net[u]<0)d.push([u,-net[u]])}
let i=0,j=0,t:any[]=[];while(i<d.length&&j<c.length){const m=Math.min(d[i][1],c[j][1]);t.push({from:d[i][0],to:c[j][0],amount:m});d[i][1]-=m;c[j][1]-=m;if(!d[i][1])i++;if(!c[j][1])j++}return t}
