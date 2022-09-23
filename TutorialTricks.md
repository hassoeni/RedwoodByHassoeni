important to start is to run
1. yarn redwood dev
2. to generate page is by hitting yarn rw generate page home --> this will create a PascalCase folder with storybook inside and automaticlly add it to route
3. yarn rw g(enerate) layout 'insert name' --> this will create a PascalFolder layout under the layouts folder
4. after deciding on your layout you need to adjust the routs folder. To actually render the layout  --> Do this by invoking a Set component and give it a wrap={'YourNamedLayout'} props
5. initializing the backend with yarn rw prisma migrate dev after defining a schema
6. test this by hitting yarn rw prisma studio
7. let redwood autogenerate a CRUD site for your schema with yarn rw g scaffold 'schemaname'
7a. Redwood Cells important giveways guideline for when to use cells is if your component needs some data from the database or other service that may be delayed in responding. Let Redwood worry about juggling what is displayed when and you can focus on the happy path of the final, rendered component populated with data.
8. yarn rw g cell Articles genereert een cell automatisch die in je front end wordt geplaatst 
