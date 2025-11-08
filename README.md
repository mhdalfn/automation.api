# 🧪 Reqres.in API Automation Testing (Cypress)

Automated API testing project using **[Cypress](https://www.cypress.io/)** for the public API **[Reqres.in](https://reqres.in/)**.  
This project validates multiple HTTP methods — `GET`, `POST`, `PUT`, `PATCH`, and `DELETE` — ensuring endpoint reliability and correctness.  

---

## ✅ Test Coverage

| # | Test Name | HTTP Method | Endpoint | Expected Result |
|---|------------|--------------|-----------|----------------|
| 1 | List Users | GET | `/users?page=2` | 200 OK |
| 2 | Single User | GET | `/users/2` | 200 OK |
| 3 | Single User Not Found | GET | `/users/23` | 404 Not Found |
| 4 | Create User | POST | `/users` | 201 Created |
| 5 | Update User | PUT | `/users/2` | 200 OK |
| 6 | Partially Update User | PATCH | `/users/2` | 200 OK |
| 7 | Delete User | DELETE | `/users/2` | 204 No Content |
| 8 | Register Successful | POST | `/register` | 200 OK + Token |
| 9 | Register Unsuccessful | POST | `/register` | 400 Bad Request |
|10 | Login Successful | POST | `/login` | 200 OK + Token |
|11 | Login Unsuccessful | POST | `/login` | 400 Bad Request |

---

