# Evangelion wiki API Documentation

Welcome to the **Evangelion Wiki** **_API_** documentation!

# History behind the API

Since I did not find any API that provides Neon Genesis Evangelion Info while I was working on a evangelion project, I decided to create my own API 🦖.

This **API** is a **RESTful API** that provides information about the **characters**, **episodes**, **mechs**, **angels**, **organizations**, and **locations** featured in the **Neon Genesis Evangelion** series (And Rebuild movies). The **API** is designed to be simple and easy to use, allowing developers to access data from the Evangelion Wiki in their applications.

## Base URL

The base URL for accessing the Evangelion Wiki API is:

```
https://evangelionwiki-api.vercel.com
```

## Authentication

The Evangelion Wiki API does not require authentication to access public data. However, if you plan to make frequent or intensive requests, or maybe if you want some more tailored info on evangelion, it's recommended to obtain an API key by contacting the Evangelion Wiki administrator.

Github :octocat: : [@Rofernweh](https://github.com/Rofernweh)

Instagram : [@Rofernweh](https://www.instagram.com/Rofernweh/)

Mail : [@Rofernweh](mailto:rodrigo.rocuant@ieee.org)

## Endpoints

### 1. Characters

#### Get All Characters

```
GET /characters
```

This endpoint retrieves a list of all characters featured in the Evangelion series in the following format.

```json
{
  "id": 1,
  "name": "Shinji Ikari",
  "age": 14,
  "gender": "Male",
  "birthday": "June 6, 2001",
  "nationality": "Japanese",
  "occupation": "Eva Pilot",
  "height": [{ "cm": "151 cm" }, { "ft": "4'11" }],
  "hair Color": "Black",
  "eye Color": "Blue",
  "affiliation": "Nerv",
  "debut": "Episode 1",
  "appear": ["Original Series", "Movies", "Games", "Manga"],
  "skills": ["Eva Pilot"],
  "voiceActors": [
    {
      "name": "Megumi Ogata",
      "role": "Shinji Ikari"
    },
    {
      "name": "Ryūnosuke Kamiki",
      "role": "Shinji Ikari"
    }
  ]
}
```

#### Get Character by ID

To retrieve details about a specific character using their unique identifier, use the following endpoint:

```
GET /characters/{id}
```

### 2. Episodes

#### Get All Episodes

```
GET /episodes
```

Retrieve a list of all episodes from the Evangelion series.

```json
{
  "id": 1,
  "title": "Angel Attack",
  "japaneseTitle": "使徒、襲来",
  "episode": 1,
  "americanAirDate": "October 21, 2005",
  "japaneseAirDate": "October 4, 1995",
  "director": "Kazuya Tsurumaki",
  "writer": "Hideaki Anno",
  "previousEpisode": "None",
  "nextEpisode": "The Beast"
}
```

#### Get Episode by ID

Retrieve details about a specific episode using its unique identifier.

```
GET /episodes/{id}
```

### 3. Mechs (Evangelions)

#### Get All Mechs

Retrieve a list of all mechs (Evangelions) featured in the Evangelion series.

```
GET /mechs
```

```json
{
  "id": 1,
  "name": "Evangelion Unit-00",
  "type": "EVA",
  "pilot": "Rei Ayanami",
  "affiliation": "Nerv"
}
```

#### Get Mech by ID

```
GET /mechs/{id}
```

Retrieve details about a specific mech (Evangelion) using its unique identifier.

### 4. Angels

#### Get All Angels

Retrieve a list of all Angels featured in the Evangelion series.

```
GET /angels
```

```json
{
  "id": 1,
  "name": "Sachiel",
  "classification": "Third Angel",
  "appearance": "Episode 1",
  "abilities": ["AT Field", "Energy Blasts"],
  "description": "Sachiel is the Third Angel and the first to appear in the series. It attacks Tokyo-3 in the first episode but is defeated by Shinji Ikari piloting Evangelion Unit-01.",
  "image": "sachiel.jpg"
}
```

#### Get Angel by ID

Retrieve details about a specific Angel using its unique identifier.
```
GET /angels/{id}
```

## Responses

The API returns responses in JSON format. Here's an example response for retrieving details about a character:

```json
{
        "id": 1,
        "name": "Shinji Ikari",
        "age": 14,
        "gender": "Male",
        "birthday": "June 6, 2001",
        "nationality": "Japanese",
        "occupation": "Eva Pilot",
        "height": [ {"cm": "151 cm"}, {"ft": "4'11"}],
        "hair Color": "Black",
        "eye Color": "Blue",
        "affiliation": "Nerv",
        "debut": "Episode 1",
        "appear": ["Original Series", "Movies", "Games", "Manga"],
        "skills": [
            "Eva Pilot"
        ],
        "voiceActors":  [{
            "name": "Megumi Ogata",
            "role": "Shinji Ikari"},
            {
                "name": "Ryūnosuke Kamiki",
                "role": "Shinji Ikari"
            }]
       }
```

## Errors

The API uses standard HTTP status codes to indicate the success or failure of a request. In case of an error, additional information may be provided in the response.

Example error response:

```json
{
  "error": "Resource not found",
  "message": "The requested character does not exist."
}
```

## Rate Limiting

To ensure fair usage of the API and to prevent abuse, rate limiting is enforced. Requests exceeding the rate limit will receive a `429 Too Many Requests` response.

## Conclusion

This concludes the documentation for the Evangelion Wiki API. Feel free to explore and integrate them into your applications :3 to access information about this beautiful anime of **Neon Genesis Evangelion**.

If you have any questions or need further assistance, don't hesitate to contact me.

Github :octocat: : [@Rofernweh](https://github.com/Rofernweh)

Instagram : [@Rofernweh](https://www.instagram.com/Rofernweh/)

Mail : [@Rofernweh](mailto:rodrigo.rocuant@ieee.org)


Also if you want to contribute to the API, you can do it by visiting the [Github Repository](https://github.com/Rofernweh/evangelion-wiki-api)
