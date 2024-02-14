# Evangelion wiki API Documentation

Welcome to the **Evangelion Wiki** ***API*** documentation!

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
    id: 1,
    name: "Shinji Ikari",
    age: 14,
    gender: "Male",
    pilot: true,
    affiliation: "Nerv",
  },
  {
    id: 2,
    name: "Rei Ayanami",
    age: 14,
    gender: "Female",
    pilot: true,
    affiliation: "Nerv",
  }
```

#### Get Character by ID

```
GET /characters/{id}
```

Retrieve details about a specific character using their unique identifier.

```json
{
  "id": 1,
  "name": "Shinji Ikari",
  "age": 14,
  "gender": "Male",
  "pilot": true,
  "affiliation": "Nerv"
}
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
  "number": 1,
  "air_date": "October 4, 1995",
  "director": "Masayuki",
  "writer": "Hideaki Anno",
  "description": "Shinji Ikari arrives in Tokyo-3 and is brought before NERV's commander, Gendo Ikari. The city is under attack by the Fourth Angel, and NERV deploys Evangelion Unit-01, a giant bio-machine, to destroy it."
},
{
    "id": 2,
    "title": "The Beast",
    "number": 2,
    "air_date": "October 11, 1995",
    "director": "Kazuya Tsurumaki",
    "writer": "Hideaki Anno",
    "description": "Shinji is taken to the NERV headquarters, where he meets the other pilots, Rei Ayanami and Asuka Langley Soryu. The three of them are sent to intercept the Seventh Angel, but they are unable to prevent it from reaching the city."
}
```

#### Get Episode by ID

```
GET /episodes/{id}
```

Retrieve details about a specific episode using its unique identifier.

```json
{
  "id": 1,
  "title": "Angel Attack",
  "number": 1,
  "air_date": "October 4, 1995",
  "director": "Masayuki",
  "writer": "Hideaki Anno",
  "description": "Shinji Ikari arrives in Tokyo-3 and is brought before NERV's commander, Gendo Ikari. The city is under attack by the Fourth Angel, and NERV deploys Evangelion Unit-01, a giant bio-machine, to destroy it."
}
```

### 3. Mechs (Evangelions)

#### Get All Mechs

```
GET /mechs
```

Retrieve a list of all mechs (Evangelions) featured in the Evangelion series.

```json
{
    "id": 1,
    "name": "Evangelion Unit-01",
    "pilot": "Shinji Ikari",
    "affiliation": "Nerv"
    },
    {
    "id": 2,
    "name": "Evangelion Unit-02",
    "pilot": "Asuka Langley Soryu",
    "affiliation": "Nerv"
}
```

#### Get Mech by ID

```
GET /mechs/{id}
```

Retrieve details about a specific mech (Evangelion) using its unique identifier.

```json
{
  "id": 1,
  "name": "Evangelion Unit-01",
  "pilot": "Shinji Ikari",
  "affiliation": "Nerv"
}
```

### 4. Angels

#### Get All Angels

```
GET /angels
```

Retrieve a list of all Angels featured in the Evangelion series.

```json
{
  "id": 1,
  "name": "Sachiel",
  "classification": "Third Angel",
  "height": "40 meters",
  "affiliation": "Angels"
},
{
  "id": 2,
  "name": "Shamshel",
  "classification": "Fourth Angel",
  "height": "43 meters",
  "affiliation": "Angels"
}

```

#### Get Angel by ID

```
GET /angels/{id}
```

Retrieve details about a specific Angel using its unique identifier.

```json
{
  "id": 1,
  "name": "Sachiel",
  "classification": "Third Angel",
  "height": "40 meters",
  "affiliation": "Angels"
}
```

### 5. Organizations

#### Get All Organizations

```
GET /organizations
```

Retrieve a list of all organizations featured in the Evangelion series.

```json
{
  "id": 1,
  "name": "Nerv",
  "type": "Paramilitary organization",
  "location": "Tokyo-3"
},
{
  "id": 2,
  "name": "Seele",
  "type": "Secret society",
  "location": "Unknown"
}
```

#### Get Organization by ID

```
GET /organizations/{id}
```

Retrieve details about a specific organization using its unique identifier.

```json
{
  "id": 1,
  "name": "Nerv",
  "type": "Paramilitary organization",
  "location": "Tokyo-3"
}
```

### 6. Locations

#### Get All Locations

```
GET /locations
```

Retrieve a list of all locations featured in the Evangelion series.

```json
{
  "id": 1,
  "name": "Tokyo-3",
  "type": "City",
  "country": "Japan",
},
{
  "id": 2,
  "name": "GeoFront",
  "type": "Underground cavern",
  "country": "Japan", 
}
```

#### Get Location by ID

```
GET /locations/{id}
```

Retrieve details about a specific location using its unique identifier.

```json
{
  "id": 1,
  "name": "Tokyo-3",
  "type": "City",
  "country": "Japan",
}
```

## Responses

The API returns responses in JSON format. Here's an example response for retrieving details about a character:

```json
{
  "id": 1,
  "name": "Shinji Ikari",
  "age": 14,
  "gender": "Male",
  "pilot": true,
  "affiliation": "Nerv"
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

This concludes the documentation for the Evangelion Wiki API. Feel free to explore and integrate them into your applications :3 to access information about  this beautiful anime of **Neon Genesis Evangelion**. 

If you have any questions or need further assistance, don't hesitate to contact me.

Github :octocat: : [@Rofernweh](https://github.com/Rofernweh)

Instagram : [@Rofernweh](https://www.instagram.com/Rofernweh/)

Mail : [@Rofernweh](mailto:rodrigo.rocuant@ieee.org)
