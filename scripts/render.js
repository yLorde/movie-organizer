// function render(filme) {
//     list.innerHTML += `
//     <div id="filme-popup">
//         <p>
//             Filme: <b>${filme.nome}</b> <br />
//             Assistido: <b>${status[filme.status]}</b> <br />
//             Nota: <b>${filme.nota}/10</b> <br />
//             Tipo: <b>${tipo[filme.tipo]}</b> <br />
//             Gênero: <b>${genero[filme.genero]}</b> <br />
//             Stream: <b>${stream[filme.stream]}</b> <br />
//             Id: ${filmes.indexOf(filme) + 1}
//         </p>
//     </div>
//     `
// }

function render(filme) {
    list.innerHTML += `
<div class="flex items-center justify-center">
    <div
    class="flex flex-col gap-2 dark:text-white max-w-md w-full bg-gray-800 p-5 rounded-md mt-8 shadow-md hover:scale-105 hover:duration-150 duration-150"
    >
    <div class="flex flex-row justify-between w-full">
        <div class="flex flex-row justify-between w-full">
        <p class="text-xs">${status[filme.status]}</p>
        <p class="text-xs">${stream[filme.stream]}</p>
        </div>
    </div>
    <div class="flex flex-row justify-between w-full">
        <h3 class="text-xl font-bold">${filme.nome}</h3>

        <div class="text-xs">
        <div class="flex flex-row">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            >
            <path
                d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
            ></path>
            </svg>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            >
            <path
                d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
            ></path>
            </svg>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            >
            <path
                d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
            ></path>
            </svg>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            >
            <path
                d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
            ></path>
            </svg>

            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-yellow-200"
            viewBox="0 0 20 20"
            fill="currentColor"
            >
            <path
                d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
            ></path>
            </svg>
        </div>
        </div>
    </div>

    <div class="text-sm">
        <b>Gênero:</b> ${genero[filme.genero]} <br />
        <b>Tipo:</b> ${tipo[filme.tipo]}
    </div>
    </div>
    </div>
    `
}