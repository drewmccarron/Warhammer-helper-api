[Deployed Client](https://drewmccarron.github.io/Warhammer-helper-client/#/)

[Deployed API](https://murmuring-cove-24551.herokuapp.com/)

[Frontend Repo](https://github.com/drewmccarron/Warhammer-helper-client)


## About the App

This is a damage calculator and combat simulator for the popular tabletop franchise, Warhammer. It is compatible with both versions of the game, Warhammer: 40,000 and Warhammer: Age of Sigmar.

Users can input units' offensive and defensive stats into to the app in order to determine the expected result of a combat scenario. Additionally, users are able to make an example combat using those stats, which will show the number of successful hit rolls, successful wound rolls, failed save rolls, and the resulting damage.

Users are able to manage collections of saved combat scenarios, allowing users to input and compare the results of multiple different units.

## Technologies Used (Backend)

<ol>
<li>JavaScript (ES6)</li>
<li>MongoDB</li>
<li>Mongoose</li>
<li>Express.js</li>
<li>Node.js</li>
</ol>

## Installation

To run locally, run the following in terminal from the project directory:
```sh
npm install
npm run server
```

## ERD and Routes

User -|-< Combats

| User         | Combats     |
| ------------ | ----------- |
| email        | title       |
| password     | numAttacks  |
|              | hit         |
|              | wound       |
|              | rend        |
|              | damage      |
|              | armorSave   |
|              | fnp         |
|              | owner       |

| Combat Routes  |             |        |
| -------------- | ----------- | ------ |
| /combats       | GET         | INDEX  |
| /combats/:id   | GET         | SHOW   |
| /combats/      | POST        | CREATE |
| /combats/:id   | PATCH       | UPDATE |
| /combats/:id   | DELETE      | DELETE |

## Development Process

Development began by outlining the core functions that I wanted to app to achieve. Namely, I wanted users to be able to input unit statistics from Warhammer so that they can replicate the combats phase from the game. To do this, I needed to create two things:

- Forms where users can input units' statistics
- An algorithm to replicate the rules of Warhammer's combat phase

Beyond this, I wanted users to be able to save and update collections of combat scenarios so that they can be referenced and compared. This required:

- User authentication, including sign-up, sign-in, sign-out, and password updates.
- The ability to save, update, and delete combat scenarios.
- The ability to see other users' combat scenarios.

Development began by setting up the backend api that would allow for the saving and managing of users' combat scenarios. This was done in with express, mongoDB, and mongoose, and allowed for the data that makes up a combat scenario to be saved, retrieved, patched, or deleted.

After this, development focused on the application's client. The first step was implementing the multi-part form that allowed for all of the relevant data to be sent to the api. After this, the next step was being able to retrieve the data from the api and display it in the form of a list of saved combat scenarios. The next step was being able to take the retrieved API data and load that into the client, where it could then be used by the to-be-developed algorithm.

Once data could be exchanged between the frontend and backened, work could begin on the algorithm. The algorithm needed to take the various unit statistics and replicate the game rules from Warhammer. This includes several layers of tests where a unit's stats are compared with randomized dice-rolling outcomes, and the results of those tests are used as the inputs for further tests.

Upon completion of the algorithm, basic styling was used to present the necessary parts of the app in an efficient and concise display. There are many parts that a user needs to interact with, so limiting unnecessary visual elements helped keep the the app from appearing overwhelmingly complicated.

## Unsolved Issues

1. Currently, Rend values of 0 empty the form, rather than displaying the number '0'.

## Future Features

1. Implement reroll modifiers for hits rolls, wound rolls, saves rolls, and fnp rolls. This includes rerolling rolls of 1 and rerolling fails tests.
2. Implement 'on a roll of 6' effects, including mortal wounds (damage that bypasses save rolls) and 'exploding 6s' (i.e. multiple successful hits resulting from a hit roll test)
3. Implement the ability to have multiple profiles active at the same time for calulating damage and simulating combat (e.g. A single unit hitting with two different weapons)
4. Implement a graphic representation of expected damage frequency distribution, rather than just the mean value (i.e. Show the likelihoods of getting specific damage results on a graph).
