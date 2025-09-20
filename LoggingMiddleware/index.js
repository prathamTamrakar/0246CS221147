import axios from 'axios'
// package is a reserved keyword
async function Log(stack, level, pkg, message) {
    const data = await axios.post(
        'http://20.244.56.144/evaluation-service/logs',
        {
            "stack": `${stack}`,
            "level": `${level}`,
            "package": `${pkg}`,
            "message": `${message}`
        },
        {
            headers: {
                'Authorization': ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwcmF0aGFtdGFtcmFrYXI4NDlAZ21haWwuY29tIiwiZXhwIjoxNzU4MzUxNzM2LCJpYXQiOjE3NTgzNTA4MzYsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJiNzg3NGJiNS0yZTFmLTQ3NmEtOWFhMi0xN2QyYTBlMTIwN2UiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJwcmF0aGFtIHRhbXJha2FyIiwic3ViIjoiNzNmY2E3ZWYtMWE2OS00ZGM3LWJmMWMtNTg3NDhhMzdjYmJlIn0sImVtYWlsIjoicHJhdGhhbXRhbXJha2FyODQ5QGdtYWlsLmNvbSIsIm5hbWUiOiJwcmF0aGFtIHRhbXJha2FyIiwicm9sbE5vIjoiMDI0NmNzMjIxMTQ3IiwiYWNjZXNzQ29kZSI6Ik14dmZ4YSIsImNsaWVudElEIjoiNzNmY2E3ZWYtMWE2OS00ZGM3LWJmMWMtNTg3NDhhMzdjYmJlIiwiY2xpZW50U2VjcmV0IjoidXJKdWhhZHNxVVhHa0pHbiJ9.tq4qLHwCMJ9qLYHs67MBt3dwbs0mOqN4BMwZ9OkG3DI'
            }
        }
    ).then((response) => {
        return response.data
    })
    console.log(data);
    
}

Log("backend","info","handler","loging middleware initialized")

