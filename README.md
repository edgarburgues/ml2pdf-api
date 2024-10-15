
# AML2PDF-API
This project is an API that generates links related to Microsoft Learn certification exams and learning paths. It is built using [Bun](https://bun.sh/) and follows a modular structure to handle requests and responses.

This API is part of the ML2PDF project. You can find the related repository here: [ML2PDF Repository](https://github.com/edgarburgues/ml2pdf).


## Installation

1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/edgarburgues/ml2pdf-api.git
   ```
2. Navigate to the project directory.
   ```bash
   cd ml2pdf-api
   ```
3. Install the necessary dependencies.
   ```bash
   bun install
   ```

## Usage

To run the API locally, use the following command:

```bash
bun run index.js
```

The API will be available at [http://localhost:3000](http://localhost:3000).

You can also make requests to the API deployed on my server:

```bash
http://ml2pdf-web-api.azurewebsites.net/api?url=https://learn.microsoft.com/es-es/credentials/certifications/exams/az-900/
```

### Endpoints

#### `/api?url=<url>`

This is the main endpoint of the API. Depending on the `url` parameter, the API will generate links for certification exams or learning paths.

**Parameters:**

- `url` (string): The Microsoft Learn URL corresponding to a certification exam or a learning path.

**Example usage:**

```bash
curl "http://localhost:3000/api?url=https://learn.microsoft.com/en-us/certifications/exams/az-900/"
```

#### Responses

- **Certification Exams**: Returns a JSON object with links to the study modules associated with the certification exam.

  ```json
  {
    "https://learn.microsoft.com/api/hierarchy/modules/xxxx?locale=en-us": [
      "https://learn.microsoft.com/en-us/learn/modules/xxxx-1/",
      "https://learn.microsoft.com/en-us/learn/modules/xxxx-2/"
    ]
  }
  ```

- **Learning Paths**: Returns a JSON object with links to the modules and units of the learning path.

  ```json
  {
    "https://learn.microsoft.com/path/to/module/": [
      {
        "title": "Unit title",
        "url": "https://learn.microsoft.com/path/to/unit"
      }
    ]
  }
  ```

- **Errors**: Returns a JSON object with an error message and the appropriate HTTP status code.

  ```json
  {
    "error": "Main URL not provided"
  }
  ```

### Project Structure

- `index.js`: Main entry point of the API.
- `src/api.js`: Future API-related functionalities will be added here.
- `src/routes.js`: Manages route handling.
- `src/controllers/`: Controllers for request logic.
  - `certificationController.js`: Logic specific to certification URLs.
  - `trainingPathController.js`: Logic specific to learning path URLs.
- `src/services/`: Services that handle business logic.
  - `certificationService.js`: Generates links for certification exams.
  - `trainingPathService.js`: Generates links for learning paths.
- `src/utils/`: Common utilities for the API.
  - `fetchUtils.js`: Functions for fetching data from the Microsoft Learn API.
  - `responseUtils.js`: Functions to create JSON HTTP responses.

### License

This project is licensed under the MIT License. See the `LICENSE` file for details.

### Contributions

Contributions are welcome. Please follow the standard GitHub guidelines to open issues and pull requests.

### Contact

For questions or support, please contact the author at [edgarburgues@example.com](mailto:edgarburgues@example.com).
