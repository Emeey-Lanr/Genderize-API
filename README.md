# Gender Classification API

A simple REST API that predicts the gender of a given name using the Genderize API, with additional processing, validation, and structured responses.

---

## Live API

Base URL:

```
https://your-deployed-url.com
```

Example Endpoint:

```
GET /api/classify?name=emmanuel
```

---



## Request

### Endpoint

```
GET /api/classify
```

### Query Parameters

| Parameter | Type   | Required | Description      |
| --------- | ------ | -------- | ---------------- |
| name      | string | Yes      | Name to classify |

---

## Response

### Success Response

```json
{
  "status": "success",
  "data": {
    "name": "emmanuel",
    "gender": "male",
    "probability": 0.99,
    "sample_size": 1234,
    "is_confident": true,
    "processed_at": "2026-04-01T12:00:00Z"
  }
}
```

---

##  Error Responses

### Missing name (400)

```json
{
  "status": "error",
  "message": "Name query parameter is required"
}
```

### Invalid name type (422)

```json
{
  "status": "error",
  "message": "Name must be a string"
}
```

### No prediction available

```json
{
  "status": "error",
  "message": "No prediction available for the provided name"
}
```

### Server error (500)

```json
{
  "status": "error",
  "message": "Internal server error"
}
```

---

## = Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/your-username/genderize-api.git
cd genderize-api
```

### 2. Install dependencies

```
npm install
```

### 3. Run in development

```
npm run dev
```

---


## External API

This project uses the Genderize API:
https://genderize.io


