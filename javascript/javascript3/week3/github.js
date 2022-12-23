const ul = document.getElementById('git-repo');
const classMates = ['Aditi-Sawardekar', 'Kositthai', 'YF91925352'];
let request = [];
const BASE_URL = 'https://api.github.com/search/repositories?q=user:'

const renderRepo = (data) => {
    console.log(data)
    data.forEach((eachUser, index) => {
        const liUser = document.createElement("li");
        liUser.innerHTML = `Owner of the Repo is ${classMates[index]}`;
        ul.appendChild(liUser);
        eachUser.items.forEach(eachItem => {
            const liUser = document.createElement("li");
            liUser.innerHTML = `Full Name of the Repo is ${eachItem.full_name}-URL of the Repo is ${eachItem.html_url}`
            ul.appendChild(liUser);
        })
    })
}
const getRepoData = async (request) => {
    try {
        const response = await Promise.all(request.map(onereq => fetch(onereq)));
        if (response.some(x => x.status !== 200)) {
            throw new Error`Something wrong`
        }
        const data = await Promise.all(response.map(oneres => oneres.json()));
        renderRepo(data)
    }
    catch (error) {
        return (error.msg);
    }
}
class Classmates {
    constructor(name, BASE_URL) {
        this.name = name;
    }
    repoUrl() {
        this.url = BASE_URL.concat(this.name);
        return this.url;
    }
}
const getRepository = () => {
    classMates.forEach(x => {
        const classmate = new Classmates(x, BASE_URL);
        const url = classmate.repoUrl();
        request.push(url);
    }
    );
    getRepoData(request);

}



getRepository();