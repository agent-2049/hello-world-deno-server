import { HelloWorld } from 'helloworld';
import { Application } from 'oak';

const app = new Application();

app.use((ctx) => {
	const helloWorld = new HelloWorld();
	const msg = helloWorld.sayHello();
	
	ctx.response.body = msg;
});

console.log("Server running at http://localhost:8000");
await app.listen({ port: 8000 });
