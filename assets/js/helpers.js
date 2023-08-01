const buildFeaturesList = features => features
.map(string => `<li>${string}</li>`)
.join("")

export const getRobotPageHTML = ({name, price, condition, features, weight, numCodeViolations, image}) => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A ficticious robot company website for a Bootstrap and jQuery code-along in class" />
    <title>${name}</title>
    <link rel="icon" type="image/x-icon" href="assets/images/favicon.ico"/>
    <!-- google font -->
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oxanium:wght@400;700&display=swap" rel="stylesheet">
    <!-- bootstrap css -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <!-- custom -->
    <link rel="stylesheet" href="../assets/css/style.css" />
    </head>
    <body class="bg-dark text-light">
    
    <main class="container my-5">
        <a href="../index.html">&larr; HOME</a>
        
        <div class="row mt-3">
        <div class="col-md-6">
            <img src="../assets/images/thumbs/${image}" alt="TITLE" />
        </div>
        <div class="col-md-6">
            <h1>${name}</h1>
            <ul>
            <li><strong>Price:</strong> ${price}</li>
            <li><strong>Condition:</strong> ${condition}</li>
            <li><strong>Weight:</strong> ${weight}</li>
            <li><strong>Num Code Violations:</strong> ${numCodeViolations}</li>
            </ul>
            <h2>Features</h2>
            <ul>${buildFeaturesList(features)}</ul>
        </div>
        </div>
    </main>

    <!-- bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    </body>
    </html>
    `
}