import { useEffect } from 'react';

const Blog = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
		document.title = 'Blog | ToyVerse';
	}, []);
	return (
		<div className='max-w-4xl mx-auto px-5'>
			<h1 className='text-3xl md:text-5xl font-extrabold text-center my-12'>Question's Answer</h1>

			{/* question 1 */}
			<div className='p-6 md:p-12 bg-slate-100 mb-12'>
				<h2 className='text-xl md:text-3xl font-bold'>What is an access token and refresh token?</h2>
				<p className='my-3'>
					An access token is a credential that helps authenticate a user or an application. This access token is used to
					ensure the security of various sensitive data or APIs. When a user is successfully authenticated, the server
					issues an access token. This token carries the client's user identity and permissions. After receiving this
					access token, the server provides the requested information. This token has an expiration date. After
					expiration the server reissues the token.
				</p>
				<p className='my-3'>
					A refresh token is the same as an access token and is issued along with it. But refresh token helps clients or
					users to issue new access tokens without having to re-authenticate. When the access token expires, the user
					can request data with a refresh token. This has the advantage that the user or client does not have to go
					through the authentication process again. This improves both the user experience and the security of sensitive
					data.
				</p>
				<h2 className='text-lg md:text-xl font-bold'>where should we store them on the client-side?</h2>
				<p className='my-3'>
					It is very important to store the tokens in the right place. We can store them in several places. Like local
					storage, session storage. But they are not that safe. HTTP-only cookies are more secure than this.
				</p>
			</div>

			{/* question 2 */}
			<div className='p-6 md:p-12 bg-slate-100 mb-12'>
				<h2 className='text-xl md:text-3xl font-bold'>Compare SQL and NoSQL databases.</h2>
				<p className='my-3'>
					SQL and NoSQL databases are different types of database management systems with distinct characteristics and
					use cases.
				</p>
				<p className='my-3'>
					SQL databases use a relational data model, where data is organized into tables with predefined schemas, and
					relationships between tables are established using foreign keys. On the other hand, NoSQL has many types of
					data models. Some of them are key-value, document, and columnar.
				</p>
				<p className='my-3'>
					SQL databases usually scale vertically by adding more resources to a single server. Scaling horizontally
					across multiple servers can be more complex and requires replication or sharding techniques. <br />
					NoSQL databases are designed to scale horizontally by distributing data across multiple servers. They can
					handle large amounts of data and high read/write workloads very smoothly.
				</p>
				<p className='my-3'>
					Since SQL databases have a strict schema, the structure and data types of tables must be defined in advance.
					Schema changes often require careful planning and can result in downtime. NoSQL databases offer flexible
					schemas that enable schema development. It can handle unstructured data formats and a wide variety of data
					formats, making it suitable for agile development and applications with changing data requirements.
				</p>
			</div>

			{/* question 3 */}
			<div className='p-6 md:p-12 bg-slate-100 mb-12'>
				<h2 className='text-xl md:text-3xl font-bold'>What is express js? What is Nest JS?</h2>
				<p className='my-3'>
					Express.js is a framework for node.js. It makes the process of building web servers and APIs much easier.
					Various routes can be made very easily by it. Any errors can actually be easily resolved.
				</p>
				<p className='my-3'>
					Nest.js is a framework used to build server side websites. Both JavaScript and TypeScript can be used in this
					framework. It is inspired by Angular and follows a modular and component-oriented approach. It is built on top
					of Express.js. As a result, all the powerful features of Express can be used. It has support for GraphQL and
					WebSockets.
				</p>
			</div>
			{/* question 4 */}
			<div className='p-6 md:p-12 bg-slate-100 mb-12'>
				<h2 className='text-xl md:text-3xl font-bold'>What is MongoDB aggregate and how does it work?</h2>
				<p className='my-3'>
					MongoDB aggregate operations are powerful data aggregation and transformation tools. It employs a flexible
					pipeline-based approach. it allows us to efficiently perform complex data processing. By combining stages such
					as $match, $group, $project, $sort. we can filter, group, reshape, sort data in databases. Aggregation
					processes enable powerful insights and reports to be generated directly from MongoDB, alleviating the need for
					additional tools and extensive data manipulation at the application layer.
				</p>
			</div>
		</div>
	);
};

export default Blog;
