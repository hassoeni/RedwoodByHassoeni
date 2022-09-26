important to start is to run
1. yarn redwood dev
2. to generate page is by hitting yarn rw generate page home --> this will create a PascalCase folder with storybook inside and automaticlly add it to route
3. yarn rw g(enerate) layout 'insert name' --> this will create a PascalFolder layout under the layouts folder
4. after deciding on your layout you need to adjust the routs folder. To actually render the layout  --> Do this by invoking a Set component and give it a wrap={'YourNamedLayout'} props
5. initializing the backend with yarn rw prisma migrate dev after defining a schema
6. test this by hitting yarn rw prisma studio
7. let redwood autogenerate a CRUD site for your schema with yarn rw g scaffold 'schemaname'
7a. Redwood Cells important giveways guideline for when to use cells is if your component needs some data from the database or other service that may be delayed in responding. Let Redwood worry about juggling what is displayed when and you can focus on the happy path of the final, rendered component populated with data.
8. yarn rw g cell Articles genereert een cell automatisch die in je front end wordt geplaatst vergeet de S niet aan de achterkant te plaatsen
9. vervolgens kan je deze cell in een van je components laden zoals je homepage om data te displayen.

--------------------------------------------------------------------------
<div>
<h1>What we did so far</h1>
Generate the homepage
Generate the blog layout
Define the database schema
Run migrations to update the database and create a table
Scaffold a CRUD interface to the database table
Create a cell to load the data and take care of loading/empty/failure/success states
Add the cell to the page
</div>
------------------------------------------------------------------------

10. Dynamic routing dus hoe display je een single item url. wanneer je op je blog drukt. Aller eerst moet je een artikel pagina genereren met yarn rw g page artikel.
10a. vervolgens ga je naar je Success Query en voeg jeen link tag toe met to={routes.artikel({ id: whateverjegemapdenameis.id})}
10b. vergeet in je artikel pagina niet je de autogegenereerde Link te verwijderen anders houdt je <error> aan
Using the Param
Ok, so the ID is in the URL. What do we need next in order to display a specific post? It sounds like we'll be doing some data retrieval from the database, which means we want a cell. Note the singular Article here since we're only displaying one:
11.
 nog in  te vullen wat er is gedan!!!!!!!!!!!!!!!!


 --------
 1. Next make a new contact model
 2. hit this command yarn rw g sdl Contact. this will create new files under api directory. api/src/graphql/contacts.sdl.ts: defines the GraphQL schema in GraphQL's schema definition language
api/src/services/contacts/contacts.ts: contains your app's business logic (also creates associated test files).you'll recall that queries and mutations in an SDL file are automatically mapped to resolvers defined in a service, so when you generate an SDL file you'll get a service file as well, since one requires the other.

