export async function getAllRemoteJobs() {
    let jobs = fetch('https://jobicy.com/api/v2/remote-jobs')
    .then(res => res.json())
    .then(data => {
        let jobs = data.jobs
        return jobs;
    })
    .catch(error => {
        console.log(error);
        return 0;
    })

    return jobs;
}
