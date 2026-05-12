## Project Theme Explanation

### What type of theme did I choose for this project?

I selected the event manager theme that was suggested in the requirements documentation.

### Why did I choose this theme?

I chose this particular theme because I had a good idea on how to implement it. While the other themes seemed plausible, they also required additional features such as images and Enums which aren't difficult to learn, but will definitely require a little more time to master. Since this project has a strict deadline and a specific set of requirements, going up and beyond will not benefit me at all and given my knowledge gap, it's better if I simplify the entire process for myself.

## Running the Project

### Step 1 - Running the Local Server

In order to run the local server, you must type the following command in the terminal:

```bash
npm run dev
```

### Step 2 - Selecting the local host URL

After the project starts to run in development mode, make sure to either select or copy the following URL in the terminal:

http://localhost:3000

## Main User Flow

### Home Page

This will be the first page that greets the main user on their journey.

### Register Page

If the main user doesn't have an account, they will have to create an account through the register page. In order for the user to get to the register page, they will have to click on the register navigation link, which is located in the navigation bar.

### Login Page

Once the main user registers their account, they will be redirected to the login page. From there, they will simply have to provide the same email and password that they used in the register page and click on the login button.

### Events Page

After a user logs into their account, they will be taken to the events page where they can see all of the current events that are taking place.

### Details Page

If a user clicks on the details arrow, they will be redirected to the page, which will provide additional details about the event.

### Edit Page

On the details page, the user will be able to either navigate back to the events page, or perform an edit or delete operation.
If the user selects edit they should be able to modify the event details and select the update button to save the changes.
Once the user saves their event, they will be redirected back to the events page.

### Delete Page

Just like the edit page, the user will have the option to navigate to the delete page from the details page. From there the user will have the option to delete the event by pressing the big red delete button. After the user deletes the event, they will once again be redirected back to the events page.

## Logout Link

If the user has finished all of the operations that they wanted to perform in their session, they can simply click the logout link to sign out of their account.
