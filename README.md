# MovieFlixGPT

MovieFlixGPT is a Netflix clone project that mimics the UI and functionality of Netflix. It is made using React.js, Tailwind CSS & Redux Toolkit, effectively managing the UI and data layers to provide users with a seamless movie recommendation experience. The project features a fully-responsive UI, authentication and authorization system powered by Firebase, movie recommendations fetched via the TMDB API, and a unique GPT movie suggestion feature powered by the OpenAI API.

## Features

- **Netflix-Like UI**: MovieFlixGPT boasts a user interface closely resembling Netflix, providing users with a familiar and intuitive browsing experience.
- **TMDB API Integration**: The project fetches movie data from the TMDB API, displaying movie posters and recommendations on the home page.
- **Authentication and Authorization**: Users can sign up or sign in using their email and password. Firebase is utilized to manage the authentication and authorization system securely.
- **Responsive Design**: The UI is designed to adapt seamlessly to various screen sizes, ensuring optimal viewing experience across devices.
- **Memoization**: Used Memoization of data through redux store to reduce the number of unnecessary API calls, thus efficiently improving app performance.
- **Redux Toolkit**: Redux Toolkit is employed for state management, enabling efficient data flow and state updates throughout the application.
- **React.js and Tailwind CSS**: React.js serves as the primary UI library, facilitating the creation of dynamic and interactive user interfaces. Tailwind CSS is utilized as the styling framework, offering a flexible and utility-first approach to styling components.
- **GPT Movie Suggestions**: The standout feature of MovieFlixGPT is its GPT-powered movie suggestion system. Users can input prompts into the search bar, and the application generates movie suggestions based on these prompts using the OpenAI API.

## Getting Started

To get started with MovieFlixGPT, follow these steps:

1. Clone the repository from GitHub:

```
git clone https://github.com/HarshBatra/MovieFlixGPT.git
```

2. Install dependencies:

```
cd MovieFlixGPT
npm install
```

3. Set up Firebase authentication:

   - Create a Firebase project and set up authentication with email and password.
   - Obtain the Firebase configuration settings.
   - Update the Firebase configuration in the project.

4. Obtain TMDB API key:

   - Sign up for a TMDB API account and obtain an API key.
   - Add the TMDB API key to the project for fetching movie data.

5. Obtain OpenAI API key:

   - Sign up for an OpenAI API account and obtain an API key.
   - Add the OpenAI API key to the project for GPT-powered movie suggestions.

6. Start the development server:

```
npm start
```

7. Access the application in your web browser at `http://localhost:3000`.

## Contributing

Contributions to MovieFlixGPT are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## Acknowledgments

- The MovieFlixGPT project makes use of the TMDB API and OpenAI API for fetching movie data and generating movie suggestions, respectively.
- The MovieFlixGPT project clones the UI of Netflix.
- Special thanks to the developers and contributors of React.js, Tailwind CSS, Redux Toolkit, Firebase, TMDB, and OpenAI for their invaluable tools and resources.
