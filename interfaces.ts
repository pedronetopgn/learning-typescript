interface User {
    name: string;
    email: string;
    address?: string;
}

function getUser(): User {
    return {
        name: 'Pedro',
        email: 'pedronetopgn@gmail.com',
    }
}

function setUser(user: User) {
    //...
}