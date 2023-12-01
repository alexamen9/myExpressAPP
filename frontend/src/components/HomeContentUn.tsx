import { useContext } from "react";
import AuthenticatedContext from "../context/AuthContext";

const HomeContentUn = () => {
    
    const contextAuth = useContext(AuthenticatedContext);

    return (
        <div className="flex max-w-[80%] h-screen mx-auto justify-center items-center gap-4">
            <div className="flex flex-col gap-3 justify-center items-center">
                <h1>This is an app task application created with ExpressJS, React JS and Postgresql</h1>
                <h2>{contextAuth.user.message}</h2>
            </div>
            <div className="w-[70%]">
                <svg viewBox="0 0 163 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group 2">
                        <path id="Task" d="M1.28906 43.6191C1.28906 43.0723 1.47461 42.6133 1.8457 42.2422C2.23633 41.8516 2.70508 41.6562 3.25195 41.6562H20.3027C20.8496 41.6562 21.3184 41.8418 21.709 42.2129C22.0801 42.6035 22.2656 43.0723 22.2656 43.6191C22.2656 44.166 22.0703 44.6348 21.6797 45.0254C21.3086 45.3965 20.8496 45.582 20.3027 45.582H13.7695V57.4473C13.6523 58.6191 13.0078 59.2539 11.8359 59.3516C11.2891 59.3516 10.8105 59.1758 10.4004 58.8242C10.0098 58.4531 9.81445 57.9941 9.81445 57.4473V45.582H3.25195C2.70508 45.582 2.24609 45.3867 1.875 44.9961C1.48438 44.625 1.28906 44.166 1.28906 43.6191ZM41.7188 57.3887V50.3281C41.7188 49.8398 41.4648 49.5859 40.957 49.5664H30.7031C30.332 49.5859 30.0098 49.752 29.7363 50.0645C29.4629 50.3574 29.2578 50.709 29.1211 51.1191C29.0039 51.5098 28.9453 51.9102 28.9453 52.3203C28.9453 52.7109 29.0039 53.1113 29.1211 53.5215C29.2578 53.9121 29.4629 54.2637 29.7363 54.5762C30.0098 54.8691 30.332 55.0156 30.7031 55.0156H38.2031C38.75 55.0156 39.209 55.2109 39.5801 55.6016C39.9707 55.9727 40.166 56.4316 40.166 56.9785C40.166 57.5254 39.9707 57.9844 39.5801 58.3555C39.209 58.7461 38.75 58.9414 38.2031 58.9414H30.8203C29.4531 58.9219 28.3203 58.541 27.4219 57.7988C26.543 57.0371 25.9082 56.1875 25.5176 55.25C25.1465 54.293 24.9609 53.3066 24.9609 52.291C24.9609 51.3145 25.1562 50.3574 25.5469 49.4199C25.9375 48.4629 26.5723 47.6133 27.4512 46.8711C28.3301 46.1094 29.6289 45.6992 31.3477 45.6406H43.6523C44.1992 45.6406 44.668 45.8262 45.0586 46.1973C45.4492 46.5488 45.6543 46.998 45.6738 47.5449V57.3887C45.6738 57.9355 45.4688 58.3945 45.0586 58.7656C44.668 59.1172 44.1992 59.293 43.6523 59.293C42.4805 59.1953 41.8359 58.5605 41.7188 57.3887ZM68.0566 47.3398C68.0566 47.8281 67.8613 48.2383 67.4707 48.5703C67.0996 48.8828 66.6406 49.0391 66.0938 49.0391H53.7012C53.4473 49.0391 53.2422 49.0879 53.0859 49.1855C52.9297 49.2832 52.8125 49.3906 52.7344 49.5078C52.6562 49.6055 52.6172 49.6934 52.6172 49.7715C52.6172 49.8691 52.6562 49.9766 52.7344 50.0938C52.8125 50.1914 52.9297 50.2891 53.0859 50.3867C53.2422 50.4648 53.4473 50.5137 53.7012 50.5332H63.2812C64.5117 50.5527 65.5273 50.7969 66.3281 51.2656C67.1289 51.7148 67.6953 52.252 68.0273 52.877C68.3789 53.4824 68.5547 54.0977 68.5547 54.7227C68.5547 55.3281 68.3789 55.9434 68.0273 56.5684C67.6758 57.1738 67.0996 57.7109 66.2988 58.1797C65.5176 58.6289 64.5117 58.8535 63.2812 58.8535C63.0664 58.873 62.9102 58.8828 62.8125 58.8828H51.4453C50.8984 58.8828 50.4297 58.7266 50.0391 58.4141C49.668 58.082 49.4824 57.6816 49.4824 57.2129C49.4824 56.7246 49.6777 56.3145 50.0684 55.9824C50.4395 55.6699 50.8984 55.5137 51.4453 55.5137H63.5156C63.8086 55.5332 64.043 55.4941 64.2188 55.3965C64.4141 55.2988 64.5605 55.1914 64.6582 55.0742C64.7559 54.957 64.8047 54.8398 64.8047 54.7227C64.8047 54.6641 64.7559 54.5664 64.6582 54.4297C64.5605 54.2734 64.4141 54.1562 64.2188 54.0781C64.043 53.9805 63.8086 53.9219 63.5156 53.9023H53.9062C52.7734 53.8828 51.8359 53.6484 51.0938 53.1992C50.3516 52.7305 49.8242 52.1934 49.5117 51.5879C49.1992 50.9824 49.043 50.377 49.043 49.7715C49.043 49.166 49.1992 48.5703 49.5117 47.9844C49.8438 47.3789 50.3711 46.8613 51.0938 46.4316C51.8359 45.9824 52.7734 45.7383 53.9062 45.6992C54.1016 45.6797 54.248 45.6699 54.3457 45.6699H66.0938C66.6406 45.6699 67.0996 45.8359 67.4707 46.168C67.8613 46.4805 68.0566 46.8711 68.0566 47.3398ZM73.8281 41.1875C74.3555 41.207 74.8047 41.4023 75.1758 41.7734C75.5469 42.125 75.7422 42.5645 75.7617 43.0918V57.4473C75.6445 58.6191 75 59.2539 73.8281 59.3516C73.2812 59.3516 72.8027 59.1758 72.3926 58.8242C72.002 58.4531 71.8066 57.9941 71.8066 57.4473V43.0918C71.8262 42.5449 72.0312 42.0957 72.4219 41.7441C72.8125 41.373 73.2812 41.1875 73.8281 41.1875ZM77.5488 49.3613C78.1152 48.4434 79.1992 47.7695 80.8008 47.3398L88.3301 45.3184C88.8574 45.1621 89.3555 45.2109 89.8242 45.4648C90.3125 45.6992 90.6348 46.0801 90.791 46.6074C90.9668 47.1152 90.9277 47.6133 90.6738 48.1016C90.4395 48.5703 90.0586 48.8926 89.5312 49.0684L81.5039 51.1484C80.9375 51.3633 80.6641 51.7344 80.6836 52.2617C80.6641 52.7891 80.9375 53.1602 81.5039 53.375L89.5312 55.4551C90.0586 55.6309 90.4395 55.9629 90.6738 56.4512C90.9277 56.9199 90.9668 57.4082 90.791 57.916C90.6348 58.4434 90.3125 58.8242 89.8242 59.0586C89.3555 59.3125 88.8574 59.3613 88.3301 59.2051L80.8008 57.1836C79.1797 56.7344 78.0859 56.0508 77.5195 55.1328C76.9727 54.2148 76.6992 53.2578 76.6992 52.2617C76.6992 51.2656 76.9824 50.2988 77.5488 49.3613Z" fill="black" />
                        <path id="S" d="M161.801 40.6191C161.801 41.166 161.605 41.625 161.215 41.9961C160.844 42.3867 160.385 42.582 159.838 42.582H148.119C147.748 42.6016 147.436 42.6895 147.182 42.8457C146.947 42.9824 146.771 43.1484 146.654 43.3438C146.537 43.5195 146.479 43.7051 146.479 43.9004C146.479 44.0957 146.537 44.291 146.654 44.4863C146.771 44.6621 146.947 44.8281 147.182 44.9844C147.436 45.1211 147.748 45.1992 148.119 45.2188H156.439C157.807 45.2578 158.93 45.5801 159.809 46.1855C160.707 46.7715 161.342 47.4551 161.713 48.2363C162.104 48.998 162.299 49.7793 162.299 50.5801C162.299 51.3613 162.104 52.1426 161.713 52.9238C161.322 53.6855 160.688 54.3691 159.809 54.9746C158.93 55.5605 157.807 55.8535 156.439 55.8535H156.264C156.146 55.873 156.029 55.8828 155.912 55.8828H144.838C144.291 55.8828 143.822 55.6973 143.432 55.3262C143.061 54.9355 142.875 54.4668 142.875 53.9199C142.875 53.373 143.07 52.9141 143.461 52.543C143.832 52.1523 144.291 51.957 144.838 51.957H156.615C156.986 51.9766 157.289 51.9082 157.523 51.752C157.777 51.5957 157.963 51.4199 158.08 51.2246C158.197 51.0098 158.256 50.7949 158.256 50.5801C158.256 50.4434 158.197 50.2578 158.08 50.0234C157.963 49.7695 157.777 49.5645 157.523 49.4082C157.289 49.252 156.986 49.1641 156.615 49.1445H148.295C146.928 49.1055 145.795 48.793 144.896 48.207C144.018 47.6211 143.383 46.957 142.992 46.2148C142.621 45.4531 142.436 44.6816 142.436 43.9004C142.436 43.1387 142.631 42.3867 143.021 41.6445C143.412 40.8828 144.047 40.209 144.926 39.623C145.805 39.0371 146.928 38.7246 148.295 38.6855H148.471C148.588 38.666 148.705 38.6562 148.822 38.6562H159.838C160.385 38.6562 160.844 38.8516 161.215 39.2422C161.605 39.6133 161.801 40.0723 161.801 40.6191Z" fill="black" />
                        <g id="Group 1">
                            <rect id="Rectangle 2" width="52.3209" height="14.9867" rx="7.49333" transform="matrix(0.111639 -0.993749 0.879716 0.4755 120.292 67.838)" fill="#659BAB" />
                            <rect id="Rectangle 3" width="33.3555" height="14.7576" rx="7.37879" transform="matrix(-0.938562 -0.345111 -0.0360965 -0.999348 133.659 76.7469)" fill="#659BAB" />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
}

export default HomeContentUn;