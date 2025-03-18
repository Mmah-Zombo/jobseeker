import { getAllRemoteJobs } from "./utils.js";

const job_list = document.getElementById('listings');
const remoteJobs = await getAllRemoteJobs(); // returns a list

for (let job_index in remoteJobs) {
    let job = remoteJobs[job_index];

    job_list.innerHTML += `<div class="group mx-2 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border border-gray-200 py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
            <a href="#" class="order-2 col-span-2 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4">
            <div class="col-span-2 group relative h-16 w-16 overflow-hidden rounded-lg">
                <img src="${job.companyLogo}" alt="" class="h-full w-full object-cover text-gray-700" />
            </div>
            </a>
            <div class="col-span-10 flex flex-col pr-8 text-left sm:pl-4">
            <h3 class="text-sm text-gray-600">${job.companyName}</h3>
            <a href="#" class="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"> ${job.jobTitle}</a>
            <p class="text-center w-full overflow-hidden pr-7 text-sm">${job.jobDescription.slice(0,600)}</p>

            <div class="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                <div class="">Experience:<span class="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900"> ${job.jobLevel} </span></div>
                <div class="">Salary:<span class="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">${job.id} USD</span></div>
            </div>
            </div>
        </div>`
}