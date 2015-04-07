# Express Games

> We've spent the morning using the express library to write HTTP servers...use express to write a server that meets the following specifications...

### Specification:

- GET `/coin_toss`
  - returns "Heads" or "Tails"
- GET `/dice_roll`
    - returns a number between 1 and 6
- GET `/magic8ball/will+it+snow+tomorrow`
  - returns the question asked (in this case, "Will it snow tomorrow?"), followed by a random magic 8 ball response (see below)
- GET `/rps/rock`
  - returns the computer's random choice, followed by the outcome of the rps game.
      - __Example:__ "The computer chose (computer's choice). You (win/lose/tie)!"

###Bonus###
- Make an external request to the NYC restaurant ratings API from your server.
```
"https://data.cityofnewyork.us/resource/xx67-kt59.json"
```
- GET `/food/*BORO*`
  - returns all the restaurant names for a given borough
- GET `/food/*ZIPCODE*`
  - returns all the restaurant names for a given zipcode
- GET `/food/*BORO*/healthy`
  - returns a list of all restaurants with an A rating
- GET `/food/*CUISINE+TYPE*`
  - returns the names of all restaurants matching a dynamic cuisine type
- GET `/food/*RESTAURANT + NAME*/violations`
  - returns all the disgusting health code violations for a given restaurant.

###"SICK" Bonus###
- Deploy the app to your Digital Ocean droplet.

### Magic 8 Ball Responses

```javascript
[
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes", "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Yes, and Neel's outfit is looking perfectly coordinated today."
  "Better not tell you now",
  "No, but Jeff LOVES that new Maroon Five song."
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
]
```
