important to start is to run
1. yarn redwood dev
2. to generate page is by hitting yarn rw generate page home --> this will create a PascalCase folder with storybook inside and automaticlly add it to route
3. yarn rw g(enerate) layout 'insert name' --> this will create a PascalFolder layout under the layouts folder
4. after deciding on your layout you need to adjust the routs folder. To actually render the layout  --> Do this by invoking a Set component and give it a wrap={'YourNamedLayout'} props 
