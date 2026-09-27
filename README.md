# COP4331-Colors-Lab-Assignment-1
[Assignment 1] Version Control with GitHub

COLORS APP

[Description]

Colors Application lets you log into an account and add colors to your own account. You can then search for those colors after loging in. 

[Technologies]

This application uses:
- LAMP Stack Architecture
    - Server API: PHP
    - Frontend: HTML, CSS
    - Backend: JavaScript

- Digital Ocean
- GoDaddy
- Putty PSFTP
- SwaggerHub
- MySQL

[Setup]

Step 1:

Create a LAMP Stack Server on Digital Ocean
Use a Domain Service like GoDaddy to attach a domain name to the server.
Make sure in GoDaddy you set the DNS Host to the Server IP Address.


Step 2:

Add mySQL server to the Digital Ocean server via Digtial Ocean's terminal.

Step 3:

Set up the directories in the server by following the architecture structure in the "LAMP Stack" Folder.

Step 4:
Upload each file in "LAMP Stack" to their corresponding directories using PUTTY PSFTP.

Make sure you replace the locations in the code that require server links with your server links.
Ex: Replace the link to LAMPAPI with your domain name and API folder in the backend code.js file.

Step 5:

Connect your API endpoints (Files in API folder)
to Swagger Hub to test the endpoints before running it fully with the rest of the server.

Once tested on Swagger Hub, the application is ready for final testing with UI, backend API, and Database together.


Step 6:

Test Application by logining in in the website via the Domain name and edit the colors connected to the login information. 

[Limitations]
- For Digital Ocean make sure you are using a LAMP Droplet and a basic 1 GB Ram 25GB SSD CPU for server hosting.
- Use ssh to connect to the serbver.
- Use "mysql -u root -p (then enter your password)" command in the server terminal to add mySQL.
    - You can test the mySQL server by putting this command in the server mysql terminal:
              ```
              select * from Users;
              select * from Colors;
              also:
              select * from Colors where UserID=1;
              select * from Colors where UserID
              ```

